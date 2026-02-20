import React, { useRef, useState, useEffect } from "react";

function Dashboard() {
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [active, setActive] = useState("about");

  const sections = [
    { name: "about", ref: aboutRef },
    { name: "resume", ref: resumeRef },
    { name: "skills", ref: skillsRef },
    { name: "projects", ref: projectsRef },
    { name: "contact", ref: contactRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach(({ name, ref }) => {
        if (!ref.current) return;
        const top = ref.current.getBoundingClientRect().top;
        if (top >= 0 && top < window.innerHeight / 2) {
          setActive(name);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const scrollTo = (ref, name) => {
    setActive(name);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <p className="hero-sub">Hello, I’m</p>
        <h1 className="hero-name">Vindula Sruthi</h1>
        <p className="hero-role">
          Full-Stack Developer focused on building real-world web applications
        </p>
      </section>

      {/* NAV */}
      <div className="nav">
        {sections.map(({ name, ref }) => (
          <button
            key={name}
            className={`nav-btn ${active === name ? "active" : ""}`}
            onClick={() => scrollTo(ref, name)}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </button>
        ))}
      </div>

      {/* ABOUT */}
      <section ref={aboutRef} className="section">
  <h2 className="section-title">About Me</h2>
  <div className="section-divider"></div>

  <p className="section-text">
    I am a B.Tech Information Technology student with a strong interest in
    full-stack web development and building practical, real-world applications.
    I enjoy turning ideas into functional products using clean, maintainable
    code and modern development practices.
  </p>

  <p className="section-text" style={{ marginTop: "20px" }}>
    I have hands-on experience working with technologies such as React,
    Spring Boot, Node.js, and databases like MySQL and MongoDB. Through my
    projects, I have implemented REST APIs, authentication mechanisms,
    database integration, and cloud deployment workflows.
  </p>

  <p className="section-text" style={{ marginTop: "20px" }}>
    I am particularly interested in roles where I can contribute as a
    full-stack or frontend developer, learn from experienced engineers, and
    continuously improve my problem-solving and system design skills. I am
    actively seeking internship opportunities where I can grow professionally
    while contributing meaningful value to the team.
  </p>
</section>


      {/* RESUME */}
      <section ref={resumeRef} className="section alt">
        <h2 className="section-title">Resume</h2>
        <div className="section-divider"></div>

        <ul className="resume-list">
          <li>B.Tech IT – CGPA 9.47</li>
          <li>Full Stack Intern – CodVeda Technologies</li>
          <li>React, Spring Boot, Node.js, MYSQL</li>
          <li>REST APIs, JWT, Cloud deployment</li>
        </ul>

        <div className="resume-actions">
          <a
            href="/Sruthi_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-btn primary"
          >
            View Resume
          </a>
          <a
            href="/Sruthi_Resume.pdf"
            download
            className="resume-btn"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section ref={skillsRef} className="section">
        <h2 className="section-title">Skills</h2>
        <div className="section-divider"></div>

        <div className="grid">
          <SkillCard title="Frontend" skills={["React", "HTML", "CSS", "JavaScript"]} />
          <SkillCard title="Backend" skills={["Spring Boot", "Node.js", "REST APIs", "JWT"]} />
          <SkillCard title="Databases" skills={["MySQL", "MongoDB", "Firebase"]} />
          <SkillCard title="Cloud & Tools" skills={["Azure", "Vercel", "Render", "Git", "GitHub"]} />
          <SkillCard title="Core CS" skills={["DSA", "OOP", "DBMS", "OS"]} />
        </div>
      </section>

      {/* PROJECTS */}
      <section ref={projectsRef} className="section alt">
        <h2 className="section-title">Projects</h2>
        <div className="section-divider"></div>

        <div className="grid">
          <ProjectCard
            title="HungerLink"
            desc="Food donation platform connecting colleges with NGOs."
            github="https://github.com/sruthi20-07/HungerLink"
            live="https://hunger-link-vskj.vercel.app/login"
          />
          <ProjectCard
            title="ATM Simulation"
            desc="Secure banking simulation system."
            github="https://github.com/sruthi20-07/ATM"
            live="https://atm-backend-ojw0.onrender.com"
          />
          <ProjectCard
            title="LungShield"
            desc="ML-based lung cancer detection platform."
            github="https://github.com/sruthi20-07/lung-cancer-detection"
            live="https://lung-cancer-detection-seven.vercel.app/"
          />
          <ProjectCard
            title="GuideU"
            desc="Mentorship platform for students."
            github="https://github.com/sruthi20-07/GuideU"
            live="https://guideu-12837.web.app"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section ref={contactRef} className="section">
  <h2 className="section-title">Contact</h2>
  <div className="section-divider"></div>

  <div className="contact-box">
    {/* Phone */}
    <div className="contact-item">
      <span className="contact-icon">📞</span>
      <div>
        <span className="contact-label">Phone</span>
        <a className="contact-link" href="tel:+916304206091">
          +91 6304206091
        </a>
      </div>
    </div>

    {/* Personal Email */}
    <div className="contact-item">
      <span className="contact-icon">✉️</span>
      <div>
        <span className="contact-label">Email</span>
        <a
          className="contact-link"
          href="mailto:vindulasruthi20@gmail.com"
        >
          vindulasruthi20@gmail.com
        </a>
      </div>
    </div>

    {/* College Email */}
    <div className="contact-item">
      <span className="contact-icon">🎓</span>
      <div>
        <span className="contact-label">College Email</span>
        <a
          className="contact-link"
          href="mailto:24b01a12i8@gmail.com"
        >
          24b01a12i8@gmail.com
        </a>
      </div>
    </div>

    {/* LinkedIn */}
    <div className="contact-item">
      <span className="contact-icon">💼</span>
      <div>
        <span className="contact-label">LinkedIn</span>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/sruthi-vindula-84437932b"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/sruthi-vindula
        </a>
      </div>
    </div>

    {/* GitHub */}
    <div className="contact-item">
      <span className="contact-icon">💻</span>
      <div>
        <span className="contact-label">GitHub</span>
        <a
          className="contact-link"
          href="https://github.com/sruthi20-07"
          target="_blank"
          rel="noreferrer"
        >
          github.com/sruthi20-07
        </a>
      </div>
    </div>
  </div>
</section>


    </>
  );
}

/* SUB COMPONENTS */

function SkillCard({ title, skills }) {
  return (
    <div className="card">
      <h3 className="skill-title">{title}</h3>
      <div className="skill-tags">
        {skills.map((s) => (
          <span key={s} className="skill-tag">{s}</span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, desc, github, live }) {
  return (
    <div className="card">
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{desc}</p>
      <div className="project-links">
        <a href={github} className="project-btn" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={live} className="project-btn primary" target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default Dashboard;
