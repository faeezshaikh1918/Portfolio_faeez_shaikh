import { GitFork, Link, Mail, ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=Barlow:wght@300;400;600;700;800&display=swap');

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes blink {
    0%,49%  { opacity: 1; }
    50%,100% { opacity: 0; }
  }
  @keyframes scrollBounce {
    0%,100% { transform: translateY(0); }
    50%     { transform: translateY(6px); }
  }
  @keyframes glowPulse {
    0%,100% { box-shadow: 0 0 30px rgba(245,197,24,0.18), 0 20px 60px rgba(0,0,0,0.5); }
    50%     { box-shadow: 0 0 60px rgba(245,197,24,0.35), 0 20px 60px rgba(0,0,0,0.5); }
  }
  @keyframes scanline {
    0%   { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }
  @keyframes rotateRing {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes counterRotate {
    from { transform: rotate(0deg); }
    to   { transform: rotate(-360deg); }
  }
  @keyframes badgeFloat {
    0%,100% { transform: translateY(0) rotate(-2deg); }
    50%     { transform: translateY(-6px) rotate(-2deg); }
  }
  @keyframes lineGrow {
    from { width: 0; }
    to   { width: 48px; }
  }
  @keyframes flicker {
    0%,100% { opacity: 1; }
    92%     { opacity: 1; }
    93%     { opacity: 0.5; }
    94%     { opacity: 1; }
    97%     { opacity: 0.8; }
    98%     { opacity: 1; }
  }

  .hero-btn-primary {
    background: #F5C518;
    color: #000;
    border: none;
    padding: 14px 30px;
    border-radius: 3px;
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 2px;
    cursor: pointer;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .hero-btn-primary::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,0);
    transition: background 0.2s ease;
  }
  .hero-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(245,197,24,0.35); }
  .hero-btn-primary:hover::after { background: rgba(255,255,255,0.1); }
  .hero-btn-primary:active { transform: translateY(0); }

  .hero-btn-secondary {
    background: transparent;
    color: #ccc;
    border: 1px solid rgba(255,255,255,0.15);
    padding: 14px 30px;
    border-radius: 3px;
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    letter-spacing: 2px;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.25s ease;
  }
  .hero-btn-secondary:hover {
    border-color: rgba(245,197,24,0.5);
    color: #F5C518;
    background: rgba(245,197,24,0.05);
    transform: translateY(-2px);
  }

  .social-icon {
    width: 44px; height: 44px;
    border-radius: 3px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    display: flex; align-items: center; justify-content: center;
    color: #888;
    cursor: pointer;
    transition: all 0.25s ease;
  }
  .social-icon:hover {
    background: rgba(245,197,24,0.1);
    border-color: rgba(245,197,24,0.4);
    color: #F5C518;
    transform: translateY(-2px);
  }

  .stat-badge {
    position: absolute;
    background: #111;
    border: 1px solid rgba(245,197,24,0.2);
    border-radius: 4px;
    padding: 12px 16px;
    animation: badgeFloat 3.5s ease-in-out infinite;
    backdrop-filter: blur(10px);
    cursor: default;
    z-index: 10;
  }
  .stat-badge:hover { border-color: rgba(245,197,24,0.5); }

  @media (max-width: 768px) {
    .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
    .hero-image-wrap { max-width: 260px !important; height: 280px !important; }
  }
`;

function StyleTag() {
  return <style dangerouslySetInnerHTML={{ __html: CSS }} />;
}

function Counter({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let n = 0;
    const id = setInterval(() => {
      n += 1;
      setVal(n);
      if (n >= target) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, [target]);
  return <>{val}{suffix}</>;
}

export default function Hero() {
  const canvasRef = useRef(null);
  const fullName = "Faeez Shaikh";
  const [typedText, setTypedText] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let i = 0;
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        if (i < fullName.length) { setTypedText(fullName.slice(0, i + 1)); i++; }
        else clearInterval(iv);
      }, 140);
      return () => clearInterval(iv);
    }, 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.35 + 0.05,
      pulse: Math.random() * Math.PI * 2,
    }));

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy; p.pulse += 0.02;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        const op = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,197,24,${op})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(245,197,24,${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  const firstName = typedText.split(" ")[0];
  const lastName = typedText.includes(" ") ? typedText.split(" ").slice(1).join(" ") : "";

  const socials = [
    { icon: GitFork, link: "https://github.com/faeezshaikh1918/" },
    { icon: Link,    link: "https://www.linkedin.com/feed/" },
    { icon: Mail,    link: "mailto:your@email.com" },
  ];

  const corners = [
    { top: -6,    left: -6,  borderTop:    "2px solid #F5C518", borderLeft:   "2px solid #F5C518", borderRadius: "2px 0 0 0" },
    { top: -6,    right: -6, borderTop:    "2px solid #F5C518", borderRight:  "2px solid #F5C518", borderRadius: "0 2px 0 0" },
    { bottom: -6, left: -6,  borderBottom: "2px solid #F5C518", borderLeft:   "2px solid #F5C518", borderRadius: "0 0 0 2px" },
    { bottom: -6, right: -6, borderBottom: "2px solid #F5C518", borderRight:  "2px solid #F5C518", borderRadius: "0 0 2px 0" },
  ];

  return (
    <>
      <StyleTag />
      <section
        id="home"
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          padding: "100px 24px 60px",
          background: "#080808",
        }}
      >
        {/* Particle canvas */}
        <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.7 }} />

        {/* Scanline */}
        <div style={{
          position: "absolute", left: 0, right: 0, height: 80, zIndex: 0, pointerEvents: "none",
          background: "linear-gradient(180deg, transparent, rgba(245,197,24,0.02), transparent)",
          animation: "scanline 7s linear infinite",
        }} />

        {/* Glow blobs */}
        <div style={{ position: "absolute", top: "5%", right: "-5%", width: 500, height: 500, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle, rgba(245,197,24,0.06), transparent 65%)" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "-10%", width: 400, height: 400, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle, rgba(245,197,24,0.04), transparent 65%)" }} />

        {/* Grid overlay */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(245,197,24,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />

        {/* ── Main content ── */}
        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>

          {/* Available tag */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 40,
            opacity: mounted ? 1 : 0,
            animation: mounted ? "fadeUp 0.6s ease 0.1s both" : "none",
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F5C518", boxShadow: "0 0 8px rgba(245,197,24,0.8)" }} />
            <span style={{ fontFamily: "Space Mono, monospace", fontSize: "0.7rem", color: "#F5C518", letterSpacing: 4, textTransform: "uppercase" }}>
              Available for Work
            </span>
          </div>

          {/* ── Two-column grid ── */}
          <div
            className="hero-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 60, alignItems: "center" }}
          >

            {/* LEFT COLUMN */}
            <div>
              <h1 style={{
                fontFamily: "Bebas Neue, sans-serif",
                fontSize: "clamp(4rem, 10vw, 8rem)",
                lineHeight: 0.9, letterSpacing: 2, color: "#E8E8E8",
                marginBottom: 20, minHeight: "clamp(140px, 22vw, 240px)",
                animation: "flicker 9s infinite",
              }}>
                {firstName}
                <br />
                <span style={{ color: "#F5C518", WebkitTextStroke: "2px #F5C518", WebkitTextFillColor: "transparent" }}>
                  {lastName}
                </span>
                <span style={{ color: "#F5C518", WebkitTextFillColor: "#F5C518", animation: "blink 0.7s infinite" }}>_</span>
              </h1>

              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, animation: "fadeUp 0.6s ease 0.3s both" }}>
                <div style={{ width: 48, height: 1, background: "#F5C518", animation: "lineGrow 1s ease 0.5s both" }} />
                <span style={{ fontFamily: "Space Mono, monospace", color: "#F5C518", fontSize: "0.72rem", letterSpacing: 4, textTransform: "uppercase" }}>
                  Full Stack Developer
                </span>
              </div>

              <p style={{
                fontFamily: "Barlow, sans-serif", color: "#777", lineHeight: 1.9,
                fontSize: "1rem", maxWidth: 480, marginBottom: 40, fontWeight: 300,
                animation: "fadeUp 0.6s ease 0.45s both",
              }}>
                Crafting high-performance web applications with modern technologies.
                Passionate about clean code, scalable systems, and user-friendly interfaces.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 36, animation: "fadeUp 0.6s ease 0.6s both" }}>
                <button className="hero-btn-primary" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                  View My Work →
                </button>
                <button className="hero-btn-secondary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                  Contact Me
                </button>
              </div>

              <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", animation: "fadeUp 0.6s ease 0.75s both" }}>
                {socials.map((item, i) => (
                  <div key={i} className="social-icon" onClick={() => window.open(item.link, "_blank")}>
                    <item.icon size={17} />
                  </div>
                ))}
                <span style={{ fontFamily: "Space Mono, monospace", color: "#444", fontSize: "0.72rem", marginLeft: 6, letterSpacing: 1 }}>
                  @faeezshaikh
                </span>
              </div>
            </div>
            {/* END LEFT COLUMN */}

            {/* RIGHT COLUMN */}
            <div style={{ position: "relative", display: "flex", justifyContent: "center", animation: "fadeIn 1s ease 0.4s both" }}>

              {/* Inner spinning ring */}
              <div style={{
                position: "absolute", width: 380, height: 380, borderRadius: "50%",
                border: "1px dashed rgba(245,197,24,0.15)",
                animation: "rotateRing 20s linear infinite",
                top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                pointerEvents: "none",
              }}>
                {[0, 90, 180, 270].map((deg, i) => (
                  <div key={i} style={{
                    position: "absolute", width: 6, height: 6, borderRadius: "50%",
                    background: "rgba(245,197,24,0.4)", top: "50%", left: "50%",
                    transform: `rotate(${deg}deg) translateX(189px) translateY(-50%)`,
                    boxShadow: "0 0 6px rgba(245,197,24,0.5)",
                  }} />
                ))}
              </div>

              {/* Outer counter-spinning ring */}
              <div style={{
                position: "absolute", width: 430, height: 430, borderRadius: "50%",
                border: "1px solid rgba(245,197,24,0.06)",
                animation: "counterRotate 30s linear infinite",
                top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                pointerEvents: "none",
              }} />

              {/* Photo frame */}
              <div
                className="hero-image-wrap"
                style={{ position: "relative", width: "100%", maxWidth: 320, height: 340, borderRadius: 6, overflow: "visible", zIndex: 2 }}
              >
                {corners.map((s, i) => (
                  <div key={i} style={{ position: "absolute", width: 28, height: 28, ...s }} />
                ))}
                <div style={{
                  position: "relative", width: "100%", height: "100%", borderRadius: 4,
                  overflow: "hidden", border: "1px solid rgba(245,197,24,0.2)",
                  animation: "glowPulse 4s ease-in-out infinite",
                }}>
                  <img src="/faeez.png" alt="Faeez" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
                    background: "linear-gradient(transparent, rgba(8,8,8,0.7))", pointerEvents: "none",
                  }} />
                </div>
              </div>

              {/* Badge — Projects */}
           

           
         
            </div>
            {/* END RIGHT COLUMN */}

          </div>
          {/* END GRID */}

          {/* Scroll indicator */}
          <div style={{ marginTop: 64, display: "flex", alignItems: "center", gap: 16, animation: "fadeUp 0.6s ease 1s both" }}>
            <div
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer" }}
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span style={{ fontFamily: "Space Mono, monospace", fontSize: "0.6rem", letterSpacing: 4, textTransform: "uppercase", color: "#555" }}>Scroll</span>
              <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, rgba(245,197,24,0.6), transparent)" }} />
              <ArrowDown size={14} style={{ animation: "scrollBounce 1.8s ease-in-out infinite", color: "#F5C518" }} />
            </div>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, rgba(245,197,24,0.2), transparent)" }} />
            <span style={{ fontFamily: "Space Mono, monospace", fontSize: "0.6rem", color: "#333", letterSpacing: 2 }}>EST. 2024</span>
          </div>

        </div>
        {/* END MAIN CONTENT */}

      </section>
    </>
  );
}
