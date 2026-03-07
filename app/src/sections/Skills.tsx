import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Tech stack icons as SVG components
const techStack = [
  { name: 'Python', icon: PythonIcon },
  { name: 'C', icon: CIcon },
  { name: 'HTML', icon: HTMLIcon },
  { name: 'CSS', icon: CSSIcon },
  { name: 'Streamlit', icon: StreamlitIcon },
  { name: 'VS Code', icon: VSCodeIcon },
  { name: 'Premiere Pro', icon: PremiereIcon },
  { name: 'Git', icon: GitIcon },
  { name: 'Node.js', icon: NodeIcon },
  { name: 'WebSockets', icon: WebSocketsIcon },
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'TypeScript', icon: TypeScriptIcon },
  { name: 'Pandas', icon: PandasIcon },
];

// Core competencies with percentages - matching the image
const competencies = [
  { name: 'Machine Learning', percentage: 90 },
  { name: 'Data Engineering', percentage: 80 },
  { name: 'Full-Stack Web', percentage: 85 },
  { name: 'Video Editing', percentage: 75 },
];

function PythonIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <path
        fill="url(#python-gradient)"
        d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
      />
      <path
        fill="url(#python-gradient-2)"
        d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
      />
      <defs>
        <linearGradient id="python-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3776AB" />
          <stop offset="100%" stopColor="#3776AB" />
        </linearGradient>
        <linearGradient id="python-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD43B" />
          <stop offset="100%" stopColor="#FFD43B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <path
        fill="#00599C"
        d="M117.5 33.8c.1.1.3.2.4.3.1.1.2.3.2.5v59.2c0 .2-.1.4-.2.5-.1.1-.2.2-.4.3-11.4 6.6-22.9 13.2-34.3 19.7-.1.1-.3.2-.5.2s-.4-.1-.5-.2c-5.4-3.1-10.8-6.2-16.1-9.3-.2-.1-.3-.3-.3-.5v-12c0-.2.1-.4.3-.5.2-.1.4-.1.6 0 4.1 2.4 8.2 4.8 12.3 7.1.2.1.4.1.6 0 9.6-5.5 19.2-11.1 28.8-16.6.2-.1.3-.3.3-.5V41.7c0-.2-.1-.4-.3-.5-9.6-5.5-19.2-11.1-28.8-16.6-.2-.1-.4-.1-.6 0-9.6 5.5-19.2 11.1-28.8 16.6-.2.1-.3.3-.3.5v44.8c0 .2.1.4.3.5 4.1 2.4 8.2 4.8 12.3 7.1.2.1.3.3.3.5v12c0 .2-.1.4-.3.5-.1.1-.3.1-.5 0-5.4-3.1-10.7-6.2-16.1-9.3-.2-.1-.3-.3-.3-.5V34.6c0-.2.1-.4.2-.5.1-.1.2-.2.4-.3C42.4 27.2 53.9 20.6 65.3 14c.2-.1.4-.1.5 0 11.4 6.6 22.9 13.1 34.3 19.7z"
      />
    </svg>
  );
}

function HTMLIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <path
        fill="#E34F26"
        d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
        fillOpacity="0.1"
      />
      <path
        fill="#E34F26"
        d="M64 116.8l36.378-10.086 8.559-95.878H64z"
        fillOpacity="0.2"
      />
      <path
        fill="#EBEBEB"
        d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
      />
      <path
        fill="#FFFFFF"
        d="M63.952 52.455v13.762h16.947l-1.597 17.849-15.35 4.143v14.254l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
      />
    </svg>
  );
}

function CSSIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <path
        fill="#1572B6"
        d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
        fillOpacity="0.1"
      />
      <path
        fill="#1572B6"
        d="M64 116.8l36.378-10.086 8.559-95.878H64z"
        fillOpacity="0.2"
      />
      <path
        fill="#EBEBEB"
        d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
      />
      <path
        fill="#FFFFFF"
        d="M63.952 52.455v13.762h16.947l-1.597 17.849-15.35 4.143v14.254l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
      />
    </svg>
  );
}

function StreamlitIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <path
        d="M 63.992579,72.521325 41.553732,60.660321 2.6034211,40.074058 c -0.035557,-0.03555 -0.1066637,-0.03555 -0.1422174,-0.03555 -1.4221913,-0.675528 -2.87993927,0.746641 -2.3466152,2.168863 l 19.8466965,50.619383 0.0035,0.0109 c 0.02134,0.04994 0.03912,0.09944 0.06046,0.149334 0.814189,1.887956 2.591938,3.054 4.526143,3.512657 0.163538,0.03587 0.280527,0.06782 0.476917,0.107073 0.195451,0.04351 0.46881,0.10282 0.703471,0.120745 0.03912,0.0033 0.07467,0.0033 0.113789,0.0065 h 0.02846 c 0.02841,0.0044 0.05687,0.0044 0.08533,0.0076 h 0.03908 c 0.02491,0.0033 0.05333,0.0033 0.07824,0.0033 h 0.04621 c 0.02846,0.0044 0.05687,0.0044 0.08533,0.0044 v 0 c 25.135232,2.740415 50.493562,2.740415 75.628755,0 v 0 c 0.30207,0 0.59732,-0.0145 0.88147,-0.04263 0.0926,-0.0109 0.18133,-0.02137 0.27051,-0.03195 0.0107,-0.0044 0.0247,-0.0044 0.0354,-0.0076 0.0606,-0.0076 0.12074,-0.01788 0.18133,-0.02857 0.0887,-0.0109 0.17791,-0.02813 0.26666,-0.04612 0.17791,-0.03925 0.25855,-0.06738 0.50004,-0.1506 0.24106,-0.08276 0.64169,-0.22784 0.89214,-0.348585 0.25087,-0.120746 0.42452,-0.236792 0.63444,-0.368201 0.2594,-0.163837 0.50644,-0.331086 0.75689,-0.518812 0.10794,-0.08276 0.18175,-0.135683 0.25983,-0.210351 l -0.0427,-0.02475 z"
        fill="#FF4B4B"
      />
      <path
        d="m 125.44606,40.07457 h -0.0354 L 86.445785,60.660834 108.10586,92.919776 127.90272,42.207855 v -0.07109 c 0.49791,-1.493346 -1.0308,-2.844391 -2.45668,-2.062205"
        fill="#FF2B2B"
      />
      <path
        d="m 66.069117,30.286053 c -0.995816,-1.454191 -3.164512,-1.454191 -4.124488,0 L 41.553817,60.660572 63.992579,72.521761 106.51616,94.995458 c 0.26709,-0.261532 0.48127,-0.516249 0.7074,-0.785468 0.31999,-0.394664 0.61865,-0.817481 0.8819,-1.290639 L 86.445379,60.660572 Z"
        fill="#FF4B4B"
      />
    </svg>
  );
}

function VSCodeIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <path
        fill="url(#vscode-gradient)"
        d="M95.3 23.6L66.3 52.6 38.8 30.3 28.6 38.5l24.8 21.6-24.8 21.6 10.2 8.2 27.5-22.3 29 29 26.9-12.6V36.2L95.3 23.6zM95.3 91.4L73.6 79.5l21.7-17.8v29.7z"
      />
      <defs>
        <linearGradient id="vscode-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0065A9" />
          <stop offset="100%" stopColor="#00A6EA" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function PremiereIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <rect x="10" y="10" width="108" height="108" rx="20" fill="#00005C" />
      <rect x="10" y="10" width="108" height="108" rx="20" fill="none" stroke="#9999FF" strokeWidth="4" />
      <text x="64" y="82" textAnchor="middle" fill="#9999FF" fontSize="48" fontWeight="bold" fontFamily="Arial">Pr</text>
    </svg>
  );
}

function GitIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <path
        fill="#F05032"
        d="M119.3 58.24L69.76 8.7a9.43 9.43 0 00-13.32 0l-13 13 16.47 16.47a11.2 11.2 0 0114.2 14.26l15.88 15.87a11.2 11.2 0 11-6.65 6.24L73.66 55.44V93.4a11.21 11.21 0 11-9.24-.42V54.86a11.21 11.21 0 01-6.11-14.72L41.7 24l-25.8 25.8a9.43 9.43 0 000 13.32l49.54 49.54a9.43 9.43 0 0013.32 0l49.54-49.54a9.43 9.43 0 000-13.32z"
      />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <path
        fill="#00F5FF"
        d="M64 6.3c-1.7 0-3.4.4-4.9 1.3L17.5 32.5c-3 1.8-4.9 5-4.9 8.5v49.9c0 3.5 1.8 6.8 4.9 8.5l41.6 24c3 1.8 6.7 1.8 9.8 0l41.6-24c3-1.8 4.9-5 4.9-8.5V41c0-3.5-1.8-6.8-4.9-8.5l-41.6-24c-1.5-.9-3.2-1.3-4.9-1.3z"
        fillOpacity="0.15"
      />
      <path
        fill="url(#node-gradient)"
        d="M64 18c-1 0-2 .3-2.9.8L28 38.4c-1.8 1-2.9 2.9-2.9 5v39.2c0 2.1 1.1 4 2.9 5l33.1 19.6c1.8 1 4 1 5.8 0L100 87.6c1.8-1 2.9-2.9 2.9-5V43.4c0-2.1-1.1-4-2.9-5L66.9 18.8c-.9-.5-1.9-.8-2.9-.8z"
      />
      <defs>
        <linearGradient id="node-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#339933" />
          <stop offset="100%" stopColor="#339933" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function WebSocketsIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      {/* Outer circle */}
      <circle cx="64" cy="64" r="56" fill="none" stroke="#00F5FF" strokeWidth="4" strokeOpacity="0.3" />
      <circle cx="64" cy="64" r="56" fill="none" stroke="url(#ws-gradient)" strokeWidth="4" strokeDasharray="88 264" strokeLinecap="round" />
      {/* Lightning bolt for real-time */}
      <path
        fill="url(#ws-gradient)"
        d="M72 28L48 68h16L56 100l28-44H68z"
      />
      <defs>
        <linearGradient id="ws-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="100%" stopColor="#FF8E53" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function JavaScriptIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <rect x="2" y="2" width="124" height="124" rx="12" fill="#00F5FF" fillOpacity="0.1" />
      <text x="64" y="90" textAnchor="middle" fill="url(#js-gradient)" fontSize="60" fontWeight="bold" fontFamily="Arial">JS</text>
      <defs>
        <linearGradient id="js-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7DF1E" />
          <stop offset="100%" stopColor="#F7DF1E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <rect x="2" y="2" width="124" height="124" rx="12" fill="#7C3AED" fillOpacity="0.15" />
      <rect x="2" y="2" width="124" height="124" rx="12" fill="none" stroke="#7C3AED" strokeWidth="3" />
      <text x="64" y="90" textAnchor="middle" fill="url(#ts-gradient)" fontSize="56" fontWeight="bold" fontFamily="Arial">TS</text>
      <defs>
        <linearGradient id="ts-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3178C6" />
          <stop offset="100%" stopColor="#3178C6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function PandasIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      {/* Left column */}
      <rect x="28" y="10" width="16" height="30" rx="3" fill="#150458" />
      <rect x="28" y="48" width="16" height="30" rx="3" fill="#150458" />
      <rect x="28" y="88" width="16" height="30" rx="3" fill="#150458" />
      {/* Center column */}
      <rect x="56" y="28" width="16" height="72" rx="3" fill="#FFCA00" />
      {/* Right column */}
      <rect x="84" y="10" width="16" height="30" rx="3" fill="#E70488" />
      <rect x="84" y="48" width="16" height="30" rx="3" fill="#E70488" />
      <rect x="84" y="88" width="16" height="30" rx="3" fill="#E70488" />
    </svg>
  );
}

