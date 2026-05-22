import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">Vindula Sruthi ✦</div>
      <p className="footer-tagline">
        "Building scalable products, one commit at a time."
      </p>
      <div className="footer-socials">
        {[
{
  label:"GitHub",
  href:"https://github.com/sruthi20-07",
  icon:(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.27 7.78 10.78.57.1.78-.25.78-.56v-2.02c-3.17.69-3.84-1.36-3.84-1.36-.52-1.3-1.27-1.65-1.27-1.65-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.05-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.59.23 2.77.11 3.06.73.79 1.17 1.81 1.17 3.05 0 4.37-2.66 5.34-5.2 5.63.41.35.77 1.04.77 2.1v3.11c0 .31.21.67.79.56 4.51-1.51 7.77-5.76 7.77-10.78C23.25 5.48 18.27.5 12 .5z"/>
    </svg>
  )
},
          { label:"LinkedIn", href:"https://www.linkedin.com/in/sruthi-vindula-84437932b",       icon:"in" },
          { label:"Email",    href:"mailto:vindulasruthi20@gmail.com",                           icon:"@"  },
        ].map(s => (
          <a key={s.label} href={s.href} className="footer-social"
            title={s.label} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
            <span style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
  {s.icon}
</span>
          </a>
        ))}
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} Vindula Sruthi · Built with React · Designed with ✦
      </p>
    </footer>
  );
}