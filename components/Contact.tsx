
import React from 'react';
import { Reveal } from './Reveal';
import { Mail, Phone, Instagram, MapPin, Send, ChevronDown } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column: Info & Details */}
        <div className="flex flex-col justify-center">
            <Reveal>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Parlons de votre projet.</h2>
                <p className="text-textSecondary text-lg mb-12 leading-relaxed">
                    Une idée ? Un besoin spécifique ? <br/>
                    Nous sommes joignables directement par téléphone ou via le formulaire.
                </p>

                <div className="space-y-8">
                    {/* Email */}
                    <a href="mailto:contact@eagle-prod.com" className="flex items-center gap-6 group">
                        <div className="w-12 h-12 rounded-full bg-surfaceHighlight border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                            <Mail size={20} />
                        </div>
                        <div>
                            <div className="text-xs text-textSecondary tracking-wider mb-1 group-hover:text-white transition-colors">Email</div>
                            <div className="text-xl font-medium text-white group-hover:text-accent transition-colors">contact@eagle-prod.com</div>
                        </div>
                    </a>

                    {/* Phone */}
                    <a href="tel:+33699361715" className="flex items-center gap-6 group">
                        <div className="w-12 h-12 rounded-full bg-surfaceHighlight border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                            <Phone size={20} />
                        </div>
                        <div>
                            <div className="text-xs text-textSecondary tracking-wider mb-1 group-hover:text-white transition-colors">Téléphone</div>
                            <div className="text-xl font-medium text-white group-hover:text-accent transition-colors">06 99 36 17 15</div>
                        </div>
                    </a>

                    {/* Instagram */}
                    <a href="https://instagram.com/eagleproduction.video" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                        <div className="w-12 h-12 rounded-full bg-surfaceHighlight border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                            <Instagram size={20} />
                        </div>
                        <div>
                            <div className="text-xs text-textSecondary tracking-wider mb-1 group-hover:text-white transition-colors">Instagram</div>
                            <div className="text-xl font-medium text-white group-hover:text-accent transition-colors">@eagleproduction.video</div>
                        </div>
                    </a>

                     {/* Location */}
                     <div className="flex items-center gap-6 group">
                        <div className="w-12 h-12 rounded-full bg-surfaceHighlight border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <div className="text-xs text-textSecondary tracking-wider mb-1 group-hover:text-white transition-colors">Localisation</div>
                            <div className="text-xl font-medium text-white">Angoulême (16) & Grand Ouest</div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>

        {/* Right Column: Contact Form */}
        <Reveal delay={200}>
            <div className="bg-surfaceHighlight/50 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-xl">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-textSecondary tracking-wider ml-2">Nom</label>
                            <input
                                type="text"
                                className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
                                placeholder="Votre Nom"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-textSecondary tracking-wider ml-2">Email</label>
                            <input
                                type="email"
                                className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
                                placeholder="votre@email.com"
                            />
                        </div>
                    </div>
                    
                     <div className="space-y-2">
                        <label className="text-xs font-semibold text-textSecondary tracking-wider ml-2">Sujet</label>
                        <div className="relative">
                             <select className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                                <option className="bg-surface text-white">Demande de devis drone</option>
                                <option className="bg-surface text-white">Studio digital & web</option>
                                <option className="bg-surface text-white">Solution informatique</option>
                                <option className="bg-surface text-white">Autre</option>
                             </select>
                             <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-textSecondary">
                                <ChevronDown size={18} />
                             </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-textSecondary tracking-wider ml-2">Message</label>
                        <textarea
                            rows={5}
                            className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-white/20"
                            placeholder="Détails de votre mission..."
                        ></textarea>
                    </div>

                    <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]">
                        <Send size={18} />
                        Envoyer la demande
                    </button>
                </form>
            </div>
        </Reveal>
      </div>
    </div>
  );
};
