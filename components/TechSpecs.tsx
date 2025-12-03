import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Reveal } from './Reveal';
import djiLogo from '../media/logo_DJI/DJI_Logo_Final.png';
import droneImg from '../media/Photo_DJI/drone_mavic_4.webp';
import { Camera, Aperture, Radio, ScanEye } from 'lucide-react';

type FeatureType = 'camera' | 'cinema' | 'security' | 'range' | null;

// Couleur Or/Accent
const ACCENT_COLOR = '#D4AF37';

// Points cibles sur le drone (en % de l'image du drone)
// Basé sur l'image: la nacelle caméra est à gauche, avec 3 objectifs empilés verticalement
const DRONE_TARGETS: Record<string, { x: number; y: number }[]> = {
  camera: [
    { x: 33, y: 50 },  // Objectif du haut (petit rond)
    { x: 31, y: 60 },  // Objectif principal au milieu (gros objectif)
    { x: 35, y: 59 },  // Objectif du bas (petit rond)
  ],
  cinema: [{ x: 33, y: 50 }],  // Objectif principal (le gros au milieu)
  security: [
    { x: 35, y: 25 },
    { x: 80, y: 25 },
    { x: 5, y: 50 },
    { x: 75, y: 60 },
  ],
  // Range n'a pas de ligne - on utilise un effet sonar à la place
};

