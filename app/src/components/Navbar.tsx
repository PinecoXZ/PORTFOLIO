import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'reicon-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0b0d]/85 backdrop-blur-md border-b border-white/5 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-white font-bold text-xl tracking-tight"
        >
          <span className="font-mono text-2xl font-black tracking-tighter text-white">
            FAYEZ<span className="text-[#a3e635]">.DEV</span>
          </span>
          <span className="w-2 h-2 rounded-full bg-[#a3e635] inline-block animate-pulse shadow-[0_0_8px_#a3e635]" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-slate-300 hover:text-[#a3e635] transition-colors py-1 cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-slate-300 hover:text-[#a3e635] transition-colors py-1 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-slate-300 hover:text-[#a3e635] transition-colors py-1 cursor-pointer"
          >
            Process
          </button>
          <button
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-slate-300 hover:text-[#a3e635] transition-colors py-1 cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-slate-300 hover:text-[#a3e635] transition-colors py-1 cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-slate-300 hover:text-[#a3e635] transition-colors py-1 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 bg-white text-black font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full hover:bg-[#a3e635] hover:text-black transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
          >
            <span>Start Project</span>
            <ArrowUpRight
              size={14}
              weight="Outline"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
