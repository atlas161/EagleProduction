
import React from 'react';
import { Reveal } from './Reveal';
import { Target, Zap, Wind, Shield } from 'lucide-react';

export const TechSpecs: React.FC = () => {
  return (
    <div className="bg-surface py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 relative z-10">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-textPrimary">
              Performance pure.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-2xl text-textPrimary leading-relaxed font-light">
              Nos machines ne sont pas de simples drones. Ce sont des plateformes volantes de haute précision.
            </p>
          </Reveal>
          
          <Reveal delay={400}>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="border-l border-white/20 pl-6 group hover:border-accent transition-colors">
                <div className="text-3xl font-semibold text-textPrimary group-hover:text-accent transition-colors">6K</div>
                <div className="text-textSecondary text-xs mt-1 tracking-wider flex items-center gap-2">
                    <Zap size={12} /> Résolution
                </div>
              </div>
              <div className="border-l border-white/20 pl-6 group hover:border-accent transition-colors">
                <div className="text-3xl font-semibold text-textPrimary group-hover:text-accent transition-colors">45min</div>
                <div className="text-textSecondary text-xs mt-1 tracking-wider flex items-center gap-2">
                    <Wind size={12} /> Autonomie
                </div>
              </div>
              <div className="border-l border-white/20 pl-6 group hover:border-accent transition-colors">
                <div className="text-3xl font-semibold text-textPrimary group-hover:text-accent transition-colors">90km/h</div>
                <div className="text-textSecondary text-xs mt-1 tracking-wider flex items-center gap-2">
                    <Target size={12} /> Vitesse
                </div>
              </div>
              <div className="border-l border-white/20 pl-6 group hover:border-accent transition-colors">
                <div className="text-3xl font-semibold text-textPrimary group-hover:text-accent transition-colors">IP55</div>
                <div className="text-textSecondary text-xs mt-1 tracking-wider flex items-center gap-2">
                    <Shield size={12} /> Résistance
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Radar / Tech Visual moved here */}
        <div className="flex-1 w-full flex justify-center">
          <Reveal delay={300} className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
            
            {/* Tech Circles */}
            <div className="absolute inset-0 rounded-full border border-accent/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <div className="absolute inset-0 rounded-full border border-accent/10" />
            <div className="absolute inset-[15%] rounded-full border border-accent/10" />
            <div className="absolute inset-[30%] rounded-full border border-accent/10" />
            
            {/* Radar Sweep */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-accent/5 to-transparent animate-[spin_4s_linear_infinite]" />
            
            {/* Center Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-accent/30 flex items-center justify-center bg-black/50 backdrop-blur-sm shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                 <div className="text-center">
                     <div className="text-accent font-mono text-xs mb-1">SYSTEM</div>
                     <div className="text-white font-bold tracking-widest">READY</div>
                 </div>
            </div>
            
            {/* Floating Tech Data */}
            <div className="absolute top-10 right-10 bg-black/60 backdrop-blur px-3 py-1 rounded border border-accent/30 text-xs text-accent font-mono animate-pulse">
              <Target size={10} className="inline mr-1" />
              SENSORS_ACTIVE
            </div>

             <div className="absolute bottom-10 left-0 bg-black/60 backdrop-blur px-3 py-1 rounded border border-white/10 text-xs text-white/50 font-mono">
              GPS: LOCKED
            </div>

          </Reveal>
        </div>
      </div>
    </div>
  );
};
