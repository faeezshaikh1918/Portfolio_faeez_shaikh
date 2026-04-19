import { Download, Mail, Phone, MapPin, Globe, GitFork, Link } from 'lucide-react';

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Label */}
        <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }} className="no-print">
          <div style={{ width: 40, height: 2, background: '#F5C518' }} />
          <span style={{ fontFamily: 'Space Mono, monospace', color: '#F5C518', fontSize: '0.8rem', letterSpacing: 3 }}>RESUME</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }} className="no-print">
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#E8E8E8', lineHeight: 1.1 }}>
            My<br /><span style={{ color: '#F5C518' }}>Resume</span>
          </h2>
          <button onClick={handlePrint} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            background: '#F5C518', color: '#0D0D0D', padding: '14px 28px',
            borderRadius: 8, border: 'none', cursor: 'pointer',
            fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#e5b518'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#F5C518'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <Download size={18} />
            Download / Print Resume
          </button>
        </div>

        {/* ATS Friendly Resume Card */}
        <div style={{
          background: '#181818', border: '1px solid #2a2a2a', borderRadius: 16,
          overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
        }} id="resume-content">

          {/* Resume Header */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #222 100%)',
            borderBottom: '3px solid #F5C518',
            padding: '48px',
            display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center',
          }}>
            <div>
              <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2.5rem', color: '#E8E8E8', marginBottom: 8 }}>
                Richard Hamrick
              </h1>
              <div style={{ fontFamily: 'Space Mono, monospace', color: '#F5C518', fontSize: '1rem', letterSpacing: 2, marginBottom: 20 }}>
                FULL STACK DEVELOPER
              </div>
              <p style={{ color: '#999', lineHeight: 1.7, maxWidth: 500, fontSize: '0.95rem' }}>
                Dedicated Full Stack Developer with 3+ years of experience building scalable web applications.
                Proficient in JavaScript ecosystem, database design, and agile development methodologies.
                Passionate about writing clean, maintainable code and delivering high-quality user experiences.
              </p>
            </div>

            {/* Contact Info Block */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 200 }}>
              {[
                { icon: <Mail size={14} />, text: 'richard@email.com', href: 'mailto:richard@email.com' },
                { icon: <Phone size={14} />, text: '+1 (555) 000-0000', href: 'tel:+15550000000' },
                { icon: <MapPin size={14} />, text: 'New York, USA', href: null },
                { icon: <Globe size={14} />, text: 'richardhamrick.dev', href: 'https://richardhamrick.dev' },
                { icon: <GitFork size={14} />, text: 'github.com/richard', href: 'https://github.com' },
                { icon: <Link size={14} />, text: 'linkedin.com/in/richard', href: 'https://linkedin.com' },
              ].map(c => (
                <div key={c.text} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#aaa', fontSize: '0.82rem' }}>
                  <span style={{ color: '#F5C518', flexShrink: 0 }}>{c.icon}</span>
                  {c.href ? (
                    <a href={c.href} style={{ color: '#aaa', textDecoration: 'none' }}>{c.text}</a>
                  ) : <span>{c.text}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Resume Body */}
          <div style={{ padding: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            {/* Left Column */}
            <div>
              {/* Work Experience */}
              <ResumeSection title="Work Experience">
                <ResumeEntry
                  title="Full Stack Developer"
                  subtitle="TechCorp Solutions"
                  period="Jan 2022 – Present"
                  bullets={[
                    'Developed 5+ production-ready web applications using React and Node.js',
                    'Reduced API response times by 40% through query optimization and caching strategies',
                    'Mentored junior developers and conducted code reviews improving team velocity by 25%',
                    'Implemented CI/CD pipelines with Docker and automated testing coverage above 80%',
                  ]}
                />
                <ResumeEntry
                  title="Junior Web Developer"
                  subtitle="Digital Agency XYZ"
                  period="Jun 2021 – Dec 2021"
                  bullets={[
                    'Built 10+ client websites with responsive design and cross-browser compatibility',
                    'Integrated third-party APIs (Stripe, Google Maps, SendGrid) for client applications',
                    'Collaborated with UI/UX designers to implement pixel-perfect interfaces',
                  ]}
                />
                <ResumeEntry
                  title="Freelance Web Developer"
                  subtitle="Self Employed"
                  period="2020 – 2021"
                  bullets={[
                    'Delivered 10+ full-stack projects on time and within budget for small businesses',
                    'Built custom e-commerce solutions processing $50K+ in monthly transactions',
                  ]}
                />
              </ResumeSection>

              {/* Education */}
              <ResumeSection title="Education">
                <ResumeEntry
                  title="B.Tech in Computer Science"
                  subtitle="University of Technology"
                  period="2017 – 2021"
                  bullets={[
                    'GPA: 3.8/4.0 — Graduated with Distinction',
                    'Specialization in Software Engineering and Database Systems',
                    'Final project: Distributed Microservices Architecture for Real-time Data Processing',
                  ]}
                />
              </ResumeSection>
            </div>

            {/* Right Column */}
            <div>
              {/* Skills */}
              <ResumeSection title="Technical Skills">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    { label: 'Frontend', skills: 'React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS' },
                    { label: 'Backend', skills: 'Node.js, Express.js, Java, Python, REST APIs' },
                    { label: 'Database', skills: 'MongoDB, SQL, MySQL, PostgreSQL, Redis' },
                    { label: 'Tools', skills: 'Git, Docker, AWS, VS Code, Figma, Postman' },
                    { label: 'Methods', skills: 'Agile/Scrum, TDD, CI/CD, MVC, Microservices' },
                  ].map(row => (
                    <div key={row.label}>
                      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.75rem', color: '#F5C518', fontWeight: 700, minWidth: 80, paddingTop: 2 }}>
                          {row.label}:
                        </span>
                        <span style={{ color: '#aaa', fontSize: '0.85rem', lineHeight: 1.5 }}>{row.skills}</span>
                      </div>
                      <div style={{ height: 1, background: '#222', marginTop: 10 }} />
                    </div>
                  ))}
                </div>
              </ResumeSection>

              {/* Projects */}
              <ResumeSection title="Key Projects">
                <ResumeEntry
                  title="E-Commerce Platform"
                  subtitle="MERN Stack"
                  period="2023"
                  bullets={[
                    'Full-featured store with React frontend, Node/Express API, MongoDB database',
                    'Integrated Stripe payments, JWT auth, and admin dashboard',
                    'Deployed on AWS with auto-scaling; handled 10K+ monthly active users',
                  ]}
                />
                <ResumeEntry
                  title="Task Management App"
                  subtitle="React + SQL"
                  period="2022"
                  bullets={[
                    'Real-time collaborative Kanban board with WebSocket updates',
                    'Team workspaces with role-based access control and analytics',
                  ]}
                />
              </ResumeSection>

              {/* Certifications */}
              <ResumeSection title="Certifications">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { name: 'AWS Cloud Practitioner', year: '2023' },
                    { name: 'MongoDB Developer Certification', year: '2022' },
                    { name: 'JavaScript Algorithms — freeCodeCamp', year: '2021' },
                    { name: 'React Developer — Udemy', year: '2021' },
                  ].map(c => (
                    <div key={c.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#aaa', fontSize: '0.85rem' }}>▸ {c.name}</span>
                      <span style={{ fontFamily: 'Space Mono, monospace', color: '#F5C518', fontSize: '0.75rem' }}>{c.year}</span>
                    </div>
                  ))}
                </div>
              </ResumeSection>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          #resume-content {
            background: white !important;
            color: black !important;
            border: none !important;
            box-shadow: none !important;
          }
          #resume-content * { color: black !important; background: white !important; }
          #resume-content h1 { color: #1a1a1a !important; }
          #resume-content [style*="#F5C518"] { color: #B8860B !important; }
        }
      `}</style>
    </section>
  );
}

function ResumeSection({ title, children }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#E8E8E8', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: 1 }}>
          {title}
        </h3>
        <div style={{ flex: 1, height: 1, background: '#2a2a2a' }} />
      </div>
      {children}
    </div>
  );
}

function ResumeEntry({ title, subtitle, period, bullets }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4, flexWrap: 'wrap', gap: 4 }}>
        <div>
          <div style={{ fontWeight: 700, color: '#E8E8E8', fontSize: '0.9rem' }}>{title}</div>
          <div style={{ color: '#F5C518', fontSize: '0.82rem', fontFamily: 'Space Mono, monospace' }}>{subtitle}</div>
        </div>
        <span style={{ color: '#666', fontSize: '0.78rem', fontFamily: 'Space Mono, monospace', flexShrink: 0 }}>{period}</span>
      </div>
      <ul style={{ paddingLeft: 0, margin: '10px 0 0 0', listStyle: 'none' }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ color: '#888', fontSize: '0.83rem', lineHeight: 1.6, marginBottom: 4, paddingLeft: 14, position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#F5C518' }}>▸</span>
            {b}
          </li>
        ))}
      </ul>
      <style>{`/* Laptop */
