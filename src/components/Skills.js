import React, { useEffect, useRef } from "react";

const SKILLS = [
  {
    icon:"⚛️",
    title:"Frontend",
    chips:[
      "React.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive UI/UX"
    ]
  },

  {
    icon:"🔧",
    title:"Backend",
    chips:[
      "Node.js",
      "Express.js",
      "Spring Boot",
      "REST APIs",
      "JWT Auth",
      "Socket.io"
    ]
  },

  {
    icon:"🗄️",
    title:"Databases",
    chips:[
      "MongoDB",
      "MySQL",
      "Firebase Firestore",
      "Supabase",
      "SQL"
    ]
  },

  {
    icon:"☁️",
    title:"Cloud & DevOps",
    chips:[
      "Microsoft Azure",
      "Firebase Hosting",
      "Vercel",
      "Render",
      "Git",
      "GitHub"
    ]
  },

  {
    icon:"🧠",
    title:"Core CS",
    chips:[
      "Data Structures",
      "Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems"
    ]
  },

  {
    icon:"🤖",
    title:"AI / ML",
    chips:[
      "Python",
      "Scikit-learn",
      "KNN",
      "Feature Engineering",
      "Model Evaluation"
    ]
  },

  {
    icon:"✨",
    title:"AI Tools",
    chips:[
      "ChatGPT",
      "Claude AI",
      "Gemini",
      "Cursor",
      "Lovable",
      "Gamma AI",
      "Nano Banana",
      "Supabase AI"
    ]
  },

  {
    icon:"🛠️",
    title:"Productivity & Tools",
    chips:[
      "Overleaf",
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Microsoft Word",
      "Canva",
      "VS Code",
      "Thunder Client"
    ]
  },

  {
    icon:"☕",
    title:"Languages",
    chips:[
      "Java",
      "Python",
      "JavaScript",
      "C"
    ]
  },
];


export default function Skills() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => ref.current && obs.unobserve(ref.current);
  }, []);

  return (
    <section className="section" id="skills">
      <div ref={ref} className="fade-up">
        <span className="section-label">Skills</span>
        <h2 className="section-title">Technologies I Work With</h2>
        <div className="section-divider" />
        <p className="section-sub">Hover over a chip to highlight it</p>
      </div>

      <div className="skills-wrapper">
        {SKILLS.map((cat, i) => (
          <div className="skill-category-card fade-up" key={cat.title}
            style={{ transitionDelay:`${i * 0.08}s` }}>
            <div className="skill-cat-header">
              <div className="skill-cat-icon">{cat.icon}</div>
              <div className="skill-cat-title">{cat.title}</div>
            </div>
            <div className="skill-chips">
              {cat.chips.map(c => <span key={c} className="skill-chip">{c}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}