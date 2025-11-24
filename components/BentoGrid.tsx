import React from 'react';
import { Camera, Ruler, Activity, Film } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'cinema',
    title: 'Cinéma & Publicité',
    description: 'Prises de vue dynamiques jusqu\'à 5.4K RAW. Stabilisation parfaite.',
    icon: <Film className="w-8 h-8 text-accent" />,
    image: 'https://picsum.photos/800/600?random=1',
    colSpan: 2,
  },
  {
    id: 'inspection',
    title: 'Inspection Technique',
    description: 'Thermique et Zoom x30 pour structures industrielles.',
    icon: <Activity className="w-8 h-8 text-orange-500" />,
    image: 'https://picsum.photos/800/600?random=2',
    colSpan: 1,
  },
  {
    id: 'mapping',
    title: 'Photogrammétrie 3D',
    description: 'Modélisation de terrain centimétrique.',
    icon: <Ruler className="w-8 h-8 text-green-500" />,
    image: 'https://picsum.photos/800/600?random=3',
    colSpan: 1,
  },
  {
    id: 'realestate',
    title: 'Immobilier de Luxe',
    description: 'Mise en valeur de propriétés d\'exception.',
    icon: <Camera className="w-8 h-8 text-purple-500" />,
    image: 'https://picsum.photos/800/600?random=4',
    colSpan: 2,
  },
];

export const BentoGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Expertise Aérienne</h2>
        <p className="text-textSecondary text-xl max-w-2xl mx-auto">
          Une flotte de drones adaptée à chaque mission, du tournage cinéma à l'analyse de données complexes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
        {services.map((service) => (
          <div
            key={service.id}
            className={`group relative overflow-hidden rounded-3xl bg-surfaceHighlight border border-white/5 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-black/50 ${
              service.colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'
            }`}
          >
            {/* Image Background with Overlay */}
            <div className="absolute inset-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="mb-4 bg-white/10 w-fit p-3 rounded-2xl backdrop-blur-md border border-white/10 group-hover:bg-white/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-textSecondary font-medium group-hover:text-white transition-colors">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};