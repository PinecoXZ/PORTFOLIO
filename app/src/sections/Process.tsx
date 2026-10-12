import React, { useState, useEffect } from 'react';
import { ArrowRight, Gear, ArrowUpRight, CloseCircle, Check } from 'reicon-react';

interface ProcessStep {
  step: string;
  tag: string;
  title: string;
  description: string;
  deliverables: string[];
  tooling: string[];
  outcome: string;
  targetSection: string;
  targetLabel: string;
  isHighlighted?: boolean;
}

const steps: ProcessStep[] = [
  {
    step: '01',
    tag: 'Discovery',
    title: 'Discovery & Data Exploration',
    description:
      'Every project begins with problem formulation and data discovery. From defining supervised learning targets and analyzing dataset distributions to mapping REST endpoints, I establish clear technical requirements and success metrics before writing code.',
    deliverables: [
      'Exploratory data analysis & statistical anomaly clipping',
      'Mathematical problem framing & baseline benchmarking',
      'API contract specification & entity relationship models',
    ],
    tooling: ['Python', 'Pandas', 'NumPy', 'Jupyter', 'Postman'],
    outcome: 'Validated data distribution and mathematically verified problem scope.',
    targetSection: '#about',
    targetLabel: 'Explore Engineering Background',
    isHighlighted: false,
  },
  {
    step: '02',
    tag: 'Strategy',
    title: 'Strategy & Algorithm Architecture',
    description:
      'Selecting the right tools for the job. I design end-to-end data pipelines, evaluate trade-offs between linear vs non-linear regressors, and architect real-time event protocols with sub-millisecond dispatch considerations.',
    deliverables: [
      'Model architecture selection & hyperparameter tuning',
      'Real-time WebSocket protocol & event bus design',
      'Database indexing strategy & caching topology',
    ],
    tooling: ['Scikit-Learn', 'Node.js', 'WebSockets', 'Redis', 'TypeScript'],
    outcome: 'Production-ready architecture designed for horizontal scalability.',
    targetSection: '#skills',
    targetLabel: 'Review Technical Capabilities',
    isHighlighted: true,
  },
  {
    step: '03',
    tag: 'Design',
    title: 'System Design & State Topology',
    description:
      'Architecting clean component boundaries, MongoDB document schemas, and WebSocket message schemas. Ensuring fault tolerance, graceful reconnections, and responsive UX states before production deployment.',
    deliverables: [
      'Clean modular component hierarchy & state stores',
      'Heartbeat health checks & automatic reconnect handlers',
      'Strict TypeScript interfaces for duplex payloads',
    ],
    tooling: ['React', 'Next.js', 'Tailwind CSS', 'Zustand', 'WebSockets'],
    outcome: 'Zero-drift state management with resilient socket reconnections.',
    targetSection: '#projects',
    targetLabel: 'Inspect Shipped Systems',
    isHighlighted: false,
  },
  {
    step: '04',
    tag: 'Build',
    title: 'Build, Benchmark & Deploy',
    description:
      'Writing clean, tested, type-safe TypeScript and Python code. Benchmarking latency, verifying Cross-Origin policies, automating builds with Vercel and CI, and establishing continuous observability.',
    deliverables: [
      'Automated build pipelines with zero TypeScript errors',
      'Lighthouse 95+ performance & sub-50ms message latency',
      'Live domain deployment with SSL & health monitoring',
    ],
    tooling: ['Vite', 'Vercel', 'GitHub Actions', 'Docker', 'Linux'],
    outcome: 'Deployed to live production with automated CI and uptime guarantees.',
    targetSection: '#contact',
    targetLabel: 'Initiate Next Project',
    isHighlighted: false,
  },
];

