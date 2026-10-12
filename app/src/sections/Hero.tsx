import React from 'react';
import { ThinkingOrb } from 'thinking-orbs';
import { ArrowUpRight, Call } from 'reicon-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden"
    >
      {/* Radiant Neon Lime Ambient Glow matching Dribbble shot */}
      <div className="absolute top-0 right-0 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#a3e635]/15 via-[#a3e635]/5 to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content (Left 10-12 Cols) */}
          <div className="lg:col-span-12">
            
            {/* Top Status Badge with Thinking-Orb */}
            <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.04] border border-white/10 px-4 py-1.5 mb-8 backdrop-blur-sm">
              <ThinkingOrb size={20} state="breathing" theme="dark" />
              <span className="text-xs font-medium text-slate-300 tracking-wide">
                Available for ML &amp; Full-Stack Projects 2025
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
            </div>

            {/* Signature Headline with Inverted Black/Lime Pill Badges */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-extrabold tracking-tight text-white leading-[1.12] mb-8">
              Trusted{' '}
              <span
                className="inline-block px-4 sm:px-6 py-0.5 sm:py-1 rounded-full font-black mx-1 align-baseline shadow-lg hover:scale-105 transition-transform duration-200"
                style={{ backgroundColor: '#ffffff', color: '#000000' }}
              >
                Partner
              </span>{' '}
              for
              <br className="hidden sm:inline" />
              {' '}Your Intelligent{' '}
              <span
                className="inline-block px-4 sm:px-6 py-0.5 sm:py-1 rounded-full font-black mx-1 align-baseline shadow-[0_0_20px_rgba(163,230,53,0.25)] hover:scale-105 transition-transform duration-200"
                style={{ backgroundColor: '#a3e635', color: '#0a0b0d' }}
              >
                Develop.
              </span>
            </h1>

            {/* Sub-row: Social rail, intro text, and action buttons */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-4 border-t border-white/5">
              
              {/* Left Handle */}
              <div className="md:col-span-3 flex md:flex-col items-start gap-1.5">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#a3e635]">
                  @PinecoXZ
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Full-Stack &amp; ML
                </span>
              </div>

              {/* Right Supporting Description & CTAs */}
              <div className="md:col-span-9 max-w-2xl">
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-normal">
                  Building intelligent machine learning pipelines and real-time distributed web systems, specializing in{' '}
                  <span className="text-white font-semibold">Artificial Intelligence &amp; Machine Learning</span>.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  {/* Schedule / Contact Button - crisp, high-visibility, zero glare */}
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#16181d] hover:bg-[#1e2129] text-white hover:text-[#a3e635] font-bold px-6 py-3 text-sm border border-[#a3e635]/60 hover:border-[#a3e635] shadow-[0_0_20px_rgba(163,230,53,0.12)] hover:shadow-[0_0_25px_rgba(163,230,53,0.25)] transition-all duration-200 active:scale-95 group cursor-pointer"
                  >
                    <Call size={16} weight="Outline" className="text-[#a3e635] group-hover:rotate-12 transition-transform" />
                    <span>Schedule a Call</span>
                  </button>

                  {/* Secondary Link */}
                  <button
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] text-slate-300 hover:text-white border border-white/10 hover:border-white/30 px-6 py-3 text-sm font-medium transition-all group cursor-pointer"
                  >
                    <span>Explore Selected Works</span>
                    <ArrowUpRight
                      size={14}
                      weight="Outline"
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
