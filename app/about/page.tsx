'use client'

import { useState } from 'react'

const team = [
  {
    initials: 'SV',
    name: 'Satenik Vardazaryan',
    role: 'Founder & Lead Writer',
    bio: 'Frontend developer and design student based in Yerevan. Fascinated by the intersection of technology, aesthetics, and the human psyche.',
  },
  {
    initials: 'CJ',
    name: 'Carl Jung (Inspiration)',
    role: 'Analytical Psychology',
    bio: 'Swiss psychiatrist whose work on the unconscious, archetypes, and individuation forms the philosophical backbone of this project.',
  },
  {
    initials: 'SF',
    name: 'Sigmund Freud (Inspiration)',
    role: 'Psychoanalysis',
    bio: 'The father of psychoanalysis. His theories of the unconscious, dreams, and repression opened the door to the interior world.',
  },
]

const values = [
  { num: '01', title: 'Depth over simplicity', desc: 'We do not reduce the mind to bullet points. We sit with complexity.' },
  { num: '02', title: 'Beauty as access', desc: 'Aesthetic form is not decoration — it is a door. Beauty makes difficult ideas approachable.' },
  { num: '03', title: 'Shadow included', desc: 'We do not shy away from the dark. The shadow is where the most important material lives.' },
  { num: '04', title: 'No answers, only questions', desc: 'Psychology is not a solved problem. We hold questions open rather than closing them prematurely.' },
]

