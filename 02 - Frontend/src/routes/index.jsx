/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import { Navigate, Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Login from '@pages/Login';
import ListContacts from '@pages/ListContacts/ListContacts';
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
      </Routes>
    </Router>
  );
}

export default AppRoutes;