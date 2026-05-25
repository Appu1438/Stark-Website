import  { useState, useEffect, useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.css';

const NAV_ITEMS = [
  { label: 'Home',         to: '/' },
  { label: 'About',        to: '/about' },
  { label: 'Services',     to: '/services' },
  { label: 'Drive With Us',to: '/driver' },
  { label: 'Download',     to: '/download' },
  { label: 'Blog',         to: '/blog' },
];

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);

  /* ── scroll listener ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* ── close on Escape ── */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar" aria-label="Main navigation">
        <div className="nav-inner">
          {/* Logo */}
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            Stark <span>Cabs</span>
          </Link>

          {/* Desktop links */}
          <ul className="nav-links" role="list">
            {NAV_ITEMS.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => isActive ? 'active' : undefined}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/contact" className="nav-cta">Contact</NavLink>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? ' active' : ''}`}
            id="hamburger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        id="mobileMenu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <button className="mobile-close" onClick={closeMenu} aria-label="Close menu">
          &#x2715;
        </button>

        {NAV_ITEMS.map(({ label, to }) => (
          <NavLink key={to} to={to} end={to === '/'} onClick={closeMenu}>
            {label}
          </NavLink>
        ))}
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
      </div>
    </>
  );
}