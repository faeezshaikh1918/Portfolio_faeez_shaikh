import { Code2, Layers, Zap, Coffee } from "lucide-react";

const stats = [
  { value: "2+", label: "Years Learning Experience" },
  { value: "12+", label: "Projects Completed" },
  { value: "8+", label: "Internship Tasks Done" },
  { value: "6+", label: "Tech Skills" },
];

const highlights = [
  {
    icon: <Code2 size={22} />,
    title: "Frontend Development",
    desc: "Building responsive websites using React.js, JavaScript, HTML5, CSS3, Bootstrap and modern UI design.",
  },
  {
    icon: <Layers size={22} />,
    title: "Backend Development",
    desc: "Creating secure APIs and systems using PHP, Laravel, Java, MySQL and database management.",
  },
  {
    icon: <Zap size={22} />,
    title: "Project Experience",
    desc: "Developed management systems, portfolio websites, CRUD apps, authentication systems and dashboards.",
  },
  {
    icon: <Coffee size={22} />,
    title: "Continuous Learning",
    desc: "Always learning new technologies, improving coding skills and building real-world applications.",
  },
];

export default function About() {
  const isMobile = window.innerWidth <= 768;

  return (
    <section
      id="about"
      style={{
        padding: isMobile ? "70px 18px" : "100px 24px",
        position: "relative",
      }}
    >
      {/* Background Accent */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "30%",
          width: isMobile ? 180 : 300,
          height: isMobile ? 180 : 300,
          background:
            "radial-gradient(circle, rgba(245,197,24,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Label */}
        <div
          style={{
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 40,
              height: 2,
              background: "#F5C518",
            }}
          />
          <span
            style={{
              color: "#F5C518",
              fontSize: "0.8rem",
              letterSpacing: 3,
            }}
          >
            ABOUT ME
          </span>
        </div>

        {/* Heading */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3rem)",
            marginBottom: isMobile ? 40 : 60,
            color: "#E8E8E8",
            lineHeight: 1.2,
          }}
        >
          My Journey & <br />
          <span style={{ color: "#F5C518" }}>My Skills</span>
        </h2>

        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 50 : 80,
            alignItems: "start",
          }}
        >
          {/* Left Side */}
          <div>
            <p
              style={{
                color: "#aaa",
                lineHeight: 1.9,
                fontSize: "1rem",
                marginBottom: 24,
              }}
            >
              I'm <strong style={{ color: "#fff" }}>Faeez Shaikh</strong>, a
              passionate Full Stack Developer with strong interest in building
              modern websites and web applications.
            </p>

            <p
              style={{
                color: "#aaa",
                lineHeight: 1.9,
                fontSize: "1rem",
                marginBottom: 24,
              }}
            >
              I completed my <strong style={{ color: "#fff" }}>BCA</strong>,
              where I built my foundation in programming, databases and web
              development.
            </p>

            <p
              style={{
                color: "#aaa",
                lineHeight: 1.9,
                fontSize: "1rem",
                marginBottom: 24,
              }}
            >
              After BCA, I completed an internship where I worked on real
              projects, learned teamwork, coding standards and practical
              development process.
            </p>

            <p
              style={{
                color: "#aaa",
                lineHeight: 1.9,
                fontSize: "1rem",
                marginBottom: 24,
              }}
            >
              Then I completed my <strong style={{ color: "#fff" }}>MCA</strong>
              , where I improved my advanced knowledge in software development,
              Java, React.js, Laravel and project architecture.
            </p>

            <p
              style={{
                color: "#aaa",
                lineHeight: 1.9,
                fontSize: "1rem",
                marginBottom: 35,
              }}
            >
              After MCA, I also completed another internship to gain more
              industry experience and improve my professional development skills.
            </p>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
              }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="card-dark"
                  style={{
                    padding: isMobile ? "16px" : "20px 24px",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: isMobile ? "1.6rem" : "2rem",
                      color: "#F5C518",
                    }}
                  >
                    {s.value}
                  </div>

                  <div
                    style={{
                      color: "#888",
                      fontSize: "0.8rem",
                      marginTop: 4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {highlights.map((h) => (
              <div
                key={h.title}
                className="card-dark"
                style={{
                  padding: isMobile ? "18px" : "24px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  flexDirection: isMobile ? "column" : "row",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 10,
                    background: "rgba(245,197,24,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#F5C518",
                    flexShrink: 0,
                  }}
                >
                  {h.icon}
                </div>

                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#fff",
                      marginBottom: 6,
                    }}
                  >
                    {h.title}
                  </div>

                  <div
                    style={{
                      color: "#777",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {h.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}