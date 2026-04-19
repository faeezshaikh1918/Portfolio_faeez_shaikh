import { useState } from 'react';
import { Mail, Phone, MapPin, Send, GitFork, Link, Link2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    width: '100%', background: '#222', border: '1px solid #2a2a2a',
    color: '#E8E8E8', padding: '14px 18px', borderRadius: 8,
    fontSize: '0.95rem', fontFamily: 'DM Sans, sans-serif',
    outline: 'none', transition: 'border-color 0.2s',
  };

  return (
    <>
      <section id="contact" style={{ padding: '100px 24px', background: '#0f0f0f' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Label */}
          <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 2, background: '#F5C518' }} />
            <span style={{ fontFamily: 'Space Mono, monospace', color: '#F5C518', fontSize: '0.8rem', letterSpacing: 3 }}>CONTACT</span>
          </div>

          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 60, color: '#E8E8E8', lineHeight: 1.1 }}>
            Let's Work<br /><span style={{ color: '#F5C518' }}>Together</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 60 }}>
            {/* Left - Info */}
            <div>
              <p style={{ color: '#888', lineHeight: 1.8, marginBottom: 40, fontSize: '1rem' }}>
                I'm currently open to new opportunities. Whether you have a project, a question,
                or just want to connect — feel free to reach out!
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
                {[
                  { icon: <Mail size={20} />, label: 'Email', value: 'faizshaikh91883@gmail.com', href: 'mailto:richard@email.com' },
                  { icon: <Phone size={20} />, label: 'Phone', value: '+91 9316187694', href: 'tel:+9316187694' },
                  { icon: <MapPin size={20} />, label: 'Location', value: 'Bardoli, Gujarat', href: null },
                ].map(c => (
                  <div key={c.label} className="card-dark" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: 44, height: 44, background: 'rgba(245,197,24,0.1)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F5C518', flexShrink: 0 }}>
                      {c.icon}
                    </div>
                    <div>
                      <div style={{ color: '#666', fontSize: '0.75rem', fontFamily: 'Space Mono, monospace', marginBottom: 4 }}>{c.label}</div>
                      {c.href ? (
                        <a href={c.href} style={{ color: '#E8E8E8', textDecoration: 'none', fontSize: '0.95rem' }}>{c.value}</a>
                      ) : <span style={{ color: '#E8E8E8', fontSize: '0.95rem' }}>{c.value}</span>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div style={{ display: 'flex', gap: 12 }}>
                {[
                  { icon: <GitFork size={20} />, href: 'https://github.com/faeezshaikh1918/', label: 'GitHub' },
                  { icon: <Link size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: <Link2 size={20} />, href: 'https://twitter.com', label: 'Twitter' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
                    width: 48, height: 48, borderRadius: 10, background: '#181818',
                    border: '1px solid #2a2a2a', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', color: '#888', textDecoration: 'none', transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#F5C518'; e.currentTarget.style.color = '#F5C518'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.color = '#888'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div className="card-dark" style={{ padding: '40px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#F5C518'}
                  onBlur={e => e.target.style.borderColor = '#2a2a2a'}
                />
                <input
                  placeholder="Your Email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#F5C518'}
                  onBlur={e => e.target.style.borderColor = '#2a2a2a'}
                />
              </div>
              <input
                placeholder="Subject"
                value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })}
                style={{ ...inputStyle, marginBottom: 16 }}
                onFocus={e => e.target.style.borderColor = '#F5C518'}
                onBlur={e => e.target.style.borderColor = '#2a2a2a'}
              />
              <textarea
                placeholder="Your Message..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                rows={6}
                style={{ ...inputStyle, resize: 'vertical', marginBottom: 20 }}
                onFocus={e => e.target.style.borderColor = '#F5C518'}
                onBlur={e => e.target.style.borderColor = '#2a2a2a'}
              />

              {sent && (
                <div style={{ padding: '14px 20px', background: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.3)', borderRadius: 8, color: '#F5C518', marginBottom: 16, fontSize: '0.9rem' }}>
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}

              <button onClick={handleSubmit} disabled={sending} style={{
                width: '100%', background: '#F5C518', color: '#0D0D0D', padding: '16px 24px',
                borderRadius: 8, border: 'none', cursor: sending ? 'wait' : 'pointer',
                fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                transition: 'all 0.2s', opacity: sending ? 0.8 : 1,
              }}>
                <Send size={18} />
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '32px 24px', borderTop: '1px solid #1a1a1a', background: '#0D0D0D' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.85rem', color: '#444' }}>
            © 2026<span style={{ color: '#F5C518' }}> Faeez Shaikh</span>. All rights reserved.
          </div>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.8rem', color: '#444' }}>
            Built with React + CSS 
          </div>
          <style>{`
          @media (max-width: 992px) {

  #contact {
    padding: 80px 20px !important;
  }

  #contact > div > div:nth-child(3) {
    grid-template-columns: 1fr !important;
    gap: 40px !important;
  }

  #contact h2 {
    margin-bottom: 40px !important;
  }

  #contact .card-dark {
    padding: 24px !important;
  }

  footer div {
    justify-content: center !important;
    text-align: center;
  }
}


/* Mobile */
@media (max-width: 768px) {

  #contact {
    padding: 70px 16px !important;
  }

  #contact h2 {
    font-size: 2rem !important;
    margin-bottom: 30px !important;
  }

  #contact p {
    font-size: 0.95rem !important;
    margin-bottom: 24px !important;
  }

  /* Contact cards */
  #contact .card-dark {
    padding: 18px !important;
  }

  /* Form top inputs */
  #contact .card-dark > div:first-child {
    grid-template-columns: 1fr !important;
    gap: 14px !important;
  }

  #contact input,
  #contact textarea {
    padding: 13px 14px !important;
    font-size: 0.95rem !important;
  }

  #contact button {
    padding: 14px !important;
    font-size: 0.95rem !important;
  }

  footer {
    padding: 24px 16px !important;
  }

  footer > div {
    flex-direction: column !important;
    gap: 10px !important;
    text-align: center !important;
  }
}


/* Small Mobile */
@media (max-width: 480px) {

  #contact h2 {
    font-size: 1.7rem !important;
    line-height: 1.2 !important;
  }

  #contact span,
  #contact a,
  #contact p {
    word-break: break-word;
  }

  #contact .card-dark {
    padding: 16px !important;
  }

  #contact button {
    width: 100% !important;
  }

  footer div {
    font-size: 0.8rem !important;
  }
}`}</style>
        </div>
      </footer>
    </>
  );
}
