/* eslint-disable import/no-unresolved */
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Login from '@pages/Login';

function AppRoutes() {
  return <Router>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </Router>
}

export default AppRoutes;