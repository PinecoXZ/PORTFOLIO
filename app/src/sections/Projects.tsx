import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  video?: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'CampusLink',
    description: 'Full-stack campus social platform connecting university students',
    longDescription:
      'CampusLink is a full-stack social platform designed for university students to connect, collaborate, and share resources. Built with JavaScript, TypeScript, and CSS, it features real-time interactions, a modern responsive UI, and is deployed on Vercel for seamless access. The platform helps bridge the gap between students across departments and campuses.',
    tags: ['JavaScript', 'TypeScript', 'CSS', 'Node.js', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    github: 'https://github.com/FAYEZ087/campuslink',
    demo: 'https://campuslink-eta.vercel.app',
  },
  {
    id: 2,
    title: 'MidnightCampus',
    description: 'Anonymous campus chat app with real-time video calling',
    longDescription:
      'MidnightCampus is an anonymous campus communication platform built with TypeScript and JavaScript. It enables students to connect through real-time chat and video calling features, fostering late-night study sessions and spontaneous conversations. The app features WebSocket-based real-time messaging, WebRTC video calls, and a sleek dark-themed UI.',
    tags: ['TypeScript', 'JavaScript', 'CSS', 'WebSocket', 'WebRTC'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
    github: 'https://github.com/FAYEZ087/MidnightCampus',
  },
  {
    id: 3,
    title: 'Salary Prediction',
    description: 'ML-powered salary prediction using Python and data science',
    longDescription:
      'A machine learning project that predicts salaries based on various features like experience, education, and job role. Built with Python, it uses data preprocessing, feature engineering, and regression models to provide accurate salary estimates. The project includes data visualization, model training, and evaluation pipelines using libraries like scikit-learn, pandas, and matplotlib.',
    tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Streamlit'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    github: 'https://github.com/FAYEZ087/salary_prediction_project',
  },
  {
    id: 4,
    title: 'CampusLink Server',
    description: 'Backend API server powering the CampusLink platform',
    longDescription:
      'The backend server for CampusLink, handling API endpoints, authentication, database operations, and real-time communication. Built with JavaScript and Node.js, it provides a robust REST API for the frontend client, manages user sessions, and handles data persistence. The server architecture follows best practices for scalability and security.',
    tags: ['JavaScript', 'Node.js', 'Express', 'REST API', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    github: 'https://github.com/FAYEZ087/campuslink-server',
  },
];

// 3D Tilt Card Component with enhanced effects
const TiltCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: (project: Project) => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glareRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (more pronounced - up to 15 degrees)
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    // Calculate glare position
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    // Apply 3D transform with scale
    gsap.to(cardRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.05,
      duration: 0.4,
      ease: 'power2.out',
    });

    // Move glare effect
    gsap.to(glareRef.current, {
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!cardRef.current) return;

    // Add shadow depth on hover
    gsap.to(cardRef.current, {
      boxShadow: '0 25px 50px -12px rgba(0, 245, 255, 0.25), 0 0 30px rgba(0, 245, 255, 0.1)',
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !glareRef.current) return;
    setIsHovered(false);

    // Reset all transforms
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      duration: 0.6,
      ease: 'power2.out',
    });

    // Hide glare
    gsap.to(glareRef.current, {
      background: 'transparent',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <div
      className="perspective-1000"
      style={{ perspective: '1000px' }}
    >
      <div
        ref={cardRef}
        className="relative cursor-pointer preserve-3d"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'box-shadow 0.4s ease',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onClick(project)}
        data-cursor="project"
      >
        <div className="glass-card rounded-2xl overflow-hidden group">
          {/* Image Container */}
          <div className="relative aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
            />
            {/* Overlay on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent transition-opacity duration-300 ${
                isHovered ? 'opacity-80' : 'opacity-40'
              }`}
            />
            {/* Tags */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-mono bg-cyan/20 text-cyan rounded backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 relative z-10">
            <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-cyan transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-white/60 text-sm font-body line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Glare overlay */}
          <div
            ref={glareRef}
            className="absolute inset-0 rounded-2xl pointer-events-none z-20"
            style={{ background: 'transparent' }}
          />

          {/* Border glow effect */}
          <div
            className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              boxShadow: 'inset 0 0 20px rgba(0, 245, 255, 0.15), 0 0 20px rgba(0, 245, 255, 0.1)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

// Expanded Project Modal
const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate in
    gsap.fromTo(
      modalRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.out' }
    );
    gsap.fromTo(
      contentRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: 'power3.out', delay: 0.1 }
    );

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    gsap.to(contentRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
    });
    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 0.3,
      delay: 0.1,
      ease: 'power2.in',
      onComplete: onClose,
    });
  };

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-void/95 backdrop-blur-xl" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-auto glass-card rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          data-cursor="link"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            {project.title}
          </h2>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-mono bg-cyan/10 text-cyan rounded-full border border-cyan/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-white/70 font-body text-lg leading-relaxed mb-8">
            {project.longDescription}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-void font-body font-semibold rounded-full hover:bg-cyan/90 transition-colors"
                data-cursor="link"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-body rounded-full hover:bg-white/10 transition-colors"
                data-cursor="link"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section reveal
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Stagger cards
      const cards = sectionRef.current?.querySelectorAll('.glass-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 px-6"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(124, 58, 237, 0.15) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-cyan font-mono text-sm tracking-wider">
            &gt; SELECTED_WORKS
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-2">
            Featured Projects
          </h2>
          <p className="text-white/60 font-body mt-4 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in AI/ML, web development, and data visualization.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <TiltCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>

        {/* More Projects Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/FAYEZ087?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/70 hover:text-cyan hover:border-cyan/50 hover:bg-cyan/10 font-body rounded-full transition-all duration-300 group"
            data-cursor="link"
          >
            <Github className="w-5 h-5" />
            For more projects, visit my GitHub
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
