import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConstructionTrackingPage } from './components/ConstructionTrackingPage';
import { AboutPage } from './components/AboutPage';
import { BlogListPage } from './components/BlogListPage';
import { BlogArticlePage } from './components/BlogArticlePage';
import { ContactPage } from './components/ContactPage';
import { ZonePage } from './components/ZonePage';
import { InspectionBuildingsPage } from './components/InspectionBuildingsPage';
import { FaqPage } from './components/FaqPage';
import { EagleDigitalPage } from './components/EagleDigitalPage';
import { EagleProductionPage } from './components/EagleProductionPage';
import { CreationSiteWebPage } from './components/CreationSiteWebPage';
import { ReferencementSEOPage } from './components/ReferencementSEOPage';
import { HebergementMailPage } from './components/HebergementMailPage';
import { MaintenancePage } from './components/MaintenancePage';
import { InspectionSuiviPage } from './components/InspectionSuiviPage';
import { ImmobilierDronePage } from './components/ImmobilierDronePage';
import { ReelsShortsPage } from './components/ReelsShortsPage';
import { SportActionPage } from './components/SportActionPage';
import { PhotoVideoPage } from './components/PhotoVideoPage';
import { EvenementielPage } from './components/EvenementielPage';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chantier" element={<ConstructionTrackingPage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/zone" element={<ZonePage />} />
        <Route path="/inspection" element={<InspectionBuildingsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/eagle-digital" element={<EagleDigitalPage />} />
        <Route path="/eagle-production" element={<EagleProductionPage />} />
        <Route path="/inspection-suivi" element={<InspectionSuiviPage />} />
        <Route path="/immobilier-drone" element={<ImmobilierDronePage />} />
        <Route path="/reels-shorts" element={<ReelsShortsPage />} />
        <Route path="/sport-action" element={<SportActionPage />} />
        <Route path="/photo-video" element={<PhotoVideoPage />} />
        <Route path="/evenementiel" element={<EvenementielPage />} />
        <Route path="/eagle-digital/creation-site-web" element={<CreationSiteWebPage />} />
        <Route path="/eagle-digital/referencement-seo" element={<ReferencementSEOPage />} />
        <Route path="/eagle-digital/hebergement-mail" element={<HebergementMailPage />} />
        <Route path="/eagle-digital/maintenance" element={<MaintenancePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
