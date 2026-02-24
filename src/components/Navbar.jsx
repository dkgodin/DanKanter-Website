import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const containerRef = useRef(null);
  const brandRef = useRef(null);
  const hamburgerRef = useRef(null);
  const measureNavRef = useRef(null);

  const renderNavLinks = (isMobileMenu = false) => (
    <ul
      className={`list-none ${
        isMobileMenu ? 'flex flex-col items-start w-full' : 'flex flex-row'
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

  useEffect(() => {
    const containerEl = containerRef.current;
    const brandEl = brandRef.current;
    const hamburgerEl = hamburgerRef.current;
    const measureNavEl = measureNavRef.current;

    if (!containerEl || !brandEl || !hamburgerEl || !measureNavEl) return;

    const updateCollapsed = () => {
      const desktop = window.matchMedia('(min-width: 640px)').matches;
      if (!desktop) {
        setCollapsed(false);
        return;
      }

      const containerWidth = containerEl.getBoundingClientRect().width;
      const brandWidth = brandEl.getBoundingClientRect().width;
      const hamburgerWidth = hamburgerEl.getBoundingClientRect().width;
      const navWidth = measureNavEl.getBoundingClientRect().width;

      // Allow for internal gaps/padding between items.
      const safetyGap = 24;
      const available = containerWidth - brandWidth - hamburgerWidth - safetyGap;
      const nextCollapsed = navWidth > Math.max(0, available);

      setCollapsed(nextCollapsed);
      if (!nextCollapsed) setToggle(false);
    };

    updateCollapsed();

    const ro = new ResizeObserver(() => updateCollapsed());
    ro.observe(containerEl);
    ro.observe(brandEl);
    ro.observe(hamburgerEl);
    ro.observe(measureNavEl);

    window.addEventListener('resize', updateCollapsed, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateCollapsed);
    };
  }, []);

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
      >
        <div ref={containerRef} className="w-full flex justify-between items-center max-w-7xl mx-auto">
          {/* Hamburger + dropdown (mobile, or desktop when collapsed) */}
          <div
            ref={hamburgerRef}
            className={`${collapsed ? 'hidden sm:flex' : 'sm:hidden'} justify-start items-center`}
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[18px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`absolute top-14 left-2 right-2 z-10 rounded-xl bg-primary border border-secondary shadow-lg px-3 py-2 max-h-[calc(100vh-3.5rem-0.5rem)] overflow-y-auto w-auto min-w-[200px] ${
                toggle ? 'flex' : 'hidden'
              }`}
            >
              {renderNavLinks(true)}
            </div>
          </div>

          <Link
            to="/"
            className="flex items-center gap-2"
            ref={brandRef}
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

          {/* Desktop navigation (shown only when not collapsed) */}
          <div className={`${collapsed ? 'hidden' : 'hidden sm:flex'} flex-row`}>
            {renderNavLinks(false)}
          </div>

          {/* Hidden measurement nav (desktop only) */}
          <div className="hidden sm:block fixed left-0 top-0 -z-10 pointer-events-none opacity-0">
            <div ref={measureNavRef}>{renderNavLinks(false)}</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
