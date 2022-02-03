import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [htmlVal, sethtmlVal] = useState('');
  const [cssVal, setcssVal] = useState('');
  const [jsVal, setjsVal] = useState('');

  return (
    <DataContext.Provider
      value={{
        htmlVal,
        sethtmlVal,
        cssVal,
        setcssVal,
        jsVal,
        setjsVal,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
