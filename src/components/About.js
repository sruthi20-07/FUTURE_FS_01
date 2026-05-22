import React, { useEffect, useRef } from "react";

function useFadeUp(ref) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.classList.add("visible"); } },
      { threshold: 0.12 }
    );
    const el = ref.current;
    if (el) obs.observe(el);
    return () => el && obs.unobserve(el);
  }, [ref]);
}

export default function About() {
  const r1 = useRef(null); useFadeUp(r1);
  const r2 = useRef(null); useFadeUp(r2);

  return (
    <section className="section" id="about">
      <div ref={r1} className="fade-up">
        <span className="section-label">About Me</span>
        <h2 className="section-title">Turning ideas into real products</h2>
        <div className="section-divider" />
      </div>

      <div ref={r2} className="about-grid fade-up fade-up-delay-1">
        {/* LEFT */}
        <div className="about-text">
          <p>
            I'm a second-year B.Tech Information Technology student at Shri Vishnu
            Engineering College for Women with a CGPA of <strong>9.47</strong>. I
            specialize in building full-stack web applications that solve real
            problems — from food donation platforms to ML-based cancer detection
            systems.
          </p>
          <p>
            My experience spans REST API design, secure authentication systems,
            database architecture, and cloud deployment. I've worked with React,
            Spring Boot, Node.js, MongoDB, MySQL, and Microsoft Azure.
          </p>
          <p>
            I'm actively seeking internship opportunities where I can contribute
            meaningful value, grow alongside experienced engineers, and build
            products that matter.
          </p>
          

          <div className="about-highlights">
            {[
              { icon:"🚀", title:"Production Deployments", sub:"8+ live projects on Vercel, Render & Firebase" },
              { icon:"🔐", title:"Security-First Backend", sub:"JWT auth, role-based access, OTP verification" },
              { icon:"🤝", title:"Collaborative Builder",  sub:"Hackathons, internships & open-source contributions" },
              { icon:"📚", title:"Continuous Learner",     sub:"DSA practice, cloud certifications, new frameworks" },
            ].map(h => (
              <div className="about-highlight-item" key={h.title}>
                <div className="ahi-icon">{h.icon}</div>
                <div className="ahi-text">
                  <strong>{h.title}</strong>
                  <span>{h.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-card-stack">
          <div className="about-info-card">
            <h3>🎓 Education</h3>
            <div className="about-edu-row">
              <div>
                <strong style={{ fontSize:15 }}>B.Tech Information Technology</strong>
                <p>Shri Vishnu Engineering College for Women</p>
                <p style={{ color:"var(--text-soft)", fontSize:13 }}>2024 – 2028</p>
              </div>
              <div className="about-cgpa">9.47</div>
            </div>
          </div>

         <div className="about-info-card">
  <h3>💻 Currently Working On</h3>

  <p>
    Currently working on student services and freelance-based
    projects, developing responsive websites, business platforms,
    dashboards, and digital solutions for students and small
    businesses.
  </p>

  <p style={{ marginTop: 12 }}>
    Continuously improving frontend engineering, deployment
    workflows, UI/UX design, and real-world product development
    through hands-on client-oriented projects and modern web
    technologies.
  </p>
</div>

          <div className="about-info-card">
            <h3>📍 Location &amp; Availability</h3>
            <p>Based in Andhra Pradesh, India &nbsp;🇮🇳</p>
            <p style={{ marginTop:8 }}>
              <span style={{
                display:"inline-flex", alignItems:"center", gap:6,
                background:"#dcfce7", color:"#15803d",
                padding:"5px 14px", borderRadius:999, fontSize:13, fontWeight:600
              }}>
                <span style={{ width:8, height:8, borderRadius:"50%", background:"#22c55e", display:"inline-block" }} />
                Open to Internships &amp; Remote Roles
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}