import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface Bug {
  id: number;
  x: number;
  y: number;
  state: 'alive' | 'fluid';
  timestamp: number;
}

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'link' | 'project'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isCustomMoving, setIsCustomMoving] = useState(false);
  const [bugs, setBugs] = useState<Bug[]>([]);

  // Ref to track actual current position, independent of React state (vital for handoff)
  const currentPosRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const isHuntingRef = useRef(false);
  const lastMoveTimeRef = useRef(Date.now());

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);

    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  // Master Game Loop for Spawning and Hunting
  useEffect(() => {
    if (isTouchDevice) return;

    const gameLoopInterval = setInterval(() => {
      const now = Date.now();
      const timeSinceLastMove = now - lastMoveTimeRef.current;
      const isIdle = timeSinceLastMove > 5000; // 3 seconds of no mouse movement

      setBugs(prevBugs => {
        let nextBugs = [...prevBugs];

        // 1. Cleanup old fluid
        nextBugs = nextBugs.filter(bug => {
          if (bug.state === 'fluid' && now - bug.timestamp > 3000) return false;
          return true;
        });

        // 2. Spawn new bugs if idle (max 5)
        const aliveBugs = nextBugs.filter(b => b.state === 'alive');
        if (isIdle && aliveBugs.length < 5 && Math.random() > 0.6) {
          nextBugs.push({
             id: Date.now(),
             x: Math.random() * (window.innerWidth - 100) + 50,
             y: Math.random() * (window.innerHeight - 100) + 50,
             state: 'alive',
             timestamp: Date.now()
          });
        }

        // 3. Autonomous Hunting Logic
        if (isIdle && !isHuntingRef.current && aliveBugs.length > 0) {
          const cursor = cursorRef.current;
          const cursorDot = cursorDotRef.current;
          
          if (cursor && cursorDot) {
            // Find closest bug
            let closestBug = aliveBugs[0];
            let minDistance = Infinity;

            aliveBugs.forEach(bug => {
              const dist = Math.hypot(bug.x - currentPosRef.current.x, bug.y - currentPosRef.current.y);
              if (dist < minDistance) {
                minDistance = dist;
                closestBug = bug;
              }
            });

            isHuntingRef.current = true;
            setIsCustomMoving(true); // Trigger leg animation

            const dx = closestBug.x - currentPosRef.current.x;
            const dy = closestBug.y - currentPosRef.current.y;
            
            // Calculate rotation towards the bug
            const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
            setRotation(angle);

            // Distance-based duration (approx 400px per sec)
            const distance = Math.hypot(dx, dy);
            const duration = Math.max(0.5, distance / 400);

            gsap.to(cursor, {
              x: closestBug.x,
              y: closestBug.y,
              duration: duration,
              ease: 'power1.inOut',
              onUpdate: () => {
                if (cursor) {
                  const transform = cursor.style.transform;
                  const match = transform.match(/translate\(([-\d.]+)px,\s*([-\d.]+)px\)/);
                  if (match) {
                    currentPosRef.current = { x: parseFloat(match[1]), y: parseFloat(match[2]) };
                  }
                }
              },
              onComplete: () => {
                if (isHuntingRef.current) { // Ensure user hasn't interrupted
                  setIsCustomMoving(false);
                  isHuntingRef.current = false;
                  
                  // Eat the bug directly by updating state
                  setBugs(currentBugs => currentBugs.map(b => 
                    b.id === closestBug.id ? { ...b, state: 'fluid' as const, timestamp: Date.now() } : b
                  ));
                }
              }
            });

            gsap.to(cursorDot, {
              x: closestBug.x,
              y: closestBug.y,
              duration: duration,
              ease: 'power1.inOut',
            });
          }
        }

        return nextBugs;
      });

    }, 500); // Run game loop twice a second

    return () => clearInterval(gameLoopInterval);
  }, [isTouchDevice]);

  useEffect(() => {
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let lastX = 0;
    let lastY = 0;
    let timeoutId: number;

    const onMouseMove = (e: MouseEvent) => {
      lastMoveTimeRef.current = Date.now();

      // If we were hunting autonomously, kill those animations to give control back immediately
      if (isHuntingRef.current) {
        gsap.killTweensOf(cursor);
        gsap.killTweensOf(cursorDot);
        isHuntingRef.current = false;
        setIsCustomMoving(false); // Stop legs if we aren't moving fast enough manually
      }

      // Calculate angle of movement
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      
      // Only update rotation if movement is significant to avoid jitter
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
        // atan2 is in radians, convert to degrees.
        // Add 90 degrees because our spider SVG points "up" natively, not "right" (which is 0 degrees in atan2).
        let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        setRotation(angle);
        setIsCustomMoving(true);
        
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
          setIsCustomMoving(false);
        }, 100);
      }

      lastX = e.clientX;
      lastY = e.clientY;
      currentPosRef.current = { x: e.clientX, y: e.clientY };

      // Check for bug collisions
      setBugs((prev) => {
        let changed = false;
        const nextBugs = prev.map(bug => {
          if (bug.state === 'alive') {
            const dist = Math.hypot(bug.x - e.clientX, bug.y - e.clientY);
            if (dist < 40) { // eating distance
              changed = true;
              return { ...bug, state: 'fluid' as const, timestamp: Date.now() };
            }
          }
          return bug;
        });
        return changed ? nextBugs : prev;
      });

      // Fast, responsive cursor movement
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: 'power2.out',
      });

      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.02,
        ease: 'none',
      });
    };

    const onMouseEnterLink = () => {
      setIsHovering(true);
      setCursorType('link');
    };

    const onMouseLeaveLink = () => {
      setIsHovering(false);
      setCursorType('default');
    };

    const onMouseEnterProject = () => {
      setIsHovering(true);
      setCursorType('project');
    };

    const onMouseLeaveProject = () => {
      setIsHovering(false);
      setCursorType('default');
    };

    // Add listeners
    document.addEventListener('mousemove', onMouseMove);

    // Track links and buttons
    const links = document.querySelectorAll('a, button, [data-cursor="link"]');
    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    // Track project cards
    const projects = document.querySelectorAll('[data-cursor="project"]');
    projects.forEach((project) => {
      project.addEventListener('mouseenter', onMouseEnterProject);
      project.addEventListener('mouseleave', onMouseLeaveProject);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
      projects.forEach((project) => {
        project.removeEventListener('mouseenter', onMouseEnterProject);
        project.removeEventListener('mouseleave', onMouseLeaveProject);
      });
    };
  }, [isTouchDevice]);

  // Re-attach listeners when DOM changes
  useEffect(() => {
    if (isTouchDevice) return;

    const observer = new MutationObserver(() => {
      const links = document.querySelectorAll('a, button, [data-cursor="link"]');
      const projects = document.querySelectorAll('[data-cursor="project"]');

      links.forEach((link) => {
        link.addEventListener('mouseenter', () => {
          setIsHovering(true);
          setCursorType('link');
        });
        link.addEventListener('mouseleave', () => {
          setIsHovering(false);
          setCursorType('default');
        });
      });

      projects.forEach((project) => {
        project.addEventListener('mouseenter', () => {
          setIsHovering(true);
          setCursorType('project');
        });
        project.addEventListener('mouseleave', () => {
          setIsHovering(false);
          setCursorType('default');
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Bugs and Fluid render layer */}
      <div className="fixed top-0 left-0 pointer-events-none z-[9997] w-full h-full overflow-hidden">
        {bugs.map((bug) => (
          <div
            key={bug.id}
            className={`absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${
              bug.state === 'fluid' ? 'opacity-50' : 'opacity-100'
            }`}
            style={{
              left: bug.x,
              top: bug.y,
              // Fade out the fluid over time
              opacity: bug.state === 'fluid' && Date.now() - bug.timestamp > 2000 ? 0 : '',
            }}
          >
            {bug.state === 'alive' ? (
              // Simple bug SVG that twitches a bit
              <svg 
                className="w-4 h-4 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] animate-pulse" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 4v4m0 8v4m8-8h-4m-8 0H4M6.3 6.3l2.8 2.8m5.8 5.8l2.8 2.8m0-11.4l-2.8 2.8m-5.8 5.8l-2.8 2.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              // Green toxic spider fluid splat
              <svg 
                className="w-12 h-12 text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.9)] opacity-70" 
                viewBox="0 0 100 100" 
                fill="currentColor"
              >
                <path d="M 50 30 C 65 30, 80 40, 75 55 C 70 70, 55 80, 40 75 C 25 70, 20 50, 30 40 C 40 30, 45 30, 50 30 Z" />
                <circle cx="30" cy="30" r="5" />
                <circle cx="70" cy="70" r="8" />
                <circle cx="80" cy="35" r="4" />
                <circle cx="20" cy="65" r="6" />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ${
          isHovering
            ? cursorType === 'project'
              ? 'w-12 h-12'
              : 'w-16 h-16'
            : 'w-8 h-8'
        }`}
        style={{
          mixBlendMode: 'difference',
        }}
      >
        {/* Spider SVG Cursor */}
        <div
          className={`w-full h-full text-red-500 transition-all duration-200 ${
            cursorType === 'project'
              ? 'text-blue-500 drop-shadow-[0_0_25px_rgba(59,130,246,1)] scale-110'
              : 'drop-shadow-[0_0_25px_rgba(239,68,68,1)]'
          } ${isHovering && cursorType === 'link' ? 'scale-150 text-red-400 drop-shadow-[0_0_35px_rgba(248,113,113,1)]' : 'scale-100'}`}
          style={{
            // The SVG defaults to facing up, so we add 90deg to the calculated angle if needed depending on SVG orientation.
            // Our spider faces up, so 90deg offset is usually right for atan2 which assumes 0 is right.
            transform: `rotate(${rotation}deg)`,
            transition: 'transform 0.1s ease-out, color 0.2s, filter 0.2s, transform 0.2s',
          }}
        >
          {/* Animated Spider SVG */}
          <svg viewBox="0 0 100 100" width="100%" height="100%" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Body */}
            <ellipse cx="50" cy="45" rx="12" ry="16" />
            <circle cx="50" cy="25" r="8" />
            {/* Eyes */}
            <path d="M 45 22 Q 47 20 49 22 Q 48 24 45 22" fill="white" stroke="none" />
            <path d="M 55 22 Q 53 20 51 22 Q 52 24 55 22" fill="white" stroke="none" />
            {/* Red hourglass marking on abdomen */}
            <path d="M 50 38 L 46 45 L 50 52 L 54 45 Z" fill="#7C3AED" stroke="none" opacity="0.8" />
            
            {/* Legs - Left Side */}
            <g className={isCustomMoving ? 'animate-spider-leg-l1' : ''} style={{ transformOrigin: '40px 35px' }}>
              <path d="M 40 35 Q 20 10 10 20" fill="none" strokeWidth="3" />
            </g>
            <g className={isCustomMoving ? 'animate-spider-leg-l2' : ''} style={{ transformOrigin: '40px 40px' }}>
              <path d="M 40 40 Q 15 30 5 45" fill="none" strokeWidth="3" />
            </g>
            <g className={isCustomMoving ? 'animate-spider-leg-l3' : ''} style={{ transformOrigin: '40px 48px' }}>
              <path d="M 40 48 Q 15 60 10 75" fill="none" strokeWidth="3" />
            </g>
            <g className={isCustomMoving ? 'animate-spider-leg-l4' : ''} style={{ transformOrigin: '42px 55px' }}>
              <path d="M 42 55 Q 25 80 20 95" fill="none" strokeWidth="3" />
            </g>

            {/* Legs - Right Side */}
            <g className={isCustomMoving ? 'animate-spider-leg-r1' : ''} style={{ transformOrigin: '60px 35px' }}>
              <path d="M 60 35 Q 80 10 90 20" fill="none" strokeWidth="3" />
            </g>
            <g className={isCustomMoving ? 'animate-spider-leg-r2' : ''} style={{ transformOrigin: '60px 40px' }}>
              <path d="M 60 40 Q 85 30 95 45" fill="none" strokeWidth="3" />
            </g>
            <g className={isCustomMoving ? 'animate-spider-leg-r3' : ''} style={{ transformOrigin: '60px 48px' }}>
              <path d="M 60 48 Q 85 60 90 75" fill="none" strokeWidth="3" />
            </g>
            <g className={isCustomMoving ? 'animate-spider-leg-r4' : ''} style={{ transformOrigin: '58px 55px' }}>
              <path d="M 58 55 Q 75 80 80 95" fill="none" strokeWidth="3" />
            </g>
          </svg>
        </div>
      </div>

      {/* Center dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className={`w-1 h-1 rounded-full bg-cyan transition-transform duration-150 ${
            isHovering ? 'scale-0' : 'scale-100'
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
