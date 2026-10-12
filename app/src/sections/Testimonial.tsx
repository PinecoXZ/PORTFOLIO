import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-20 border-t border-white/5 bg-[#0a0b0d]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="bg-[#121316] border border-white/5 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          {/* Subtle lime glow in background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#a3e635]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Quote on the left / center */}
            <div className="lg:col-span-8">
              <span className="text-4xl text-[#a3e635] font-serif block mb-4">“</span>
              <blockquote className="text-xl sm:text-2xl font-medium text-slate-200 leading-relaxed mb-6">
                Fayez pairs rigorous machine learning fundamentals with the practical grit required to ship end-to-end full-stack systems. From low-latency WebSockets to predictive regression pipelines, his attention to system reliability and clean code is exceptional.
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1e2026] border border-white/10 flex items-center justify-center text-lg font-bold text-[#a3e635]">
                  FA
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">
                    Engineering Endorsement
                  </h4>
                  <p className="text-xs font-mono text-slate-400">
                    B.Tech Artificial Intelligence &amp; Data Engineering Track
                  </p>
                </div>
              </div>
            </div>

            {/* Right Quick Summary Card */}
            <div className="lg:col-span-4 bg-[#16181d] border border-white/5 rounded-2xl p-6">
              <h5 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#a3e635] mb-3">
                Key Engineering Focus
              </h5>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
                  <span>Production Machine Learning Models</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>Duplex WebSocket &amp; WebRTC Mesh</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
                  <span>Modular Full-Stack TypeScript / Node</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>Continuous Delivery &amp; Serverless Edge</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonial;