const Process: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<ProcessStep | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedStep(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigateToSection = (targetSection: string) => {
    setSelectedStep(null);
    const element = document.querySelector(targetSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="process" className="py-24 border-t border-white/5 bg-[#0a0b0d]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Pill Badge without emoji */}
        <div className="flex items-center justify-between mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#a3e635]">
            <Gear size={14} weight="Filled" />
            <span>Work Process</span>
          </div>

          <span className="hidden sm:inline-block text-xs font-mono text-slate-500">
            04 PHASES · INTERACTIVE METHODOLOGY
          </span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Engineering{' '}
              <span
                className="inline-block px-4 py-0.5 rounded-full font-black mx-1 align-baseline shadow-md"
                style={{ backgroundColor: '#ffffff', color: '#000000' }}
              >
                Workflow
              </span>{' '}
              &amp; Lifecycle.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            Click any phase to inspect the deep-dive engineering methodology, deliverables, and architecture lifecycle.
          </p>
        </div>

        {/* 4 Cards Bento Grid - Fully Interactive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((item, index) => {
            if (item.isHighlighted) {
              // Highlighted Strategy card: sleek high-contrast card with lime accent border & badge
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-b from-[#141a14] to-[#101214] border-2 border-[#a3e635]/60 rounded-3xl p-8 sm:p-10 shadow-[0_10px_35px_rgba(163,230,53,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Tag Pill and Step Number */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="inline-block bg-[#a3e635] text-[#0a0b0d] text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                        {item.tag}
                      </span>
                      <span className="text-sm font-mono font-black text-[#a3e635]">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
                      {item.title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Dynamic Action Button */}
                  <button
                    onClick={() => setSelectedStep(item)}
                    className="w-full flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#a3e635] hover:text-white transition-colors pt-4 border-t border-[#a3e635]/20 group/action cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span>Read Methodology</span>
                      <ArrowRight size={14} weight="Outline" className="transition-transform group-hover/action:translate-x-1" />
                    </span>
                    <span className="text-[10px] text-slate-400 group-hover/action:text-[#a3e635] transition-colors">Click to Inspect</span>
                  </button>
                </div>
              );
            }

            // Standard Dark Cards matching Dribbble layout
            return (
              <div
                key={index}
                className="group relative bg-[#121316] border border-white/5 rounded-3xl p-8 sm:p-10 hover:border-[#a3e635]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Header: Tag Pill and Step Number */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="inline-block bg-white/[0.08] text-white text-xs font-mono font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full border border-white/10 group-hover:border-[#a3e635]/50 group-hover:text-[#a3e635] transition-colors">
                      {item.tag}
                    </span>
                    <span className="text-sm font-mono font-bold text-slate-500">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4 group-hover:text-[#a3e635] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Dynamic Action Button */}
                <button
                  onClick={() => setSelectedStep(item)}
                  className="w-full flex items-center justify-between text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 hover:text-white transition-colors pt-4 border-t border-white/5 group/action cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span>Explore Phase</span>
                    <ArrowRight size={14} weight="Outline" className="transition-transform group-hover/action:translate-x-1 text-[#a3e635]" />
                  </span>
                  <span className="text-[10px] text-slate-500 group-hover/action:text-slate-300 transition-colors">Click to Inspect</span>
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Phase Deep-Dive Modal */}
      {selectedStep && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-all duration-200"
          onClick={() => setSelectedStep(null)}
        >
          <div 
            className="bg-[#121316] border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Row: Tag, Step, and Close */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <span className="bg-[#a3e635] text-black text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Phase {selectedStep.step} · {selectedStep.tag}
                </span>
              </div>
              <button
                onClick={() => setSelectedStep(null)}
                className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <CloseCircle size={24} weight="Outline" />
              </button>
            </div>

            {/* Modal Body */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              {selectedStep.title}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {selectedStep.description}
            </p>

            {/* Key Deliverables */}
            <div className="mb-6 bg-white/[0.02] border border-white/5 rounded-2xl p-5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#a3e635] mb-3">
                Core Engineering Deliverables
              </h4>
              <ul className="space-y-2.5">
                {selectedStep.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check size={14} weight="Outline" className="text-[#a3e635] mt-0.5 shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tooling & Technologies */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                Primary Stack &amp; Tooling
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedStep.tooling.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.05] text-slate-200 border border-white/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Outcome & CTA Jump Link */}
            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Target Outcome:</span> {selectedStep.outcome}
              </div>

              <button
                onClick={() => handleNavigateToSection(selectedStep.targetSection)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-[#a3e635] text-black font-bold text-xs px-5 py-2.5 transition-all shadow-md active:scale-95 cursor-pointer shrink-0"
              >
                <span>{selectedStep.targetLabel}</span>
                <ArrowUpRight size={14} weight="Outline" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Process;