@media (max-width: 1200px) {
  #resume {
    padding: 90px 20px !important;
  }

  #resume-content > div:first-child,
  #resume-content > div:last-child {
    padding: 36px !important;
  }
}

/* Tablet */
@media (max-width: 992px) {

  #resume {
    padding: 80px 18px !important;
  }

  /* Top heading area */
  #resume .no-print {
    gap: 16px !important;
  }

  /* Resume Header */
  #resume-content > div:first-child {
    grid-template-columns: 1fr !important;
    gap: 28px !important;
    padding: 32px !important;
  }

  /* Resume Body */
  #resume-content > div:last-child {
    grid-template-columns: 1fr !important;
    gap: 34px !important;
    padding: 32px !important;
  }

  #resume-content h1 {
    font-size: 2rem !important;
  }
}

/* Mobile */
@media (max-width: 768px) {

  #resume {
    padding: 70px 14px !important;
  }

  #resume h2 {
    font-size: 2rem !important;
  }

  #resume .no-print {
    flex-direction: column !important;
    align-items: flex-start !important;
  }

  /* Download button */
  #resume button {
    width: 100% !important;
    justify-content: center !important;
    padding: 14px 18px !important;
  }

  /* Resume card */
  #resume-content {
    border-radius: 12px !important;
  }

  /* Header */
  #resume-content > div:first-child {
    padding: 24px !important;
  }

  #resume-content h1 {
    font-size: 1.7rem !important;
    line-height: 1.2 !important;
  }

  #resume-content p {
    font-size: 0.9rem !important;
  }

  /* Contact block links */
  #resume-content a,
  #resume-content span {
    word-break: break-word;
  }

  /* Body */
  #resume-content > div:last-child {
    padding: 24px !important;
    gap: 28px !important;
  }

  /* Resume entry rows */
  #resume-content [style*="justify-content: space-between"] {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 6px !important;
  }

  #resume-content ul li {
    font-size: 0.82rem !important;
  }
}

/* Small Mobile */
@media (max-width: 480px) {

  #resume {
    padding: 60px 10px !important;
  }

  #resume h2 {
    font-size: 1.7rem !important;
  }

  #resume-content > div:first-child,
  #resume-content > div:last-child {
    padding: 18px !important;
  }

  #resume-content h1 {
    font-size: 1.45rem !important;
  }

  #resume-content h3 {
    font-size: 0.9rem !important;
  }

  #resume-content p,
  #resume-content li,
  #resume-content span,
  #resume-content a {
    font-size: 0.8rem !important;
  }

  #resume button {
    font-size: 0.88rem !important;
  }
}
This`}</style>
    </div>
  );
}
