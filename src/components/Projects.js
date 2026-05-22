import React, { useEffect, useRef } from "react";

const PROJECTS = [
  {
    emoji: "🍱",
    color: "#22c55e",

    title: "HungerLink",

    subtitle: "Food Donation Platform",

    desc:
      "Developed a full-stack food redistribution platform connecting college canteens with NGOs to minimize food wastage and streamline donation workflows. Built with secure role-based dashboards, real-time donation tracking, Firebase database integration, and scalable cloud deployment for seamless access across devices.",

    features: [
      "Role-based dashboards for canteens, NGOs, and administrators",
      "Real-time food donation request and tracking management",
      "Firebase Realtime Database integration for live synchronization",
      "Secure CRUD operations for food inventory handling",
      "Responsive cross-device interface optimized for accessibility",
      "Cloud deployment using Firebase Hosting, Vercel, and Render",
    ],

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Vercel",
      "Render",
    ],

    github: "https://github.com/sruthi20-07/HungerLink",

    live: "https://hunger-link-vskj.vercel.app/login",
  },

  {
    emoji: "🎓",
    color: "#8b5cf6",

    title: "GuideU",

    subtitle: "Academic Mentorship Platform",

    desc:
      "Built a scalable branch-based academic mentorship platform enabling real-time collaboration between juniors, seniors, and alumni. Implemented authentication, gamification systems, AI-powered career guidance, mental wellness modules, and cloud-hosted real-time discussions using Firebase services.",

    features: [
      "Role-based mentorship and discussion ecosystem",
      "Real-time Firestore-powered Q&A discussion platform",
      "Gamification engine with coins, streaks, and leaderboard",
      "AI-powered roadmap and career recommendation module",
      "Mental wellness and stress-tracking module",
      "Google OAuth authentication with Firebase Auth",
      "Real-time notifications with deep-link navigation",
      "Cloud-hosted deployment with Firebase Hosting",
    ],

    tech: [
      "React.js",
      "Firebase",
      "Firebase Hosting",
      "Firestore Database",
      "Firebase Authentication",
      "Google OAuth",
      "Node.js",
      "Vercel",
      "Render",
    ],

    github: "https://github.com/sruthi20-07/GuideU",

    live: "https://guideu-12837.web.app",
  },

  {
    emoji: "🫁",
    color: "#ef4444",

    title: "LungShield",

    subtitle: "Cancer Risk Prediction",

    desc:
      "Engineered an AI-powered lung cancer prediction platform trained on 300+ patient datasets using K-Nearest Neighbors classification. Integrated Azure cloud backend, model evaluation metrics, and responsive frontend deployment for real-time clinical risk analysis.",

    features: [
      "Machine learning prediction model using K-Nearest Neighbors",
      "Trained on 300+ patient records with 15+ clinical parameters",
      "Feature scaling and hyperparameter optimization",
      "Azure cloud backend with SQL database integration",
      "Real-time clinical prediction interface",
      "Accuracy evaluation and classification reporting system",
    ],

    tech: [
      "Python",
      "Scikit-learn",
      "KNN",
      "Azure",
      "SQL",
      "React.js",
      "Vercel",
      "Render",
    ],

    github: "https://github.com/sruthi20-07/lung-cancer-detection",

    live: "https://lung-cancer-detection-seven.vercel.app/",
  },

  {
    emoji: "🏧",
    color: "#f59e0b",

    title: "ATM Simulation",

    subtitle: "Secure Banking Backend",

    desc:
      "Developed a production-grade banking simulation system with secure authentication workflows, transaction lifecycle management, and Spring Boot REST APIs. Integrated Twilio OTP verification and MySQL database support for enhanced banking security and reliable backend operations.",

    features: [
      "Spring Boot REST APIs for banking operations",
      "PIN and Twilio OTP-based multi-layer authentication",
      "Secure deposits, withdrawals, and transaction history",
      "MySQL database integration with optimized backend workflows",
      "Cloud deployment using Render infrastructure",
      "Responsive frontend banking interface",
    ],

    tech: [
      "Spring Boot",
      "Java",
      "MySQL",
      "Twilio",
      "REST APIs",
      "HTML",
      "Render",
    ],

    github: "https://github.com/sruthi20-07/ATM",

    live: "https://atm-backend-ojw0.onrender.com",
  },

  {
    emoji: "🛒",
    color: "#e8776a",

    title: "AskSruthi",

    subtitle: "Service Booking Marketplace",

    desc:
      "Engineered a modern full-stack service marketplace platform with dynamic pricing systems, customer review management, and WhatsApp-integrated booking workflows. Built using Supabase for scalable real-time database operations and optimized cross-device customer engagement.",

    features: [
      "Dynamic service listings with tier-based pricing models",
      "Integrated WhatsApp workflow for direct customer communication",
      "Supabase-powered real-time database management system",
      "Customer review and feedback management functionality",
      "Responsive UI optimized for mobile, tablet, and desktop devices",
      "Production deployment with scalable frontend architecture",
    ],

    tech: [
      "React.js",
      "Node.js",
      "Supabase",
      "Express.js",
      "Vercel",
      "Render",
    ],

    github: "https://github.com/sruthi20-07/StudentSphere",

    live: "https://asksruthi.vercel.app/",
  },
  {
  emoji: "🍽️",
  color: "#f97316",

  title: "Restaurant Website Demo",

  subtitle: "Freelance Client Showcase",

  desc:
    "Designed and developed a modern restaurant business showcase platform for freelance demonstration purposes. Implemented responsive UI layouts, dynamic food showcase sections, customer interaction workflows, and WhatsApp-integrated order/contact functionality for seamless customer communication.",

  features: [
    "Modern responsive restaurant landing page design",
    "Interactive menu and food showcase sections",
    "WhatsApp-integrated customer inquiry and ordering workflow",
    "Optimized UI/UX for mobile, tablet, and desktop devices",
    "Firebase cloud deployment with fast-loading architecture",
    "Freelance-ready business presentation interface",
  ],

  tech: [
    "React.js",
    "Firebase",
    "Firebase Hosting",
    "CSS3",
    "JavaScript",
    "Responsive Design",
  ],

  github: "https://github.com/sruthi20-07/restaurant",

  live: "https://restaurantsdemo-70667.web.app/",
},
{
  emoji: "🛍️",
  color: "#0ea5e9",

  title: "E-Commerce Website Demo",

  subtitle: "Freelance Storefront Demo",

  desc:
    "Built a modern e-commerce storefront demo for freelance portfolio showcasing with responsive product displays, business-oriented layouts, and WhatsApp-integrated customer communication workflows. Focused on creating scalable UI architecture and seamless shopping experience across devices.",

  features: [
    "Responsive e-commerce storefront interface",
    "Dynamic product showcase and category sections",
    "WhatsApp-integrated customer communication workflow",
    "Modern UI/UX optimized for business presentation",
    "Cloud-hosted frontend deployment using Firebase Hosting",
    "Cross-device responsive shopping experience",
  ],

  tech: [
    "React.js",
    "Firebase",
    "Firebase Hosting",
    "CSS3",
    "JavaScript",
    "Responsive Design",
  ],

  github: "https://github.com/sruthi20-07/E-CommerceWeb",

  live: "https://e-commerceweb-409f0.web.app/",
},
{
  emoji: "💰",
  color: "#14b8a6",

  title: "Finance Dashboard",

  subtitle: "Personal Finance Management",

  desc:
    "Developed a modern finance management dashboard for tracking expenses, budgeting insights, and financial overview analytics. Designed with responsive data visualization components, clean dashboard architecture, and real-time financial summary interfaces for improved money management workflows.",

  features: [
    "Interactive finance dashboard with responsive UI components",
    "Expense tracking and financial summary visualization",
    "Modern analytics-style layout for budgeting insights",
    "Responsive cross-device dashboard experience",
    "Cloud deployment using Vercel for scalable accessibility",
    "Clean UI architecture optimized for performance and usability",
  ],

  tech: [
    "React.js",
    "JavaScript",
    "CSS3",
    "Dashboard UI",
    "Responsive Design",
    "Vercel",
  ],

  github: "https://github.com/sruthi20-07/Finance_Dashboard",

  live: "https://finance-dashboard-two-tawny.vercel.app/",
},
{
  emoji: "🍽️",
  color: "#f97316",

  title: "Cloud Kitchen Website",

  subtitle: "Responsive Restaurant Platform",

  desc:
    "Developed a responsive cloud kitchen website during my internship journey at Future Interns, focusing on modern frontend development, intuitive navigation, and clean UI implementation. Designed to provide a seamless food browsing experience with optimized layouts and scalable frontend architecture.",

  features: [
    "Responsive cloud kitchen landing page and food showcase",
    "Clean and modern UI focused on customer engagement",
    "Optimized navigation and structured frontend layout",
    "Cross-device responsive design for mobile and desktop",
    "Frontend deployment using Render cloud hosting",
    "Business-oriented restaurant interface implementation",
  ],

  tech: [
    "React.js",
    "JavaScript",
    "CSS3",
    "Responsive Design",
    "Render",
    "Frontend Development",
  ],

  github: "https://github.com/sruthi20-07/FUTURE_FS_03",

  live: "https://cloud-kitchen-frontend-n6e8.onrender.com",
},
];

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
        }
      },
      { threshold: 0.05 }
    );

    if (ref.current) obs.observe(ref.current);

    return () => ref.current && obs.unobserve(ref.current);
  }, []);

  return (
    <section className="section section-alt" id="projects">
      <div ref={ref} className="fade-up">
        <span className="section-label">Projects</span>

        <h2 className="section-title">Things I've Built</h2>

        <div className="section-divider" />

        <p className="section-sub">
          Production-deployed applications with real-world impact
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <div
            className="project-card fade-up"
            key={p.title}
            style={{
              transitionDelay: `${i * 0.1}s`,
            }}
          >
            {/* Banner */}
            <div className="project-banner">
              <div
                className="project-banner-bg"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${p.color}, transparent)`,
                }}
              />

              <span className="project-banner-emoji">
                {p.emoji}
              </span>
            </div>

            {/* Body */}
            <div className="project-body">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 10,
                  gap: 10,
                  flexWrap: "wrap",
                }}
              >
                <h3
                  className="project-title"
                  style={{ margin: 0 }}
                >
                  {p.title}
                </h3>

                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: 999,
                    background: p.color + "22",
                    color: p.color,
                  }}
                >
                  {p.subtitle}
                </span>
              </div>

              {/* Description */}
              <p className="project-desc">{p.desc}</p>

              {/* Features */}
              <ul className="project-features">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="project-tech-row">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="project-tech-tag"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="project-links">
                <a
                  href={p.github}
                  className="project-link-btn plb-github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ marginRight: 6 }}
                  >
                    <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.27 7.78 10.78.57.1.78-.25.78-.56v-2.02c-3.17.69-3.84-1.36-3.84-1.36-.52-1.3-1.27-1.65-1.27-1.65-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.05-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.59.23 2.77.11 3.06.73.79 1.17 1.81 1.17 3.05 0 4.37-2.66 5.34-5.2 5.63.41.35.77 1.04.77 2.1v3.11c0 .31.21.67.79.56 4.51-1.51 7.77-5.76 7.77-10.78C23.25 5.48 18.27.5 12 .5z"/>
                  </svg>

                  GitHub
                </a>

                <a
                  href={p.live}
                  className="project-link-btn plb-live"
                  target="_blank"
                  rel="noreferrer"
                >
                  ↗ Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}