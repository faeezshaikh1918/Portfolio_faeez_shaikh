import { useState } from 'react';
import { ExternalLink, GitFork, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Internet Broadband Management System',
    category: 'Full Stack',
    tags: ['React', 'Laravel', 'MySQL', 'Bootstrap'],
    desc: 'A broadband service management system with customer registration, complaint handling, plan management, engineer dashboard, and payment tracking.',
    color: '#F5C518',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Student Management System',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    desc: 'A complete student portal for managing student records, attendance, marks, courses, and admin controls.',
    color: '#F5C518',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Spotify Clone',
    category: 'Frontend',
    tags: ['React', 'CSS', 'JavaScript', 'API'],
    desc: 'A modern Spotify UI clone with music player controls, playlists, responsive layout, and smooth user experience.',
    color: '#F5C518',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
];

const filters = ['All', 'Full Stack', 'Frontend'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontSize: '40px',
              color: '#fff',
              marginBottom: '10px',
            }}
          >
            My Projects
          </h2>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  padding: '8px 18px',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  background:
                    activeFilter === f ? '#F5C518' : '#1b1b1b',
                  color:
                    activeFilter === f ? '#000' : '#fff',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit,minmax(320px,1fr))',
            gap: '20px',
          }}
        >
          {filtered.map((project) => (
            <div
              key={project.title}
              style={{
                background: '#151515',
                padding: '25px',
                borderRadius: '12px',
                borderTop: '4px solid #F5C518',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '15px',
                }}
              >
                <h3 style={{ color: '#fff' }}>
                  {project.title}
                </h3>
                <Code2 color="#F5C518" />
              </div>

              <p
                style={{
                  color: '#999',
                  fontSize: '14px',
                  lineHeight: '1.6',
                }}
              >
                {project.desc}
              </p>

              {/* Tags */}
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginTop: '15px',
                }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: '#222',
                      color: '#ccc',
                      padding: '5px 10px',
                      fontSize: '12px',
                      borderRadius: '5px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div
                style={{
                  display: 'flex',
                  gap: '15px',
                  marginTop: '20px',
                }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#F5C518',
                    textDecoration: 'none',
                  }}
                >
                  <GitFork size={16} /> Code
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#F5C518',
                    textDecoration: 'none',
                  }}
                >
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}