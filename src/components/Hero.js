import React, { useEffect, useState } from "react";
import photo from "../assets/photo.jpg";

const ROLES = [
  "Full Stack Developer",
  "React & Spring Boot Engineer",
  "Backend API Designer",
  "Open Source Builder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[roleIndex];
    let timeout;
    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="hero" id="hero">
      {/* animated blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      {/* LEFT — text content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for Internships &amp; Full-time
        </div>

        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">
          Vindula <span>Sruthi</span>
        </h1>

        <div className="hero-typed-wrap">
          {displayed}
          <span className="typed-cursor">|</span>
        </div>

        <p className="hero-desc">
          A passionate full-stack developer building production-ready applications
          with React, Spring Boot &amp; cloud technologies. I turn ideas into
          scalable, real-world products.
        </p>

        <div className="hero-btns">
          <a href="#projects" className="btn-primary"
            onClick={(e) => { e.preventDefault(); document.querySelector("#projects").scrollIntoView({ behavior:"smooth" }); }}>
            View My Work →
          </a>
          <a href="/Sruthi_Resume.pdf" className="btn-outline" target="_blank" rel="noreferrer">
            Download Resume
          </a>
          <a href="#contact" className="btn-outline"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact").scrollIntoView({ behavior:"smooth" }); }}>
            Hire Me
          </a>
        </div>

        <div className="hero-socials">
          {[
            { href:"https://github.com/sruthi20-07", label:"GitHub", icon:"⌥" },
            { href:"https://www.linkedin.com/in/sruthi-vindula-84437932b", label:"LinkedIn", icon:"in" },
            { href:"mailto:vindulasruthi20@gmail.com", label:"Email", icon:"@" },
          ].map(s => (
            <a key={s.label} href={s.href} className="hero-social-btn"
              title={s.label} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <span style={{ fontWeight:700, fontSize:13 }}>{s.icon}</span>
            </a>
          ))}
        </div>

        <div className="hero-stats" style={{ marginTop: 36 }}>
          {[
            { num:"9.47", label:"CGPA" },
            { num:"5+",   label:"Projects Deployed" },
            { num:"2",    label:"Internships" },
            { num:"3+",   label:"Hackathons" },
          ].map(s => (
            <div className="hero-stat" key={s.label}>
              <strong>{s.num}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — photo */}
      <div className="hero-photo-wrap">
        <div className="hero-photo-ring">
          {/* If you have your photo uncomment the line below and remove the placeholder div */}
          {/* <img src={photo} alt="Vindula Sruthi" className="hero-photo" /> */}
          <img
  src={photo}
  alt="Vindula Sruthi"
  className="hero-photo"
/>
        </div>

        {/* floating tech badges */}
        <div className="hero-float-badges">
          <div className="float-badge" style={{ top:"5%", left:"-15px" }}>⚛️ React</div>
          <div className="float-badge" style={{ top:"20%", right:"-15px" }}>☕ Spring Boot</div>
          <div className="float-badge" style={{ bottom:"25%", right:"-15px" }}> 🔥 Firebase</div>
          <div className="float-badge" style={{ bottom:"5%", left:"-5px" }}> ▲ Vercel</div>
        </div>
      </div>
    </section>
  );
}