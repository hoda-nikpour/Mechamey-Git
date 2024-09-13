

import React, { useContext } from 'react';
import { SectionContext } from '../../context/SectionContext';

export default function MobileSideBar({setIsMenuOpen, isMenuOpen}) {

    const { setVisibleSection } = useContext(SectionContext);
    const handleSectionClick = (section) => {
        setVisibleSection(section);
        setIsMenuOpen(false);
    };
    return (
        <div
            className={`z-[1010] ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                } font-sans ease-in-out duration-1000 fixed -top-10 left-0 bg-transparent transition-all h-screen min-h-screen  overflow-auto w-1/2   md:hidden`}
        ><button onClick={() => setIsMenuOpen(false)} className='px-3 py-2'>
                <svg className=" block h-6 w-6 bg-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg></button>
            <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                <div className="flex flex-col items-start">
                {['Home', 'Services', 'Projects', 'Customers', 'Contact'].map((section, index) => (
                        <button
                            key={section}
                            onClick={() => handleSectionClick(section)}
                            className="rounded-md px-3 py-2 text-orange-400 hover:text-orange-600 text-base "
                        >
                            {section}
                        </button>
                    ))}
                </div>
            </div>

        </div>

    )
}