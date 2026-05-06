import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '◈',
    skills: [
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'React.js', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    title: 'Backend',
    icon: '◉',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 83 },
      { name: 'Java', level: 75 },
      { name: 'Python', level: 78 },
    ],
  },
  {
    title: 'Database',
    icon: '◎',
    skills: [
      { name: 'MongoDB', level: 82 },
      { name: 'SQL / MySQL', level: 80 },
    ],
  },
  {
    title: 'AI & ML',
    icon: '⬡',
    skills: [
      { name: 'ChatGPT / OpenAI API', level: 88 },
      { name: 'Claude / Anthropic API', level: 85 },
      { name: 'LangChain', level: 75 },
      { name: 'Hugging Face', level: 72 },
    ],
  },
];

const techBadges = [
  'React.js', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'Java',
  'Python', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git',
  'REST API', 'Bootstrap', 'VS Code',
];

const aiTools = [
  { name: 'ChatGPT', label: 'GPT-4o', color: '#10a37f' },
  { name: 'Claude', label: 'Anthropic', color: '#d97706' },
  { name: 'Gemini', label: 'Google AI', color: '#4285f4' },
  { name: 'Cursor AI', label: 'AI Editor', color: '#3498db' },

];

/* ── Styles injected once ── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=Barlow:wght@300;400;600;700&display=swap');

  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes scanline {
    0%   { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }
  @keyframes flicker {
    0%,100% { opacity: 1; }
    92%      { opacity: 1; }
    93%      { opacity: 0.6; }
    94%      { opacity: 1; }
    96%      { opacity: 0.8; }
    97%      { opacity: 1; }
  }
  @keyframes glitch {
    0%,100% { clip-path: none; transform: none; }
    20%      { clip-path: inset(30% 0 50% 0); transform: translate(-4px,0); }
    40%      { clip-path: inset(60% 0 10% 0); transform: translate(4px,0); }
    60%      { clip-path: none; transform: none; }
  }
  @keyframes pulseRing {
    0%   { box-shadow: 0 0 0 0 rgba(245,197,24,0.4); }
    70%  { box-shadow: 0 0 0 10px rgba(245,197,24,0); }
    100% { box-shadow: 0 0 0 0 rgba(245,197,24,0); }
  }
  @keyframes barShimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes countUp {
    from { opacity: 0; transform: scale(0.7); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes tickerScroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes dotBlink {
    0%,100% { opacity: 1; }
    50%      { opacity: 0; }
  }

  .skills-card {
    background: rgba(18,18,18,0.9);
    border: 1px solid rgba(245,197,24,0.12);
    border-radius: 2px;
    position: relative;
    overflow: hidden;
    transition: border-color 0.3s ease, transform 0.3s ease;
  }
  .skills-card::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(245,197,24,0.03) 0%, transparent 60%);
    pointer-events: none;
  }
  .skills-card:hover {
    border-color: rgba(245,197,24,0.4);
    transform: translateY(-3px);
  }

  .bar-fill {
    background: linear-gradient(90deg, #c8a800, #F5C518, #ffe566, #F5C518, #c8a800);
    background-size: 300% 100%;
    animation: barShimmer 3s linear infinite;
  }

  .badge-skill {
    background: rgba(245,197,24,0.07);
    border: 1px solid rgba(245,197,24,0.2);
    color: #ccc;
    font-family: 'Space Mono', monospace;
    font-size: 0.72rem;
    padding: 6px 14px;
    border-radius: 2px;
    cursor: default;
    transition: all 0.25s ease;
    letter-spacing: 0.5px;
  }
  .badge-skill:hover {
    background: rgba(245,197,24,0.18);
    color: #F5C518;
    border-color: rgba(245,197,24,0.5);
    transform: translateY(-2px);
  }

  .ai-tool-card {
    background: rgba(14,14,14,0.95);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 2px;
    padding: 18px 20px;
    display: flex;
    align-items: center;
    gap: 14px;
    transition: all 0.3s ease;
    cursor: default;
    position: relative;
    overflow: hidden;
  }
  .ai-tool-card::after {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 2px;
    background: var(--accent);
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.3s ease;
  }
  .ai-tool-card:hover::after { transform: scaleY(1); }
  .ai-tool-card:hover {
    background: rgba(24,24,24,0.98);
    border-color: rgba(255,255,255,0.12);
    transform: translateX(4px);
  }

  .ticker-wrap {
    overflow: hidden;
    mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
  }
  .ticker-inner {
    display: flex;
    width: max-content;
    animation: tickerScroll 28s linear infinite;
    gap: 40px;
  }
  .ticker-inner:hover { animation-play-state: paused; }

  .section-label {
    font-family: 'Space Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 4px;
    color: #F5C518;
    text-transform: uppercase;
  }
  .section-title {
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 2px;
    line-height: 0.95;
    color: #E8E8E8;
    animation: flicker 8s infinite;
  }

  .corner-bracket::before,
  .corner-bracket::after {
    content: '';
    position: absolute;
    width: 12px; height: 12px;
    border-color: rgba(245,197,24,0.4);
    border-style: solid;
  }
  .corner-bracket::before { top: 8px; left: 8px; border-width: 1px 0 0 1px; }
  .corner-bracket::after  { bottom: 8px; right: 8px; border-width: 0 1px 1px 0; }
`;

function StyleTag() {
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}

function SkillBar({ name, level, animate, delay = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;
    const t = setTimeout(() => {
      let start = 0;
      const step = () => {
        start += 2;
        if (start <= level) { setCount(start); requestAnimationFrame(step); }
        else setCount(level);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(t);
  }, [animate, level, delay]);

  const css = `
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes barShimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
.skills-card {
  background: #121212;
  border: 1px solid rgba(245,197,24,0.15);
  transition: 0.3s;
}
.skills-card:hover {
  transform: translateY(-4px);
}
.bar-fill {
  background: linear-gradient(90deg,#c8a800,#F5C518,#ffe566,#F5C518,#c8a800);
  background-size: 300% 100%;
  animation: barShimmer 3s linear infinite;
}
.badge {
  padding:6px 12px;
  border:1px solid #333;
  font-size:12px;
  color:#aaa;
}
@media(max-width:768px){
  .skills-card:hover{ transform:none; }
}
`;
  return (
    <div style={{ marginBottom: 22 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, alignItems: 'center' }}>
        <span style={{ fontFamily: 'Barlow, sans-serif', color: '#D0D0D0', fontSize: '0.88rem', fontWeight: 600, letterSpacing: 0.3 }}>{name}</span>
        <span style={{
          fontFamily: 'Space Mono, monospace', color: '#F5C518',
          fontSize: '0.72rem', minWidth: 36, textAlign: 'right',
          animation: animate ? `countUp 0.3s ease ${delay}ms both` : 'none',
        }}>{count}%</span>
      </div>
      <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 1, overflow: 'hidden', position: 'relative' }}>
        {/* track marks */}
        {[25,50,75].map(p => (
          <div key={p} style={{
            position: 'absolute', top: 0, bottom: 0, left: `${p}%`,
            width: 1, background: 'rgba(255,255,255,0.08)', zIndex: 1,
          }} />
        ))}
        <div className="bar-fill" style={{
          height: '100%', borderRadius: 1,
          width: animate ? `${level}%` : '0%',
          transition: `width 1.4s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
          boxShadow: '0 0 12px rgba(245,197,24,0.5)',
        }} />
      </div>
    </div>
  );
}

function CategoryCard({ cat, animate, cardIndex }) {
  return (
    <div
      className="skills-card corner-bracket"
      style={{
        padding: '28px 28px 24px',
        animation: `fadeSlideUp 0.6s ease ${cardIndex * 120}ms both`,
      }}
    >
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
        <span style={{
          fontFamily: 'Space Mono, monospace', color: '#F5C518',
          fontSize: '1.1rem', lineHeight: 1,
          animation: 'pulseRing 2.5s infinite',
          display: 'inline-block',
        }}>{cat.icon}</span>
        <h3 style={{
          fontFamily: 'Bebas Neue, sans-serif', color: '#F5C518',
          fontSize: '1.4rem', letterSpacing: 2, margin: 0,
        }}>{cat.title}</h3>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(245,197,24,0.3), transparent)', marginLeft: 8 }} />
      </div>
      {cat.skills.map((skill, i) => (
        <SkillBar key={skill.name} {...skill} animate={animate} delay={cardIndex * 120 + i * 100} />
      ))}
    </div>
  );
}

function AiToolCard({ tool, index }) {
  const dot = { backgroundColor: tool.color };
  return (
    <div
      className="ai-tool-card"
      style={{ '--accent': tool.color, animation: `fadeSlideUp 0.5s ease ${index * 60}ms both` }}
    >
      {/* live dot */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', ...dot, boxShadow: `0 0 8px ${tool.color}` }} />
        <div style={{
          position: 'absolute', inset: -3, borderRadius: '50%',
          border: `1px solid ${tool.color}`,
          animation: 'pulseRing 2s infinite',
          opacity: 0.6,
        }} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 700, color: '#E8E8E8', fontSize: '0.88rem' }}>{tool.name}</div>
        <div style={{ fontFamily: 'Space Mono, monospace', color: '#555', fontSize: '0.65rem', marginTop: 2 }}>{tool.label}</div>
      </div>
      <div style={{
        fontFamily: 'Space Mono, monospace', fontSize: '0.6rem',
        color: tool.color, opacity: 0.7, letterSpacing: 1,
      }}>
        ACTIVE
        <span style={{ display: 'inline-block', width: 4, height: 4, borderRadius: '50%', background: tool.color, marginLeft: 4, animation: 'dotBlink 1.2s infinite' }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const tickerItems = [...techBadges, ...techBadges]; // doubled for seamless loop

  return (
    <>
      <StyleTag />
      <section
        id="skills"
        ref={sectionRef}
        style={{
          padding: '110px 24px 80px',
          background: '#0a0a0a',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle grid bg */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'linear-gradient(rgba(245,197,24,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />
        {/* Scanline sweep */}
        <div style={{
          position: 'absolute', left: 0, right: 0, height: 120, zIndex: 0, pointerEvents: 'none',
          background: 'linear-gradient(180deg, transparent, rgba(245,197,24,0.025), transparent)',
          animation: 'scanline 6s linear infinite',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* ── Section Header ── */}
          <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 1, background: '#F5C518' }} />
            <span className="section-label">Technical Arsenal</span>
          </div>
          <h2 className="section-title" style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', marginBottom: 64 }}>
            Skills &amp;<br /><span style={{ color: '#F5C518', WebkitTextStroke: '1px #F5C518', WebkitTextFillColor: 'transparent' }}>Expertise</span>
          </h2>

          {/* ── Skill Bar Grid ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
            marginBottom: 64,
          }}>
            {skillCategories.map((cat, i) => (
              <CategoryCard key={cat.title} cat={cat} animate={animated} cardIndex={i} />
            ))}
          </div>

          {/* ── AI Tools Section ── */}
          <div style={{ marginBottom: 64 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <span className="section-label" style={{ fontSize: '0.65rem' }}>AI Tools &amp; Models</span>
              <div style={{ flex: 1, height: 1, background: 'rgba(245,197,24,0.12)' }} />
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem', color: '#444', letterSpacing: 2 }}>
                {aiTools.length} INTEGRATED
              </span>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 10,
            }}>
              {aiTools.map((tool, i) => (
                <AiToolCard key={tool.name} tool={tool} index={i} />
              ))}
            </div>
          </div>

          {/* ── Tech Badges Ticker ── */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span className="section-label" style={{ fontSize: '0.65rem' }}>Technologies &amp; Tools</span>
            </div>
            <div className="ticker-wrap">
              <div className="ticker-inner">
                {tickerItems.map((tech, i) => (
                  <span key={i} className="badge-skill">{tech}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}