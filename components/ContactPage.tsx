import React from 'react';
import { useSeo } from '../hooks/useSeo';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Contact } from './Contact';

export const ContactPage: React.FC = () => {

  useSeo('/contact');

  return (
    <div className="min-h-screen bg-background text-textPrimary font-sans">
      <Navbar />
      <main id="main-content" className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
