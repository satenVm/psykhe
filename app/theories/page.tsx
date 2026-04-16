'use client'

import { useState } from 'react'

const theories = [
  {
    id: '01',
    school: 'PSYCHOANALYSIS',
    theorist: 'Sigmund Freud',
    years: '1856 — 1939',
    title: 'The Structure of the Psyche',
    short: 'Id, Ego, and Superego — three forces in constant negotiation beneath the surface of consciousness.',
    body: 'Freud proposed that the mind is divided into three systems: the Id (primitive drives and desires), the Ego (the rational mediator), and the Superego (internalized moral authority). Mental suffering arises from the conflict between them — when the Ego cannot satisfy the Id without violating the Superego.',
    quote: 'The ego is not master in its own house.',
    tags: ['Unconscious', 'Defense Mechanisms', 'Repression'],
  },
  {
    id: '02',
    school: 'ANALYTICAL PSYCHOLOGY',
    theorist: 'Carl Gustav Jung',
    years: '1875 — 1961',
    title: 'The Collective Unconscious',
    short: 'Beneath the personal unconscious lies a deeper layer shared by all humanity — populated by archetypes.',
    body: 'Jung expanded Freud\'s model to include a collective unconscious — a inherited reservoir of human experience expressed through universal symbols, myths, and patterns. The archetypes (Shadow, Anima, Self) are the organizing principles of this deeper layer. Individuation — becoming fully oneself — requires integrating them.',
    quote: 'Who looks outside dreams. Who looks inside awakens.',
    tags: ['Archetypes', 'Individuation', 'Shadow'],
  },
  {
    id: '03',
    school: 'EXISTENTIAL',
    theorist: 'Viktor Frankl',
    years: '1905 — 1997',
    title: 'Logotherapy & Meaning',
    short: 'The primary human drive is not pleasure or power, but the search for meaning — even in suffering.',
    body: 'Frankl developed logotherapy from his experience in Nazi concentration camps. He observed that those who survived were often those who found meaning in their suffering. Unlike Freud\'s will to pleasure or Adler\'s will to power, Frankl posited a will to meaning as the deepest human motivation.',
    quote: 'He who has a why to live can bear almost any how.',
    tags: ['Meaning', 'Freedom', 'Responsibility'],
  },
  {
    id: '04',
    school: 'HUMANISTIC',
    theorist: 'Abraham Maslow',
    years: '1908 — 1970',
    title: 'Hierarchy of Needs',
    short: 'Human motivation moves through layers — from survival to self-actualization at the peak of existence.',
    body: 'Maslow arranged human needs in a pyramid: physiological, safety, belonging, esteem, and finally self-actualization. He was more interested in what made people thrive than what made them suffer — a radical departure from pathology-focused psychology. Peak experiences, flow states, and transcendence were his territory.',
    quote: 'What a man can be, he must be.',
    tags: ['Self-Actualization', 'Peak Experience', 'Growth'],
  },
  {
    id: '05',
    school: 'COGNITIVE',
    theorist: 'Aaron Beck',
    years: '1921 — 2021',
    title: 'Cognitive Distortions',
    short: 'Depression and anxiety are maintained by systematic errors in thinking — patterns that can be identified and changed.',
    body: 'Beck discovered that his depressed patients had automatic negative thoughts running beneath their awareness. These thoughts followed predictable distortion patterns: catastrophizing, black-and-white thinking, mind reading, personalization. Identifying and challenging these patterns became the foundation of Cognitive Behavioral Therapy.',
    quote: 'The thought is not the fact.',
    tags: ['CBT', 'Automatic Thoughts', 'Schema'],
  },
  {
    id: '06',
    school: 'SOMATIC',
    theorist: 'Bessel van der Kolk',
    years: '1943 — present',
    title: 'The Body Keeps the Score',
    short: 'Trauma is not only a psychological wound — it is encoded in the nervous system, muscles, and breath.',
    body: 'Van der Kolk\'s research showed that traumatic memories are stored differently from ordinary memories — not as narratives but as sensory fragments, body sensations, and emotional states. Traditional talk therapy cannot reach them. Healing requires working with the body: movement, breath, touch, and presence.',
    quote: 'Trauma is not what happens to you, but what happens inside you.',
    tags: ['Trauma', 'Nervous System', 'Somatic Therapy'],
  },
]

