

import React, { useContext, useState, useEffect } from 'react';
import { SectionContext } from '../../context/SectionContext';
import MobileSideBar from './MobileSideBar';

const Navbar = () => {
  const { setVisibleSection } = useContext(SectionContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSectionClick = (section) => {
    setVisibleSection(section);
    setIsMenuOpen(false);
  };

  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 50 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  return (
    <nav className={`font-sans fixed top-10 w-full h-16 flex justify-center items-center bg-transparent z-[1000] 
     ${top ? ' backdrop-blur ' : 'bg-none'}`}>
      <div className="md:mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className=" flex  items-center justify-between w-full">
          <div className="absolute  left-8 flex  items-center sm:hidden">
            <button
              type="button"
              className="  inline-flex items-center justify-start p-2 text-orange-400 hover:text-orange-700 "
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                ''
              ) : (
                <svg className="block h-6 w-6 text-start" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:justify-between">
            <div className="hidden sm:flex sm:space-x-4 mx-auto ">
            {['Home', 'Services', 'Projects', 'Customers', 'Contact'].map((section, index) => (
                <button
                  key={section}
                  onClick={() => handleSectionClick(section)}
                  className="rounded-md px-3 py-2 text-3xl  text-orange-400 hover:text-orange-600 "
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="z-[1010] inset-0 w-full min-h-screen h-full transition-all fixed -top-10  bg-gray-900/50"
        ></div>
      )}
      {isMenuOpen &&
    <MobileSideBar setIsMenuOpen={setIsMenuOpen}  isMenuOpen={isMenuOpen}/>
      }

    </nav>
  );
};

export default Navbar;
