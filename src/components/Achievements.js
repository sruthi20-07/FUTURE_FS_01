import React, { useEffect, useRef } from "react";

const STATS = [
  { icon:"🎓", num:"9.47", label:"CGPA — Top of Class" },
  { icon:"🚀", num:"8+",   label:"Live Deployed Projects" },
  { icon:"💼", num:"2",    label:"Internships Completed" },
  { icon:"🏆", num:"5+",   label:"Hackathons Participated" },
  { icon:"🔗", num:"10+",  label:"APIs Built & Deployed" },
  { icon:"☁️", num:"3",    label:"Cloud Platforms Used" },
  { icon:"⭐", num:"Top 20",label:"Code Vipassana (National)" },
  { icon:"📦", num:"50+",  label:"LeetCode Problems Solved" },
];

export default function Achievements() {
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
    <section className="section section-alt" id="achievements">
      <div ref={ref} className="fade-up">
        <span className="section-label">Achievements</span>
        <h2 className="section-title">Numbers That Define Me</h2>
        <div className="section-divider" />
        <p className="section-sub">Milestones from academics, hackathons &amp; real projects</p>
      </div>

      <div className="achievements-grid">
        {STATS.map((s, i) => (
          <div className="achievement-card fade-up" key={s.label}
            style={{ transitionDelay:`${i * 0.07}s` }}>
            <div className="achievement-icon">{s.icon}</div>
            <div className="achievement-num">{s.num}</div>
            <div className="achievement-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}