export default function Theories() {
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

        .theory-row {
          border-bottom: 1px solid rgba(232,226,213,0.07);
          cursor: pointer;
          transition: all 0.4s ease;
          animation: fadeUp 0.6s ease both;
          overflow: hidden;
        }

        .theory-header {
          display: grid;
          grid-template-columns: 120px 1fr auto;
          gap: 2rem;
          align-items: center;
          padding: 2rem 0;
          transition: padding 0.3s ease;
        }

        .theory-row:hover .theory-header {
          padding-left: 1rem;
        }

        .theory-body {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.6s ease, opacity 0.4s ease, padding 0.4s ease;
          padding: 0 0 0 140px;
        }

        .theory-body.open {
          max-height: 400px;
          opacity: 1;
          padding: 0 0 2.5rem 140px;
        }

        .tag {
          font-family: 'Space Mono', monospace;
          font-size: 8px;
          letter-spacing: 0.15em;
          color: rgba(184,169,140,0.5);
          border: 1px solid rgba(184,169,140,0.2);
          padding: 0.3rem 0.7rem;
          text-transform: uppercase;
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



      <main style={{ background: '#080808', minHeight: '100vh', color: '#e8e2d5', fontFamily: "'Cormorant Garamond', Georgia, serif", padding: '8rem 3rem 4rem' }}>

        {/* HEADER */}
        <div style={{ marginBottom: '5rem', animation: 'fadeUp 0.8s ease both' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.35em', color: '#b8a98c', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#b8a98c' }} />
            06 Theorists
          </p>
          <h1 style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', fontWeight: 300, lineHeight: 0.9 }}>
            Psychological <span style={{ fontStyle: 'italic', color: 'rgba(232,226,213,0.25)' }}>Theories</span>
          </h1>
          <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', fontStyle: 'italic', color: 'rgba(232,226,213,0.4)', maxWidth: '500px', lineHeight: 1.7 }}>
            The thinkers who mapped the terrain of the human mind. Click any theory to expand.
          </p>
        </div>

        {/* THEORIES LIST */}
        <div>
          {theories.map((t, i) => (
            <div
              key={t.id}
              className="theory-row"
              onClick={() => setSelected(selected === i ? null : i)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="theory-header">
                {/* Left — number + school */}
                <div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(184,169,140,0.4)', letterSpacing: '0.15em', marginBottom: '4px' }}>{t.id}</div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', color: hovered === i || selected === i ? '#b8a98c' : 'rgba(184,169,140,0.3)', letterSpacing: '0.12em', transition: 'color 0.3s' }}>{t.school}</div>
                </div>

                {/* Center — theorist + title */}
                <div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: 'rgba(232,226,213,0.3)', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
                    {t.theorist} <span style={{ color: 'rgba(232,226,213,0.15)' }}>{t.years}</span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 300, color: hovered === i || selected === i ? '#e8e2d5' : 'rgba(232,226,213,0.75)', transition: 'color 0.3s' }}>
                    {t.title}
                  </h2>
                  <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'rgba(232,226,213,0.35)', marginTop: '0.4rem', lineHeight: 1.6 }}>
                    {t.short}
                  </p>
                </div>

                {/* Right — toggle */}
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '16px', color: selected === i ? '#b8a98c' : 'rgba(232,226,213,0.2)', transition: 'all 0.3s', transform: selected === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </div>
              </div>

              {/* Expanded body */}
              <div className={`theory-body ${selected === i ? 'open' : ''}`}>
                <div style={{ borderLeft: '1px solid rgba(184,169,140,0.2)', paddingLeft: '2rem' }}>
                  <p style={{ fontSize: '1rem', color: 'rgba(232,226,213,0.6)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                    {t.body}
                  </p>
                  <blockquote style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'rgba(232,226,213,0.4)', marginBottom: '1.5rem', borderLeft: 'none' }}>
                    "{t.quote}"
                  </blockquote>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {t.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>

      <footer style={{ padding: '2rem 3rem', borderTop: '1px solid rgba(232,226,213,0.06)', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(232,226,213,0.2)', letterSpacing: '0.15em' }}>© 2026 PSYKHE</span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(232,226,213,0.2)', letterSpacing: '0.15em' }}>YEREVAN · ARMENIA</span>
      </footer>
    </>
  )
}