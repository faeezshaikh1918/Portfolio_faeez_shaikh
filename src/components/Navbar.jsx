import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);

      if (window.innerWidth > 768) {
        setMobileOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => document.getElementById(l.id));

      sections.forEach((sec) => {
        if (!sec) return;

        const rect = sec.getBoundingClientRect();

        if (rect.top <= 100 && rect.bottom >= 100) {
          setActive(sec.id);
        }
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMobileOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(13,13,13,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid #222" : "none",
        transition: "0.3s ease",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          height: "70px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <div
          onClick={() => scrollTo("home")}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              color: "#F5C518",
              fontSize: "1.2rem",
              fontWeight: "700",
            }}
          >
            FZ
          </span>

          <span
            style={{
              color: "#888",
              fontSize: "0.85rem",
              letterSpacing: "2px",
            }}
          >
            PORTFOLIO
          </span>
        </div>

        {/* Desktop Menu */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: "28px",
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: active === link.id ? "#F5C518" : "#aaa",
                  fontSize: "0.95rem",
                  fontWeight: active === link.id ? "600" : "400",
                  position: "relative",
                  paddingBottom: "5px",
                }}
              >
                {link.label}

                {active === link.id && (
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: "2px",
                      background: "#F5C518",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#F5C518",
              cursor: "pointer",
            }}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileOpen && (
        <div
          style={{
            background: "#111",
            padding: "15px 20px",
            borderTop: "1px solid #222",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                background: "none",
                border: "none",
                color: active === link.id ? "#F5C518" : "#aaa",
                textAlign: "left",
                padding: "10px 0",
                fontSize: "1rem",
                cursor: "pointer",
                borderBottom: "1px solid #1f1f1f",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}