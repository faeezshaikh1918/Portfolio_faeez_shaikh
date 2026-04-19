import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    color: '#F5C518',
    skills: [
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'React.js', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    title: 'Backend',
    color: '#F5C518',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 83 },
      { name: 'Java', level: 75 },
      { name: 'Python', level: 78 },
    ],
  },
  {
    title: 'Database',
    color: '#F5C518',
    skills: [
      { name: 'MongoDB', level: 82 },
      { name: 'SQL / MySQL', level: 80 },
      { name: 'PostgreSQL', level: 72 },
      { name: 'Redis', level: 60 },
    ],
  },
];

const techBadges = [
  'React.js', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'Java',
  'Python', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git',
  'REST API', 'GraphQL', 'Docker', 'AWS', 'Figma', 'VS Code',
];

function SkillBar({ name, level, animate }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ color: '#E8E8E8', fontSize: '0.9rem', fontWeight: 500 }}>{name}</span>
        <span style={{ fontFamily: 'Space Mono, monospace', color: '#F5C518', fontSize: '0.8rem' }}>{level}%</span>
      </div>
      <div style={{ height: 6, background: '#222', borderRadius: 3, overflow: 'hidden' }}>
        <div style={{
          height: '100%', background: 'linear-gradient(90deg, #F5C518, #ffdd57)',
          borderRadius: 3, width: animate ? `${level}%` : '0%',
          transition: 'width 1.5s ease',
          boxShadow: '0 0 10px rgba(245,197,24,0.3)',
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setAnimated(true);
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} style={{ padding: '100px 24px', background: '#0f0f0f', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Label */}
        <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 2, background: '#F5C518' }} />
          <span style={{ fontFamily: 'Space Mono, monospace', color: '#F5C518', fontSize: '0.8rem', letterSpacing: 3 }}>MY SKILLS</span>
        </div>

        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 60, color: '#E8E8E8', lineHeight: 1.1 }}>
          Technical<br /><span style={{ color: '#F5C518' }}>Expertise</span>
        </h2>

        {/* Skill Categories Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, marginBottom: 60 }}>
          {skillCategories.map(cat => (
            <div key={cat.title} className="card-dark" style={{ padding: '32px' }}>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#F5C518', marginBottom: 28, fontSize: '1.1rem', letterSpacing: 1 }}>
                {cat.title}
              </h3>
              {cat.skills.map(skill => (
                <SkillBar key={skill.name} {...skill} animate={animated} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech Badges */}
        <div>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#888', fontSize: '0.9rem', letterSpacing: 2, marginBottom: 24, textTransform: 'uppercase' }}>
            Technologies & Tools
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {techBadges.map(tech => (
              <span key={tech} className="badge" style={{ fontSize: '0.8rem', padding: '8px 16px', cursor: 'default' }}
                onMouseEnter={e => { e.target.style.background = 'rgba(245,197,24,0.2)'; e.target.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.target.style.background = 'rgba(245,197,24,0.1)'; e.target.style.transform = 'translateY(0)'; }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
