import React, { useState } from 'react';
import { ArrowUpRight, Envelope, Check } from 'reicon-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'fayezahmad827@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5 bg-[#0a0b0d] relative overflow-hidden">
      {/* Radiant Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#a3e635]/10 via-transparent to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        
        {/* Section Pill Badge without emoji */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#a3e635] mb-8">
          <Envelope size={14} weight="Filled" />
          <span>Get in Touch</span>
        </div>

        {/* Big Bold Headline with Inverted Badge */}
        <h2 className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6 max-w-4xl mx-auto">
          Have an idea or need an{' '}
          <span
            className="inline-block px-4 sm:px-6 py-0.5 sm:py-1 rounded-full font-black mx-1 align-baseline shadow-[0_0_25px_rgba(163,230,53,0.2)]"
            style={{ backgroundColor: '#a3e635', color: '#0a0b0d' }}
          >
            Engineer?
          </span>
          <br />
          Let's talk.
        </h2>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-400 mb-10">
          I'm currently open for summer 2025 internships, freelance machine learning pipelines, and full-stack software development roles.
        </p>

        {/* CTA Buttons - High contrast, clearly readable */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-3 rounded-full bg-[#16181d] hover:bg-[#1e2129] text-white hover:text-[#a3e635] font-bold text-sm sm:text-base px-8 py-4 border-2 border-[#a3e635]/70 hover:border-[#a3e635] shadow-[0_0_25px_rgba(163,230,53,0.15)] hover:shadow-[0_0_35px_rgba(163,230,53,0.3)] transition-all duration-200 active:scale-95 group cursor-pointer"
          >
            <Envelope size={18} weight="Filled" className="text-[#a3e635]" />
            <span className="tracking-tight">Send an Email</span>
            <ArrowUpRight size={18} weight="Outline" className="text-[#a3e635] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-slate-200 hover:text-white font-medium text-sm sm:text-base px-7 py-4 transition-all active:scale-95 cursor-pointer"
          >
            {copied ? (
              <>
                <Check size={16} weight="Outline" className="text-[#a3e635]" />
                <span className="text-[#a3e635] font-bold">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <span className="font-mono text-slate-300">{email}</span>
                <span className="text-xs text-slate-500 font-mono">(Copy)</span>
              </>
            )}
          </button>
        </div>

        {/* Location & Availability Tag */}
        <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
          Bhubaneswar, India · Available Globally (Remote &amp; Relocation)
        </div>

      </div>
    </section>
  );
};

export default Contact;
