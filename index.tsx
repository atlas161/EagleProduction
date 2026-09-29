import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@fontsource-variable/inter';
import './index.css';
import { CookieBanner } from './components/CookieBanner';
import { InternalLinkHandler, ScrollManager } from './components/RouterHelpers';

// Chaque page est chargée à la demande (code splitting) : l'accueil n'embarque plus les 20 autres pages.
const page = <K extends string>(loader: () => Promise<Record<K, React.ComponentType>>, name: K) =>
  lazy(() => loader().then((m) => ({ default: m[name] })));

const App = lazy(() => import('./App'));
const ConstructionTrackingPage = page(() => import('./components/ConstructionTrackingPage'), 'ConstructionTrackingPage');
const AboutPage = page(() => import('./components/AboutPage'), 'AboutPage');
const BlogListPage = page(() => import('./components/BlogListPage'), 'BlogListPage');
const BlogArticlePage = page(() => import('./components/BlogArticlePage'), 'BlogArticlePage');
const ContactPage = page(() => import('./components/ContactPage'), 'ContactPage');
const ZonePage = page(() => import('./components/ZonePage'), 'ZonePage');
const InspectionBuildingsPage = page(() => import('./components/InspectionBuildingsPage'), 'InspectionBuildingsPage');
const FaqPage = page(() => import('./components/FaqPage'), 'FaqPage');
const EagleDigitalPage = page(() => import('./components/EagleDigitalPage'), 'EagleDigitalPage');
const EagleProductionPage = page(() => import('./components/EagleProductionPage'), 'EagleProductionPage');
const CreationSiteWebPage = page(() => import('./components/CreationSiteWebPage'), 'CreationSiteWebPage');
const ReferencementSEOPage = page(() => import('./components/ReferencementSEOPage'), 'ReferencementSEOPage');
const HebergementMailPage = page(() => import('./components/HebergementMailPage'), 'HebergementMailPage');
const MaintenancePage = page(() => import('./components/MaintenancePage'), 'MaintenancePage');
const InspectionSuiviPage = page(() => import('./components/InspectionSuiviPage'), 'InspectionSuiviPage');
const ImmobilierDronePage = page(() => import('./components/ImmobilierDronePage'), 'ImmobilierDronePage');
const ReelsShortsPage = page(() => import('./components/ReelsShortsPage'), 'ReelsShortsPage');
const SportActionPage = page(() => import('./components/SportActionPage'), 'SportActionPage');
const PhotoVideoPage = page(() => import('./components/PhotoVideoPage'), 'PhotoVideoPage');
const EvenementielPage = page(() => import('./components/EvenementielPage'), 'EvenementielPage');
const NotFoundPage = page(() => import('./components/NotFoundPage'), 'NotFoundPage');

const RouteFallback: React.FC = () => (
  <div className="min-h-screen bg-background flex items-center justify-center" role="status" aria-label="Chargement">
    <div className="w-32 h-0.5 bg-white/10 rounded-full overflow-hidden">
      <div className="h-full w-1/2 bg-accent animate-loading" />
    </div>
  </div>
);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <InternalLinkHandler />
      <ScrollManager />
      <Suspense fallback={<RouteFallback />}>
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <CookieBanner />
    </BrowserRouter>
  </React.StrictMode>
);
