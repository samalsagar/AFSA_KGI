import React, { useState } from 'react';
import logo from '../../assets/AFSALOGO.png';
import './Header.css';

function Header() {
  // State to toggle menu on and off
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
            className={`${
              menuOpen ? 'block' : 'hidden'
            } lg:block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}>
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
              onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"></path>
              </svg>
            </button>

            <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
                <a href="">
                  <img src={logo} alt="logo" className="w-36" />
                </a>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <a href="" className="hover:text-custom-blue hover:font-extraboldS text-custom-blue block font-semibold text-[15px]">
                  Home
                </a>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <a href="" className="hover:text-custom-blue text-gray-500 block font-semibold text-[15px]">
                  About Us
                </a>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <a href="" className="hover:text-custom-blue text-gray-500 block font-semibold text-[15px]">
                  Our Team
                </a>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <a href="" className="hover:text-custom-blue text-gray-500 block font-semibold text-[15px]">
                  Gallery
                </a>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <a href="" className="hover:text-custom-blue text-gray-500 block font-semibold text-[15px]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="flex max-lg:ml-auto space-x-3">
            <button className="px-8 py-3 text-sm rounded-full font-bold text-white border-2 border-custom-blue bg-custom-blue transition-all ease-in-out duration-300 hover:bg-transparent hover:text-custom-blue">
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
