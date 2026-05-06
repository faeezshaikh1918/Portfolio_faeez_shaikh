import { Mail, Phone, MapPin, GitFork, Link, Link2, ArrowUpRight } from 'lucide-react';

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=Barlow:wght@300;400;600;700&display=swap');

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeLeft {
    from { opacity: 0; transform: translateX(-24px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes lineExpand {
    from { transform: scaleX(0); transform-origin: left; }
    to   { transform: scaleX(1); transform-origin: left; }
  }
  @keyframes scanline {
    0%   { transform: translateY(-100%); }
    100% { transform: translateY(200%); }
  }
  @keyframes pulseGlow {
    0%,100% { opacity: 0.4; transform: scale(1); }
    50%      { opacity: 0.9; transform: scale(1.15); }
  }
  @keyframes floatY {
    0%,100% { transform: translateY(0); }
    50%     { transform: translateY(-10px); }
  }
  @keyframes flicker {
    0%,100% { opacity: 1; }
    91%     { opacity: 1; }
    92%     { opacity: 0.4; }
    93%     { opacity: 1; }
    96%     { opacity: 0.7; }
    97%     { opacity: 1; }
  }
  @keyframes borderTrace {
    0%   { clip-path: inset(0 100% 100% 0); }
    25%  { clip-path: inset(0 0 100% 0); }
    50%  { clip-path: inset(0 0 0 0); }
    75%  { clip-path: inset(0 0 0 100%); }
    100% { clip-path: inset(0 100% 0 0); }
  }
  @keyframes orbitSpin {
    from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
  }
  @keyframes countUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes dashMove {
    to { stroke-dashoffset: -20; }
  }

  .contact-card {
    position: relative;
    background: rgba(14,14,14,0.95);
    border: 1px solid rgba(245,197,24,0.1);
    border-radius: 2px;
    padding: 28px 32px;
    display: flex;
    align-items: center;
    gap: 22px;
    overflow: hidden;
    transition: border-color 0.35s ease, transform 0.35s ease;
    animation: fadeLeft 0.6s ease both;
    cursor: default;
  }
  .contact-card::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    background: #F5C518;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.35s ease;
  }
  .contact-card:hover::before { transform: scaleY(1); }
  .contact-card:hover {
    border-color: rgba(245,197,24,0.3);
    transform: translateX(6px);
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 20px;
    background: rgba(14,14,14,0.8);
    border: 1px solid rgba(245,197,24,0.1);
    border-radius: 2px;
    color: #888;
    text-decoration: none;
    font-family: 'Space Mono', monospace;
    font-size: 0.72rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  .social-link::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(245,197,24,0.05);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
  .social-link:hover::after { transform: translateX(0); }
  .social-link:hover {
    color: #F5C518;
    border-color: rgba(245,197,24,0.4);
    transform: translateY(-2px);
  }

  .cta-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 18px 36px;
    background: #F5C518;
    color: #000;
    text-decoration: none;
    font-family: 'Space Mono', monospace;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    border-radius: 2px;
    transition: all 0.25s ease;
    position: relative;
    overflow: hidden;
  }
  .cta-link::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.12);
    transform: translateX(-100%);
    transition: transform 0.25s ease;
  }
  .cta-link:hover::before { transform: translateX(0); }
  .cta-link:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(245,197,24,0.35); }

  .secondary-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 18px 36px;
    background: transparent;
    color: #888;
    text-decoration: none;
    font-family: 'Space Mono', monospace;
    font-size: 0.78rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 2px;
    transition: all 0.25s ease;
  }
  .secondary-link:hover {
    color: #F5C518;
    border-color: rgba(245,197,24,0.4);
    background: rgba(245,197,24,0.04);
    transform: translateY(-3px);
  }

  .stat-item {
    animation: fadeUp 0.6s ease both;
  }

  @media (max-width: 900px) {
    .contact-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
    .stat-row { grid-template-columns: 1fr 1fr !important; }
  }
  @media (max-width: 540px) {
    .stat-row { grid-template-columns: 1fr !important; }
    .cta-row { flex-direction: column !important; }
  }
