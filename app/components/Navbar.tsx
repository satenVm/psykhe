'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Concepts', href: '/concepts' },
    { label: 'Theories', href: '/theories' },
    { label: 'Archive', href: '/archive' },
    { label: 'About', href: '/about' },
  ]

  return (
    <>
      <style>{`
        .desktop-nav { display: flex; gap: 2.5rem; }
        .hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
        .nav-link {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          color: rgba(26,42,26,0.45);
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }
        .nav-link:hover { color: #4a7a4a; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>

      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.5rem 2rem',
        borderBottom: `1px solid ${scrolled ? 'rgba(74,122,74,0.15)' : 'rgba(74,122,74,0.06)'}`,
        background: scrolled ? 'rgba(240,244,240,0.97)' : 'rgba(240,244,240,0.7)',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.4s ease',
      }}>
        <a href="/" style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', letterSpacing: '0.3em', color: '#4a7a4a', textDecoration: 'none' }}>PSYKHE</a>

        <div className="desktop-nav">
          {navLinks.map(item => (
            <a key={item.label} href={item.href} className="nav-link">{item.label}</a>
          ))}
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span style={{ display: 'block', width: '22px', height: '1px', background: '#4a7a4a', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(0px, 6px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '1px', background: '#4a7a4a', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '22px', height: '1px', background: '#4a7a4a', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(0px, -6px)' : 'none' }} />
        </button>

        {menuOpen && (
          <div style={{
            position: 'fixed', top: '60px', left: 0, right: 0,
            background: 'rgba(240,244,240,0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(74,122,74,0.1)',
            padding: '2rem',
            display: 'flex', flexDirection: 'column', gap: '1.5rem',
            zIndex: 99,
            animation: 'fadeIn 0.3s ease',
          }}>
            {navLinks.map(item => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', letterSpacing: '0.2em', color: 'rgba(26,42,26,0.7)', textDecoration: 'none', textTransform: 'uppercase' }}>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}