'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'story', label: 'Story' },
  { id: 'frameworks', label: 'Thinking' },
  { id: 'ventures', label: 'Ventures' },
  { id: 'writing', label: 'Writing' },
  { id: 'connect', label: 'Connect' },
];

export default function PortfolioShell({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('pf-theme');
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('pf-theme', next);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = navItems.map(item => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <div className="portfolio-root" style={{ background: 'var(--bg-void)', minHeight: '100vh' }}>
      {/* Film Grain Overlay */}
      <div className="film-grain" />

      {/* Scroll Indicator */}
      <div
        className="scroll-indicator"
        style={{ opacity: scrolled ? 0 : 0.6 }}
      />

      {/* Sidebar — Desktop */}
      <aside className="pf-sidebar">
        <div
          className="pf-sidebar-logo"
          onClick={() => scrollTo('hero')}
          style={{ cursor: 'pointer' }}
        >
          LH
        </div>

        <nav className="pf-sidebar-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={activeSection === item.id ? 'active' : ''}
              style={{ cursor: 'pointer' }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="pf-sidebar-social">
          <button
            onClick={toggleTheme}
            className="pf-theme-toggle"
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <a href="https://linkedin.com/in/larnelhight" target="_blank" rel="noopener noreferrer">
            LI
          </a>
          <a href="mailto:contact@example.com">
            EM
          </a>
        </div>
      </aside>

      {/* Hamburger — Mobile */}
      <button
        className="pf-hamburger"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <div style={{
          width: 18,
          height: 14,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <span style={{
            display: 'block',
            width: '100%',
            height: 1,
            background: mobileOpen ? 'var(--accent-primary)' : 'var(--text-muted)',
            transition: 'all 0.3s ease',
            transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
          }} />
          <span style={{
            display: 'block',
            width: '100%',
            height: 1,
            background: mobileOpen ? 'transparent' : 'var(--text-muted)',
            transition: 'all 0.3s ease',
          }} />
          <span style={{
            display: 'block',
            width: '100%',
            height: 1,
            background: mobileOpen ? 'var(--accent-primary)' : 'var(--text-muted)',
            transition: 'all 0.3s ease',
            transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
          }} />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="pf-mobile-menu">
          {navItems.map((item) => (
            <a
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={activeSection === item.id ? 'active' : ''}
              style={{ cursor: 'pointer' }}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="pf-theme-toggle"
            aria-label="Toggle theme"
            style={{ marginTop: 16 }}
          >
            {theme === 'dark' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="pf-main">
        {children}
      </main>
    </div>
  );
}
