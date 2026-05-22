import React, { useEffect, useRef, useState } from "react";

const CONTACTS = [
  { icon:"📞", label:"Phone",         value:"+91 6304206091",                    href:"tel:+916304206091" },
  { icon:"✉️", label:"Email",          value:"vindulasruthi20@gmail.com",         href:"mailto:vindulasruthi20@gmail.com" },
  { icon:"🎓", label:"College Email",  value:"24b01a12i8@gmail.com",              href:"mailto:24b01a12i8@gmail.com" },
  { icon:"💼", label:"LinkedIn",       value:"linkedin.com/in/sruthi-vindula",    href:"https://www.linkedin.com/in/sruthi-vindula-84437932b" },
  {
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.27 7.78 10.78.57.1.78-.25.78-.56v-2.02c-3.17.69-3.84-1.36-3.84-1.36-.52-1.3-1.27-1.65-1.27-1.65-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.05-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.59.23 2.77.11 3.06.73.79 1.17 1.81 1.17 3.05 0 4.37-2.66 5.34-5.2 5.63.41.35.77 1.04.77 2.1v3.11c0 .31.21.67.79.56 4.51-1.51 7.77-5.76 7.77-10.78C23.25 5.48 18.27.5 12 .5z"/>
    </svg>
  ),

  label:"GitHub",

  value:"github.com/sruthi20-07",

  href:"https://github.com/sruthi20-07"
},
];
export default function Contact() {
  const ref = useRef(null);
  const [sent, setSent] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your form submission logic (e.g. EmailJS / Formspree)
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section className="section" id="contact">
      <div ref={ref} className="fade-up">
        <span className="section-label">Contact</span>
        <h2 className="section-title">Let's Work Together</h2>
        <div className="section-divider" />
        <p className="section-sub">Open to internships, collaborations &amp; exciting opportunities</p>
      </div>

      <div className="contact-layout fade-up fade-up-delay-1">
        {/* left — links */}
        <div className="contact-info">
          {CONTACTS.map(c => (
            <a key={c.label} href={c.href} className="contact-card"
              target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <div
  className="contact-card-icon"
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  {c.icon}
</div>
              <div>
                <div className="contact-card-label">{c.label}</div>
                <div className="contact-card-value">{c.value}</div>
              </div>
              <span style={{ marginLeft:"auto", color:"var(--text-soft)", fontSize:18 }}>→</span>
            </a>
          ))}
        </div>

        {/* right — form */}
        <div className="contact-form-wrap">
          <h3>Send me a message 💌</h3>
          {sent && (
            <div style={{
              background:"#dcfce7", color:"#15803d", padding:"12px 16px",
              borderRadius:10, marginBottom:16, fontSize:14, fontWeight:600
            }}>
              ✅ Message sent! I'll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Last name" />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Internship / Collaboration / Other" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows={5} placeholder="Tell me about the opportunity..." required />
            </div>
            <button type="submit" className="form-submit">
              Send Message ✦
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}