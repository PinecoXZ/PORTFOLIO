import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Twitter, Facebook, Mail, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/FAYEZ087' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/fayez-ahmad-624619333/' },
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/fayez_ahmad499' },
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/fayez.ahmad.499/' },
];

// Text scramble effect hook
const useTextScramble = (text: string, isHovering: boolean) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = '!<>-_\\/[]{}—=+*^?#________';

  useEffect(() => {
    if (!isHovering) {
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      iteration += 1 / 2;

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isHovering, text]);

  return displayText;
};

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const emailRef = useRef<HTMLAnchorElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const [isEmailHovering, setIsEmailHovering] = useState(false);

  const email = 'fayezahmad827@gmail.com';
  const scrambledEmail = useTextScramble(email, isEmailHovering);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        headingRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Email reveal
      gsap.fromTo(
        emailRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Socials reveal
      gsap.fromTo(
        socialsRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-24 px-6"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(0, 245, 255, 0.08) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-12 leading-tight"
        >
          Let&apos;s build the
          <br />
          <span className="text-gradient-cyan">future together.</span>
        </h2>

        {/* Email Link */}
        <a
          ref={emailRef}
          href={`mailto:${email}`}
          className="inline-block group relative"
          onMouseEnter={() => setIsEmailHovering(true)}
          onMouseLeave={() => setIsEmailHovering(false)}
          data-cursor="link"
        >
          <span className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cyan hover:text-white transition-colors duration-300">
            {scrambledEmail}
          </span>
          <span className="absolute -right-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-6 h-6 text-cyan" />
          </span>
          {/* Underline animation */}
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan group-hover:w-full transition-all duration-500" />
        </a>

        {/* Social Links */}
        <div
          ref={socialsRef}
          className="flex items-center justify-center gap-6 mt-16"
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-cyan/50 hover:bg-cyan/10 transition-all duration-300"
              data-cursor="link"
            >
              <social.icon className="w-5 h-5 text-white/60 group-hover:text-cyan transition-colors" />
              <span className="text-sm text-white/60 group-hover:text-cyan transition-colors font-body">
                {social.name}
              </span>
            </a>
          ))}

          {/* Direct email button */}
          <a
            href={`mailto:${email}`}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-cyan/50 hover:bg-cyan/10 transition-all duration-300"
            data-cursor="link"
          >
            <Mail className="w-5 h-5 text-white/60 group-hover:text-cyan transition-colors" />
            <span className="text-sm text-white/60 group-hover:text-cyan transition-colors font-body">
              Email
            </span>
          </a>
        </div>

        {/* Availability Badge */}
        <div className="mt-16 inline-flex items-center gap-3 px-5 py-3 rounded-full glass-card">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm text-white/80 font-mono">
            Available for internships & freelance
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
