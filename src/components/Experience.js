import React, { useEffect, useRef } from "react";

const EXPERIENCES = [
  {
    role: "Student Ambassador",
    org: "Student Tribe",
    date: "Dec 2025 – Present",
    type: "Leadership",
    bullets: [
      "Represent one of India's largest student-support communities across campus",
      "Facilitate workshops, networking events and career development initiatives",
      "Bridge students with mentorship opportunities and learning resources",
    ],
    tags: ["Community", "Leadership", "Networking"],
  },
  {
    role: "Full Stack Development Intern",
    org: "CodVeda Technologies",
    date: "Jan 2026 – Feb 2026",
    type: "Internship",
    bullets: [
      "Engineered 6+ JWT-secured RESTful APIs with role-based access control (Node.js, Express, MongoDB)",
      "Built real-time communication features using Socket.io",
      "Developed responsive frontend interfaces with React.js",
      "Applied structured error handling, input validation & query optimization",
    ],
    tags: ["Node.js", "React", "MongoDB", "JWT", "Socket.io"],
  },
  {
    role: "Web Development Intern",
    org: "FutureInterns",
    date: "Jan 2026 – Feb 2026",
    type: "Internship",
    bullets: [
      "Built a Mini CRM with full lead lifecycle management using Node.js & MySQL",
      "Designed and deployed a responsive portfolio site with backend contact system",
      "Pitched a live cloud-kitchen web solution to stakeholders",
    ],
    tags: ["Node.js", "MySQL", "HTML/CSS", "Deployment"],
  },
  {
    role: "Microsoft Imagine Cup 2026",
    org: "Microsoft",
    date: "2026",
    type: "Hackathon",
    bullets: [
      "Developed AI-powered lung cancer detection prototype",
      "Contributed to end-to-end solution architecture design",
      "Integrated KNN classification model with Azure cloud backend",
    ],
    tags: ["Azure", "ML", "Python", "Scikit-learn"],
  },
  {
    role: "HackXIOS 2K25",
    org: "AWS Sponsored — National Level",
    date: "2026",
    type: "Hackathon",
    bullets: [
      "Built surplus food redistribution platform under 24-hour hackathon",
      "Received national-level recognition from AWS-sponsored event",
      "Implemented real-time donor-to-NGO matching system",
    ],
    tags: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    role: "GDG On-Campus Hackathon",
    org: "Google Developer Groups",
    date: "2025",
    type: "Hackathon",
    bullets: [
      "Designed GuideU — student-centric campus mentorship web application",
      "Collaborated in a team environment to deliver within hackathon deadline",
    ],
    tags: ["React", "Firebase", "Google Auth"],
  },
  {
    role: "Code Vipassana Season 13",
    org: "GDG Cloud",
    date: "2026",
    type: "Achievement",
    bullets: [
      "Secured Top 20 position nationally in Google Cloud AI Applications challenge",
      "Received Exceptional Performance Award",
    ],
    tags: ["Google Cloud", "AI", "Top 20 Nationally"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); },
      { threshold: 0.05 }
    );
    const currentRef = ref.current;

if (currentRef) {
  obs.observe(currentRef);
}

return () => {
  if (currentRef) {
    obs.unobserve(currentRef);
  }
};
  }, []);

  const typeColor = {
    Internship: "#e8776a",
    Hackathon:  "#8b5cf6",
    Achievement:"#059669",
    Leadership: "#0284c7",
  };

  return (
    <section className="section section-alt" id="experience">
      <div ref={ref} className="fade-up">
        <span className="section-label">Experience</span>
        <h2 className="section-title">My Journey So Far</h2>
        <div className="section-divider" />
        <p className="section-sub">Internships, hackathons, and leadership roles</p>
      </div>

      <div className="timeline">
        {EXPERIENCES.map((exp, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <div className="timeline-role">{exp.role}</div>
                  <div className="timeline-org">{exp.org}</div>
                </div>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:6 }}>
                  <span className="timeline-date">{exp.date}</span>
                  <span style={{
                    fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:999,
                    background: typeColor[exp.type] + "22",
                    color: typeColor[exp.type],
                  }}>{exp.type}</span>
                </div>
              </div>
              <ul className="timeline-desc" style={{ paddingLeft:16 }}>
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <div className="timeline-tags">
                {exp.tags.map(t => <span key={t} className="timeline-tag">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}