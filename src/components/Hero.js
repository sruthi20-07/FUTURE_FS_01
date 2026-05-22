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
    {
      href:"https://github.com/sruthi20-07",
      label:"GitHub",
      icon:(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.27 7.78 10.78.57.1.78-.25.78-.56v-2.02c-3.17.69-3.84-1.36-3.84-1.36-.52-1.3-1.27-1.65-1.27-1.65-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.05-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.59.23 2.77.11 3.06.73.79 1.17 1.81 1.17 3.05 0 4.37-2.66 5.34-5.2 5.63.41.35.77 1.04.77 2.1v3.11c0 .31.21.67.79.56 4.51-1.51 7.77-5.76 7.77-10.78C23.25 5.48 18.27.5 12 .5z"/>
        </svg>
      )
    },

    {
      href:"https://www.linkedin.com/in/sruthi-vindula-84437932b",
      label:"LinkedIn",
      icon:"in"
    },

    {
      href:"mailto:vindulasruthi20@gmail.com",
      label:"Email",
      icon:"@"
    },
  ].map(s => (
            <a key={s.label} href={s.href} className="hero-social-btn"
              title={s.label} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
             <span
  style={{
    fontWeight:700,
    fontSize:13,
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  }}
>
  {s.icon}
</span>
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

  {/* PERSONAL DETAILS CARD */}
  <div className="hero-personal-card">
    <h3>Vindula Sruthi</h3>

    <p>2nd Year B.Tech IT Student</p>

    <span>
      Full Stack Developer 
    </span>
  </div>

  <div className="hero-photo-ring">

    <img
      src={photo}
      alt="Vindula Sruthi"
      className="hero-photo"
    />

  </div>

  {/* floating tech badges */}
  <div className="hero-float-badges">

    <div
      className="float-badge"
      style={{ top:"35%", left:"-15px" }}
    >
      ⚛️ React
    </div>

    <div
      className="float-badge"
      style={{ top:"50%", right:"-15px" }}
    >
      ☕ Spring Boot
    </div>

    <div
      className="float-badge"
      style={{ bottom:"5%", right:"-15px" }}
    >
      🔥 Firebase
    </div>

    <div
      className="float-badge"
      style={{ bottom:"5%", left:"-5px" }}
    >
      ▲ Vercel
    </div>

  </div>
</div>
    </section>
  );
}