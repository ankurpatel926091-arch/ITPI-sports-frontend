import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import FloatingPills from './components/common/FloatingPills';
import ScrollToTop from './components/common/ScrollToTop';
import ScrollToTopBar from './components/common/ScrollToTopBar';

// Pages
import HomePage from './pages/HomePage';
import InvitationPage from './pages/InvitationPage';
import SportsRulesPage from './pages/SportsRulesPage';
import LucknowGuidePage from './pages/LucknowGuidePage';
import ContingentsPage from './pages/ContingentsPage';
import TimelinePage from './pages/TimelinePage';
import RegistrationPage from './pages/RegistrationPage';
import GuidelinesPage from './pages/GuidelinesPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-900">
        {/* Persistent Sticky Navbar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/invitation" element={<InvitationPage />} />
            <Route path="/sports" element={<SportsRulesPage />} />
            <Route path="/experience-lucknow" element={<LucknowGuidePage />} />
            <Route path="/experience_lucknow" element={<LucknowGuidePage />} />
            <Route path="/contingents" element={<ContingentsPage />} />
            <Route path="/state-contingents" element={<ContingentsPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/guidelines" element={<GuidelinesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/photos" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Persistent Footer */}
        <Footer />

        {/* Floating Side Action Pills */}
        <FloatingPills />

        {/* Floating Scroll To Top Bar & Progress Button */}
        <ScrollToTopBar />
      </div>
    </BrowserRouter>
  );
}
