import { GitFork, Link, Mail, ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const canvasRef = useRef(null);

  // typing animation text
  const fullName = "Faeez Shaikh";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      if (index < fullName.length) {
        setTypedText(fullName.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typing);
      }
    }, 180);

    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    let animId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,197,24,${p.opacity})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const firstName = typedText.split(" ")[0];
  const lastName = typedText.includes(" ")
    ? typedText.split(" ").slice(1).join(" ")
    : "";

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "80px 20px 40px",
      }}
    >
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.5,
        }}
      />

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "-10%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,197,24,0.08), transparent 70%)",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Grid */}
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "50px",
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div>
            <h1
              style={{
                fontSize: "clamp(2.4rem,6vw,5rem)",
                lineHeight: 1.05,
                fontWeight: "800",
                color: "#fff",
                marginBottom: "15px",
                minHeight: "140px",
              }}
            >
              {firstName}
              <br />
              <span style={{ color: "#F5C518" }}>{lastName}</span>
              <span className="cursor">|</span>
            </h1>

            <div
              style={{
                color: "#F5C518",
                fontSize: "15px",
                letterSpacing: "2px",
                marginBottom: "20px",
              }}
            >
              FULL STACK DEVELOPER
            </div>

            <p
              style={{
                color: "#888",
                lineHeight: 1.8,
                fontSize: "16px",
                maxWidth: "520px",
                marginBottom: "35px",
              }}
            >
              Crafting high-performance web applications with modern
              technologies. Passionate about clean code, scalable systems and
              user-friendly interfaces.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
                marginBottom: "30px",
              }}
            >
              <button
                style={{
                  background: "#F5C518",
                  color: "#000",
                  border: "none",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                View My Work
              </button>

              <button
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "1px solid #333",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Contact Me
              </button>
            </div>

            {/* Social */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {[GitFork, Link, Mail].map((Icon, i) => (
                <div
                  key={i}
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "8px",
                    background: "#181818",
                    border: "1px solid #2a2a2a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#F5C518",
                    cursor: "pointer",
                  }}
                >
                  <Icon size={18} />
                </div>
              ))}

              <span
                style={{
                  color: "#555",
                  fontSize: "14px",
                  marginLeft: "6px",
                }}
              >
                @faeezshaikh
              </span>
            </div>
          </div>

          {/* Right */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "320px",
                height: "320px",
                borderRadius: "20px",
                overflow: "hidden",
                border: "3px solid #F5C518",
                boxShadow:
                  "0 0 40px rgba(245,197,24,0.25),0 25px 70px rgba(0,0,0,0.6)",
              }}
            >
              <img
                src="/faeez.png"
                alt="Faeez"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Badge */}
            <div
              style={{
                position: "absolute",
                top: "-12px",
                right: "10px",
                background: "#181818",
                border: "1px solid #2a2a2a",
                borderRadius: "12px",
                padding: "12px 18px",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  color: "#F5C518",
                  marginBottom: "4px",
                }}
              >
                PROJECTS
              </div>

              <div
                style={{
                  fontSize: "24px",
                  color: "#fff",
                  fontWeight: "500",
                }}
              >
                5+
              </div>
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
            color: "#555",
            cursor: "pointer",
          }}
        >
          <div style={{ fontSize: "12px", marginBottom: "6px" }}>SCROLL</div>
          <ArrowDown size={18} />
        </div>
      </div>

      <style>{`
        .cursor{
          animation: blink 0.7s infinite;
        }

        @keyframes blink{
          0%,50%{opacity:1;}
          51%,100%{opacity:0;}
        }

        @media (max-width:768px){
          .hero-grid{
            grid-template-columns:1fr !important;
            gap:35px !important;
          }
        }
      `}</style>
    </section>
  );
}