`;

export default function Contact() {
  const contacts = [
    { icon: Mail,   label: 'Email',    value: 'faizshaikh91883@gmail.com', href: 'mailto:faizshaikh91883@gmail.com', delay: '0.1s' },
    { icon: Phone,  label: 'Phone',    value: '+91 9316187694',            href: 'tel:+919316187694',               delay: '0.22s' },
    { icon: MapPin, label: 'Location', value: 'Bardoli, Gujarat',          href: null,                               delay: '0.34s' },
  ];

  const socials = [
    { icon: GitFork, label: 'GitHub',   href: 'https://github.com/faeezshaikh1918/' },
    { icon: Link,    label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Link2,   label: 'Twitter',  href: 'https://twitter.com' },
  ];

  const stats = [
    { value: '5+',   label: 'Projects\nCompleted' },
    { value: '2Y',   label: 'Experience\nin Dev' },
    { value: '100%', label: 'Client\nSatisfaction' },
    { value: '15+',  label: 'Tech\nMastered' },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <section id="contact" style={{ padding: '120px 24px 80px', background: '#080808', position: 'relative', overflow: 'hidden' }}>

        {/* Grid bg */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(245,197,24,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />

        {/* Scanline */}
        <div style={{
          position: 'absolute', left: 0, right: 0, height: 100,
          background: 'linear-gradient(180deg, transparent, rgba(245,197,24,0.018), transparent)',
          animation: 'scanline 8s linear infinite', pointerEvents: 'none',
        }} />

        {/* Ambient glows */}
        <div style={{ position: 'absolute', bottom: '0%', right: '-8%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,197,24,0.05), transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '20%', left: '-5%', width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,197,24,0.03), transparent 65%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* ── Section header ── */}
          <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12, animation: 'fadeLeft 0.5s ease 0.05s both' }}>
            <div style={{ width: 36, height: 1, background: '#F5C518' }} />
            <span style={{ fontFamily: 'Space Mono, monospace', color: '#F5C518', fontSize: '0.68rem', letterSpacing: 4, textTransform: 'uppercase' }}>Get In Touch</span>
          </div>

          <h2 style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(4rem, 9vw, 7.5rem)',
            lineHeight: 0.88,
            letterSpacing: 2,
            marginBottom: 80,
            animation: 'flicker 10s infinite',
          }}>
            <span style={{ color: '#E8E8E8', display: 'block' }}>Let's Build</span>
            <span style={{ color: '#F5C518', WebkitTextStroke: '2px #F5C518', WebkitTextFillColor: 'transparent', display: 'block' }}>Together</span>
          </h2>

          {/* ── Main two-col grid ── */}
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'start' }}>

            {/* LEFT */}
            <div>
              {/* Intro text */}
              <p style={{
                fontFamily: 'Barlow, sans-serif', color: '#666', lineHeight: 2,
                fontSize: '1.05rem', fontWeight: 300, marginBottom: 52,
                maxWidth: 420,
                animation: 'fadeUp 0.6s ease 0.15s both',
              }}>
                Currently open to new opportunities — whether it's a full project,
                a freelance gig, or just a great conversation about tech.
                My inbox is always open.
              </p>

              {/* Contact cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 48 }}>
                {contacts.map(c => (
                  <div key={c.label} className="contact-card" style={{ animationDelay: c.delay }}>
                    {/* Icon */}
                    <div style={{
                      width: 48, height: 48, flexShrink: 0,
                      background: 'rgba(245,197,24,0.08)',
                      border: '1px solid rgba(245,197,24,0.15)',
                      borderRadius: 2,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#F5C518',
                    }}>
                      <c.icon size={19} />
                    </div>
                    {/* Text */}
                    <div>
                      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem', color: '#555', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 5 }}>{c.label}</div>
                      {c.href
                        ? <a href={c.href} style={{ color: '#D0D0D0', fontSize: '0.95rem', fontFamily: 'Barlow, sans-serif', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }}
                            onMouseEnter={e => e.target.style.color = '#F5C518'}
                            onMouseLeave={e => e.target.style.color = '#D0D0D0'}
                          >{c.value}</a>
                        : <span style={{ color: '#D0D0D0', fontSize: '0.95rem', fontFamily: 'Barlow, sans-serif', fontWeight: 600 }}>{c.value}</span>
                      }
                    </div>
                    {/* Corner accent */}
                    <div style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderTop: '1px solid rgba(245,197,24,0.3)', borderRight: '1px solid rgba(245,197,24,0.3)' }} />
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', animation: 'fadeUp 0.6s ease 0.5s both' }}>
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-link">
                    <s.icon size={15} />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div style={{ animation: 'fadeUp 0.7s ease 0.2s both' }}>

              {/* Big CTA card */}
              <div style={{
                position: 'relative',
                background: 'rgba(12,12,12,0.9)',
                border: '1px solid rgba(245,197,24,0.15)',
                borderRadius: 2,
                padding: '52px 44px',
                marginBottom: 28,
                overflow: 'hidden',
              }}>
                {/* Floating orbit decoration */}
                <div style={{ position: 'absolute', top: 40, right: 40, width: 120, height: 120, pointerEvents: 'none' }}>
                  <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px dashed rgba(245,197,24,0.12)', animation: 'floatY 5s ease-in-out infinite' }} />
                  <div style={{ position: 'absolute', inset: 20, borderRadius: '50%', border: '1px solid rgba(245,197,24,0.07)' }} />
                  {/* Orbit dot */}
                  <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    width: 6, height: 6, borderRadius: '50%',
                    background: '#F5C518', marginLeft: -3, marginTop: -3,
                    boxShadow: '0 0 10px rgba(245,197,24,0.8)',
                    animation: 'orbitSpin 4s linear infinite',
                  }} />
                </div>

                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.65rem', color: '#F5C518', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 20 }}>
                  ◈ Ready to collaborate
                </div>

                <h3 style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                  color: '#E8E8E8',
                  lineHeight: 1,
                  letterSpacing: 1,
                  marginBottom: 20,
                }}>
                  Have a project<br />in mind?
                </h3>

                <p style={{
                  fontFamily: 'Barlow, sans-serif', color: '#555', lineHeight: 1.8,
                  fontSize: '0.95rem', fontWeight: 300, marginBottom: 40, maxWidth: 340,
                }}>
                  I turn ideas into fast, elegant, and scalable digital products.
                  Let's talk about how I can help bring yours to life.
                </p>

                {/* CTA buttons */}
                <div className="cta-row" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <a href="mailto:faizshaikh91883@gmail.com" className="cta-link">
                    <Mail size={16} />
                    Email Me
                    <ArrowUpRight size={14} />
                  </a>
                  <a href="https://github.com/faeezshaikh1918/" target="_blank" rel="noreferrer" className="secondary-link">
                    <GitFork size={15} />
                    View GitHub
                  </a>
                </div>

                {/* Animated bottom border trace */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
                  background: 'linear-gradient(90deg, transparent, #F5C518, transparent)',
                  animation: 'lineExpand 1.5s ease 0.8s both',
                }} />
              </div>

              {/* Stats row */}
         

            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: '#050505', borderTop: '1px solid rgba(245,197,24,0.08)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Top divider line with glow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, rgba(245,197,24,0.2))' }} />
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.1rem', color: 'rgba(245,197,24,0.3)', letterSpacing: 3 }}>FS</span>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, rgba(245,197,24,0.2))' }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.72rem', color: '#333' }}>
              © 2026 <span style={{ color: '#F5C518' }}>Faeez Shaikh</span>. All rights reserved.
            </div>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.65rem', color: '#2a2a2a', letterSpacing: 2 }}>
              BUILT WITH REACT + CSS
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  style={{ color: '#333', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#F5C518'}
                  onMouseLeave={e => e.currentTarget.style.color = '#333'}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}