/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import { Navigate, Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Login from '@pages/Login';
import ListContacts from '@pages/ListContacts';
import Contact from '@pages/Contact';
import ListCampaigns from '@pages/ListCampaigns';
import Campaign from '@pages/Campaign';
import ListChannels from '@pages/ListChannels';
import Channel from '@pages/Channel';
import Reports from '@pages/Reports';
// eslint-disable-next-line import/extensions
import { GlobalContext } from '@/GlobalContext';

function AppRoutes() {
  const global = useContext(GlobalContext);

  return (
    <Router>
      <Routes>
        <Route index element={
          // TODO: this validation doesn't work
          global.userInfo ?
            <Navigate replace to="/contacts" /> :
            <Navigate replace to="/login" />
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<ListContacts />} />
        <Route path="/contacts/new" element={<Contact />} />
        <Route path="/campaigns" element={<ListCampaigns />} />
        <Route path="/campaigns/new" element={<Campaign />} />
        <Route path="/channels" element={<ListChannels />} />
        <Route path="/channels/new" element={<Channel />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
