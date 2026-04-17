'use client'

import { useState } from 'react'

const posts = [
  { id: '01', category: 'JUNG', title: 'The Shadow and the Self', date: 'Apr 2026', readTime: '8 min', excerpt: 'What we refuse to acknowledge in ourselves does not disappear — it grows stronger in the dark.' },
  { id: '02', category: 'FREUD', title: 'Dreams as Encrypted Messages', date: 'Mar 2026', readTime: '6 min', excerpt: 'Every dream is a wish — distorted, disguised, but always reaching toward something the waking mind cannot hold.' },
  { id: '03', category: 'COGNITIVE', title: 'The Illusion of Rational Thought', date: 'Mar 2026', readTime: '10 min', excerpt: 'We believe we are thinking clearly. The research suggests otherwise — systematically, predictably otherwise.' },
  { id: '04', category: 'TRAUMA', title: 'The Body Keeps the Score', date: 'Feb 2026', readTime: '12 min', excerpt: 'Trauma is not stored in the mind alone. It lives in muscle, breath, and the startle response.' },
  { id: '05', category: 'EXISTENTIAL', title: 'Anxiety as a Teacher', date: 'Feb 2026', readTime: '7 min', excerpt: 'Kierkegaard called it the dizziness of freedom. We call it anxiety. Perhaps they are the same thing.' },
  { id: '06', category: 'ARCHETYPES', title: 'The Hero Must Die', date: 'Jan 2026', readTime: '9 min', excerpt: 'Every mythic hero descends before ascending. The pattern is not accidental — it is structural.' },
  { id: '07', category: 'JUNG', title: 'Synchronicity and Meaning', date: 'Jan 2026', readTime: '11 min', excerpt: 'Coincidence or connection? Jung believed the psyche and the world were more entangled than science admitted.' },
  { id: '08', category: 'COGNITIVE', title: 'Memory is a Fiction We Tell Ourselves', date: 'Dec 2025', readTime: '8 min', excerpt: 'Every time you recall a memory, you are reconstructing it — and changing it slightly in the process.' },
]

const categories = ['ALL', 'JUNG', 'FREUD', 'COGNITIVE', 'TRAUMA', 'EXISTENTIAL', 'ARCHETYPES']

export default function Archive() {
  const [active, setActive] = useState('ALL')
  const [hovered, setHovered] = useState<string | null>(null)
  const filtered = active === 'ALL' ? posts : posts.filter(p => p.category === active)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Space+Mono&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #f0f4f0; overflow-x: hidden; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .post-row { border-bottom: 1px solid rgba(74,122,74,0.1); padding: 2rem 0; cursor: pointer; transition: all 0.3s ease; display: grid; grid-template-columns: 80px 1fr auto; gap: 2rem; align-items: start; animation: fadeUp 0.6s ease both; }
        .post-row:hover { padding-left: 1rem; }
        .filter-btn { font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 0.2em; background: none; border: 1px solid rgba(74,122,74,0.15); color: rgba(26,42,26,0.4); padding: 0.5rem 1rem; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; }
        .filter-btn:hover { border-color: rgba(74,122,74,0.4); color: #4a7a4a; }
        .filter-btn.active { background: #4a7a4a; border-color: #4a7a4a; color: #f0f4f0; }
        @media (max-width: 768px) {
          .post-row { grid-template-columns: 60px 1fr !important; }
          .post-date { display: none; }
        }
      `}</style>

      <main style={{ background: '#f0f4f0', minHeight: '100vh', color: '#1a2a1a', fontFamily: "'Cormorant Garamond', Georgia, serif", padding: '8rem 3rem 4rem' }}>
        <div style={{ marginBottom: '4rem', animation: 'fadeUp 0.8s ease both' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.35em', color: '#4a7a4a', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#4a7a4a' }} />All Posts
          </p>
          <h1 style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', fontWeight: 300, lineHeight: 0.9, color: '#1a2a1a' }}>
            The <span style={{ fontStyle: 'italic', color: 'rgba(26,42,26,0.2)' }}>Archive</span>
          </h1>
          <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', fontStyle: 'italic', color: 'rgba(26,42,26,0.5)', maxWidth: '500px', lineHeight: 1.7 }}>
            A collected record of explorations into the human psyche.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {categories.map(cat => (
            <button key={cat} className={`filter-btn ${active === cat ? 'active' : ''}`} onClick={() => setActive(cat)}>{cat}</button>
          ))}
        </div>

        <div>
          {filtered.map((post, i) => (
            <div key={post.id} className="post-row" onMouseEnter={() => setHovered(post.id)} onMouseLeave={() => setHovered(null)} style={{ animationDelay: `${i * 0.07}s` }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(74,122,74,0.4)', letterSpacing: '0.15em', paddingTop: '4px' }}>
                {post.id}<br />
                <span style={{ color: hovered === post.id ? '#4a7a4a' : 'rgba(74,122,74,0.3)', transition: 'color 0.3s' }}>{post.category}</span>
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontWeight: 300, marginBottom: '0.6rem', color: hovered === post.id ? '#1a2a1a' : 'rgba(26,42,26,0.8)', transition: 'color 0.3s' }}>{post.title}</h2>
                <p style={{ fontSize: '0.95rem', fontStyle: 'italic', color: 'rgba(26,42,26,0.4)', lineHeight: 1.7 }}>{post.excerpt}</p>
              </div>
              <div className="post-date" style={{ textAlign: 'right', fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(26,42,26,0.25)', letterSpacing: '0.1em', whiteSpace: 'nowrap', paddingTop: '4px' }}>
                <div>{post.date}</div>
                <div style={{ marginTop: '4px' }}>{post.readTime} read</div>
                <div style={{ marginTop: '12px', color: hovered === post.id ? '#4a7a4a' : 'transparent', transition: 'color 0.3s' }}>→</div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer style={{ padding: '2rem 3rem', borderTop: '1px solid rgba(74,122,74,0.08)', display: 'flex', justifyContent: 'space-between', background: '#f0f4f0' }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(26,42,26,0.25)', letterSpacing: '0.15em' }}>© 2026 PSYKHE</span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(26,42,26,0.25)', letterSpacing: '0.15em' }}>YEREVAN · ARMENIA</span>
      </footer>
    </>
  )
}