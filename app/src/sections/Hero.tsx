import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import ParticleNetwork from '../components/ParticleNetwork';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const typingRef = useRef<HTMLSpanElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const typingTexts = [
    'I build intelligent systems',
    'I create web experiences',
    'I edit engaging videos',
    'I love Spiderman 🕸️',
  ];

  // Typing effect
  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
          if (displayText === currentFullText) {
            // Finished typing, wait then start deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
          if (displayText === '') {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, typingTexts]);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Name reveal
      gsap.fromTo(
        nameRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: 'power3.out' }
      );

      // Role reveal
      gsap.fromTo(
        roleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power3.out' }
      );

      // Typing text reveal
      gsap.fromTo(
        typingRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.7, ease: 'power3.out' }
      );

      // Badge reveal
      gsap.fromTo(
        badgeRef.current,
        { y: 20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, delay: 0.9, ease: 'back.out(1.7)' }
      );

      // Scroll indicator
      gsap.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 1.5 }
      );

      // Scroll-triggered exit animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (contentRef.current) {
            gsap.to(contentRef.current, {
              y: self.progress * -100,
              opacity: 1 - self.progress,
              scale: 1 - self.progress * 0.05,
              duration: 0.1,
            });
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle Network Background */}
      <ParticleNetwork />

      {/* Vignette Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(5, 5, 8, 0.5) 100%)',
        }}
      />

      {/* BIG Spiderman Text Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden z-[1] select-none opacity-[0.15] mix-blend-screen w-full flex justify-center">
        <h2 
          className="font-display font-black text-[12vw] leading-none tracking-tighter whitespace-nowrap bg-gradient-to-r from-red-600 via-blue-500 to-red-600 text-transparent bg-clip-text drop-shadow-[0_0_50px_rgba(239,68,68,0.8)]"
          style={{ animation: 'pulse-glow 4s ease-in-out infinite' }}
        >
          I LOVE SPIDERMAN
        </h2>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-12"
      >
        {/* Name */}
        <h1
          ref={nameRef}
          className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-4 tracking-tight"
        >
          Fayez Ahmad
        </h1>

        {/* Role */}
        <p
          ref={roleRef}
          className="font-body text-lg sm:text-xl md:text-2xl text-cyan mb-6 tracking-wide"
        >
          CS Student | AI/ML Enthusiast
        </p>

        {/* Typing Effect */}
        <div className="h-12 flex items-center justify-center">
          <span
            ref={typingRef}
            className="font-mono text-base sm:text-lg text-white/70"
          >
            {displayText}
            <span className="animate-blink text-cyan">|</span>
          </span>
        </div>

        {/* Current Project Badge */}
        <div
          ref={badgeRef}
          className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full glass-card"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm text-white/80 font-mono">
            Currently building:{' '}
            <span className="text-cyan">Hallway Chat</span>
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/40 font-mono tracking-wider">
          SCROLL TO EXPLORE
        </span>
        <ChevronDown className="w-5 h-5 text-cyan animate-scroll-indicator" />
      </div>
    </section>
  );
};

export default Hero;
