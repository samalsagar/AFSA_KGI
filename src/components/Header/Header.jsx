import React from 'react';
import logo from '../../assets/AFSALOGO.png';
import './Header.css';
import { useState } from 'react';

function Header({
  heroRef,
  aboutUsRef,
  ourTeamRef,
  ourWorkRef,
  galleryRef,
  contactusRef,
  donateRef
}) {
  // State to toggle menu on and off
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Scroll to the respective section and close the menu
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // Close the menu after scrolling to the section
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between w-full">
          <a href="">
            <img src={logo} alt="logo" className="w-36" />
          </a>

          {/* Menu */}
          <div
            id="collapseMenu"
            className={`${menuOpen ? 'block' : 'hidden'} lg:block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
          >
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
              onClick={toggleMenu}
            >
              {/* Close icon (X) when the menu is open */}
              {menuOpen ? (
                <svg
                  className="w-7 h-7 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                // Hamburger icon when the menu is closed
                <svg
                  className="w-7 h-7 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>

            <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <button
                  onClick={() => scrollToSection(heroRef)}
                  className="text-custom-blue block font-semibold text-[15px]"
                >
                  Home
                </button>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <button
                  onClick={() => scrollToSection(aboutUsRef)}
                  className="text-gray-500 block font-semibold text-[15px]"
                >
                  About Us
                </button>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <button
                  onClick={() => scrollToSection(ourTeamRef)}
                  className="text-gray-500 block font-semibold text-[15px]"
                >
                  Our Team
                </button>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <button
                  onClick={() => scrollToSection(ourWorkRef)}
                  className="text-gray-500 block font-semibold text-[15px]"
                >
                  Our Work
                </button>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <button
                  onClick={() => scrollToSection(galleryRef)}
                  className="text-gray-500 block font-semibold text-[15px]"
                >
                  Gallery
                </button>
              </li>

              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <button
                  onClick={() => scrollToSection(contactusRef)}
                  className="text-gray-500 block font-semibold text-[15px]"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div className="flex max-lg:ml-auto space-x-3">
            <button 
             onClick={() => scrollToSection(donateRef)}
            className="px-8 py-3 text-sm rounded-full font-bold text-white border-2 border-custom-blue bg-custom-blue transition-all ease-in-out duration-300 hover:bg-transparent hover:text-custom-blue">
              Donate
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          {!menuOpen && (
            <div className="lg:hidden flex items-center ml-4"> {/* Only show hamburger if menu is closed */}
              <button className="text-black" onClick={toggleMenu}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
