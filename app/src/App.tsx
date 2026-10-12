import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import CredibilityBar from './components/CredibilityBar';
import About from './sections/About';
import Process from './sections/Process';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Testimonial from './sections/Testimonial';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0b0d] text-slate-200 selection:bg-[#a3e635] selection:text-black antialiased">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section with Inverted Badges & Radiant Lime Aura */}
        <Hero />

        {/* Credibility & Institution Bar */}
        <CredibilityBar />

        {/* About Section with Editorial Narrative & Stat Cards */}
        <About />

        {/* Signature Dribbble Work Process 4-Card Bento Grid */}
        <Process />

        {/* Extensive List of Skills Bento Grid */}
        <Skills />

        {/* Selected Works & Projects Showcase */}
        <Projects />

        {/* Engineering Endorsement & Testimonial */}
        <Testimonial />

        {/* Big Bold Contact Callout */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
