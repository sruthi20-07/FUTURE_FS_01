import React, { useState, useEffect } from "react";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll progress bar
      const el = document.getElementById("scroll-bar");

      if (el) {
        const pct =
          (window.scrollY /
            (document.body.scrollHeight - window.innerHeight)) *
          100;

        el.style.width = pct + "%";
      }

      // Active section
      NAV.forEach(({ href }) => {
        const id = href.replace("#", "");
        const sec = document.getElementById(id);

        if (sec) {
          const rect = sec.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();

    setMenuOpen(false);

    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* Logo */}
        <div className="nav-logo">VS ✦</div>

        {/* Desktop Nav */}
        <ul className="nav-links">
          {NAV.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={
                  active === href.replace("#", "") ? "active" : ""
                }
                onClick={(e) => handleNav(e, href)}
              >
                {label}
              </a>
            </li>
          ))}

          {/* Resume Button */}
          <li>
            <a
              href="/Sruthi_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="nav-cta"
            >
              Resume ↗
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={(e) => handleNav(e, href)}
          >
            {label}
          </a>
        ))}

        <a
          href="/Sruthi_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "var(--rose)",
            fontWeight: 700,
          }}
        >
          Resume ↗
        </a>
      </div>
    </>
  );
}