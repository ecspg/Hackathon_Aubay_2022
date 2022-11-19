import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export function GlobalStorage({ children }) {
  const [userInfo, setUserInfo] = useState(null);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <GlobalContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </GlobalContext.Provider>
  );
}
