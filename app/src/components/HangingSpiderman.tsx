import { useEffect, useRef, useState } from 'react';

export const HangingSpiderman = () => {
  const spidermanRef = useRef<HTMLDivElement>(null);
  const webRef = useRef<HTMLDivElement>(null);
  
  // Physics state
  const currentY = useRef(80);
  const velocityY = useRef(0);
  const modeRef = useRef<'hanging' | 'falling' | 'ground' | 'returning'>('hanging');
  const groundTimer = useRef(0);

  // The user requested a pure custom SVG rendering of Spiderman instead of an external image

  useEffect(() => {
    let animationFrameId: number;
    let targetY = 80;
    
    // Update hanging target based on scroll
    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollPercent = scrollY / maxScroll;
      
      const minHangingY = 80; 
      const maxHangingY = window.innerHeight - 80; // Spiderman hits the ground here
      
      targetY = minHangingY + scrollPercent * (maxHangingY - minHangingY);
    };
    
    window.addEventListener('scroll', onScroll);
    onScroll(); // initialize

    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const spidey = spidermanRef.current;
      const web = webRef.current;
      const groundY = window.innerHeight - 80;

      if (modeRef.current === 'hanging') {
        // Smoothly approach the scroll-based target web length
        currentY.current += (targetY - currentY.current) * 5 * dt;
        
        // If they scroll all the way to the bottom, he stands on the ground
        if (currentY.current > groundY - 2) {
          currentY.current = groundY;
        }
      } else if (modeRef.current === 'falling') {
        // Gravity when web is cut
        velocityY.current += 1500 * dt; 
        currentY.current += velocityY.current * dt;
        
        if (currentY.current >= groundY) {
          currentY.current = groundY;
          velocityY.current = 0;
          modeRef.current = 'ground';
          groundTimer.current = 0;
        }
      } else if (modeRef.current === 'ground') {
        groundTimer.current += dt;
        
        // Return if it's been a few seconds, or if user scrolls back up far enough
        if (groundTimer.current > 2 || targetY < groundY - 100) {
          modeRef.current = 'returning';
        }
      } else if (modeRef.current === 'returning') {
        // Shoot web and fly back up
        currentY.current -= 1200 * dt; // upward speed
        if (currentY.current <= targetY) {
          currentY.current = targetY;
          modeRef.current = 'hanging';
        }
      }

      // Render Render Web and Transforms
      if (spidey) {
        // Base translation
        let transformStr = `translateY(${currentY.current}px)`;
        
        if (modeRef.current === 'falling') {
          // Flailing in 3D: tumbling forward
          const tumble = (currentY.current * 0.5) % 360;
          transformStr += ` rotateX(${tumble}deg) scale(0.9)`; 
        } else if (modeRef.current === 'ground' || (modeRef.current === 'hanging' && currentY.current >= groundY - 5)) {
          // Crouch impact or standing on ground - squished slightly
          transformStr += ' scaleY(0.8) scaleX(1.15) rotateX(20deg)';
        } else if (modeRef.current === 'returning') {
          // Flying pose - tilted 
          transformStr += ' rotateX(-30deg) rotate(-15deg)';
        } else {
          // Gentle 3D swing when hanging
          const swingZ = Math.sin(time / 600) * 8; // side to side swing
          const swingY = Math.cos(time / 800) * 15; // twisting
          transformStr += ` rotateZ(${swingZ}deg) rotateY(${swingY}deg) rotateX(10deg)`;
        }
        
        spidey.style.transform = transformStr;
      }
      
      // Render Web
      if (web) {
        if (modeRef.current === 'hanging') {
           if (currentY.current >= groundY - 5) {
             web.style.opacity = '0';
           } else {
             web.style.height = `${currentY.current}px`;
             web.style.opacity = '1';
           }
        } else if (modeRef.current === 'returning') {
           web.style.height = `${currentY.current}px`;
           web.style.opacity = '1';
        } else {
           web.style.opacity = '0'; // Web is cut
           web.style.height = '0px';
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Cut web interaction
  const cutWeb = () => {
    if (modeRef.current === 'hanging') {
      modeRef.current = 'falling';
      velocityY.current = 0;
    }
  };

  return (
    <div 
      className="fixed top-0 right-8 md:right-24 z-[90] pointer-events-none" 
      style={{ width: '120px', height: '100vh', perspective: '800px' }} // Added perspective for 3D
    >
      {/* Web line */}
      <div 
        ref={webRef}
        className="absolute top-0 left-1/2 w-[2px] -translate-x-1/2 bg-white origin-top pointer-events-auto cursor-crosshair group transition-colors"
        style={{ height: '80px', boxShadow: '0 0 8px rgba(255,255,255,0.9)' }}
        onMouseEnter={cutWeb}
      >
        {/* Invisible wider hit area for the web so it's easier to cut */}
        <div className="absolute top-0 -left-6 w-12 h-full bg-transparent group-hover:bg-red-500/20" />
      </div>
      
      {/* Spiderman Image (Pure SVG) */}
      <div 
        ref={spidermanRef}
        className="absolute left-1/2 w-48 h-48 -translate-x-1/2 pointer-events-auto origin-top transition-transform duration-75 group/spidey"
        style={{ top: 0, transform: 'translateY(80px)', transformStyle: 'preserve-3d' }}
        onClick={() => {
            if (modeRef.current === 'hanging') {
                velocityY.current = -300; // Small jump on click
                modeRef.current = 'falling';
            }
        }}
        // Hand cursor to "high-five" or poke Spidey
        data-cursor="pointer" 
      >
        <svg 
          viewBox="0 0 200 200" 
          className="w-full h-full drop-shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-transform duration-300 group-hover/spidey:scale-105"
        >
          {/* Web attachment string */}
          <line x1="100" y1="0" x2="100" y2="40" stroke="white" strokeWidth="2" />
          
          <g transform="translate(100, 100)">
            {/* --- Body --- */}
            <path d="M-25,0 Q0,40 25,0 Q35,30 20,60 Q0,70 -20,60 Q-35,30 -25,0 Z" fill="#E62429" stroke="#000" strokeWidth="2" />
            
            {/* Left Arm hanging up */}
            <path d="M-20,10 Q-40,-20 -25,-60 Q-20,-70 -10,-60 Q-15,-30 -5,10" fill="#E62429" stroke="#000" strokeWidth="2" />
            {/* Right Arm hanging up */}
            <path d="M20,10 Q40,-20 25,-60 Q20,-70 10,-60 Q15,-30 5,10" fill="#E62429" stroke="#000" strokeWidth="2" />
            
            {/* Left Leg squished up */}
            <path d="M-15,55 Q-30,70 -15,90 Q-5,85 -5,60" fill="#003366" stroke="#000" strokeWidth="2" />
            <path d="M-15,90 Q-25,95 -10,105 Q-5,100 -5,80" fill="#E62429" stroke="#000" strokeWidth="2" />
            
            {/* Right Leg squished up */}
            <path d="M15,55 Q30,70 15,90 Q5,85 5,60" fill="#003366" stroke="#000" strokeWidth="2" />
            <path d="M15,90 Q25,95 10,105 Q5,100 5,80" fill="#E62429" stroke="#000" strokeWidth="2" />
            
            {/* Blue Side Panels */}
            <path d="M-25,10 Q-15,35 -20,55 Q-5,40 -5,10" fill="#003366" stroke="#000" strokeWidth="1.5" />
            <path d="M25,10 Q15,35 20,55 Q5,40 5,10" fill="#003366" stroke="#000" strokeWidth="1.5" />
            
            {/* Spider Logo */}
            <circle cx="0" cy="25" r="4" fill="#000" />
            <path d="M0,25 Q-10,15 -15,20 M0,25 Q10,15 15,20 M0,25 Q-10,35 -15,30 M0,25 Q10,35 15,30" stroke="#000" strokeWidth="2" fill="none" />
            
            {/* --- Head --- */}
            <ellipse cx="0" cy="-30" rx="40" ry="45" fill="#E62429" stroke="#000" strokeWidth="2" />
            
            {/* Webbing Lines on Head */}
            <path d="M0,-75 L0,15 M-40,-30 L40,-30 M-28,-60 L28,0 M28,-60 L-28,0" stroke="#000" strokeWidth="1" opacity="0.4" />
            <path d="M0,-30 Q-20,-50 -40,-30 Q-20,-10 0,-30 Q20,-50 40,-30 Q20,-10 0,-30" stroke="#000" strokeWidth="1" fill="none" opacity="0.4" />
            <path d="M0,-30 Q-30,-70 -20,-70 M0,-30 Q30,-70 20,-70 M0,-30 Q-40,10 -30,15 M0,-30 Q40,10 30,15" stroke="#000" strokeWidth="1" fill="none" opacity="0.4" />
            
            {/* Left Eye */}
            <path d="M-8,-20 Q-25,-40 -35,-25 Q-15,-5 -8,-20 Z" fill="#FFF" stroke="#000" strokeWidth="4" />
            {/* Right Eye */}
            <path d="M8,-20 Q25,-40 35,-25 Q15,-5 8,-20 Z" fill="#FFF" stroke="#000" strokeWidth="4" />
            
          </g>
        </svg>
      </div>
    </div>
  );
};
