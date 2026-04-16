'use client'

import { useState } from 'react'

const concepts = [
  {
    num: '01',
    tag: 'JUNG',
    title: 'The Shadow Self',
    desc: 'The parts we deny, suppress, and exile to the darkness of our unconscious — only to meet them again in our reactions, projections, and dreams.',
    detail: 'Jung believed the shadow contains everything we consider unacceptable about ourselves. Integration, not elimination, is the path to wholeness.',
    color: 'rgba(84,62,98,0.15)',
  },
  {
    num: '02',
    tag: 'FREUD',
    title: 'Dream Anatomy',
    desc: 'Dreams as the royal road to the unconscious — encrypted messages from a self that speaks only in symbols, metaphors, and disguised wishes.',
    detail: 'Every dream element is a displacement or condensation of repressed material. The manifest content hides the latent content beneath.',
    color: 'rgba(40,70,100,0.15)',
  },
  {
    num: '03',
    tag: 'COGNITIVE',
    title: 'Cognitive Bias',
    desc: 'The invisible architecture of thought — systematic patterns in how the mind distorts, filters, and reconstructs reality to protect itself.',
    detail: 'Over 180 cognitive biases have been documented. They are not flaws — they are evolutionary shortcuts that sometimes lead us astray.',
    color: 'rgba(60,90,60,0.15)',
  },
  {
    num: '04',
    tag: 'EXISTENTIAL',
    title: 'Meaning & Void',
    desc: 'Confronting the fundamental questions that define human existence — freedom, responsibility, mortality, and the anxiety that follows awareness.',
    detail: 'Existential psychology does not offer comfort. It offers clarity — and from clarity, the possibility of authentic choice.',
    color: 'rgba(100,60,40,0.15)',
  },
  {
    num: '05',
    tag: 'TRAUMA',
    title: 'Memory & Wound',
    desc: 'How the past lives on in the body, in behavior, in the stories we tell ourselves — long after the original event has ended.',
    detail: 'Trauma is not what happened to you. Trauma is what happens inside you as a result of what happened to you.',
    color: 'rgba(80,40,60,0.15)',
  },
  {
    num: '06',
    tag: 'ARCHETYPES',
    title: 'Universal Patterns',
    desc: 'The mythic figures that inhabit the collective unconscious — hero, trickster, anima, shadow — appearing across all cultures and all time.',
    detail: 'Archetypes are not inherited memories. They are inherited potentials — tendencies to experience the world in certain universal ways.',
    color: 'rgba(60,60,100,0.15)',
  },
]

export default function Concepts() {
  const [selected, setSelected] = useState<number | null>(null)
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Space+Mono&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #080808; overflow-x: hidden; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes expandIn {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 200px; }
        }

        .concept-card {
          border: 1px solid rgba(232,226,213,0.07);
          padding: 2.5rem;
          cursor: pointer;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          animation: fadeUp 0.6s ease both;
        }

        .concept-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 2px;
          height: 0;
          background: #b8a98c;
          transition: height 0.4s ease;
        }

        .concept-card:hover::before,
        .concept-card.active::before {
          height: 100%;
        }

        .concept-card:hover,
        .concept-card.active {
          border-color: rgba(184,169,140,0.2);
          background: rgba(184,169,140,0.04);
        }

        .expand-content {
          overflow: hidden;
          transition: max-height 0.5s ease, opacity 0.4s ease;
          max-height: 0;
          opacity: 0;
        }

        .expand-content.open {
          max-height: 200px;
          opacity: 1;
        }

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
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.5rem 3rem',
        borderBottom: '1px solid rgba(232,226,213,0.07)',
        background: 'rgba(8,8,8,0.92)',
        backdropFilter: 'blur(12px)',
      }}>
        <a href="/" style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', letterSpacing: '0.3em', color: '#b8a98c', textDecoration: 'none' }}>PSYKHE</a>
        <div style={{ display: 'flex', gap: '2.5rem' }}>
          {[
            { label: 'Concepts', href: '/concepts' },
            { label: 'Theories', href: '/theories' },
            { label: 'Archive', href: '/archive' },
            { label: 'About', href: '/about' },
          ].map(item => (
            <a key={item.label} href={item.href} className="nav-link">{item.label}</a>
          ))}
        </div>
      </nav>

      <main style={{ background: '#080808', minHeight: '100vh', color: '#e8e2d5', fontFamily: "'Cormorant Garamond', Georgia, serif", padding: '8rem 3rem 4rem' }}>

        {/* HEADER */}
        <div style={{ marginBottom: '5rem', animation: 'fadeUp 0.8s ease both' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.35em', color: '#b8a98c', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#b8a98c' }} />
            06 Topics
          </p>
          <h1 style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', fontWeight: 300, lineHeight: 0.9 }}>
            Core <span style={{ fontStyle: 'italic', color: 'rgba(232,226,213,0.25)' }}>Concepts</span>
          </h1>
          <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', fontStyle: 'italic', color: 'rgba(232,226,213,0.4)', maxWidth: '500px', lineHeight: 1.7 }}>
            Six lenses through which to examine the architecture of the human mind. Click any concept to expand.
          </p>
        </div>

        {/* GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          {concepts.map((c, i) => (
            <div
              key={c.num}
              className={`concept-card ${selected === i ? 'active' : ''}`}
              onClick={() => setSelected(selected === i ? null : i)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                animationDelay: `${i * 0.1}s`,
                background: selected === i ? c.color : hovered === i ? 'rgba(184,169,140,0.03)' : '#080808',
              }}
            >
              {/* Card Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(184,169,140,0.5)', letterSpacing: '0.2em' }}>
                  {c.num} — {c.tag}
                </div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: selected === i ? '#b8a98c' : 'rgba(232,226,213,0.2)', transition: 'all 0.3s', transform: selected === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </div>
              </div>

              <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 300, marginBottom: '1rem', color: hovered === i || selected === i ? '#e8e2d5' : 'rgba(232,226,213,0.8)', transition: 'color 0.3s' }}>
                {c.title}
              </h2>

              <p style={{ fontSize: '0.95rem', fontStyle: 'italic', color: 'rgba(232,226,213,0.4)', lineHeight: 1.8 }}>
                {c.desc}
              </p>

              {/* Expanded Detail */}
              <div className={`expand-content ${selected === i ? 'open' : ''}`}>
                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(184,169,140,0.15)' }}>
                  <p style={{ fontSize: '1rem', color: 'rgba(232,226,213,0.6)', lineHeight: 1.8, fontStyle: 'italic' }}>
                    {c.detail}
                  </p>
                  <div style={{ marginTop: '1rem', fontFamily: "'Space Mono', monospace", fontSize: '9px', color: '#b8a98c', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                    Read more →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM QUOTE */}
        <div style={{ marginTop: '6rem', paddingTop: '3rem', borderTop: '1px solid rgba(232,226,213,0.06)', textAlign: 'center' }}>
          <p style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontStyle: 'italic', color: 'rgba(232,226,213,0.3)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            "The privilege of a lifetime is to become who you truly are."
          </p>
          <cite style={{ display: 'block', marginTop: '1rem', fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(184,169,140,0.3)', fontStyle: 'normal' }}>
            — C.G. JUNG
          </cite>
        </div>

      </main>

      <footer style={{ padding: '2rem 3rem', borderTop: '1px solid rgba(232,226,213,0.06)', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(232,226,213,0.2)', letterSpacing: '0.15em' }}>© 2026 PSYKHE</span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(232,226,213,0.2)', letterSpacing: '0.15em' }}>YEREVAN · ARMENIA</span>
      </footer>
    </>
  )
}