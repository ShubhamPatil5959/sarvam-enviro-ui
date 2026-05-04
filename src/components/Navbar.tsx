import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        borderBottom: scrolled ? 'none' : '1px solid rgba(255,255,255,0.2)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '800', fontSize: '1.5rem', zIndex: 200, letterSpacing: '-0.02em' }}>
            <img src="/SARVAM_LOGO.png" alt="Sarvam Enviro Logo" style={{ height: '65px', objectFit: 'contain', mixBlendMode: 'multiply' }} />
            <div>
              <span style={{ color: 'var(--color-text)' }}>Sarvam</span> <span style={{ color: 'var(--color-primary-dark)' }}>Enviro</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="nav-desktop" style={{ display: 'flex', gap: '2rem', fontWeight: '500' }}>
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="nav-link"
                  style={{
                    color: location.pathname === link.to ? 'var(--color-primary)' : undefined,
                    fontWeight: location.pathname === link.to ? '600' : undefined
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger button (mobile only) */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none', /* shown via CSS on mobile */
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text)',
              zIndex: 200,
              padding: '0.5rem',
            }}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          zIndex: 150,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.35s ease, transform 0.35s ease',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-20px)',
        }}
      >
        {links.map((link, i) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: '1.5rem',
              fontWeight: location.pathname === link.to ? '700' : '500',
              color: location.pathname === link.to ? 'var(--color-primary)' : 'var(--color-text)',
              transition: 'color 0.3s ease, transform 0.3s ease',
              transitionDelay: menuOpen ? `${i * 80}ms` : '0ms',
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: menuOpen ? 1 : 0,
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