// Circular Arc Indicator Component - Matching the image design
const ArcIndicator = ({ name, percentage, index }: { name: string; percentage: number; index: number }) => {
  const arcRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const outerRadius = 55;
  const innerRadius = 38;
  const outerCircumference = 2 * Math.PI * outerRadius;
  const strokeDashoffset = outerCircumference - (percentage / 100) * outerCircumference;

  useEffect(() => {
    if (arcRef.current) {
      const path = arcRef.current.querySelector('.arc-progress');
      if (path) {
        gsap.fromTo(
          path,
          { strokeDashoffset: outerCircumference },
          {
            strokeDashoffset,
            duration: 1.5,
            delay: index * 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }
  }, [outerCircumference, strokeDashoffset, index]);

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-4">
      <div className="relative w-32 h-32">
        <svg
          ref={arcRef}
          viewBox="0 0 130 130"
          className="w-full h-full"
        >
          {/* Outer background track (dashed gray) */}
          <circle
            cx="65"
            cy="65"
            r={outerRadius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="8"
            strokeDasharray="4 4"
          />
          
          {/* Outer progress arc (cyan) */}
          <circle
            className="arc-progress"
            cx="65"
            cy="65"
            r={outerRadius}
            fill="none"
            stroke="#00F5FF"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={outerCircumference}
            strokeDashoffset={outerCircumference}
            transform="rotate(-90 65 65)"
          />
          
          {/* Inner decorative circle (thin dashed) */}
          <circle
            cx="65"
            cy="65"
            r={innerRadius}
            fill="none"
            stroke="rgba(0, 245, 255, 0.2)"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
        </svg>
        
        {/* Percentage in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display font-bold text-2xl text-cyan">{percentage}%</span>
        </div>
      </div>
      
      {/* Skill name below */}
      <span className="text-sm text-white/80 font-body text-center">{name}</span>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Duplicate tech stack for seamless marquee
  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            'radial-gradient(ellipse at 70% 50%, rgba(0, 245, 255, 0.1) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 px-6">
          <span className="text-cyan font-mono text-sm tracking-wider">&gt; MY_ARSENAL</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-2">
            Skills & Technologies
          </h2>
        </div>

        {/* Tech Stack Marquee */}
        <div className="relative mb-20 overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none" />

          <div
            ref={marqueeRef}
            className="flex animate-marquee gap-16"
            style={{ width: 'max-content' }}
          >
            {duplicatedTechStack.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center gap-3 group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 p-3 rounded-xl glass-card glow-border-cyan transition-all duration-300 group-hover:scale-110">
                  <tech.icon />
                </div>
                <span className="text-sm text-white/60 font-body group-hover:text-cyan transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Competencies - Circular Arc Indicators */}
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-center text-xl text-white/80 font-body mb-12">
            Core Competencies
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {competencies.map((comp, index) => (
              <ArcIndicator
                key={comp.name}
                name={comp.name}
                percentage={comp.percentage}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
