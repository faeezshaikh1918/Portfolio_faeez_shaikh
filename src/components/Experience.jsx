import { Briefcase } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Frontend Developer Intern',
    company: 'Unistar Private Limited',
    period: '6 Months',
    location: 'On-site',
    desc: 'Worked on responsive web interfaces, bug fixing, API integration, and improving user experience using React.js and Bootstrap.',
    skills: ['React.js', 'Bootstrap', 'JavaScript', 'API'],
  },
  {
    type: 'work',
    title: 'Full Stack Developer Intern',
    company: 'QSpiders Ahmedabad',
    period: 'Internship',
    location: 'Ahmedabad',
    desc: 'Built full stack projects using React, Node.js, Express, and MySQL. Learned backend development, CRUD operations, authentication, and deployment.',
    skills: ['React.js', 'Node.js', 'Express', 'MySQL'],
  },
];

function TimelineItem({ item, isLast }) {
  return (
    <div style={{ display: 'flex', gap: 24 }}>
      {/* Dot + Line */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: '50%',
            background: '#F5C518',
          }}
        />
        {!isLast && (
          <div
            style={{
              width: 2,
              flex: 1,
              background: '#333',
              marginTop: 8,
              minHeight: 60,
            }}
          />
        )}
      </div>

      {/* Card */}
      <div
        style={{
          background: '#161616',
          padding: '22px',
          borderRadius: '12px',
          marginBottom: '20px',
          flex: 1,
        }}
      >
        <h3 style={{ color: '#fff', marginBottom: '5px' }}>
          {item.title}
        </h3>

        <p style={{ color: '#F5C518', fontWeight: '600' }}>
          {item.company}
        </p>

        <p style={{ color: '#888', fontSize: '14px' }}>
          {item.period} • {item.location}
        </p>

        <p
          style={{
            color: '#aaa',
            marginTop: '12px',
            lineHeight: '1.6',
          }}
        >
          {item.desc}
        </p>

        {/* Skills */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            marginTop: '15px',
          }}
        >
          {item.skills.map((skill) => (
            <span
              key={skill}
              style={{
                background: '#222',
                color: '#ccc',
                padding: '5px 10px',
                borderRadius: '6px',
                fontSize: '12px',
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '80px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          <Briefcase color="#F5C518" />
          <h2 style={{ color: '#fff' }}>
            Internship Experience
          </h2>
        </div>

        {experiences.map((item, index) => (
          <TimelineItem
            key={item.company}
            item={item}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
}