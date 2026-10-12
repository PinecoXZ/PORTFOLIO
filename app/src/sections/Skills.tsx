import React, { useState } from 'react';
import { Bolt } from 'reicon-react';

interface SkillCategory {
  id: string;
  name: string;
  tagline: string;
  skills: { name: string; level: string; context: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'ml',
    name: 'Machine Learning & Data',
    tagline: 'Supervised Learning, Feature Engineering & Statistical Modeling',
    skills: [
      { name: 'Python', level: 'Advanced', context: 'Core scripting & algorithmic modeling' },
      { name: 'Scikit-Learn', level: 'Specialized', context: 'Regression, classification & cross-validation' },
      { name: 'PyTorch', level: 'Academic', context: 'Neural network foundations & backpropagation' },
      { name: 'Pandas & NumPy', level: 'Proficient', context: 'Data cleaning, vectorization & feature scaling' },
      { name: 'Streamlit', level: 'Proficient', context: 'Interactive ML web app deployment' },
    ],
  },
  {
    id: 'backend',
    name: 'Real-Time & Backend Systems',
    tagline: 'Duplex WebSockets, WebRTC Mesh & RESTful Architecture',
    skills: [
      { name: 'Node.js & Express', level: 'Advanced', context: 'REST API gateways & middleware pipelines' },
      { name: 'WebSockets (ws)', level: 'Specialized', context: 'Low-latency bidirectional room events' },
      { name: 'WebRTC', level: 'Proficient', context: 'Peer-to-peer audio/video streaming mesh' },
      { name: 'MongoDB', level: 'Proficient', context: 'Document modeling, indexing & aggregations' },
      { name: 'TypeScript', level: 'Advanced', context: 'Strict typing across frontend & backend contracts' },
    ],
  },
  {
    id: 'frontend',
    name: 'Modern Web & Creative Craft',
    tagline: 'Component Architecture, Responsive UX & Visual Rhythm',
    skills: [
      { name: 'React', level: 'Advanced', context: 'Hooks, state management & reactive layouts' },
      { name: 'Tailwind CSS', level: 'Advanced', context: 'Design tokens, custom utilities & dark themes' },
      { name: 'Vite', level: 'Advanced', context: 'Modern tooling, HMR & build optimization' },
      { name: 'Adobe Premiere Pro', level: 'Skilled', context: 'Video editing, framing & storytelling' },
    ],
  },
  {
    id: 'core',
    name: 'Core Computer Science',
    tagline: 'Algorithmic Rigor, Memory Layout & Version Control',
    skills: [
      { name: 'C / C++', level: 'Foundation', context: 'Pointers, memory management & low-level data flows' },
      { name: 'Data Structures & Algorithms', level: 'Advanced', context: 'Trees, graphs, dynamic programming, sorting' },
      { name: 'Git & GitHub', level: 'Proficient', context: 'Branching, code reviews & release management' },
      { name: 'Linux / Terminal', level: 'Proficient', context: 'Shell automation & environment configuration' },
    ],
  },
];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('ml');

  return (
    <section id="skills" className="py-24 border-t border-white/5 bg-[#0a0b0d]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Pill Badge without emoji */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#a3e635] mb-6">
          <Bolt size={14} weight="Filled" />
          <span>Capabilities</span>
        </div>

        {/* Section Heading matching Dribbble shot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              My Extensive{' '}
              <span
                className="inline-block px-4 py-0.5 rounded-full font-black mx-1 align-baseline shadow-md"
                style={{ backgroundColor: '#ffffff', color: '#000000' }}
              >
                List
              </span>{' '}
              of Skills.
            </h2>
          </div>

          {/* Category Tabs - high contrast, comfortable, zero glare */}
          <div className="flex flex-wrap gap-2">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`text-xs font-mono font-bold uppercase tracking-wider px-4 py-2 rounded-full border transition-all cursor-pointer ${
                  activeTab === cat.id
                    ? 'border-[#a3e635] shadow-sm'
                    : 'bg-white/[0.03] text-slate-400 border-white/10 hover:border-white/30 hover:text-white'
                }`}
                style={activeTab === cat.id ? { backgroundColor: '#a3e635', color: '#0a0b0d' } : {}}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Display */}
        {skillCategories
          .filter((cat) => cat.id === activeTab)
          .map((cat) => (
            <div
              key={cat.id}
              className="bg-[#121316] border border-white/5 rounded-3xl p-8 sm:p-10 transition-all duration-300"
            >
              <div className="mb-8 pb-6 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-slate-400">{cat.tagline}</p>
                </div>
                <span className="text-xs font-mono font-semibold text-[#a3e635] bg-[#a3e635]/10 px-3.5 py-1.5 rounded-full border border-[#a3e635]/20 w-max">
                  {cat.skills.length} Core Competencies
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group bg-[#16181d] border border-white/5 hover:border-[#a3e635]/40 p-5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-white group-hover:text-[#a3e635] transition-colors text-base">
                        {skill.name}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-slate-400 border border-white/5">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-normal">
                      {skill.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

      </div>
    </section>
  );
};

export default Skills;
