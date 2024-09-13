
import React, { createContext, useState } from 'react';

export const SectionContext = createContext();

const SectionProvider = ({ children }) => {
  const [visibleSection, setVisibleSection] = useState('Home');

  return (
    <SectionContext.Provider value={{ visibleSection, setVisibleSection }}>
    <div className="h-screen font-sans bg-[url('https://i.postimg.cc/wMsSYKzc/Dark-Blue-Wallpaper-High-Quality-Free-Download.jpg')] bg-no-repeat bg-center bg-cover">
      
      {children}</div>  
    </SectionContext.Provider>
  );
};

export default SectionProvider;