export default function About() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)

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

        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.08); }
        }

        .member-card {
          border: 1px solid rgba(232,226,213,0.07);
          padding: 2rem;
          transition: all 0.4s ease;
          cursor: default;
          animation: fadeUp 0.6s ease both;
        }

        .member-card:hover {
          border-color: rgba(184,169,140,0.2);
          background: rgba(184,169,140,0.03);
        }

        .value-row {
          display: grid;
          grid-template-columns: 60px 1fr;
          gap: 2rem;
          padding: 2rem 0;
          border-bottom: 1px solid rgba(232,226,213,0.07);
          transition: padding 0.3s ease;
          animation: fadeUp 0.6s ease both;
          cursor: default;
        }

        .value-row:hover {
          padding-left: 1rem;
        }

        .avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          font-weight: 700;
          background: rgba(184,169,140,0.1);
          color: #b8a98c;
          border: 1px solid rgba(184,169,140,0.2);
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .member-card:hover .avatar {
          background: rgba(184,169,140,0.18);
          border-color: rgba(184,169,140,0.4);
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          animation: pulse 7s ease-in-out infinite;
          pointer-events: none;
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

        .stat-card {
          border: 1px solid rgba(232,226,213,0.07);
          padding: 2rem;
          text-align: center;
          transition: all 0.4s ease;
          animation: fadeUp 0.6s ease both;
        }

        .stat-card:hover {
          border-color: rgba(184,169,140,0.2);
          background: rgba(184,169,140,0.03);
        }
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

      <main style={{ background: '#080808', minHeight: '100vh', color: '#e8e2d5', fontFamily: "'Cormorant Garamond', Georgia, serif" }}>

        {/* HERO */}
        <section style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8rem 3rem 4rem', position: 'relative', overflow: 'hidden' }}>
          <div className="orb" style={{ width: '400px', height: '400px', background: 'rgba(84,62,98,0.12)', top: '10%', right: '10%' }} />
          <div className="orb" style={{ width: '250px', height: '250px', background: 'rgba(40,70,100,0.1)', bottom: '10%', left: '5%', animationDelay: '3s' }} />

          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.35em', color: '#b8a98c', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', animation: 'fadeUp 0.8s ease 0.1s both' }}>
            <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#b8a98c' }} />
            About Psykhe
          </p>

          <h1 style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', fontWeight: 300, lineHeight: 0.9, animation: 'fadeUp 0.8s ease 0.25s both' }}>
            Why we <span style={{ fontStyle: 'italic', color: 'rgba(232,226,213,0.25)' }}>descend</span>
          </h1>

          <p style={{ marginTop: '2rem', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', fontStyle: 'italic', color: 'rgba(232,226,213,0.5)', maxWidth: '600px', lineHeight: 1.9, animation: 'fadeUp 0.8s ease 0.4s both' }}>
            Psykhe was born from a simple belief — that understanding the mind is not a clinical exercise but a deeply human one. We explore psychology through the lens of beauty, darkness, and honest inquiry.
          </p>

          <p style={{ marginTop: '1.5rem', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', fontStyle: 'italic', color: 'rgba(232,226,213,0.35)', maxWidth: '600px', lineHeight: 1.9, animation: 'fadeUp 0.8s ease 0.55s both' }}>
            This is not a self-help platform. It is a space for those willing to look at what they would rather not see — and find something valuable there.
          </p>
        </section>

        {/* STATS */}
        <section style={{ padding: '4rem 3rem', borderTop: '1px solid rgba(232,226,213,0.06)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(232,226,213,0.06)' }}>
            {[
              { num: '06', label: 'Core Concepts' },
              { num: '06', label: 'Theorists' },
              { num: '08', label: 'Archive Articles' },
              { num: '∞', label: 'Questions Remaining' },
            ].map((stat, i) => (
              <div key={i} className="stat-card" style={{ animationDelay: `${i * 0.1}s`, background: '#080808' }}>
                <div style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 300, color: '#b8a98c', lineHeight: 1 }}>{stat.num}</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(232,226,213,0.3)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '0.75rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* VALUES */}
        <section style={{ padding: '6rem 3rem' }}>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.35em', color: '#b8a98c', textTransform: 'uppercase', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#b8a98c' }} />
              Our Values
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300 }}>
              What we <span style={{ fontStyle: 'italic', color: 'rgba(232,226,213,0.25)' }}>believe</span>
            </h2>
          </div>

          <div>
            {values.map((v, i) => (
              <div
                key={v.num}
                className="value-row"
                onMouseEnter={() => setHoveredValue(i)}
                onMouseLeave={() => setHoveredValue(null)}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(184,169,140,0.4)', letterSpacing: '0.15em', paddingTop: '4px' }}>{v.num}</div>
                <div>
                  <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 300, marginBottom: '0.5rem', color: hoveredValue === i ? '#e8e2d5' : 'rgba(232,226,213,0.8)', transition: 'color 0.3s', fontStyle: 'italic' }}>
                    {v.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'rgba(232,226,213,0.4)', lineHeight: 1.8 }}>
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section style={{ padding: '6rem 3rem', borderTop: '1px solid rgba(232,226,213,0.06)' }}>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.35em', color: '#b8a98c', textTransform: 'uppercase', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#b8a98c' }} />
              The People
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300 }}>
              Minds <span style={{ fontStyle: 'italic', color: 'rgba(232,226,213,0.25)' }}>behind</span> the project
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {team.map((member, i) => (
              <div
                key={i}
                className="member-card"
                onMouseEnter={() => setHoveredMember(i)}
                onMouseLeave={() => setHoveredMember(null)}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div className="avatar">{member.initials}</div>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 300, color: hoveredMember === i ? '#e8e2d5' : 'rgba(232,226,213,0.85)', transition: 'color 0.3s' }}>{member.name}</div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', color: 'rgba(184,169,140,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '4px' }}>{member.role}</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'rgba(232,226,213,0.4)', lineHeight: 1.8 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING QUOTE */}
        <section style={{ padding: '6rem 3rem', textAlign: 'center', borderTop: '1px solid rgba(232,226,213,0.06)' }}>
          <blockquote style={{ fontSize: 'clamp(1.3rem, 3vw, 2.2rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(232,226,213,0.5)', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
            "Your vision will become clear only when you look into your own heart."
          </blockquote>
          <cite style={{ display: 'block', marginTop: '1.5rem', fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(184,169,140,0.35)', fontStyle: 'normal' }}>
            — C.G. JUNG
          </cite>
        </section>

      </main>

      <footer style={{ padding: '2rem 3rem', borderTop: '1px solid rgba(232,226,213,0.06)', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(232,226,213,0.2)', letterSpacing: '0.15em' }}>© 2026 PSYKHE</span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(232,226,213,0.2)', letterSpacing: '0.15em' }}>YEREVAN · ARMENIA</span>
      </footer>

    </>
  )
}