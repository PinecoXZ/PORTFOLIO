import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-white/5 bg-[#0a0b0d]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#a3e635] mb-6">
          <span>// ABOUT ME</span>
        </div>

        {/* Headline with Inverted Pills */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.2] mb-12 max-w-4xl">
          I've been{' '}
          <span
            className="inline-block px-4 sm:px-5 py-0.5 sm:py-1 rounded-full font-black mx-1 align-baseline shadow-md"
            style={{ backgroundColor: '#ffffff', color: '#000000' }}
          >
            Engineering
          </span>{' '}
          Intelligent Systems since{' '}
          <span
            className="inline-block px-4 sm:px-5 py-0.5 sm:py-1 rounded-full font-black mx-1 align-baseline shadow-[0_0_20px_rgba(163,230,53,0.2)]"
            style={{ backgroundColor: '#a3e635', color: '#0a0b0d' }}
          >
            2023
          </span>
        </h2>

        {/* Editorial Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              I am an undergraduate Computer Science engineer specializing in{' '}
              <span className="text-[#a3e635] font-medium">Artificial Intelligence and Machine Learning</span>. My engineering passion lives at the intersection of rigorous mathematical data science and resilient, high-concurrency web architecture.
            </p>

            <p>
              Whether it’s training supervised regression models in Scikit-Learn or designing sub-50ms duplex WebSockets in{' '}
              <strong className="text-white font-semibold">Hallway Chat</strong> and high-precision calculation tools in{' '}
              <strong className="text-white font-semibold">Flunked</strong>, I focus on turning complex algorithms into production-grade systems that perform reliably under real-world load.
            </p>

            <p>
              Beyond the terminal, I channel storytelling through Adobe Premiere Pro video editing, dissecting audio-visual pacing and framing, and exploring creative visual aesthetics.
            </p>
          </div>

          {/* Quick Metrics & Highlights Bento (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            <div className="bg-[#141518] border border-white/5 p-6 rounded-2xl hover:border-[#a3e635]/30 transition-colors">
              <span className="text-3xl sm:text-4xl font-black font-mono text-[#a3e635] block mb-2">
                4+
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Featured Systems
              </span>
              <p className="text-xs text-slate-500 leading-normal">
                Flunked, Hallway Chat, BunkCalc, and LeenOut.
              </p>
            </div>

            <div className="bg-[#141518] border border-white/5 p-6 rounded-2xl hover:border-[#a3e635]/30 transition-colors">
              <span className="text-3xl sm:text-4xl font-black font-mono text-white block mb-2">
                AI / ML
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Specialization
              </span>
              <p className="text-xs text-slate-500 leading-normal">
                B.Tech Computer Science AI &amp; ML engineering track.
              </p>
            </div>

            <div className="bg-[#141518] border border-white/5 p-6 rounded-2xl hover:border-[#a3e635]/30 transition-colors">
              <span className="text-3xl sm:text-4xl font-black font-mono text-white block mb-2">
                &lt;50ms
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Real-Time Latency
              </span>
              <p className="text-xs text-slate-500 leading-normal">
                Duplex WebSockets &amp; peer-synchronized room events.
              </p>
            </div>

            <div className="bg-[#141518] border border-white/5 p-6 rounded-2xl hover:border-[#a3e635]/30 transition-colors">
              <span className="text-3xl sm:text-4xl font-black font-mono text-[#a3e635] block mb-2">
                100%
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Type Safety &amp; Docs
              </span>
              <p className="text-xs text-slate-500 leading-normal">
                Strict TypeScript, automated schemas &amp; clean code.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
