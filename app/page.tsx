'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const concepts = [
    { num: '01', tag: 'JUNG', title: 'The Shadow Self', desc: 'The parts we deny, suppress, and exile to the darkness of our unconscious.' },
    { num: '02', tag: 'FREUD', title: 'Dream Anatomy', desc: 'Dreams as the royal road to the unconscious — encrypted messages in symbols.' },
    { num: '03', tag: 'COGNITIVE', title: 'Cognitive Bias', desc: 'Systematic patterns in how the mind distorts and filters reality.' },
    { num: '04', tag: 'EXISTENTIAL', title: 'Meaning & Void', desc: 'Confronting the fundamental questions that define human existence.' },
    { num: '05', tag: 'TRAUMA', title: 'Memory & Wound', desc: 'How the past lives on in the body, behavior, and the stories we tell.' },
    { num: '06', tag: 'ARCHETYPES', title: 'Universal Patterns', desc: 'The mythic figures inhabiting the collective unconscious — hero, shadow, self.' },
  ]

  const navLinks = [
    { label: 'Concepts', href: '/concepts' },
    { label: 'Theories', href: '/theories' },
    { label: 'Archive', href: '/archive' },
    { label: 'About', href: '/about' },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Space+Mono&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #080808; overflow-x: hidden; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }

        @keyframes scrollLine {
          0% { transform: scaleX(0); transform-origin: left; }
          50% { transform: scaleX(1); transform-origin: left; }
          51% { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }

        .hero-eyebrow { animation: fadeUp 1s ease 0.1s both; }
        .hero-h1 { animation: fadeUp 1s ease 0.3s both; }
        .hero-sub { animation: fadeUp 1s ease 0.5s both; }
        .hero-cta { animation: fadeUp 1s ease 0.7s both; }

        .card-item {
          background: #080808;
          padding: 2.5rem 2rem;
          cursor: pointer;
          transition: background 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .card-item::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #b8a98c, transparent);
          transform: scaleX(0);
          transition: transform 0.5s ease;
        }

        .card-item:hover { background: #0f0f0f; }
        .card-item:hover::before { transform: scaleX(1); }

        .nav-link {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          color: rgba(232,226,213,0.45);
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }
        .nav-link:hover { color: #b8a98c; }

        .btn-primary {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #080808;
          background: #b8a98c;
          border: none;
          padding: 1rem 2.2rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-primary:hover {
          background: #e8e2d5;
          transform: translateY(-2px);
        }

        .scroll-indicator::after {
          content: '';
          display: inline-block;
          width: 60px;
          height: 1px;
          background: rgba(232,226,213,0.25);
          margin-left: 1rem;
          vertical-align: middle;
          animation: scrollLine 2s ease-in-out infinite;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          animation: pulse 6s ease-in-out infinite;
          pointer-events: none;
        }

        .desktop-nav { display: flex; gap: 2.5rem; }
        .hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(232,226,213,0.06);
        }

        .newsletter-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .hero-section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 8rem 3rem 4rem;
          position: relative;
          overflow: hidden;
        }

        .concepts-section { padding: 6rem 3rem; }
        .quote-section { padding: 8rem 3rem; text-align: center; border-top: 1px solid rgba(232,226,213,0.06); border-bottom: 1px solid rgba(232,226,213,0.06); position: relative; overflow: hidden; }
        .newsletter-section { padding: 6rem 3rem; }
        .footer-section { padding: 2rem 3rem; border-top: 1px solid rgba(232,226,213,0.06); display: flex; justify-content: space-between; align-items: center; }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }

          .hero-section { padding: 7rem 1.5rem 3rem; }
          .concepts-section { padding: 4rem 1.5rem; }
          .quote-section { padding: 4rem 1.5rem; }
          .newsletter-section { padding: 4rem 1.5rem; }
          .footer-section { padding: 1.5rem; flex-direction: column; gap: 0.5rem; text-align: center; }

          .cards-grid { grid-template-columns: 1fr !important; }

          .newsletter-row { flex-direction: column; align-items: flex-start; }

          .scroll-indicator { display: none; }
        }

        @media (max-width: 480px) {
          .hero-section { padding: 6rem 1.2rem 2rem; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.5rem 2rem',
        borderBottom: `1px solid ${scrolled ? 'rgba(232,226,213,0.1)' : 'rgba(232,226,213,0.04)'}`,
        background: scrolled ? 'rgba(8,8,8,0.95)' : 'rgba(8,8,8,0.5)',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.4s ease',
      }}>
        <a href="/" style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', letterSpacing: '0.3em', color: '#b8a98c', textDecoration: 'none' }}>PSYKHE</a>

        {/* Desktop */}
        <div className="desktop-nav">
          {navLinks.map(item => (
            <a key={item.label} href={item.href} className="nav-link">{item.label}</a>
          ))}
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span style={{ display: 'block', width: '22px', height: '1px', background: '#b8a98c', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(0px, 6px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '1px', background: '#b8a98c', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '22px', height: '1px', background: '#b8a98c', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(0px, -6px)' : 'none' }} />
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{
            position: 'fixed', top: '60px', left: 0, right: 0,
            background: 'rgba(8,8,8,0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(232,226,213,0.08)',
            padding: '2rem',
            display: 'flex', flexDirection: 'column', gap: '1.5rem',
            zIndex: 99,
            animation: 'fadeIn 0.3s ease',
          }}>
            {navLinks.map(item => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', letterSpacing: '0.2em', color: 'rgba(232,226,213,0.7)', textDecoration: 'none', textTransform: 'uppercase' }}>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main style={{ background: '#080808', color: '#e8e2d5', fontFamily: "'Cormorant Garamond', Georgia, serif" }}>

        {/* HERO */}
        <section className="hero-section">
          <div className="orb" style={{ width: '500px', height: '500px', background: 'rgba(84,62,98,0.15)', top: '10%', right: '5%' }} />
          <div className="orb" style={{ width: '300px', height: '300px', background: 'rgba(40,70,100,0.1)', bottom: '20%', left: '10%', animationDelay: '3s' }} />

          <div style={{ position: 'absolute', right: '3rem', top: '50%', transform: 'translateY(-50%)', fontSize: '30vw', fontWeight: 300, color: 'rgba(232,226,213,0.02)', fontFamily: 'Georgia, serif', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', animation: 'fadeIn 2s ease 0.5s both' }}>Ψ</div>

          <p className="hero-eyebrow" style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.35em', color: '#b8a98c', textTransform: 'uppercase', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#b8a98c' }} />
            Exploring the human mind
          </p>

          <h1 className="hero-h1" style={{ fontSize: 'clamp(3rem, 9vw, 9rem)', fontWeight: 300, lineHeight: 0.9, letterSpacing: '-0.02em' }}>
            The<br />
            <span style={{ fontStyle: 'italic', color: 'rgba(232,226,213,0.25)' }}>Unconscious</span><br />
            Speaks
          </h1>

          <p className="hero-sub" style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', fontStyle: 'italic', color: 'rgba(232,226,213,0.5)', maxWidth: '480px', lineHeight: 1.8, marginTop: '2rem' }}>
            A journey through the darker corridors of psychology — where shadow meets light, and the self confronts its own mystery.
          </p>

          <div className="hero-cta" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', marginTop: '3.5rem', flexWrap: 'wrap' }}>
            <button className="btn-primary">Begin Exploring →</button>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: 'rgba(232,226,213,0.3)', letterSpacing: '0.2em' }}>Watch the theory</span>
          </div>

          <div className="scroll-indicator" style={{ position: 'absolute', bottom: '3rem', left: '3rem', fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(232,226,213,0.2)', textTransform: 'uppercase' }}>
            Scroll to descend
          </div>
        </section>

        {/* CONCEPTS */}
        <section className="concepts-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', borderBottom: '1px solid rgba(232,226,213,0.08)', paddingBottom: '1.5rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300 }}>
              Core <span style={{ fontStyle: 'italic', color: 'rgba(232,226,213,0.3)' }}>Concepts</span>
            </h2>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(232,226,213,0.25)', letterSpacing: '0.2em' }}>06 TOPICS</span>
          </div>

          <div className="cards-grid">
            {concepts.map((card, i) => (
              <div
                key={card.num}
                className="card-item"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: hoveredCard === i ? '#b8a98c' : 'rgba(184,169,140,0.4)', letterSpacing: '0.2em', marginBottom: '1.5rem', transition: 'color 0.3s' }}>
                  {card.num} — {card.tag}
                </div>
                <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 300, marginBottom: '1rem', color: hoveredCard === i ? '#e8e2d5' : 'rgba(232,226,213,0.85)', transition: 'color 0.3s' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'rgba(232,226,213,0.35)', lineHeight: 1.8 }}>
                  {card.desc}
                </p>
                <div style={{ marginTop: '1.5rem', fontFamily: "'Space Mono', monospace", fontSize: '9px', color: hoveredCard === i ? '#b8a98c' : 'rgba(184,169,140,0.3)', letterSpacing: '0.2em', transition: 'color 0.3s, transform 0.3s', transform: hoveredCard === i ? 'translateX(6px)' : 'translateX(0)' }}>
                  Explore →
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* QUOTE */}
        <section className="quote-section">
          <div style={{ position: 'absolute', top: '1rem', left: '50%', transform: 'translateX(-50%)', fontSize: '10rem', color: 'rgba(184,169,140,0.04)', fontFamily: 'Georgia, serif', lineHeight: 1, pointerEvents: 'none' }}>"</div>
          <blockquote style={{ fontSize: 'clamp(1.1rem, 3vw, 2.2rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(232,226,213,0.7)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            Until you make the unconscious conscious, it will direct your life and you will call it fate.
          </blockquote>
          <cite style={{ display: 'block', marginTop: '2rem', fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(184,169,140,0.4)', fontStyle: 'normal' }}>
            — CARL GUSTAV JUNG
          </cite>
        </section>

        {/* NEWSLETTER */}
        <section className="newsletter-section">
          <div className="newsletter-row">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3rem)', fontWeight: 300, maxWidth: '400px' }}>
              Descend deeper.<br />
              <span style={{ fontStyle: 'italic', color: 'rgba(232,226,213,0.3)' }}>Weekly dispatches</span><br />
              from the psyche.
            </h2>
            <div style={{ display: 'flex', flex: 1, minWidth: '280px', maxWidth: '480px', borderBottom: '1px solid rgba(232,226,213,0.2)' }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{ flex: 1, background: 'none', border: 'none', color: '#e8e2d5', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', padding: '0.8rem 0', outline: 'none' }}
              />
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.8rem 1rem', color: '#b8a98c', fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Subscribe →
              </button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer-section">
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(232,226,213,0.2)', letterSpacing: '0.15em' }}>© 2026 PSYKHE — EXPLORATIONS IN MIND</span>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(232,226,213,0.2)', letterSpacing: '0.15em' }}>YEREVAN · ARMENIA</span>
        </footer>

      </main>
    </>
  )
}