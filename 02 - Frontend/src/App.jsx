/* eslint-disable import/no-unresolved */
import React from 'react';

import './App.css';
import Header from '@components/Header/Header';
import AppRoutes from "./routes";
import { GlobalStorage } from './GlobalContext';

function App() {
  return (
    <GlobalStorage>
      <div className="App">
        <Header />
        <AppRoutes />
      </div>
    </GlobalStorage>
  );
}

export default App;
