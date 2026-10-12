import React from 'react';
import { ArrowUpRight, Folder, Check } from 'reicon-react';

interface Project {
  id: string;
  tag: string;
  title: string;
  timeline: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 'flunked',
    tag: 'Academic Tools · 19+ Calculators',
    title: 'Flunked — Academic Survival & Campus Tools',
    timeline: '2024 - Present',
    description:
      'Independent academic survival platform built for Indian college students. Features high-precision client-side calculators including the UGC/AICTE 75% bunk limit algorithm, CTC to in-hand take-home salary breakdowns, and official university CGPA conversion formulas.',
    highlights: [
      '19+ client-side tools running in-browser with zero tracking cookies and zero ads',
      'Custom algorithms for 75% bunk thresholds, medical attendance bands, and recovery streaks',
      'Realistic CTC breakdown modeling EPF (12%), Gratuity, Professional Tax, and New Tax Regime slabs',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://flunked.online',
    githubUrl: 'https://github.com/PinecoXZ',
  },
  {
    id: 'hallway-chat',
    tag: 'Real-Time WebSockets',
    title: 'Hallway Chat — Live Duplex Conversational Platform',
    timeline: '2024 - Present',
    description:
      'Production real-time messaging platform architected for instant community conversations. Features low-latency duplex WebSocket synchronization, live participant status tracking, and responsive message threading.',
    highlights: [
      'Sub-50ms message delivery via optimized Node.js & WebSocket gateway',
      'Modular client architecture built with TypeScript, React, and Tailwind CSS',
      'Deployed on custom production domain with SSL and active uptime health checks',
    ],
    tech: ['TypeScript', 'React', 'Node.js', 'WebSockets', 'Express', 'Tailwind CSS'],
    liveUrl: 'https://hallwaychat.online',
    githubUrl: 'https://github.com/PinecoXZ/Hallway-Chat',
  },
  {
    id: 'bunkcalc',
    tag: 'Attendance Analytics',
    title: 'BunkCalc — Smart Attendance Tracker & Planner',
    timeline: '2024',
    description:
      'Smart attendance tracking and prediction engine engineered for university students to mathematically evaluate required attendance thresholds (75%+ academic criteria) and strategically plan leaves.',
    highlights: [
      'Interactive attendance calculation simulator with instant threshold updates',
      'Clean mobile-first user experience designed with TypeScript, React, and Vite',
      'Client-side persistent caching enabling offline-ready attendance audits',
    ],
    tech: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://bunk-calc-web.vercel.app',
    githubUrl: 'https://github.com/PinecoXZ/BunkCalc_Web',
  },
  {
    id: 'leenout',
    tag: 'Frontend Utility',
    title: 'LeenOut — Focused Digital Workflow App',
    timeline: '2024',
    description:
      'Minimalist, distraction-free productivity utility designed for streamlined web sessions and fast daily task organization.',
    highlights: [
      'Fast client-side hydration with sub-second initial interactive render',
      'Keyboard-first UX and sleek responsive interface',
      'Deployed live on Vercel with automated continuous deployment pipelines',
    ],
    tech: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://leen-out.vercel.app',
    githubUrl: 'https://github.com/PinecoXZ/LeenOut',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 border-t border-white/5 bg-[#0a0b0d]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Pill Badge without emoji */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#a3e635] mb-6">
          <Folder size={14} weight="Filled" />
          <span>Selected Works</span>
        </div>

        {/* Section Heading matching Dribbble style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Take a look at the latest{' '}
              <span
                className="inline-block px-4 py-0.5 rounded-full font-black mx-1 align-baseline shadow-[0_0_20px_rgba(163,230,53,0.2)]"
                style={{ backgroundColor: '#a3e635', color: '#0a0b0d' }}
              >
                Projects
              </span>{' '}
              I've built.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            Real software built with verified production impact. Open-source code available on GitHub.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#121316] border border-white/5 hover:border-[#a3e635]/40 rounded-3xl p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Tag & Timeline */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block bg-white/[0.05] text-[#a3e635] text-xs font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                    {project.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    {project.timeline}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold tracking-tight text-white mb-4 group-hover:text-[#a3e635] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2.5 mb-8">
                  {project.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check size={13} weight="Outline" className="text-[#a3e635] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8 pt-4 border-t border-white/5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links - High contrast, clearly readable buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 bg-[#16181d] hover:bg-[#1e2129] text-white hover:text-[#a3e635] font-bold text-xs px-4 py-2 rounded-full border border-[#a3e635]/60 hover:border-[#a3e635] shadow-[0_0_15px_rgba(163,230,53,0.12)] hover:shadow-[0_0_20px_rgba(163,230,53,0.25)] transition-all duration-200 active:scale-95 cursor-pointer group/btn"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a3e635] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a3e635]" />
                      </span>
                      <span>Live Demo</span>
                      <ArrowUpRight
                        size={14}
                        weight="Outline"
                        className="text-[#a3e635] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white font-medium text-xs px-4 py-2 rounded-full border border-white/10 hover:border-white/25 transition-all active:scale-95 cursor-pointer group/git"
                  >
                    <span>View GitHub Source</span>
                    <ArrowUpRight
                      size={14}
                      weight="Outline"
                      className="text-slate-400 group-hover/git:text-white transition-transform group-hover/git:translate-x-0.5 group-hover/git:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All on GitHub Banner */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/PinecoXZ"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors py-2 px-6 rounded-full border border-white/10 hover:border-[#a3e635]/40 bg-white/[0.02]"
          >
            <span>See all repositories on GitHub (@PinecoXZ)</span>
            <ArrowUpRight size={16} weight="Outline" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
