import React, { useState } from 'react';
import RobinCylinderShowcase from './components/RobinCylinderShowcase';
import AboutDrawer from './components/AboutDrawer';

const App: React.FC = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-[#07090e] text-slate-200 antialiased select-none">
      {/* Premier Robin Mastromarino 3D Curved Cylinder Showcase (100% Full Screen) */}
      <RobinCylinderShowcase
        isAboutOpen={isAboutOpen}
        onOpenAbout={() => setIsAboutOpen(!isAboutOpen)}
      />

      {/* Robin Mastromarino Editorial About Slide-Out Overlay */}
      <AboutDrawer
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
};

export default App;
