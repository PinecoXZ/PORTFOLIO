import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TerminalLine {
  command: string;
  output: string[];
  delay: number;
}

const terminalLines: TerminalLine[] = [
  {
    command: 'whoaaammiiii',
    output: ['Fayez — CS Student, AI/ML Specialization', 'KIIT University · 24155102@kiit.ac.in'],
    delay: 400,
  },
  {
    command: 'sskiiiiill --llliiistttt',
    output: [
      'Loading modules...',
      '[OK] Python · C · HTML/CSS · JavaScript',
      '[OK] Machine Learning · Deep Learning · NLP',
      '[OK] Streamlit · Git · VS Code · Premiere Pro',
    ],
    delay: 600,
  },
  {
    command: 'eeedddduuuucationnn',
    output: [
      'B.Tech Computer Science @ KIIT University',
      'Specialization: Artificial Intelligence & ML',
    ],
    delay: 500,
  },
  {
    command: 'ccurrentttlyyy --bbuiiildinggg',
    output: ['Hallway Chat  [Real-time · WebSockets · Node.js]'],
    delay: 500,
  },
];

// Clean character-by-character typing hook
const useTypingEffect = (text: string, isActive: boolean, speed = 38) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isActive) return;
    setDisplayed('');
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, isActive, speed]);

  return { displayed, done };
};

// Single command block — types the command then shows output
const CommandBlock = ({
  line,
  isActive,
  onComplete,
}: {
  line: TerminalLine;
  isActive: boolean;
  onComplete: () => void;
}) => {
  const { displayed, done } = useTypingEffect(line.command, isActive);
  const [showOutput, setShowOutput] = useState(false);
  const calledComplete = useRef(false);

  useEffect(() => {
    if (done && !showOutput) {
      const t = setTimeout(() => setShowOutput(true), 180);
      return () => clearTimeout(t);
    }
  }, [done]);

  useEffect(() => {
    if (showOutput && !calledComplete.current) {
      calledComplete.current = true;
      const t = setTimeout(onComplete, line.output.length * 90 + 300);
      return () => clearTimeout(t);
    }
  }, [showOutput]);

  return (
    <div className="mb-5">
      {/* Command row */}
      <div className="flex items-center gap-2 mb-2">
        <span style={{ color: '#00F5FF' }}>{'>'}</span>
        <span style={{ color: '#00F5FF' }}>{displayed}</span>
        {/* Cursor while still typing */}
        {isActive && !done && (
          <span
            style={{
              display: 'inline-block',
              width: '8px',
              height: '16px',
              background: '#00F5FF',
              borderRadius: '1px',
              animation: 'blink 1s step-end infinite',
              verticalAlign: 'middle',
            }}
          />
        )}
      </div>

      {/* Output rows */}
      {showOutput &&
        line.output.map((outputLine, i) => (
          <div
            key={i}
            className="ml-4"
            style={{
              color: outputLine.startsWith('[OK]')
                ? '#28c840'
                : outputLine.includes('Artificial Intelligence') ||
                  outputLine.includes('Streamlit · ML')
                ? '#f0c060'
                : 'rgba(201, 209, 217, 0.75)',
              animation: `fadeIn 0.2s ease ${i * 90}ms both`,
            }}
          >
            {outputLine}
          </div>
        ))}
    </div>
  );
};

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((p) => !p), 530);
    return () => clearInterval(interval);
  }, []);

  // Scroll trigger — starts the sequence
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          setTimeout(() => setActiveIndex(0), 200);
        },
      });

      gsap.fromTo(
        terminalRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleLineComplete = (index: number) => {
    if (index + 1 < terminalLines.length) {
      setTimeout(() => setActiveIndex(index + 1), terminalLines[index + 1].delay);
    } else {
      setActiveIndex(terminalLines.length); // all done
    }
  };

  const allDone = activeIndex >= terminalLines.length;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex items-center justify-center py-20 px-6"
    >
      {/* Keyframes injected once */}
      <style>{`
        @keyframes blink   { 0%,100% { opacity:1 } 50% { opacity:0 } }
        @keyframes fadeIn  { from { opacity:0; transform:translateY(4px) } to { opacity:1; transform:none } }
      `}</style>

      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        {/* Section title */}
        <div className="mb-12 text-center">
          <span className="font-mono text-sm tracking-wider" style={{ color: '#00F5FF' }}>
            &gt; ABOUT_ME
          </span>
          <h2 className="font-bold text-4xl md:text-5xl text-white mt-2">Who Am I?</h2>
        </div>

        {/* Terminal window */}
        <div
          ref={terminalRef}
          className="rounded-xl overflow-hidden"
          style={{
            background: '#0d0d0f',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,245,255,0.04)',
          }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{
              background: 'rgba(255,255,255,0.02)',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f56' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#27c93f' }} />
            </div>
            <span className="ml-4 text-xs font-mono" style={{ color: 'rgba(255,255,255,0.35)' }}>
              fayez@portfolio:~
            </span>
          </div>

          {/* Terminal body */}
          <div
            className="p-6 font-mono text-sm md:text-base"
            style={{ background: '#0d0d0f', minHeight: '320px' }}
          >
            {terminalLines.map((line, i) => {
              if (i > activeIndex) return null; // not reached yet
              return (
                <CommandBlock
                  key={i}
                  line={line}
                  isActive={i === activeIndex}
                  onComplete={() => handleLineComplete(i)}
                />
              );
            })}

            {/* Final idle cursor */}
            {allDone && (
              <div className="flex items-center gap-2 mt-1">
                <span style={{ color: '#00F5FF' }}>{'>'}</span>
                <span
                  style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '16px',
                    background: '#00F5FF',
                    borderRadius: '1px',
                    opacity: showCursor ? 1 : 0,
                    transition: 'opacity 0.1s',
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;