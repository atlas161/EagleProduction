
import React, { useState, useEffect, useRef } from 'react';
import { Reveal } from './Reveal';
import djiLogo from '../media/logo_DJI/DJI_Logo_Final.png';
import { Shield, Battery, Signal, Aperture, Gauge, Camera, Zap, Radio, ScanEye } from 'lucide-react';

export const TechSpecs: React.FC = () => {
  // --- ÉTAT POUR LES DONNÉES ANIMÉES (HUD) ---
  const [telemetry, setTelemetry] = useState({
    speed: 69.4,
    alt: 124,
    battery: 92,
    voltage: 14.32, // Valeur fixe demandée
    satellites: 18,
    shutter: "1/50",
    recTimeSec: 14,
    recTimeMs: 32,
    pitch: 0,
    roll: 0,
    storage: 42
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Référence pour accéder aux valeurs actuelles dans la boucle de rendu sans recréer la closure
  const telemetryRef = useRef(telemetry);

  // Simulation des variations de données HUD
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry(prev => {
        const newState = {
          ...prev,
          speed: +(70 + (Math.random() * 2 - 1)).toFixed(1),
          alt: +(124 + (Math.random() * 0.4 - 0.2)).toFixed(1),
          // Voltage retiré de l'animation pour rester fixe
          recTimeMs: prev.recTimeMs >= 99 ? 0 : prev.recTimeMs + 4,
          recTimeSec: prev.recTimeMs >= 99 ? prev.recTimeSec + 1 : prev.recTimeSec,
          pitch: Math.sin(Date.now() / 1500) * 1.5,
          roll: Math.cos(Date.now() / 2500) * 2
        };
        telemetryRef.current = newState; // Mise à jour de la ref pour le canvas
        return newState;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // --- MOTEUR DE RENDU VAPORWAVE (CANVAS) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Configuration de la scène
    const CONFIG = {
      gridColor: '#D4AF37', // Or
      gridSpeed: 0.25, // Vitesse d'avancée un peu plus rapide
      sunColorTop: '#FFFF00', // Jaune
      sunColorBottom: '#FF0055', // Rouge rosé
      skyColorBottom: '#2a2000', // Or sombre
      skyColorTop: '#050505', // Noir
      starCount: 100,
      mountainsColor: '#000000',
    };

    // Étoiles statiques
    const stars = Array.from({ length: CONFIG.starCount }).map(() => ({
      x: Math.random(),
      y: Math.random() * 0.6, // Seulement dans le ciel
      size: Math.random() * 1.5,
      twinkleSpeed: Math.random() * 0.05
    }));

    // État de l'oiseau (procédural)
    let bird = {
      active: false,
      x: 0,
      y: 0,
      direction: 1, // 1: droite, -1: gauche
      speed: 0,
      flapSpeed: 0,
      flapPhase: 0,
      size: 1
    };

    // Fonction de redimensionnement
    const handleResize = () => {
      if (canvas.parentElement) {
        // Double résolution pour écrans Retina
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // Boucle de rendu
    const render = () => {
      time++;
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      
      // 0. Effacer
      ctx.fillStyle = CONFIG.skyColorTop;
      ctx.fillRect(0, 0, width, height);

      // 1. Ciel (Dégradé)
      const horizonY = height * 0.55; // Ligne d'horizon un peu plus basse
      const skyGrad = ctx.createLinearGradient(0, 0, 0, horizonY);
      skyGrad.addColorStop(0, CONFIG.skyColorTop);
      skyGrad.addColorStop(1, CONFIG.skyColorBottom);
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, horizonY);

      // 2. Étoiles
      ctx.fillStyle = '#FFF';
      stars.forEach(star => {
        const opacity = 0.5 + Math.sin(time * star.twinkleSpeed) * 0.5;
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(star.x * width, star.y * height, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // 3. Soleil (Retro Sun)
      const sunRadius = Math.min(width, height) * 0.25;
      const sunX = width / 2;
      const sunY = horizonY; // Posé sur l'horizon

      // Glow du soleil
      ctx.shadowBlur = 60;
      ctx.shadowColor = 'rgba(212, 175, 55, 0.6)';

      const sunGrad = ctx.createLinearGradient(sunX, sunY - sunRadius * 1.5, sunX, sunY + sunRadius);
      sunGrad.addColorStop(0, CONFIG.sunColorTop);
      sunGrad.addColorStop(0.5, '#F9A825'); // Orange
      sunGrad.addColorStop(1, CONFIG.sunColorBottom);
      
      ctx.fillStyle = sunGrad;
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // 4. Montagnes (Dessinées avant la grille)
      ctx.fillStyle = CONFIG.mountainsColor;
      
      // Montagne Gauche
      ctx.beginPath();
      ctx.moveTo(0, height);
      ctx.lineTo(0, horizonY - 50);
      ctx.lineTo(width * 0.15, horizonY - 20);
      ctx.lineTo(width * 0.25, horizonY + 20);
      ctx.lineTo(width * 0.35, height);
      ctx.fill();

      // Montagne Droite
      ctx.beginPath();
      ctx.moveTo(width, height);
      ctx.lineTo(width, height);
      ctx.lineTo(width, horizonY - 60);
      ctx.lineTo(width * 0.85, horizonY - 30);
      ctx.lineTo(width * 0.75, horizonY + 10);
      ctx.lineTo(width * 0.65, height);
      ctx.fill();
      
      // Fond Montagne Lointaine
      ctx.fillStyle = '#111';
      ctx.beginPath();
      ctx.moveTo(0, height);
      ctx.lineTo(width, height);
      ctx.lineTo(width, horizonY);
      for(let x = width; x >= 0; x -= 20) {
          const noise = Math.sin(x * 0.05) * 10 + Math.cos(x * 0.01) * 20;
          ctx.lineTo(x, horizonY - 10 + Math.abs(noise));
      }
      ctx.lineTo(0, horizonY);
      ctx.fill();

      // --- OISEAU PROCÉDURAL (Entre les montagnes et la grille) ---
      // Fréquence augmentée (0.05)
      if (!bird.active && Math.random() < 0.05) {
         bird.active = true;
         bird.y = Math.random() * (horizonY * 0.7); // Dans le ciel (haut)
         bird.direction = Math.random() > 0.5 ? 1 : -1;
         bird.x = bird.direction === 1 ? -50 : width + 50; // Départ hors écran
         bird.speed = 1.5 + Math.random() * 1.5;
         bird.size = 0.5 + Math.random() * 0.5;
         bird.flapSpeed = 0.1 + Math.random() * 0.1;
      }

      if (bird.active) {
         bird.x += bird.speed * bird.direction;
         bird.flapPhase += bird.flapSpeed;

         // Check sortie d'écran
         if ((bird.direction === 1 && bird.x > width + 50) || (bird.direction === -1 && bird.x < -50)) {
            bird.active = false;
         }

         // Dessin
         ctx.save();
         ctx.translate(bird.x, bird.y);
         // Le scale X gère la direction, scale Y la taille
         ctx.scale(bird.size * bird.direction, bird.size);
         
         // Forme de l'aile qui bat (V shape style silhouette)
         const wingY = Math.sin(bird.flapPhase) * 10;
         
         ctx.beginPath();
         ctx.moveTo(-12, wingY - 5); // Aile gauche
         ctx.quadraticCurveTo(-6, wingY - 10, 0, 0); // Courbe vers le corps
         ctx.quadraticCurveTo(6, wingY - 10, 12, wingY - 5); // Aile droite
         
         // Style silhouette noire pour contraste avec le soleil
         ctx.lineWidth = 2.5;
         ctx.strokeStyle = '#000000'; 
         ctx.lineCap = 'round';
         ctx.lineJoin = 'round';
         ctx.stroke();

         // Petit reflet blanc pour le volume
         ctx.strokeStyle = 'rgba(255,255,255,0.1)';
         ctx.lineWidth = 1;
         ctx.stroke();

         ctx.restore();
      }

      // 5. Grille 3D (Perspective Floor)
      const gridHeight = height - horizonY;
      
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, horizonY, width, gridHeight);
      ctx.clip(); // On ne dessine que sous l'horizon

      // Fond du sol
      const floorGrad = ctx.createLinearGradient(0, horizonY, 0, height);
      floorGrad.addColorStop(0, '#000');
      floorGrad.addColorStop(0.3, '#1a1200');
      floorGrad.addColorStop(1, '#2a2000');
      ctx.fillStyle = floorGrad;
      ctx.fillRect(0, horizonY, width, gridHeight);

      // Paramètres de perspective
      const fov = 300;
      const camHeight = 120;
      const gridZSpeed = (time * 6) % 100; // Boucle tous les 100 unités Z

      // RESTAURATION : Effet Glow sur la grille pour le style Vaporwave
      ctx.strokeStyle = CONFIG.gridColor;
      ctx.shadowBlur = 10; // Glow restauré
      ctx.shadowColor = CONFIG.gridColor;
      ctx.lineWidth = 2; // Lignes un peu plus épaisses pour le glow

      // Lignes verticales
      const numVerticalLines = 30;
      const centerX = width / 2;
      
      ctx.beginPath();
      for (let i = -numVerticalLines; i <= numVerticalLines; i++) {
        const spread = i * (width * 0.15); 
        ctx.moveTo(centerX, horizonY);
        ctx.lineTo(centerX + spread * 4, height);
      }
      ctx.stroke();

      // Lignes horizontales
      for(let z = 0; z < 20; z++) {
          let currentZ = (z * 100) - gridZSpeed;
          if (currentZ < 10) currentZ += 2000; 

          const scale = fov / currentZ;
          const y2d = horizonY + (camHeight * scale);
          
          if (y2d > height) continue; 
          if (y2d < horizonY) continue; 

          const alpha = Math.min(1, (y2d - horizonY) / 150);
          ctx.globalAlpha = alpha;

          ctx.beginPath();
          ctx.moveTo(0, y2d);
          ctx.lineTo(width, y2d);
          ctx.stroke();
      }
      ctx.globalAlpha = 1;
      ctx.restore();

      // Glow Horizon
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#FFF';
      ctx.fillStyle = 'rgba(212, 175, 55, 0.5)';
      ctx.fillRect(0, horizonY - 1, width, 2);

      // 6. DRONE (Style Mavic Pro Futuriste) - Vue arrière
      const droneBaseY = horizonY - 30; 
      const hoverY = Math.sin(time * 0.05) * 5; 
      const droneX = width / 2;
      const droneY = droneBaseY + hoverY;
      const roll = telemetryRef.current.roll * 0.1;
      const pitch = telemetryRef.current.pitch * 0.05;
      const scaleDrone = 0.9;

      ctx.save();
      ctx.translate(droneX, droneY + (pitch * 10)); // Pitch affects Y slightly
      ctx.rotate(roll);
      ctx.scale(scaleDrone, scaleDrone);

      // --- STYLE GLOBAL ---
      ctx.strokeStyle = '#D4AF37'; // Or pour les contours
      ctx.lineWidth = 1.5;
      ctx.fillStyle = '#0a0a0a'; // Corps presque noir
      ctx.shadowColor = '#D4AF37';
      ctx.shadowBlur = 8;
      ctx.lineJoin = 'round';

      // --- BRAS ARRIÈRES (Lower Arms) ---
      // Ils sont plus bas et partent vers l'extérieur
      const drawRearArm = (side: 1 | -1) => {
        ctx.beginPath();
        ctx.moveTo(side * 15, 5); // Départ du corps
        ctx.lineTo(side * 50, 15); // Coude/Moteur
        ctx.lineTo(side * 55, 15); // Extrémité
        ctx.lineTo(side * 55, 20); // Épaisseur
        ctx.lineTo(side * 15, 12); // Retour au corps
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      };
      drawRearArm(-1); // Gauche
      drawRearArm(1);  // Droit

      // --- CORPS CENTRAL (Fuselage) ---
      ctx.beginPath();
      // Forme aérodynamique complexe
      ctx.moveTo(-18, -10); // Avant Gauche
      ctx.lineTo(18, -10);  // Avant Droit
      ctx.lineTo(22, 0);    // Élargissement milieu
      ctx.lineTo(15, 25);   // Arrière resserré
      ctx.lineTo(-15, 25);  // Arrière Gauche
      ctx.lineTo(-22, 0);   // Milieu Gauche
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // --- DÉTAILS DU CORPS ---
      // Module Caméra Avant (Suggéré)
      ctx.fillStyle = '#111';
      ctx.beginPath();
      ctx.moveTo(-10, -10);
      ctx.lineTo(10, -10);
      ctx.lineTo(8, -15);
      ctx.lineTo(-8, -15);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Grille d'aération arrière / Batterie
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-10, 15); ctx.lineTo(10, 15);
      ctx.moveTo(-8, 18); ctx.lineTo(8, 18);
      ctx.moveTo(-6, 21); ctx.lineTo(6, 21);
      ctx.stroke();
      
      // Remise style principal
      ctx.strokeStyle = '#D4AF37';
      ctx.lineWidth = 1.5;
      ctx.fillStyle = '#0a0a0a';

      // --- BRAS AVANTS (Upper Arms) ---
      // Ils sont plus hauts et donnent l'aspect agressif
      const drawFrontArm = (side: 1 | -1) => {
        ctx.beginPath();
        ctx.moveTo(side * 18, -5); // Départ haut du corps
        ctx.lineTo(side * 65, -15); // Moteur avant (plus loin)
        ctx.lineTo(side * 70, -15); 
        ctx.lineTo(side * 70, -8); // Épaisseur
        ctx.lineTo(side * 22, 5);  // Retour
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      };
      drawFrontArm(-1);
      drawFrontArm(1);

      // --- MOTEURS (Cylindres) ---
      const drawMotor = (x: number, y: number) => {
        ctx.beginPath();
        ctx.ellipse(x, y, 6, 3, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      };
      drawMotor(-53, 13); // AG
      drawMotor(53, 13);  // AD
      drawMotor(-68, -17); // AVG
      drawMotor(68, -17);  // AVD

      // --- HÉLICES (Hautes Performances 3D) ---
      // Refonte complète : On utilise l'échelle pour simuler la perspective 3D du disque qui tourne
      const drawProp = (x: number, y: number, offset: number) => {
          ctx.save();
          ctx.translate(x, y);
          // On "écrase" le contexte verticalement pour avoir un cercle vu de profil (perspective)
          ctx.scale(1, 0.15); 
          
          // Rotation rapide pour les pales
          ctx.rotate(time * 0.8 + offset);
          
          // 1. Cercle de "Tip" (Bout des pales) - Très fin
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(0, 0, 32, 0, Math.PI * 2);
          ctx.stroke();

          // 2. Disque de flou (Motion Blur)
          ctx.fillStyle = 'rgba(212, 175, 55, 0.05)';
          ctx.beginPath();
          ctx.arc(0, 0, 32, 0, Math.PI * 2);
          ctx.fill();

          // 3. Les Pales (Qui tournent vraiment)
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#FFFFFF';
          
          // Pale 1
          ctx.beginPath();
          ctx.rect(-32, -2, 64, 4); // Une longue barre qui tourne
          ctx.fill();
          
          // Centre (Ecrou)
          ctx.fillStyle = '#333';
          ctx.beginPath();
          ctx.arc(0, 0, 4, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.restore();
      };

      drawProp(-53, 13, 0);     // AG
      drawProp(53, 13, 1);      // AD
      drawProp(-68, -17, 2);    // AVG
      drawProp(68, -17, 3);     // AVD

      // --- LUMIÈRES (LEDs) ---
      // Feux Arrières Rouges (Classique Mavic)
      ctx.shadowColor = '#FF0000';
      ctx.shadowBlur = 20;
      ctx.fillStyle = '#FF0000';
      
      // LED Gauche Arrière
      ctx.beginPath();
      ctx.arc(-15, 25, 2.5, 0, Math.PI * 2);
      ctx.fill();
      
      // LED Droite Arrière
      ctx.beginPath();
      ctx.arc(15, 25, 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Feux de bras avants (Verts - Clignotants)
      if (Math.floor(time / 15) % 2 === 0) {
        ctx.shadowColor = '#00FF00';
        ctx.fillStyle = '#00FF00';
        
        ctx.beginPath();
        ctx.arc(-68, -12, 1.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(68, -12, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();


      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const formatTime = (totalSeconds: number, ms: number) => {
    const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    const mill = ms.toString().padStart(2, '0');
    return `${m}:${s}:${mill}`;
  };

  return (
    <div className="bg-surface py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-end gap-16">
        
        {/* Colonne Texte - MISE À JOUR DJI MAVIC 4 PRO */}
        <div className="flex-1 space-y-10 relative z-10 order-2 md:order-2 items-end">
          <Reveal>
             {/* DJI LOGO HEADER */}
             <div className="flex items-center gap-5 mb-6 opacity-90">
                <img src={djiLogo} alt="DJI" className="h-8 w-auto" />
                <div className="h-4 w-[1px] bg-white/30"></div>
                <span className="text-sm font-bold tracking-[0.3em] text-textSecondary uppercase">Flagship Series</span>
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
            <div className="grid grid-cols-2 gap-y-10 gap-x-6 pt-6 items-end">
              
              {/* Feature 1 */}
              <div className="border-l border-white/20 pl-6 group hover:border-accent transition-colors">
                <div className="text-3xl font-semibold text-textPrimary group-hover:text-accent transition-colors">Triple caméra</div>
                <div className="text-textSecondary text-[11px] uppercase tracking-wider mt-2 flex items-center gap-2 font-medium">
                    <Camera size={14} /> Plans larges et zooms
                </div>
              </div>

              {/* Feature 2 */}
              <div className="border-l border-white/20 pl-6 group hover:border-accent transition-colors">
                <div className="text-3xl font-semibold text-textPrimary group-hover:text-accent transition-colors">Qualité cinéma</div>
                <div className="text-textSecondary text-[11px] uppercase tracking-wider mt-2 flex items-center gap-2 font-medium">
                    <Aperture size={14} /> Couleurs éclatantes
                </div>
              </div>

              {/* Feature 3 */}
              <div className="border-l border-white/20 pl-6 group hover:border-accent transition-colors">
                <div className="text-3xl font-semibold text-textPrimary group-hover:text-accent transition-colors">Sécurité 360°</div>
                <div className="text-textSecondary text-[11px] uppercase tracking-wider mt-2 flex items-center gap-2 font-medium">
                    <ScanEye size={14} /> Détection d'obstacles
                </div>
              </div>

              {/* Feature 4 */}
              <div className="border-l border-white/20 pl-6 group hover:border-accent transition-colors">
                <div className="text-3xl font-semibold text-textPrimary group-hover:text-accent transition-colors">Portée 20km</div>
                <div className="text-textSecondary text-[11px] uppercase tracking-wider mt-2 flex items-center gap-2 font-medium">
                    <Radio size={14} /> Signal vidéo stable
                </div>
              </div>

            </div>
          </Reveal>
        </div>

        {/* DRONE HUD VISUALIZATION (Inchangé sauf nettoyage SSD) - HIDDEN ON MOBILE */}
        <div className="hidden md:flex flex-1 w-full justify-center order-1 md:order-1 items-end">
          <Reveal delay={300} className="relative w-full max-w-[550px] h-[420px] rounded-2xl overflow-hidden bg-[#050505] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] group select-none ring-1 ring-white/5">
            
            {/* --- CANVAS VAPORWAVE BACKGROUND --- */}
            <canvas 
                ref={canvasRef}
                className="absolute inset-0 w-full h-full z-0"
            />

            {/* --- HUD INTERFACE (OVERLAY) --- */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-40 font-mono">
                
                {/* TOP BAR */}
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm px-3 py-1 rounded border border-white/5">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_red]"></div>
                        <span className="text-red-500 font-bold text-xs tracking-wider">REC</span>
                        <span className="text-white font-bold text-xs w-16 tabular-nums">{formatTime(telemetry.recTimeSec, telemetry.recTimeMs)}</span>
                    </div>

                    <div className="flex items-center gap-4 text-[10px] font-bold">
                        <div className="flex flex-col items-end">
                             <div className="flex items-center gap-1 text-accent">
                                <Battery size={14} />
                                <span>{telemetry.battery}%</span>
                             </div>
                             <span className="text-white/40">{telemetry.voltage}V</span>
                        </div>
                        <div className="flex flex-col items-end">
                             <div className="flex items-center gap-1 text-white">
                                <Signal size={14} />
                                <span>RC HD</span>
                             </div>
                             <span className="text-white/40">{telemetry.satellites} SAT</span>
                        </div>
                    </div>
                </div>

                {/* LEFT: ALTITUDE SCALE */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                     <div className="flex flex-col justify-between h-32 text-[9px] text-white/40 py-1 font-bold text-right">
                         <span>150</span>
                         <span>100</span>
                         <span>50</span>
                         <span>0</span>
                     </div>
                     <div className="h-32 w-1.5 bg-white/10 rounded-full relative overflow-hidden">
                         <div className="absolute bottom-0 w-full bg-accent transition-all duration-300 ease-out" style={{ height: `${(telemetry.alt / 150) * 100}%` }}></div>
                     </div>
                     <div className="bg-black/50 border border-accent/30 px-1.5 py-0.5 rounded text-accent text-xs font-bold tabular-nums min-w-[3ch] text-center">
                        {Math.floor(telemetry.alt)}
                        <span className="text-[8px] ml-0.5">M</span>
                     </div>
                </div>

                {/* RIGHT: SPEED SCALE */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2 flex-row-reverse">
                     <div className="flex flex-col justify-between h-32 text-[9px] text-white/40 py-1 font-bold text-left">
                         <span>100</span>
                         <span>70</span>
                         <span>30</span>
                         <span>0</span>
                     </div>
                     <div className="h-32 w-1.5 bg-white/10 rounded-full relative overflow-hidden">
                         <div className="absolute bottom-0 w-full bg-white transition-all duration-300 ease-out" style={{ height: `${(telemetry.speed / 100) * 100}%` }}></div>
                     </div>
                     <div className="bg-black/50 border border-white/20 px-1.5 py-0.5 rounded text-white text-xs font-bold tabular-nums min-w-[3ch] text-center">
                        {Math.floor(telemetry.speed)}
                        <span className="text-[8px] ml-0.5">KM/H</span>
                     </div>
                </div>

                {/* BOTTOM BAR (SANS SSD, AVEC CAM SETTINGS) */}
                <div className="flex justify-between items-end mt-auto">
                    {/* CAMERA SETTINGS - MODIFICATION ICI: Suppression de bg-black/20 et backdrop-blur */}
                    <div className="flex gap-4 text-[9px] text-white/60 bg-black px-4 py-2 rounded-full border border-white/10">
                        <div className="flex flex-col">
                            <span className="uppercase tracking-wider text-white/30">ISO</span>
                            <span className="text-white font-bold">100</span>
                        </div>
                        <div className="w-[1px] bg-white/10"></div>
                        <div className="flex flex-col">
                            <span className="uppercase tracking-wider text-white/30">SHUTTER</span>
                            <span className="text-white font-bold">{telemetry.shutter}</span>
                        </div>
                        <div className="w-[1px] bg-white/10"></div>
                        <div className="flex flex-col">
                            <span className="uppercase tracking-wider text-white/30">WB</span>
                            <span className="text-white font-bold">5600K</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Vignette - Keep this one */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.7)] z-30 pointer-events-none"></div>

          </Reveal>
        </div>
      </div>
    </div>
  );
};
