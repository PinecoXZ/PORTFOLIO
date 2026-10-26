import React, { useState } from 'react';
import { CloseCircle, Envelope, Check, ArrowUpRight } from 'reicon-react';
import Reveal from './Reveal';

interface AboutDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutDrawer: React.FC<AboutDrawerProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText('fayezahmad827@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const scrollToInner = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      id="about-drawer-scroll"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#07090e]/95 backdrop-blur-2xl animate-in fade-in duration-300 text-slate-200"
    >
      {/* Top Header with Close */}
      <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-12 py-8 bg-[#07090e]/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="font-sans text-sm sm:text-base font-bold tracking-tight text-white uppercase">
            Fayez Ahmad
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
          <span className="text-xs font-sans uppercase tracking-wider text-neutral-400">
            About &amp; Dossier
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close about view"
          className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-white px-5 py-2.5 rounded-full border border-white/20 hover:border-white/50 bg-white/[0.08] hover:bg-white/[0.15] transition-all active:scale-95 cursor-pointer shadow-sm font-medium"
        >
          <CloseCircle size={16} weight="Outline" />
          <span>Close</span>
        </button>
      </div>

      {/* Main Editorial Content - Robin Mastromarino Architecture */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 space-y-20">
        {/* 1. Intro Section */}
        <section id="about-intro">
          <div className="text-xs font-sans uppercase tracking-[0.14em] text-neutral-400 font-semibold mb-4">
            01 / Identity &amp; Discipline
          </div>
          <Reveal delay={0}>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-8">
              Machine Learning Engineer &amp; Full-Stack Systems Developer.
            </h1>
          </Reveal>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-6">
            I build intelligent machine learning pipelines and real-time distributed web systems. My
            focus spans supervised learning models, algorithmic optimization, low-latency WebSocket
            telemetry, and clean TypeScript/Node microservices.
          </p>
          <p className="text-base text-slate-400 leading-relaxed mb-6">
            Currently pursuing Computer Science &amp; Engineering at KIIT University (Bhubaneswar,
            India). I design end-to-end applications where algorithmic rigor meets resilient
            architectural execution with zero tolerance for broken dependencies or sloppy code.
          </p>

          <div className="flex flex-wrap gap-2.5 pt-2">
            <button
              type="button"
              onClick={() => scrollToInner('about-metrics')}
              className="text-xs font-sans px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white border border-white/15 transition-all cursor-pointer font-medium"
            >
              Track Record ↓
            </button>
            <button
              type="button"
              onClick={() => scrollToInner('about-skills')}
              className="text-xs font-sans px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white border border-white/15 transition-all cursor-pointer font-medium"
            >
              Technical Stack ↓
            </button>
            <button
              type="button"
              onClick={() => scrollToInner('about-contact')}
              className="text-xs font-sans px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white border border-white/15 transition-all cursor-pointer font-medium"
            >
              Get in Touch ↓
            </button>
          </div>
        </section>

        {/* 2. Key Academic & Track Record Metrics */}
        <section
          id="about-metrics"
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-y border-white/10"
        >
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-sans">19+</div>
            <div className="text-xs font-sans text-neutral-400 mt-1 uppercase tracking-wider font-medium">
              Client Algorithms
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-sans">40ms</div>
            <div className="text-xs font-sans text-neutral-400 mt-1 uppercase tracking-wider font-medium">
              WebSocket SLA
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-sans">10,000+</div>
            <div className="text-xs font-sans text-neutral-400 mt-1 uppercase tracking-wider font-medium">
              Student Runs
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-sans">100%</div>
            <div className="text-xs font-sans text-neutral-400 mt-1 uppercase tracking-wider font-medium">
              Deterministic Math
            </div>
          </div>
        </section>

        {/* 3. Core Competencies */}
        <section id="about-skills">
          <div className="text-xs font-sans uppercase tracking-[0.14em] text-neutral-400 font-semibold mb-4">
            02 / Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
            Technical Stack &amp; Systems Craft
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider mb-2">
                Machine Learning &amp; Analytics
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Python, Scikit-Learn, PyTorch foundations, Pandas, NumPy, Feature Engineering,
                Cross-Validation, Streamlit deployment.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider mb-2">
                Real-Time &amp; Distributed Backend
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Node.js, Express, Duplex WebSockets, WebRTC mesh, MongoDB document architecture,
                JWT authentication, RESTful APIs.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider mb-2">
                Creative Web &amp; Frontend
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                React 19, TypeScript, Tailwind CSS, Three.js WebGL shaders, Vite HMR, Responsive
                high-contrast typography.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider mb-2">
                Core Computer Science
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Data Structures, Graph Algorithms, Dynamic Programming, C/C++, Memory Layout, Git &amp;
                Linux environment automation.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Contact & Inquiries */}
        <section
          id="about-contact"
          className="p-8 sm:p-12 rounded-3xl bg-[#0e1118] border border-white/10"
        >
          <div className="text-xs font-sans uppercase tracking-[0.14em] text-neutral-400 font-semibold mb-4">
            03 / Direct Inquiries
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Available for Internships &amp; Engineering Roles
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mb-8 max-w-xl">
            Open for Summer/Fall engineering internships, contract ML pipeline architecture, and
            full-stack development opportunities globally.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:fayezahmad827@gmail.com"
              style={{ color: '#000000', backgroundColor: '#ffffff' }}
              className="inline-flex items-center gap-2.5 rounded-full bg-white text-black font-bold text-sm px-7 py-3.5 hover:bg-neutral-200 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Envelope size={16} weight="Filled" color="#000000" />
              <span style={{ color: '#000000' }}>Send Email</span>
              <ArrowUpRight size={16} weight="Outline" color="#000000" />
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-slate-200 hover:text-white px-6 py-3.5 text-xs font-sans border border-white/15 transition-all active:scale-95 cursor-pointer font-medium"
            >
              {copiedEmail ? (
                <>
                  <Check size={14} weight="Outline" className="text-white" />
                  <span className="text-white font-bold">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <span>fayezahmad827@gmail.com</span>
                  <span className="text-neutral-500">(Copy)</span>
                </>
              )}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutDrawer;
