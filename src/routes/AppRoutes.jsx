import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import InvitationPage from '../pages/InvitationPage';
import SportsRulesPage from '../pages/SportsRulesPage';
import RegistrationPage from '../pages/RegistrationPage';
import ContingentsPage from '../pages/ContingentsPage';
import LucknowGuidePage from '../pages/LucknowGuidePage';
import CommitteePage from '../pages/CommitteePage';
import NotFoundPage from '../pages/NotFoundPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="invitation" element={<InvitationPage />} />
        <Route path="sports-rules" element={<SportsRulesPage />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="contingents" element={<ContingentsPage />} />
        <Route path="lucknow-guide" element={<LucknowGuidePage />} />
        <Route path="committee" element={<CommitteePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