export const TechSpecs: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<FeatureType>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const droneRef = useRef<HTMLImageElement>(null);
  const featureRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [lines, setLines] = useState<{ startX: number; startY: number; endX: number; endY: number }[]>([]);

  const handleMouseEnter = (feature: FeatureType) => setActiveFeature(feature);
  const handleMouseLeave = () => setActiveFeature(null);
  const isActive = (f: FeatureType) => activeFeature === f;

  // Calcul des lignes de connexion
  const calculateLines = useCallback(() => {
    if (!containerRef.current || !droneRef.current || !activeFeature) {
      setLines([]);
      return;
    }

    const featureEl = featureRefs.current[activeFeature];
    if (!featureEl) {
      setLines([]);
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const droneRect = droneRef.current.getBoundingClientRect();
    const featureRect = featureEl.getBoundingClientRect();

    // Point de départ : bord gauche du texte (milieu vertical)
    const startX = featureRect.left - containerRect.left;
    const startY = featureRect.top - containerRect.top + featureRect.height / 2;

    // Points d'arrivée sur le drone
    const targets = DRONE_TARGETS[activeFeature] || [];
    const newLines = targets.map((target) => ({
      startX,
      startY,
      endX: droneRect.left - containerRect.left + (target.x / 100) * droneRect.width,
      endY: droneRect.top - containerRect.top + (target.y / 100) * droneRect.height,
    }));

    setLines(newLines);
  }, [activeFeature]);

  useEffect(() => {
    calculateLines();
    window.addEventListener('resize', calculateLines);
    window.addEventListener('scroll', calculateLines);
    return () => {
      window.removeEventListener('resize', calculateLines);
      window.removeEventListener('scroll', calculateLines);
    };
  }, [calculateLines]);

  return (
    <div className="bg-surface py-32 border-t border-white/5 overflow-hidden">
      <div 
        ref={containerRef}
        className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative"
      >
        
        {/* SVG GLOBAL - Par dessus tout pour les lignes de connexion */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
          style={{ zIndex: 50, overflow: 'visible' }}
        >
          <defs>
            <linearGradient id="lineGradientGold" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor={ACCENT_COLOR} stopOpacity="0.1" />
              <stop offset="50%" stopColor={ACCENT_COLOR} stopOpacity="0.5" />
              <stop offset="100%" stopColor={ACCENT_COLOR} stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {lines.map((line, i) => {
            const pathLength = Math.sqrt(
              Math.pow(line.endX - line.startX, 2) + Math.pow(line.endY - line.startY, 2)
            );

            return (
              <g key={`${activeFeature}-${i}`}>
                {/* Ligne droite */}
                <line
                  x1={line.startX}
                  y1={line.startY}
                  x2={line.endX}
                  y2={line.endY}
                  stroke={ACCENT_COLOR}
                  strokeWidth="1"
                  strokeOpacity="0.4"
                  strokeDasharray={pathLength}
                  strokeDashoffset="0"
                  style={{
                    animation: 'drawLine 0.5s ease-out forwards',
                  }}
                />
                
                {/* Point de départ */}
                <circle
                  cx={line.startX}
                  cy={line.startY}
                  r="3"
                  fill={ACCENT_COLOR}
                  fillOpacity="0.8"
                />
                
                {/* Point d'arrivée avec pulse */}
                <circle
                  cx={line.endX}
                  cy={line.endY}
                  r="4"
                  fill="none"
                  stroke={ACCENT_COLOR}
                  strokeWidth="1"
                  strokeOpacity="0.6"
                >
                  <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle
                  cx={line.endX}
                  cy={line.endY}
                  r="2"
                  fill={ACCENT_COLOR}
                  fillOpacity="0.9"
                />
              </g>
            );
          })}
        </svg>

        {/* CSS pour l'animation */}
        <style>{`
          @keyframes drawLine {
            from { stroke-dashoffset: 1000; }
            to { stroke-dashoffset: 0; }
          }
        `}</style>

        {/* DRONE IMAGE - LEFT */}
        <div className="hidden md:flex flex-1 w-full justify-center order-1 md:order-1">
          <Reveal delay={300} className="relative w-full max-w-[600px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-gradient-to-br from-zinc-900 via-neutral-900 to-stone-950">
            
            {/* Background Texture & Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.03)_0%,transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(100,100,100,0.08)_0%,transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02)_0%,transparent_50%,rgba(0,0,0,0.3)_100%)]"></div>
            {/* Subtle noise texture */}
            <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}></div>
            {/* Vignette effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]"></div>

            {/* Image Container */}
            <div className="absolute inset-0 flex items-center justify-center p-12 transition-transform duration-700">
               <img 
                   ref={droneRef}
                   src={droneImg} 
                   alt="DJI Mavic 4 Pro" 
                   className="w-full h-full object-contain relative z-10 transition-transform duration-700"
               />
            </div>

            {/* SONAR Effect pour Range - SOUS le drone (z-index 5, avant l'image) */}
            <svg 
              className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 ${isActive('range') ? 'opacity-100' : 'opacity-0'}`}
              style={{ zIndex: 5 }}
              viewBox="0 0 100 100" 
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Ondes sonar qui émanent du dessous du drone - position plus basse */}
              <g>
                {/* Onde 1 */}
                <ellipse cx="40" cy="62" rx="3" ry="1" fill="none" stroke={ACCENT_COLOR} strokeWidth="0.4" opacity="0">
                  <animate attributeName="rx" values="3;45" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="ry" values="1;25" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="62;75" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0" dur="2.5s" repeatCount="indefinite" />
                </ellipse>
                {/* Onde 2 - décalée */}
                <ellipse cx="40" cy="62" rx="3" ry="1" fill="none" stroke={ACCENT_COLOR} strokeWidth="0.4" opacity="0">
                  <animate attributeName="rx" values="3;45" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
                  <animate attributeName="ry" values="1;25" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="62;75" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
                </ellipse>
                {/* Onde 3 - décalée */}
                <ellipse cx="40" cy="62" rx="3" ry="1" fill="none" stroke={ACCENT_COLOR} strokeWidth="0.4" opacity="0">
                  <animate attributeName="rx" values="3;45" dur="2.5s" begin="1.2s" repeatCount="indefinite" />
                  <animate attributeName="ry" values="1;25" dur="2.5s" begin="1.2s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="62;75" dur="2.5s" begin="1.2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0" dur="2.5s" begin="1.2s" repeatCount="indefinite" />
                </ellipse>
                {/* Onde 4 - décalée */}
                <ellipse cx="40" cy="62" rx="3" ry="1" fill="none" stroke={ACCENT_COLOR} strokeWidth="0.4" opacity="0">
                  <animate attributeName="rx" values="3;45" dur="2.5s" begin="1.8s" repeatCount="indefinite" />
                  <animate attributeName="ry" values="1;25" dur="2.5s" begin="1.8s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="62;75" dur="2.5s" begin="1.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0" dur="2.5s" begin="1.8s" repeatCount="indefinite" />
                </ellipse>
              </g>
            </svg>

            {/* Interactive Hotspots */}
            <div className="absolute inset-0 z-30 grid grid-cols-3 grid-rows-3">
                <div className="col-start-2 row-start-1 row-span-2 cursor-pointer" onMouseEnter={() => handleMouseEnter('camera')} onMouseLeave={handleMouseLeave} />
                <div className="col-start-1 row-start-1 cursor-pointer" onMouseEnter={() => handleMouseEnter('security')} onMouseLeave={handleMouseLeave} />
                <div className="col-start-3 row-start-1 cursor-pointer" onMouseEnter={() => handleMouseEnter('security')} onMouseLeave={handleMouseLeave} />
                <div className="col-start-1 row-start-3 cursor-pointer" onMouseEnter={() => handleMouseEnter('security')} onMouseLeave={handleMouseLeave} />
                <div className="col-start-3 row-start-3 cursor-pointer" onMouseEnter={() => handleMouseEnter('security')} onMouseLeave={handleMouseLeave} />
                <div className="col-start-2 row-start-3 cursor-pointer" onMouseEnter={() => handleMouseEnter('range')} onMouseLeave={handleMouseLeave} />
            </div>

            {/* Badge Tech */}
            <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-3 z-40">
                <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeFeature ? 'bg-accent' : 'bg-white/50'}`}></div>
                <span className="text-xs font-mono text-white/80 tracking-widest">
                    {isActive('camera') ? 'SYSTEME OPTIQUE' : 
                     isActive('cinema') ? 'MODE CINEMA' :
                     isActive('security') ? 'CAPTEURS ACTIFS' :
                     isActive('range') ? 'OCUSYNC 4' : 'MAVIC 4 PRO'}
                </span>
            </div>

          </Reveal>
        </div>

        {/* TEXT COLUMN - RIGHT avec grille 2x2 */}
        <div className="flex-1 space-y-10 relative z-10 order-2 md:order-2">
          <Reveal>
            <div className="flex items-center gap-5 mb-6 opacity-90">
              <img src={djiLogo} alt="DJI" className="h-8 w-auto" />
              <div className="h-4 w-[1px] bg-accent/50"></div>
              <span className="text-sm font-bold tracking-[0.3em] text-accent uppercase">Flagship Series</span>
            </div>

            <h2 id="tech-title" className="scroll-mt-20 text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 leading-tight">
              DJI Mavic 4 Pro
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-xl text-textSecondary leading-relaxed font-light">
              L'excellence réinventée. Équipé d'une <strong className="text-white">caméra de qualité cinéma</strong> et de 3 objectifs, il capture des images époustouflantes avec une stabilité parfaite, même à grande distance.
            </p>
          </Reveal>
          
          <Reveal delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6 pt-6 items-end">
              
              {/* Feature 1 - Triple caméra */}
              <div 
                ref={(el) => { featureRefs.current['camera'] = el; }}
                className={`relative border-l pl-6 group transition-all duration-300 cursor-default ${isActive('camera') ? 'border-accent' : 'border-white/20 hover:border-accent'}`}
                onMouseEnter={() => handleMouseEnter('camera')}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`text-3xl font-semibold transition-colors ${isActive('camera') ? 'text-accent' : 'text-textPrimary group-hover:text-accent'}`}>Triple caméra</div>
                <div className="text-textSecondary text-[11px] uppercase tracking-wider mt-2 flex items-center gap-2 font-medium">
                    <Camera size={14} /> Plans larges et zooms
                </div>
              </div>

              {/* Feature 2 - Qualité cinéma */}
              <div 
                ref={(el) => { featureRefs.current['cinema'] = el; }}
                className={`relative border-l pl-6 group transition-all duration-300 cursor-default ${isActive('cinema') ? 'border-accent' : 'border-white/20 hover:border-accent'}`}
                onMouseEnter={() => handleMouseEnter('cinema')}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`text-3xl font-semibold transition-colors ${isActive('cinema') ? 'text-accent' : 'text-textPrimary group-hover:text-accent'}`}>Qualité cinéma</div>
                <div className="text-textSecondary text-[11px] uppercase tracking-wider mt-2 flex items-center gap-2 font-medium">
                    <Aperture size={14} /> Couleurs éclatantes
                </div>
              </div>

              {/* Feature 3 - Sécurité 360 */}
              <div 
                ref={(el) => { featureRefs.current['security'] = el; }}
                className={`relative border-l pl-6 group transition-all duration-300 cursor-default ${isActive('security') ? 'border-accent' : 'border-white/20 hover:border-accent'}`}
                onMouseEnter={() => handleMouseEnter('security')}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`text-3xl font-semibold transition-colors ${isActive('security') ? 'text-accent' : 'text-textPrimary group-hover:text-accent'}`}>Sécurité 360°</div>
                <div className="text-textSecondary text-[11px] uppercase tracking-wider mt-2 flex items-center gap-2 font-medium">
                    <ScanEye size={14} /> Détection d'obstacles
                </div>
              </div>

              {/* Feature 4 - Portée 20km */}
              <div 
                ref={(el) => { featureRefs.current['range'] = el; }}
                className={`relative border-l pl-6 group transition-all duration-300 cursor-default ${isActive('range') ? 'border-accent' : 'border-white/20 hover:border-accent'}`}
                onMouseEnter={() => handleMouseEnter('range')}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`text-3xl font-semibold transition-colors ${isActive('range') ? 'text-accent' : 'text-textPrimary group-hover:text-accent'}`}>Portée 20km</div>
                <div className="text-textSecondary text-[11px] uppercase tracking-wider mt-2 flex items-center gap-2 font-medium">
                    <Radio size={14} /> Signal vidéo stable
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};
