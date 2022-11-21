/* eslint-disable import/no-unresolved */
import React from 'react';

import './App.css';
import AppRoutes from "./routes";
import { GlobalStorage } from './GlobalContext';

function App() {
  return (
    <GlobalStorage>
      <div className="App">
        <AppRoutes />
      </div>
    </GlobalStorage>
  );
}

export default App;
