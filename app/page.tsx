'use client'

import { useState, useEffect } from 'react'
import { useLang } from './context/LangContext'

const t = {
  en: {
    eyebrow: 'Exploring the human mind',
    line1: 'The', line2: 'Unconscious', line3: 'Speaks',
    sub: 'A journey through the darker corridors of psychology — where shadow meets light.',
    cta: 'Begin Exploring',
    scroll: 'Scroll to descend',
    coreTitle: 'Core', coreItalic: 'Concepts',
    count: '06 TOPICS',
    quote: 'Until you make the unconscious conscious, it will direct your life and you will call it fate.',
    newsletterTitle: 'Descend deeper.',
    newsletterItalic: 'Weekly dispatches',
    newsletterSub: 'from the psyche.',
    subscribe: 'Subscribe',
    footerLeft: '© 2026 PSYKHE — EXPLORATIONS IN MIND',
    footerRight: 'YEREVAN · ARMENIA',
    concepts: [
      { num: '01', tag: 'JUNG', title: 'The Shadow Self', desc: 'The parts we deny, suppress, and exile to the darkness of our unconscious.' },
      { num: '02', tag: 'FREUD', title: 'Dream Anatomy', desc: 'Dreams as the royal road to the unconscious — encrypted messages in symbols.' },
      { num: '03', tag: 'COGNITIVE', title: 'Cognitive Bias', desc: 'Systematic patterns in how the mind distorts and filters reality.' },
      { num: '04', tag: 'EXISTENTIAL', title: 'Meaning & Void', desc: 'Confronting the fundamental questions that define human existence.' },
      { num: '05', tag: 'TRAUMA', title: 'Memory & Wound', desc: 'How the past lives on in the body, behavior, and the stories we tell.' },
      { num: '06', tag: 'ARCHETYPES', title: 'Universal Patterns', desc: 'The mythic figures inhabiting the collective unconscious — hero, shadow, self.' },
    ],
  },
  hy: {
    eyebrow: 'Ուսումնասիրելով մարդկային միտքը',
    line1: 'Անգիտակցականը', line2: 'Խոսում', line3: 'է',
    sub: 'Ճանապարհորդություն հոգեբանության մութ միջանցքներով — որտեղ ստվերը հանդիպում է լույսին։',
    cta: 'Սկսել ուսումնասիրել',
    scroll: 'Ոլորիր ներքև',
    coreTitle: 'Հիմնական', coreItalic: 'Հասկացություններ',
    count: '06 ԹԵՄԱ',
    quote: 'Մինչև անգիտակցականը գիտակցական չդարձնես, այն կղեկավարի քո կյանքը, և դու դա կանվանես ճակատագիր։',
    newsletterTitle: 'Ավելի խորը իջիր։',
    newsletterItalic: 'Շաբաթական նամակներ',
    newsletterSub: 'հոգուց։',
    subscribe: 'Բաժանորդագրվել',
    footerLeft: '© 2026 PSYKHE — ՈՒՍՈՒՄՆԱՍԻՐՈՒԹՅՈՒՆՆԵՐ',
    footerRight: 'ԵՐԵՎԱՆ · ՀԱՅԱՍՏԱՆ',
    concepts: [
      { num: '01', tag: 'ՅՈՒՆԳ', title: 'Ստվերային ես', desc: 'Այն մասերը, որոնք մենք ժխտում և추ielemy ենք մեր անգիտակցականի խավարը։' },
      { num: '02', tag: 'ՖՐԵՅԴ', title: 'Երազների անատոմիա', desc: 'Երազները՝ որպես ճանապարհ դեպի անգիտակցական — ծածկագրված հաղորդագրություններ։' },
      { num: '03', tag: 'ԿՈԳՆԻՏԻՎ', title: 'Կոգնիտիվ կողմնակալություն', desc: 'Մտածողության համակարգային ձևեր, որոնց ժամանակ միտքը աղավաղում է իրականությունը։' },
      { num: '04', tag: 'ԷԿЗԻՍՏ.', title: 'Իմաստ և Դատարկություն', desc: 'Մարդկային գոյությունը սահմանող հիմնական հարցերին առերեսվելը։' },
      { num: '05', tag: 'ՏՐԱՎՄԱ', title: 'Հիշողություն և Վերք', desc: 'Ինչպես անցյալը շարունակում է ապրել մարմնում, վարքում և պատմություններում։' },
      { num: '06', tag: 'ԱՐՔԵՏԻՊ', title: 'Համընդհանուր Ձևեր', desc: 'Կոլեկտիվ անգիտակցականում բնակվող առասպելական կերպարները։' },
    ],
  },
  ru: {
    eyebrow: 'Исследуя человеческий разум',
    line1: 'Бессознательное', line2: 'говорит', line3: '',
    sub: 'Путешествие по тёмным коридорам психологии — где тень встречает свет.',
    cta: 'Начать исследование',
    scroll: 'Прокрутите вниз',
    coreTitle: 'Основные', coreItalic: 'Концепции',
    count: '06 ТЕМ',
    quote: 'Пока вы не сделаете бессознательное сознательным, оно будет управлять вашей жизнью, и вы будете называть это судьбой.',
    newsletterTitle: 'Погрузитесь глубже.',
    newsletterItalic: 'Еженедельные письма',
    newsletterSub: 'из психики.',
    subscribe: 'Подписаться',
    footerLeft: '© 2026 PSYKHE — ИССЛЕДОВАНИЯ РАЗУМА',
    footerRight: 'ЕРЕВАН · АРМЕНИЯ',
    concepts: [
      { num: '01', tag: 'ЮНГ', title: 'Теневое Я', desc: 'Части, которые мы отрицаем и изгоняем в темноту нашего бессознательного.' },
      { num: '02', tag: 'ФРЕЙД', title: 'Анатомия сновидений', desc: 'Сны как королевская дорога к бессознательному — зашифрованные послания в символах.' },
      { num: '03', tag: 'КОГНИТ.', title: 'Когнитивные искажения', desc: 'Систематические паттерны того, как разум искажает и фильтрует реальность.' },
      { num: '04', tag: 'ЭКЗИСТ.', title: 'Смысл и Пустота', desc: 'Confronting the fundamental questions that define human existence.' },
      { num: '05', tag: 'ТРАВМА', title: 'Память и Рана', desc: 'Как прошлое продолжает жить в теле, поведении и историях, которые мы рассказываем.' },
      { num: '06', tag: 'АРХЕТИП', title: 'Универсальные Паттерны', desc: 'Мифические фигуры коллективного бессознательного — герой, тень, самость.' },
    ],
  },
}

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const { lang } = useLang()
  const content = t[lang]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Space+Mono&display=swap');
        @keyframes fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pulse { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.05); } }
        @keyframes scrollLine { 0% { transform: scaleX(0); transform-origin: left; } 50% { transform: scaleX(1); transform-origin: left; } 51% { transform: scaleX(1); transform-origin: right; } 100% { transform: scaleX(0); transform-origin: right; } }
        .hero-eyebrow { animation: fadeUp 1s ease 0.1s both; }
        .hero-h1 { animation: fadeUp 1s ease 0.3s both; }
        .hero-sub { animation: fadeUp 1s ease 0.5s both; }
        .hero-cta { animation: fadeUp 1s ease 0.7s both; }
        .card-item { background: #f0f4f0; padding: 2.5rem 2rem; cursor: pointer; transition: background 0.4s ease; position: relative; overflow: hidden; }
        .card-item::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, #4a7a4a, transparent); transform: scaleX(0); transition: transform 0.5s ease; }
        .card-item:hover { background: #e8efe8; }
        .card-item:hover::before { transform: scaleX(1); }
        .btn-primary { font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: #f0f4f0; background: #4a7a4a; border: none; padding: 1rem 2.2rem; cursor: pointer; transition: all 0.3s ease; }
        .btn-primary:hover { background: #3a6a3a; transform: translateY(-2px); }
        .scroll-indicator::after { content: ''; display: inline-block; width: 60px; height: 1px; background: rgba(26,42,26,0.2); margin-left: 1rem; vertical-align: middle; animation: scrollLine 2s ease-in-out infinite; }
        .orb { position: absolute; border-radius: 50%; filter: blur(80px); animation: pulse 6s ease-in-out infinite; pointer-events: none; }
        .cards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(74,122,74,0.1); }
        @media (max-width: 768px) {
          .cards-grid { grid-template-columns: 1fr !important; }
          .newsletter-row { flex-direction: column; align-items: flex-start; }
          .scroll-indicator { display: none; }
          .hero-section { padding: 7rem 1.5rem 3rem !important; }
          .concepts-section { padding: 4rem 1.5rem !important; }
          .quote-section { padding: 4rem 1.5rem !important; }
          .newsletter-section { padding: 4rem 1.5rem !important; }
          .footer-section { flex-direction: column; gap: 0.5rem; text-align: center; padding: 1.5rem !important; }
        }
      `}</style>

      <main style={{ background: '#f0f4f0', color: '#1a2a1a', fontFamily: "'Cormorant Garamond', Georgia, serif" }}>

        {/* HERO */}
        <section className="hero-section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8rem 3rem 4rem', position: 'relative', overflow: 'hidden' }}>
          <div className="orb" style={{ width: '500px', height: '500px', background: 'rgba(74,122,74,0.08)', top: '10%', right: '5%' }} />
          <div className="orb" style={{ width: '300px', height: '300px', background: 'rgba(74,122,74,0.06)', bottom: '20%', left: '10%', animationDelay: '3s' }} />
          <div style={{ position: 'absolute', right: '3rem', top: '50%', transform: 'translateY(-50%)', fontSize: '30vw', fontWeight: 300, color: 'rgba(74,122,74,0.04)', fontFamily: 'Georgia, serif', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>Ψ</div>

          <p className="hero-eyebrow" style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.35em', color: '#4a7a4a', textTransform: 'uppercase', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ display: 'inline-block', width: '40px', height: '1px', background: '#4a7a4a' }} />
            {content.eyebrow}
          </p>

          <h1 className="hero-h1" style={{ fontSize: 'clamp(3rem, 9vw, 9rem)', fontWeight: 300, lineHeight: 0.9, letterSpacing: '-0.02em', color: '#1a2a1a' }}>
            {content.line1}<br />
            <span style={{ fontStyle: 'italic', color: 'rgba(26,42,26,0.2)' }}>{content.line2}</span><br />
            {content.line3}
          </h1>

          <p className="hero-sub" style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', fontStyle: 'italic', color: 'rgba(26,42,26,0.5)', maxWidth: '480px', lineHeight: 1.8, marginTop: '2rem' }}>
            {content.sub}
          </p>

          <div className="hero-cta" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', marginTop: '3.5rem', flexWrap: 'wrap' }}>
            <button className="btn-primary">{content.cta} →</button>
          </div>

          <div className="scroll-indicator" style={{ position: 'absolute', bottom: '3rem', left: '3rem', fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(26,42,26,0.2)', textTransform: 'uppercase' }}>
            {content.scroll}
          </div>
        </section>

        {/* CONCEPTS */}
        <section className="concepts-section" style={{ padding: '6rem 3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', borderBottom: '1px solid rgba(74,122,74,0.12)', paddingBottom: '1.5rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: '#1a2a1a' }}>
              {content.coreTitle} <span style={{ fontStyle: 'italic', color: 'rgba(26,42,26,0.25)' }}>{content.coreItalic}</span>
            </h2>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(26,42,26,0.25)', letterSpacing: '0.2em' }}>{content.count}</span>
          </div>

          <div className="cards-grid">
            {content.concepts.map((card, i) => (
              <div key={card.num} className="card-item" onMouseEnter={() => setHoveredCard(i)} onMouseLeave={() => setHoveredCard(null)}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: hoveredCard === i ? '#4a7a4a' : 'rgba(74,122,74,0.5)', letterSpacing: '0.2em', marginBottom: '1.5rem', transition: 'color 0.3s' }}>
                  {card.num} — {card.tag}
                </div>
                <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 300, marginBottom: '1rem', color: hoveredCard === i ? '#1a2a1a' : 'rgba(26,42,26,0.8)', transition: 'color 0.3s' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'rgba(26,42,26,0.4)', lineHeight: 1.8 }}>{card.desc}</p>
                <div style={{ marginTop: '1.5rem', fontFamily: "'Space Mono', monospace", fontSize: '9px', color: hoveredCard === i ? '#4a7a4a' : 'rgba(74,122,74,0.3)', letterSpacing: '0.2em', transition: 'color 0.3s, transform 0.3s', transform: hoveredCard === i ? 'translateX(6px)' : 'translateX(0)' }}>
                  →
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* QUOTE */}
        <section className="quote-section" style={{ padding: '8rem 3rem', textAlign: 'center', borderTop: '1px solid rgba(74,122,74,0.08)', borderBottom: '1px solid rgba(74,122,74,0.08)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '1rem', left: '50%', transform: 'translateX(-50%)', fontSize: '10rem', color: 'rgba(74,122,74,0.05)', fontFamily: 'Georgia, serif', lineHeight: 1, pointerEvents: 'none' }}>"</div>
          <blockquote style={{ fontSize: 'clamp(1.1rem, 3vw, 2.2rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(26,42,26,0.65)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            {content.quote}
          </blockquote>
          <cite style={{ display: 'block', marginTop: '2rem', fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(74,122,74,0.5)', fontStyle: 'normal' }}>
            — CARL GUSTAV JUNG
          </cite>
        </section>

        {/* NEWSLETTER */}
        <section className="newsletter-section" style={{ padding: '6rem 3rem' }}>
          <div className="newsletter-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3rem)', fontWeight: 300, maxWidth: '400px', color: '#1a2a1a' }}>
              {content.newsletterTitle}<br />
              <span style={{ fontStyle: 'italic', color: 'rgba(26,42,26,0.25)' }}>{content.newsletterItalic}</span><br />
              {content.newsletterSub}
            </h2>
            <div style={{ display: 'flex', flex: 1, minWidth: '280px', maxWidth: '480px', borderBottom: '1px solid rgba(74,122,74,0.25)' }}>
              <input type="email" placeholder="your@email.com" style={{ flex: 1, background: 'none', border: 'none', color: '#1a2a1a', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', padding: '0.8rem 0', outline: 'none' }} />
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.8rem 1rem', color: '#4a7a4a', fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                {content.subscribe} →
              </button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer-section" style={{ padding: '2rem 3rem', borderTop: '1px solid rgba(74,122,74,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(26,42,26,0.25)', letterSpacing: '0.15em' }}>{content.footerLeft}</span>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(26,42,26,0.25)', letterSpacing: '0.15em' }}>{content.footerRight}</span>
        </footer>

      </main>
    </>
  )
}