
import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { Mail, Phone, Instagram, MapPin, Send, ChevronDown, Check } from 'lucide-react';
import { Listbox, Transition } from '@headlessui/react';
import clsx from 'clsx';

const subjects = [
  { id: 1, name: 'Demande de devis drone' },
  { id: 2, name: 'Studio digital & web' },
  { id: 3, name: 'Solution informatique' },
  { id: 4, name: 'Autre' },
];

export const Contact: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column: Info & Details */}
        <div className="flex flex-col justify-center">
            <Reveal>
                <h2 id="contact-title" className="scroll-mt-20 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6">Parlons de votre projet</h2>
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
                            <div className="text-xl font-medium text-white">Angoulême (16)</div>
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
                        <div className="relative z-20">
                             <Listbox value={selectedSubject} onChange={setSelectedSubject}>
                                <div className="relative mt-1">
                                  <Listbox.Button className="relative w-full cursor-pointer bg-surface border border-white/10 rounded-xl py-3 pl-4 pr-10 text-left text-white focus:outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm transition-colors">
                                    <span className="block truncate">{selectedSubject.name}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                      <ChevronDown
                                        className="h-5 w-5 text-textSecondary"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </Listbox.Button>
                                  <Transition
                                    as={React.Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-xl bg-surfaceHighlight border border-white/10 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm backdrop-blur-xl">
                                      {subjects.map((subject, personIdx) => (
                                        <Listbox.Option
                                          key={personIdx}
                                          className={({ active }) =>
                                            `relative cursor-pointer select-none py-3 pl-10 pr-4 ${
                                              active ? 'bg-white/10 text-accent' : 'text-white'
                                            }`
                                          }
                                          value={subject}
                                        >
                                          {({ selected }) => (
                                            <>
                                              <span
                                                className={`block truncate ${
                                                  selected ? 'font-medium text-accent' : 'font-normal'
                                                }`}
                                              >
                                                {subject.name}
                                              </span>
                                              {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-accent">
                                                  <Check className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                              ) : null}
                                            </>
                                          )}
                                        </Listbox.Option>
                                      ))}
                                    </Listbox.Options>
                                  </Transition>
                                </div>
                              </Listbox>
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
