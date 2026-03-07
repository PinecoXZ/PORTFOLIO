import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Footer = () => {
  const [easterEggTriggered, setEasterEggTriggered] = useState(false);
  const [terminalMessage, setTerminalMessage] = useState('');
  const nameRef = useRef<HTMLSpanElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleCopyrightClick = () => {
    if (easterEggTriggered) return;

    setEasterEggTriggered(true);

    // Glitch effect on name
    if (nameRef.current) {
      const originalText = 'Fayez Ahmad';
      const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

      let iterations = 0;
      const interval = setInterval(() => {
        if (nameRef.current) {
          nameRef.current.innerText = originalText
            .split('')
            .map((_, index) => {
              if (index < iterations) {
                return originalText[index];
              }
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join('');
        }

        iterations += 1 / 3;

        if (iterations >= originalText.length) {
          clearInterval(interval);
          if (nameRef.current) {
            nameRef.current.innerText = originalText;
          }
        }
      }, 50);
    }

    // Show terminal message
    const messages = [
      '> System breach detected...',
      '> Just kidding! 😄',
      '> Thanks for visiting my portfolio!',
      '> Have a great day! 🚀',
    ];

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      if (messageIndex < messages.length) {
        setTerminalMessage(messages[messageIndex]);
        messageIndex++;
      } else {
        clearInterval(messageInterval);
        setTimeout(() => {
          setTerminalMessage('');
          setEasterEggTriggered(false);
        }, 3000);
      }
    }, 800);
  };

  useEffect(() => {
    if (terminalRef.current && terminalMessage) {
      gsap.fromTo(
        terminalRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    }
  }, [terminalMessage]);

  return (
    <footer className="relative py-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left side - Name */}
        <div className="flex items-center gap-2">
          <span ref={nameRef} className="font-display font-bold text-white">
            Fayez Ahmad
          </span>
          <span className="text-white/40">|</span>
          <span className="text-white/60 text-sm font-body">
            CS Student & AI/ML Enthusiast
          </span>
        </div>

        {/* Center - Copyright with easter egg */}
        <div className="flex items-center gap-2 text-white/40 text-sm font-mono">
          <button
            onClick={handleCopyrightClick}
            className="hover:text-cyan transition-colors cursor-pointer"
            data-cursor="link"
            aria-label="Click for a surprise"
          >
            ©
          </button>
          <span>{new Date().getFullYear()}</span>
          <span>All rights reserved.</span>
        </div>

        {/* Right side - Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-white/40 hover:text-cyan transition-colors text-sm font-body flex items-center gap-2"
          data-cursor="link"
        >
          Back to top
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>

      {/* Easter Egg Terminal Message */}
      {terminalMessage && (
        <div
          ref={terminalRef}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="glass-card px-6 py-3 rounded-lg">
            <span className="font-mono text-sm text-cyan">{terminalMessage}</span>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
