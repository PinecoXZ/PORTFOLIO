import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { ArrowRight, ArrowUpRight, CloseCircle } from 'reicon-react';

export interface ShowcaseProject {
  id: string;
  image: string;
  number: string;
  year: string;
  title: string;
  displayTitle: string;
  category: string;
  tagline: string;
  description: string;
  metrics: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
  accentColor: string;
  bgGradStart: string;
  bgGradEnd: string;
  type: 'math' | 'audio' | 'ecommerce' | 'data' | 'code';
}

const showcaseProjects: ShowcaseProject[] = [
  {
    id: 'flunked',
    image: '/images/flunked.jpg',
    number: '01',
    year: '2024',
    title: 'Flunked — Academic Survival & UGC/AICTE Engine',
    displayTitle: 'FLUNKED',
    category: 'ALGORITHMIC TOOLS & SYSTEMS',
    tagline: 'High-Precision Attendance & CGPA Engine',
    description:
      'High-precision client-side academic calculations platform built for Indian college students. Implements UGC/AICTE 75% attendance bunk thresholds, statutory CTC-to-inhand salary math, and university CGPA conversion formulas with zero tracking and zero latency.',
    metrics: '19+ Algorithms · 0ms Client Compute · 100% Free',
    highlights: [
      'Comprehensive suite of 19+ academic calculators with instant client-side computation',
      'Engineered UGC/AICTE 75% attendance rule algorithms for optimal absence planning',
      'Deterministic CGPA to percentage conversions across major university grading systems',
      'Zero server round-trips: sub-millisecond calculation pipeline with zero tracking cookies',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Web Audio API'],
    liveUrl: 'https://flunked.online',
    githubUrl: 'https://github.com/PinecoXZ/flunked',
    accentColor: '#FFD027',
    bgGradStart: '#2A1F05',
    bgGradEnd: '#130E02',
    type: 'math',
  },
  {
    id: 'hallway',
    image: '/images/hallway.jpg',
    number: '02',
    year: '2025',
    title: 'Hallway Chat — Live Duplex Audio & Video Mesh',
    displayTitle: 'HALLWAY CHAT',
    category: 'DISTRIBUTED REAL-TIME AUDIO',
    tagline: 'Duplex WebSockets & Peer Audio Streaming',
    description:
      'Full-stack low-latency clubhouse-inspired collaborative audio space and ephemeral messaging platform exclusively for verified college students across 50+ Indian universities. Built with duplex WebSockets for live room telemetry, WebRTC mesh for peer-to-peer crystal audio streaming, and Node.js microservices with JWT security.',
    metrics: '40ms WebSocket SLA · WebRTC Audio Mesh · 50+ Campuses',
    highlights: [
      'Low-latency bidirectional WebSocket room telemetry supporting concurrent active listeners',
      'Peer-to-peer WebRTC audio streaming mesh with adaptive jitter buffer & noise suppression',
      'Ephemeral live text chat rooms with zero message persistence for complete student privacy',
      'Modular Node.js/Express gateway architecture with strict TypeScript contracts',
    ],
    tech: ['Node.js', 'WebSockets (ws)', 'WebRTC', 'React', 'MongoDB', 'Express'],
    liveUrl: 'https://hallwaychat.online',
    githubUrl: 'https://github.com/PinecoXZ/hallway-chat',
    accentColor: '#FF5C8D',
    bgGradStart: '#2A0832',
    bgGradEnd: '#130318',
    type: 'audio',
  },
  {
    id: 'kharidomart',
    image: '/images/kharidomart.jpg',
    number: '03',
    year: '2025',
    title: 'KharidoMart — Gentle Baby Care & Montessori',
    displayTitle: 'KHARIDOMART',
    category: 'E-COMMERCE & SENSORY ECOSYSTEM',
    tagline: 'Gentle Baby Care, Montessori Play & Mom Essentials',
    description:
      "India's curated digital retail ecosystem designed for gentle infant care, non-toxic Montessori developmental play, and mom wellness essentials. Features high-performance responsive storefront, instant search, Razorpay secure checkout, and Pan-India Cash on Delivery.",
    metrics: '100% Non-Toxic · Montessori Certified · Pan-India COD',
    highlights: [
      'Curated product collection for sensory learning and infant development (0-36m)',
      'Ultra-responsive mobile-first UI with sub-second page transitions and bento layouts',
      'Structured catalog architecture for baby wear, nursery gear, and teething toys',
      'Grounded in natural beechwood, food-grade silicone, and organic cotton standards',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Razorpay', 'Vercel'],
    liveUrl: 'https://kharidomart.com',
    githubUrl: 'https://github.com/PinecoXZ/kharidomart',
    accentColor: '#FD6A19',
    bgGradStart: '#361506',
    bgGradEnd: '#180902',
    type: 'ecommerce',
  },
  {
    id: 'bunkcalc',
    image: '/images/bunkcalc.jpg',
    number: '04',
    year: '2024',
    title: 'BunkCalc — Attendance Predictor',
    displayTitle: 'BUNKCALC',
    category: 'PREDICTIVE MODELING & SIMULATION',
    tagline: 'Probabilistic Attendance Forecasting & Buffer Simulator',
    description:
      'Algorithmic attendance buffer simulator predicting minimum safe absences while maintaining university compliance. Features visual schedule forecasting, semester deadline countdowns, and instant risk status indicators with client-side LocalStorage encryption.',
    metrics: '10,000+ Student Runs · 100% Deterministic · Zero Ads',
    highlights: [
      'Mathematical model computing exact allowed absences before breaching 75% thresholds',
      'Interactive sensitivity sliders demonstrating how future missed classes impact margin',
      'Full client-side persistence via LocalStorage API with zero data exfiltration',
      'Micro-animations giving immediate tactile feedback on attendance risk zones',
    ],
    tech: ['TypeScript', 'React', 'LocalStorage API', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://bunk-calc-web.vercel.app',
    githubUrl: 'https://github.com/PinecoXZ/BunkCalc_Web',
    accentColor: '#00F0FF',
    bgGradStart: '#06243A',
    bgGradEnd: '#020F1A',
    type: 'data',
  },
  {
    id: 'leenout',
    image: '/images/leenout.jpg',
    number: '05',
    year: '2024',
    title: 'LeenOut — Code Gateway',
    displayTitle: 'LEENOUT',
    category: 'DEVELOPER INFRASTRUCTURE & TOOLS',
    tagline: 'High-Speed Code Gateway & Developer Pastebin',
    description:
      'High-performance developer pastebin and code-sharing platform with syntax highlighting across 40+ programming languages, custom expiration TTLs, encrypted storage, and instant shareable shortlinks.',
    metrics: 'Sub-200ms API Response · Encrypted Storage · 40+ Languages',
    highlights: [
      'Optimized MongoDB document schemas with auto-expiring TTL indexes for temporary pastes',
      'Client-side syntax highlighting across 40+ programming languages using PrismJS',
      'RESTful CRUD endpoints with rate limiting, input sanitization, and CORS enforcement',
      'Clean keyboard-driven UI designed for frictionless code snippet sharing',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'PrismJS', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://leen-out.vercel.app',
    githubUrl: 'https://github.com/PinecoXZ/LeenOut',
    accentColor: '#F59E0B',
    bgGradStart: '#261B07',
    bgGradEnd: '#110B03',
    type: 'code',
  },
];

interface RobinCylinderShowcaseProps {
  onOpenAbout: () => void;
  isAboutOpen: boolean;
}

// -------------------------------------------------------------
// ROBIN MASTROMARINO BESPOKE HIGH-RES EDITORIAL TEXTURE ENGINE
// Loads authentic, full-bleed photographs with cinematic grading
// and crisp editorial typography seamlessly mapped to cylinder
// -------------------------------------------------------------
function createProjectTexture(
  project: ShowcaseProject,
  onLoaded?: () => void
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  // High-resolution 2048x1400 canvas for ultra-sharp retina text & imagery
  canvas.width = 2048;
  canvas.height = 1400;
  const ctx = canvas.getContext('2d')!;

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;

  const redraw = (loadedImg: HTMLImageElement | null) => {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // 1. Draw High-Resolution Full-Bleed Photograph (object-fit: cover)
    if (loadedImg && loadedImg.complete && loadedImg.naturalWidth > 0) {
      const imgRatio = loadedImg.naturalWidth / loadedImg.naturalHeight;
      const canvasRatio = w / h;
      let renderW = w;
      let renderH = h;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        renderW = w;
        renderH = w / imgRatio;
        offsetY = (h - renderH) / 2;
      } else {
        renderH = h;
        renderW = h * imgRatio;
        offsetX = (w - renderW) / 2;
      }

      ctx.drawImage(loadedImg, offsetX, offsetY, renderW, renderH);

      // 2. Cinematic Editorial Film Contrast & Vignette
      // Deep gradient to guarantee white title readability
      const vignette = ctx.createRadialGradient(w / 2, h / 2, w * 0.15, w / 2, h / 2, w * 0.75);
      vignette.addColorStop(0, 'rgba(5, 7, 14, 0.30)');
      vignette.addColorStop(0.65, 'rgba(5, 7, 14, 0.52)');
      vignette.addColorStop(1, 'rgba(5, 7, 14, 0.85)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);

      // Top and bottom header/footer shadow scrim
      const topBottomScrim = ctx.createLinearGradient(0, 0, 0, h);
      topBottomScrim.addColorStop(0, 'rgba(5, 7, 14, 0.70)');
      topBottomScrim.addColorStop(0.2, 'rgba(5, 7, 14, 0.15)');
      topBottomScrim.addColorStop(0.5, 'rgba(5, 7, 14, 0.32)');
      topBottomScrim.addColorStop(0.8, 'rgba(5, 7, 14, 0.20)');
      topBottomScrim.addColorStop(1, 'rgba(5, 7, 14, 0.80)');
      ctx.fillStyle = topBottomScrim;
      ctx.fillRect(0, 0, w, h);
    } else {
      // Atmospheric rich dark gradient while loading
      const grad = ctx.createRadialGradient(w / 2, h / 2, 80, w / 2, h / 2, w * 0.75);
      grad.addColorStop(0, project.bgGradStart);
      grad.addColorStop(1, project.bgGradEnd);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    }

    // 3. Tactile 3D Paper-Fold Hairline Shadow at Left & Right Seams
    const seamLeft = ctx.createLinearGradient(0, 0, 20, 0);
    seamLeft.addColorStop(0, 'rgba(0, 0, 0, 0.65)');
    seamLeft.addColorStop(1, 'transparent');
    ctx.fillStyle = seamLeft;
    ctx.fillRect(0, 0, 20, h);

    const seamRight = ctx.createLinearGradient(w, 0, w - 20, 0);
    seamRight.addColorStop(0, 'rgba(0, 0, 0, 0.65)');
    seamRight.addColorStop(1, 'transparent');
    ctx.fillStyle = seamRight;
    ctx.fillRect(w - 20, 0, 20, h);

    // 4. Center Typography Layout
    const cx = w / 2;
    const cy = h * 0.48;

    // Category Eyebrow Tag (Clean, Editorial, Zero Neon)
    ctx.save();
    ctx.font = '600 20px "Plus Jakarta Sans", "Inter", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowBlur = 0;
    ctx.shadowColor = 'transparent';
    const catText = project.category.toUpperCase();
    const catMetrics = ctx.measureText(catText);
    const catWidth = catMetrics.width + 48;
    const pillY = cy - 170;

    // Subtle dark frosted glass capsule with refined hairline border
    ctx.fillStyle = 'rgba(10, 13, 20, 0.70)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(cx - catWidth / 2, pillY, catWidth, 42, 21);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.fillText(catText, cx, pillY + 21);
    ctx.restore();

    // GIANT ROBIN MASTROMARINO CONDENSED DISPLAY TITLE (Upright, Clean Solid White, Zero Glow)
    ctx.save();
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    // Robin Mastromarino exact condensed poster display font - upright, crisp, solid white
    ctx.font = 'normal 900 190px "Anton", "Bebas Neue", "Plus Jakarta Sans", sans-serif';
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.fillText(project.displayTitle, cx, cy);

    const titleMetrics = ctx.measureText(project.displayTitle);
    const halfTitleWidth = titleMetrics.width / 2;
    ctx.restore();

    // Slide Number (Top Left of Title, clean modern grotesque)
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.font = '600 38px "Plus Jakarta Sans", "Inter", sans-serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'bottom';
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    const numX = Math.max(80, cx - halfTitleWidth - 36);
    ctx.fillText(project.number, numX, cy - 28);
    ctx.restore();

    // Year (Bottom Right of Title, clean modern grotesque)
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.70)';
    ctx.font = '600 34px "Plus Jakarta Sans", "Inter", sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    const yearX = Math.min(w - 80, cx + halfTitleWidth + 36);
    ctx.fillText(project.year, yearX, cy + 24);
    ctx.restore();

    // Tagline under title (Clean off-white editorial typography)
    ctx.save();
    ctx.fillStyle = 'rgba(241, 245, 249, 0.90)';
    ctx.font = '500 28px "Plus Jakarta Sans", "Inter", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.fillText(project.tagline, cx, cy + 120);
    ctx.restore();

    texture.needsUpdate = true;
    if (onLoaded) onLoaded();
  };

  // Initial draw with fallback gradient
  redraw(null);

  // Load real photograph
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = project.image;
  img.onload = () => {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => redraw(img));
    } else {
      redraw(img);
    }
  };

  return texture;
}

const RobinCylinderShowcase: React.FC<RobinCylinderShowcaseProps> = ({
  onOpenAbout,
  isAboutOpen,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  // References for Three.js animation engine
  const targetOffsetRef = useRef<number>(0);
  const currentOffsetRef = useRef<number>(0);
  const isDraggingStateRef = useRef<boolean>(false);
  const pointerStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const lastPointerXRef = useRef<number>(0);
  const dragDistanceRef = useRef<number>(0);
  const pointerHistoryRef = useRef<{ x: number; time: number }[]>([]);
  const activeIndexRef = useRef<number>(0);

  const isAboutOpenRef = useRef<boolean>(isAboutOpen);
  const isInfoOpenRef = useRef<boolean>(isInfoOpen);

  useEffect(() => {
    isAboutOpenRef.current = isAboutOpen;
  }, [isAboutOpen]);

  useEffect(() => {
    isInfoOpenRef.current = isInfoOpen;
  }, [isInfoOpen]);

  // Multi-click state machine refs (1 click = nothing, 2 clicks = next card, 3 clicks = presentation info)
  const clickCountRef = useRef<number>(0);
  const clickTimerRef = useRef<number | null>(null);

  const count = showcaseProjects.length;

  // Switch to specific project index via shortest path along cylindrical ribbon
  const goToIndex = useCallback(
    (idx: number) => {
      const currentStep = Math.round(targetOffsetRef.current);
      const currentActive = ((currentStep % count) + count) % count;
      let diff = idx - currentActive;
      if (diff > count / 2) diff -= count;
      if (diff < -count / 2) diff += count;
      targetOffsetRef.current = currentStep + diff;
    },
    [count]
  );

  // Handle email copy
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('fayezahmad827@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  // Close info presentation sheet on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isInfoOpen) {
        setIsInfoOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isInfoOpen]);

  // When About modal is toggled open, ensure presentation sheet is dismissed
  useEffect(() => {
    if (isAboutOpen) {
      setIsInfoOpen(false);
    }
  }, [isAboutOpen]);

  // Three.js Fullscreen Cylinder Setup
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Perspective Camera
    const scene = new THREE.Scene();
    const cameraFOV = window.innerWidth < 768 ? 52 : 45;
    const camera = new THREE.PerspectiveCamera(
      cameraFOV,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const baseCameraZ = 10;
    camera.position.set(0, 0, baseCameraZ);

    // 2. High-Performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Ribbon Group (Centered on the cylinder axis at Z = -radius)
    const ribbonGroup = new THREE.Group();
    scene.add(ribbonGroup);

    // 4. TRUE FULL-SCREEN ROBIN MASTROMARINO PERSPECTIVE CYLINDER CALCULATION
    // In Robin Mastromarino's actual portfolio, each project is a full-screen cinematic stage,
    // displaying ONE project at a time filling 100% of the screen width and height.
    // The cylinder ribbon is gently curved in 3D perspective space, and each card arc
    // spans the full visible width of the viewport (+ 3% overscan to ensure zero margin bleed).
    // The seam between adjacent projects sits precisely at the viewport boundary,
    // so adjacent projects are seamlessly connected without cluttering the screen at rest.
    const calculateDimensions = () => {
      const vFovRad = (camera.fov * Math.PI) / 180;
      const visibleHeight = 2 * Math.tan(vFovRad / 2) * baseCameraZ;
      const visibleWidth = visibleHeight * (window.innerWidth / window.innerHeight);

      // Balanced cylinder curvature for smooth 3D perspective depth
      const radius = visibleWidth * 1.25;

      // Calculate the exact angular half-span alpha so the card chord + Z curvature
      // reaches from the left edge of the screen to the right edge of the screen
      const T = visibleWidth / (2 * baseCameraZ);
      const phi = Math.atan(T);
      const rhs = ((baseCameraZ + radius) / radius) * T;
      const hyp = Math.sqrt(1 + T * T);
      const sinVal = Math.min(0.999, rhs / hyp);
      const alpha = Math.asin(sinVal) - phi;

      // Angular span of one full-screen card (+ 3% overscan for zero border bleed)
      const deltaTheta = Math.max(0.65, alpha * 2 * 1.03);
      const cardArc = radius * deltaTheta;
      const cardHeight = visibleHeight * 1.15; // 100% full bleed top to bottom

      return { visibleHeight, visibleWidth, cardArc, radius, deltaTheta, cardHeight };
    };

    let dims = calculateDimensions();
    ribbonGroup.position.set(0, 0, -dims.radius);

    // 5. Construct Seamless 3D CylinderGeometry Ribbon Sectors
    const createCardGeometry = (radius: number, height: number, deltaTheta: number) => {
      return new THREE.CylinderGeometry(
        radius,
        radius,
        height,
        48,
        1,
        true,
        -deltaTheta / 2,
        deltaTheta
      );
    };

    let cardGeo = createCardGeometry(dims.radius, dims.cardHeight, dims.deltaTheta);
    const meshes: THREE.Mesh[] = [];

    showcaseProjects.forEach((proj, i) => {
      const texture = createProjectTexture(proj);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.FrontSide,
        transparent: false,
        depthTest: true,
        depthWrite: true,
      });

      const mesh = new THREE.Mesh(cardGeo, material);
      mesh.userData = { project: proj, index: i };
      mesh.position.set(0, 0, 0);

      ribbonGroup.add(mesh);
      meshes.push(mesh);
    });

    // 6. Pointer Drag & Click with Momentum Throw & Multi-Click State Machine
    const onPointerDown = (e: PointerEvent) => {
      if (isAboutOpenRef.current) return;
      if ((e.target as HTMLElement).closest('button, a, input, [role="region"]')) return;

      isDraggingStateRef.current = true;
      pointerStartRef.current = { x: e.clientX, y: e.clientY };
      lastPointerXRef.current = e.clientX;
      dragDistanceRef.current = 0;
      pointerHistoryRef.current = [{ x: e.clientX, time: performance.now() }];

      if (containerRef.current) {
        containerRef.current.style.cursor = 'grabbing';
        try {
          containerRef.current.setPointerCapture(e.pointerId);
        } catch {
          // Ignored on non-capturable pointer events
        }
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDraggingStateRef.current) return;

      const now = performance.now();
      const deltaX = e.clientX - lastPointerXRef.current;
      lastPointerXRef.current = e.clientX;
      dragDistanceRef.current += Math.abs(deltaX);

      // Cancel partial click debounce if user intentionally dragged
      if (dragDistanceRef.current > 6 && clickTimerRef.current !== null) {
        window.clearTimeout(clickTimerRef.current);
        clickTimerRef.current = null;
        clickCountRef.current = 0;
      }

      pointerHistoryRef.current.push({ x: e.clientX, time: now });
      pointerHistoryRef.current = pointerHistoryRef.current.filter((p) => now - p.time < 120);

      // Natural drag sensitivity: dragging across 70% of screen advances 1 full-screen card
      const dragSensitivity = 1.0 / (window.innerWidth * 0.70);
      targetOffsetRef.current -= deltaX * dragSensitivity;
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDraggingStateRef.current) return;
      isDraggingStateRef.current = false;

      if (containerRef.current) {
        containerRef.current.style.cursor = 'grab';
        try {
          if (containerRef.current.hasPointerCapture(e.pointerId)) {
            containerRef.current.releasePointerCapture(e.pointerId);
          }
        } catch {
          // Ignored on released pointer
        }
      }

      // Click check: if dragged less than 8px, treat as click/tap
      if (dragDistanceRef.current < 8) {
        // If the presentation sheet is currently open, tapping on the top 3D canvas dismisses it
        if (isInfoOpenRef.current) {
          setIsInfoOpen(false);
          clickCountRef.current = 0;
          if (clickTimerRef.current !== null) {
            window.clearTimeout(clickTimerRef.current);
            clickTimerRef.current = null;
          }
          return;
        }

        // Native triple-click detection shortcut
        if (e.detail >= 3) {
          if (clickTimerRef.current !== null) {
            window.clearTimeout(clickTimerRef.current);
            clickTimerRef.current = null;
          }
          clickCountRef.current = 0;
          setIsInfoOpen(true);
          return;
        }

        // MULTI-CLICK STATE MACHINE:
        // 1 click: do nothing
        // 2 clicks: change the card (advance to next)
        // 3 clicks: show card info from below like in the picture
        clickCountRef.current += 1;

        if (clickTimerRef.current !== null) {
          window.clearTimeout(clickTimerRef.current);
          clickTimerRef.current = null;
        }

        if (clickCountRef.current === 1) {
          // 1st click: start debounce window (320ms)
          // If no 2nd click arrives, DO NOTHING!
          clickTimerRef.current = window.setTimeout(() => {
            clickCountRef.current = 0;
            clickTimerRef.current = null;
          }, 320);
        } else if (clickCountRef.current === 2) {
          // 2nd click: wait 320ms to check if a 3rd click arrives.
          // If no 3rd click arrives, CHANGE THE CARD!
          clickTimerRef.current = window.setTimeout(() => {
            const nextIdx = (activeIndexRef.current + 1) % count;
            goToIndex(nextIdx);
            clickCountRef.current = 0;
            clickTimerRef.current = null;
          }, 320);
        } else if (clickCountRef.current >= 3) {
          // 3rd click: IMMEDIATELY SHOW CARD INFO FROM BELOW!
          clickCountRef.current = 0;
          clickTimerRef.current = null;
          setIsInfoOpen(true);
        }
      } else {
        // Drag release: clear any partial click state
        if (clickTimerRef.current !== null) {
          window.clearTimeout(clickTimerRef.current);
          clickTimerRef.current = null;
        }
        clickCountRef.current = 0;

        // Momentum fling
        const now = performance.now();
        const recent = pointerHistoryRef.current.filter((p) => now - p.time < 120);
        let releaseVx = 0; // px / ms
        if (recent.length >= 2) {
          const first = recent[0];
          const last = recent[recent.length - 1];
          const dtMs = last.time - first.time;
          if (dtMs > 10) {
            releaseVx = (last.x - first.x) / dtMs;
          }
        }

        // Fling threshold: quick flick throws by 1 or 2 slides
        if (Math.abs(releaseVx) > 0.22) {
          const throwCards =
            -Math.sign(releaseVx) *
            Math.min(2, Math.max(1, Math.round(Math.abs(releaseVx) * 1.5)));
          targetOffsetRef.current = Math.round(currentOffsetRef.current) + throwCards;
        } else {
          // Settle smoothly into nearest card
          targetOffsetRef.current = Math.round(targetOffsetRef.current);
        }
      }
    };

    // Wheel navigation with intelligent trackpad vs mouse wheel detection
    let wheelCooldown = false;
    let wheelCooldownTimer: number;
    let wheelSnapTimer: number;

    const onWheel = (e: WheelEvent) => {
      // If event originated inside an inner scrollable container (like the presentation drawer), let it scroll internally
      const target = e.target as HTMLElement | null;
      if (target && target.closest('.overflow-y-auto, [role="region"]')) {
        return;
      }

      e.preventDefault();
      if (isAboutOpenRef.current || isInfoOpenRef.current) return;

      // Check if discrete mouse wheel tick vs high-precision trackpad
      const isDiscreteWheel = Math.abs(e.deltaY) >= 40 || e.deltaMode === 1;

      if (isDiscreteWheel) {
        if (!wheelCooldown) {
          wheelCooldown = true;
          const direction = Math.sign(e.deltaY);
          const currentStep = Math.round(targetOffsetRef.current);
          targetOffsetRef.current = currentStep + direction;

          window.clearTimeout(wheelCooldownTimer);
          wheelCooldownTimer = window.setTimeout(() => {
            wheelCooldown = false;
          }, 320);
        }
      } else {
        // Continuous high-precision trackpad scroll
        targetOffsetRef.current += e.deltaY * 0.0018;

        window.clearTimeout(wheelSnapTimer);
        wheelSnapTimer = window.setTimeout(() => {
          targetOffsetRef.current = Math.round(targetOffsetRef.current);
        }, 160);
      }
    };

    // Keyboard navigation (ArrowLeft & ArrowRight)
    const onKeyDown = (e: KeyboardEvent) => {
      if (isAboutOpenRef.current || isInfoOpenRef.current) return;
      const currentStep = Math.round(targetOffsetRef.current);
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        targetOffsetRef.current = currentStep + 1;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        targetOffsetRef.current = currentStep - 1;
      }
    };

    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);

    // 7. Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.fov = window.innerWidth < 768 ? 52 : 45;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      dims = calculateDimensions();
      ribbonGroup.position.set(0, 0, -dims.radius);

      // Recreate cylinder geometry for new dimensions
      cardGeo.dispose();
      cardGeo = createCardGeometry(dims.radius, dims.cardHeight, dims.deltaTheta);
      meshes.forEach((mesh) => {
        mesh.geometry = cardGeo;
      });
    };
    window.addEventListener('resize', handleResize);

    // 8. Animation Loop with Robin Mastromarino Aerodynamic Tilt & Velocity Damping
    let animationFrameId: number;
    let lastTime = performance.now();
    let smoothedSpeed = 0;
    let smoothedRoll = 0;
    let smoothedCamZ = baseCameraZ;
    let smoothedRibbonY = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.08);
      lastTime = now;

      // Luxurious frame-rate independent spring damping
      // When dragging, tighter coupling (decay = 24.0) for zero lag
      // When coasting/springing, velvet glide (decay = 8.5)
      const springDecay = isDraggingStateRef.current ? 24.0 : 8.5;
      const smoothFactor = 1 - Math.exp(-springDecay * dt);

      const prevOffset = currentOffsetRef.current;
      currentOffsetRef.current += (targetOffsetRef.current - currentOffsetRef.current) * smoothFactor;

      // Physical velocity in cards/second
      const instantVelocity = (currentOffsetRef.current - prevOffset) / Math.max(dt, 0.001);

      // Smooth velocity low-pass filter
      smoothedSpeed += (instantVelocity - smoothedSpeed) * (1 - Math.exp(-12.0 * dt));

      // Kinetic aerodynamic roll (tanh saturates smoothly without abrupt stops)
      const targetRoll = -Math.tanh(smoothedSpeed * 0.35) * 0.12; // max ~7 degrees
      smoothedRoll += (targetRoll - smoothedRoll) * (1 - Math.exp(-14.0 * dt));

      // Camera pull-back depth breathing
      const targetCamZ = baseCameraZ + Math.min(Math.abs(smoothedSpeed) * 0.3, 0.45);
      smoothedCamZ += (targetCamZ - smoothedCamZ) * (1 - Math.exp(-8.0 * dt));
      camera.position.z = smoothedCamZ;

      // Smooth vertical ribbon lift when presentation sheet is open
      const targetRibbonY = isInfoOpenRef.current ? dims.visibleHeight * 0.16 : 0;
      smoothedRibbonY += (targetRibbonY - smoothedRibbonY) * (1 - Math.exp(-10.0 * dt));
      ribbonGroup.position.y = smoothedRibbonY;

      // Active index update (guarded to avoid unnecessary React state churn)
      const normalizedStep = Math.round(currentOffsetRef.current);
      const rawActive = ((normalizedStep % count) + count) % count;
      if (rawActive !== activeIndexRef.current) {
        activeIndexRef.current = rawActive;
        setActiveIndex(rawActive);
      }

      // Signature Robin Mastromarino aerodynamic roll on movement
      ribbonGroup.rotation.z = smoothedRoll;

      // Position each card along the continuous cylindrical ribbon
      meshes.forEach((mesh, i) => {
        const k = i - currentOffsetRef.current;
        // Wrap k to range [-count / 2, +count / 2]
        const wrappedK = ((k + count / 2) % count + count) % count - count / 2;

        // Visible range: on screen cards are in [-1.5, +1.5]
        if (Math.abs(wrappedK) > 1.8) {
          mesh.visible = false;
        } else {
          mesh.visible = true;
          // Exact cylindrical arc placement: edges touch with ZERO gap!
          mesh.rotation.y = wrappedK * dims.deltaTheta;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (clickTimerRef.current !== null) {
        window.clearTimeout(clickTimerRef.current);
        clickTimerRef.current = null;
      }
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      meshes.forEach((m) => {
        const mat = m.material as THREE.MeshBasicMaterial;
        if (mat.map) mat.map.dispose();
        mat.dispose();
      });
      cardGeo.dispose();
      renderer.dispose();
    };
  }, [count, goToIndex]);

  const activeProject = showcaseProjects[activeIndex] || showcaseProjects[0];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#07090e] select-none text-white">
      {/* Three.js 3D WebGL Cylinder Canvas */}
      <div
        ref={containerRef}
        style={{ touchAction: 'none' }}
        className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing select-none"
      />

      {/* TOP HEADER: Minimalist Robin Mastromarino Header */}
      <header className="absolute top-0 left-0 w-full z-20 px-6 sm:px-12 py-8 flex items-center justify-between pointer-events-none">
        {/* Brand */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <span className="font-sans text-sm sm:text-base font-bold tracking-wider text-white uppercase">
            Fayez Ahmad
          </span>
          <span className="hidden md:inline-block text-xs font-sans tracking-wide text-white/50">
            / ML &amp; Full-Stack Developer
          </span>
        </div>

        {/* Center: Robin Mastromarino Close X when info sheet is open */}
        {isInfoOpen && (
          <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
            <button
              type="button"
              onClick={() => setIsInfoOpen(false)}
              aria-label="Close presentation info"
              className="w-10 h-10 rounded-full bg-white/[0.12] hover:bg-white/[0.25] border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer active:scale-90 shadow-lg backdrop-blur-md"
            >
              <span className="text-base font-semibold leading-none">✕</span>
            </button>
          </div>
        )}

        {/* Top Right Navigation & About Toggle */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <button
            type="button"
            onClick={() => {
              if (isInfoOpen) setIsInfoOpen(false);
              onOpenAbout();
            }}
            aria-label={isAboutOpen ? 'Close About view' : 'Open About view'}
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-white px-5 py-2 rounded-full border border-white/20 hover:border-white/50 bg-white/[0.08] hover:bg-white/[0.15] backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-sm font-medium"
          >
            {isAboutOpen ? (
              <>
                <CloseCircle size={14} weight="Outline" />
                <span>Close</span>
              </>
            ) : (
              <span>About</span>
            )}
          </button>
        </div>
      </header>

      {/* BOTTOM BAR: Exact Robin Mastromarino Layout (Fades out when presentation sheet is open) */}
      <footer
        className={`absolute bottom-0 left-0 w-full z-20 px-6 sm:px-12 py-8 flex items-end justify-between pointer-events-none transition-opacity duration-300 ${
          isInfoOpen ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Bottom Left: Mastromarino Dots Pagination */}
        <div className="flex items-center gap-4 pointer-events-auto">
          {showcaseProjects.map((proj, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => goToIndex(idx)}
                aria-label={`Go to slide ${idx + 1}: ${proj.title}`}
                className="group relative flex items-center justify-center p-2 cursor-pointer focus:outline-none active:scale-90 transition-transform duration-200"
              >
                {isActive ? (
                  <span className="w-3.5 h-3.5 rounded-full border border-white flex items-center justify-center transition-all duration-300 ease-out">
                    <span className="w-1.5 h-1.5 rounded-full bg-white transition-transform duration-300 scale-100" />
                  </span>
                ) : (
                  <span className="w-2 h-2 rounded-full bg-white/35 group-hover:bg-white/80 group-hover:scale-125 transition-all duration-200 ease-out" />
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Center: Navigation Hint */}
        <div className="hidden sm:block pointer-events-none text-[11px] font-sans tracking-widest uppercase text-white/50">
          Drag to explore · 2x Click to change · 3x Click for info
        </div>

        {/* Bottom Right: Clean Social Links with Copy-to-Clipboard */}
        <div className="flex items-center gap-6 pointer-events-auto text-xs font-sans text-white/60">
          <a
            href="https://github.com/PinecoXZ"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/fayez-ahmad-624619333/"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/fayez_ahmad499"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-white transition-colors"
          >
            X (Twitter)
          </a>

          <div className="relative">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Email
            </button>
            {copiedEmail && (
              <div className="absolute bottom-8 right-0 bg-white text-black text-[11px] font-sans font-semibold px-3 py-1 rounded shadow-lg whitespace-nowrap animate-in fade-in zoom-in-95">
                Mail copied!
              </div>
            )}
          </div>
        </div>
      </footer>

      {/* ROBIN MASTROMARINO PRESENTATION SHEET SLIDING UP FROM THE BOTTOM */}
      <section
        role="region"
        aria-label="Project presentation info"
        className={`fixed bottom-0 left-0 w-full z-40 bg-white text-neutral-900 shadow-[0_-25px_60px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] select-text ${
          isInfoOpen ? 'translate-y-0' : 'translate-y-full pointer-events-none'
        }`}
        style={{
          height: '46vh',
          maxHeight: '52vh',
        }}
      >
        {/* Subtle Top Drag / Close Handle */}
        <div
          onClick={() => setIsInfoOpen(false)}
          className="w-full flex flex-col items-center pt-2.5 pb-1 cursor-pointer group"
          title="Click to minimize"
        >
          <div className="w-12 h-1 rounded-full bg-neutral-300 group-hover:bg-neutral-400 transition-colors" />
        </div>

        <div className="h-[calc(100%-20px)] overflow-y-auto px-6 sm:px-12 md:px-20 py-4 sm:py-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
              {/* Left Column: PRESENTATION (Exact match with Robin Mastromarino's layout) */}
              <div className="md:col-span-3 lg:col-span-3 pt-1">
                <span className="text-xs sm:text-sm font-sans uppercase tracking-[0.12em] text-[#8e8e93] font-semibold">
                  PRESENTATION
                </span>
              </div>

              {/* Right Column: Description & Case Study Details */}
              <div className="md:col-span-9 lg:col-span-9 space-y-6">
                <p className="text-base sm:text-lg md:text-xl font-sans text-[#1d1d1f] leading-relaxed font-normal">
                  {activeProject.description}
                </p>

                {/* Core Highlights */}
                {activeProject.highlights && activeProject.highlights.length > 0 && (
                  <div className="pt-4 border-t border-black/[0.08]">
                    <div className="text-xs uppercase tracking-wider text-[#8e8e93] font-semibold mb-3">
                      Core Highlights &amp; Architecture
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeProject.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-[#f5f5f7] border border-black/[0.05] flex items-start gap-2.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-neutral-800" />
                          <span className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal">
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                {activeProject.tech && activeProject.tech.length > 0 && (
                  <div className="pt-4 border-t border-black/[0.08]">
                    <div className="text-xs uppercase tracking-wider text-[#8e8e93] font-semibold mb-3">
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-xs font-sans px-3 py-1 rounded-md bg-[#f2f2f7] text-[#1d1d1f] font-medium border border-black/[0.06]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions: Live Demo + GitHub */}
                <div className="flex flex-wrap items-center gap-4 pt-4 pb-4 border-t border-black/[0.08]">
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      style={{ color: '#ffffff', backgroundColor: '#000000' }}
                      className="inline-flex items-center gap-2 rounded-full font-bold text-xs sm:text-sm px-6 py-2.5 bg-black text-white hover:bg-neutral-800 transition-all active:scale-95 cursor-pointer shadow-md"
                    >
                      <span style={{ color: '#ffffff' }}>Launch Live System</span>
                      <ArrowUpRight size={14} weight="Outline" color="#ffffff" />
                    </a>
                  )}

                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{ color: '#000000', backgroundColor: '#f2f2f7' }}
                    className="inline-flex items-center gap-2 rounded-full bg-[#f2f2f7] hover:bg-[#e5e5ea] text-black font-semibold text-xs sm:text-sm px-6 py-2.5 border border-black/10 transition-all active:scale-95 cursor-pointer"
                  >
                    <span style={{ color: '#000000' }}>View Source on GitHub</span>
                    <ArrowRight size={14} weight="Outline" color="#000000" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RobinCylinderShowcase;
