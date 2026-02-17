import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const renderNavLinks = (isMobileMenu = false) => (
    <ul
      className={`list-none ${
        isMobileMenu ? 'flex flex-col items-start w-full' : 'hidden sm:flex flex-row'
      } gap-3 sm:gap-6`}
    >
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[16px] sm:text-[20px] font-medium cursor-pointer px-2 py-1 ${
            isMobileMenu ? 'w-full text-left border-b border-secondary last:border-b-0' : ''
          }`}
          onClick={() => {
            setActive(link.title);
            if (isMobileMenu) {
              setToggle(false);
            }
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          {/* Mobile hamburger and dropdown */}
          <div className="sm:hidden flex justify-start items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[18px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`absolute top-14 left-2 z-10 rounded-xl bg-primary border border-secondary shadow-lg px-3 py-2 ${
                toggle ? 'flex' : 'hidden'
              }`}
            >
              {renderNavLinks(true)}
            </div>
          </div>

          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-grey-500 text-[20px] font-bold cursor-pointer flex">
              DAN KANTER&nbsp;
            </p>
          </Link>
          {/* Desktop navigation */}
          {renderNavLinks(false)}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
