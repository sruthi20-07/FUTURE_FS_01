import React, { useEffect, useRef } from "react";

const CERTS = [
  { icon:"🏆", bg:"#fef3c7", name:"Code Vipassana Season 13", issuer:"GDG Cloud / Google", year:"2026", badge:"Top 20 Nationally" },
  { icon:"☁️", bg:"#dbeafe", name:"Generative AI Studio",     issuer:"Google Cloud",       year:"2025", badge:"Completed" },
  { icon:"⭐", bg:"#ede9fe", name:"Salesforce Trailhead",      issuer:"Salesforce",          year:"2025", badge:"Champion + Superbadge" },
  { icon:"🛡️", bg:"#dcfce7", name:"HackXIOS 2K25",            issuer:"AWS Sponsored",       year:"2026", badge:"National Level" },
  { icon:"💡", bg:"#fce7f3", name:"IEEE Coding Contest",       issuer:"IEEE",               year:"2025", badge:"Participation" },
  { icon:"🔷", bg:"#dbeafe", name:"Azure Fundamentals",        issuer:"Microsoft Azure",     year:"2025", badge:"Completed" },
  { icon:"💻", bg:"#f0fdf4", name:"Oracle Cloud Foundation",   issuer:"Oracle",              year:"—",    badge:"In Progress" },
];

export default function Certifications() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); },
      { threshold: 0.1 }
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

  return (
    <section className="section" id="certifications">
      <div ref={ref} className="fade-up">
        <span className="section-label">Certifications</span>
        <h2 className="section-title">Credentials &amp; Recognition</h2>
        <div className="section-divider" />
        <p className="section-sub">Certificates, awards, and hackathon recognition</p>
      </div>

      <div className="cert-grid">
        {CERTS.map((c, i) => (
          <div className="cert-card fade-up" key={c.name}
            style={{ transitionDelay:`${i * 0.08}s` }}>
            <div className="cert-icon" style={{ background: c.bg }}>
              {c.icon}
            </div>
            <div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-issuer">{c.issuer}</div>
              <div className="cert-year">{c.year}</div>
              <span className="cert-badge">{c.badge}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}