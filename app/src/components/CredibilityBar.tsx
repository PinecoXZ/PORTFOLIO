import React from 'react';

const CredibilityBar: React.FC = () => {
  const credentials = [
    { label: 'COMPUTER SCIENCE', detail: 'B.Tech AI & ML' },
    { label: 'APPLIED ML', detail: 'Scikit-Learn & PyTorch' },
    { label: 'REAL-TIME COMM', detail: 'WebSockets & WebRTC' },
    { label: 'FULL-STACK', detail: 'React, TS & Node.js' },
    { label: 'DATA MODELING', detail: 'MongoDB & Pandas' },
    { label: 'SYSTEMS', detail: 'C/C++ & Algorithms' },
  ];

  return (
    <div className="w-full border-y border-white/5 bg-[#0e1014]/60 py-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#a3e635]" />
            <span>ENGINEERING STACK &amp; CORE FOCUS</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {credentials.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-full bg-white/[0.03] border border-white/10 px-3.5 py-1.5 text-xs text-slate-300 hover:border-[#a3e635]/40 hover:text-white transition-colors"
              >
                <span className="font-semibold text-white">{item.label}</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredibilityBar;
