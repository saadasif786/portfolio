import React, { useEffect, useState } from "react";
import "./home.css";

/* ========= Theme helpers ========= */
const THEME_KEY = "theme-v2";
const systemPref = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";

/* ========= Name component ========= */
export function Name() {
  return (
    <div className="name">
      <h1 className="name__title gradient-text">Saad Asif</h1>
      <p className="name__subtitle">AI Engineer — NLP • Computer Vision • MLOps</p>
      <p className="name__tagline">“I build production-grade AI that ships, scales, and sells.”</p>
      <p className="name__location">Karachi, Pakistan (Asia/Karachi, UTC+5)</p>
    </div>
  );
}

export default function Home() {
  /* ========== Theme toggle ========== */
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || systemPref());
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  /* ========== Data (EDIT HERE) ========== */
  const avatar = "/src/assets/img/headshot.webp"; // your photo
  const email = "you@domain.com";
  const calendly = "https://calendly.com/your-handle/strategy-call";

  const expertise = [
    "NLP (LLMs, RAG)", "Computer Vision (Det/Seg)", "ML (tabular/time series)",
    "Deep Learning (PyTorch/TensorFlow)",  "FastAPI • Flask • Node • React", "• AI Automation"
  ];

  // ✨ Experience split
  const professionalExp = [
    {
      org: "Dream Job Hub (SaaS)",
      role: "AI Engineer",
      period: "2024 — Present",
      wins: [
        "LLM job-matching (RAG + embeddings) to production.",
        "↑23% ranking accuracy · ↓37% inference cost.",
        "AWS infra with CI/CD & observability.",
      ],
    },
    {
      org: "Client Projects",
      role: "Healthcare Automation",
      period: "2023 — 2024",
      wins: [
        "Blue/green deploys, zero-downtime rollouts.",
        "Autoscaling to >10M req/mo; SLO dashboards.",
        "Security hardening + IaC baselines.",
      ],
    },
  ];

  const academicExp = [
    {
      org: "Freelancing",
      role: "AI Engineer",
      period: "2023 — 2024",
      wins: [
        "Nrfi Stats",
        "E-commerce Automation through AI",
        "Talk with PDFs using AI",
      ],
    },
    {
      org: "Course Projects",
      role: "NLP/CV Lead",
      period: "2023 — 2023",
      wins: [
        "RAG pipelines with hybrid search & evaluation.",
        "Segmentation pipelines for medical imaging.",
        "Reproducible notebooks + experiment tracking.",
      ],
    },
  ];

  const projects = [
    {
      tag: "AI SAAS",
      title: "AI powered Dream job HuB",
      value: "Cuts support time by 52%",
      points: ["Hybrid search recall +18%", "Latency <700ms", "Role-aware prompts"],
      tech: "Python, FastAPI, FAISS, Redis",
      img: "/src/assets/img/my-nlp-project1.png",
      demo: "#",
      repo: "#",
    },
    {
      tag: "Text to Image",
      title: "Image Generation",
      value: "Macro AUC 0.94",
      points: ["EfficientNetB3 FT", "Robust to imbalance", "Auto-generated reports"],
      tech: "PyTorch/TensorFlow, StableDiffision",
      img: "/src/assets/img/project2.png",
      demo: "#",
      repo: "#",
    },
    {
      tag: "RaG Chatbot",
      title: "HealthCare chatbot",
      value: "Blue/green zero-downtime",
      points: ["Health checks", ">10M req/mo", "Traces, metrics, logs"],
      tech: "Docker, K8s, Grafana",
      img: "/src/assets/img/project3.png",
      demo: "#",
      repo: "#",
    },
    // add more items here – they’ll appear in the “See more” list (name + description only)
  ];

  /* ========== Scroll reveal ========== */
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-revealed")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Projects: first 3 (with images)
  const topThree = projects.slice(0, 3);
  // toggle for “see more”
  const [showMore, setShowMore] = useState(false);

  const tagClass = (tag) => `tag--${String(tag).toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <main className="home v2">
      {/* Topbar */}
      <header className="topbar" role="banner">
        <a href="#top" className="brand" aria-label="Go to top">
          <img src="/logo.svg" alt="" width="28" height="28" />
          <span>AI Portfolio</span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="theme"
          onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          <span className="i">🌗</span>
        </button>
      </header>

      {/* HERO */}
      <section className="hero" id="top" role="region" aria-label="Hero">
        <div className="blob blob--1" aria-hidden="true" />
        <div className="blob blob--2" aria-hidden="true" />
        <div className="hero__inner">
          <div className="hero__left" data-reveal>
            <div className="avatar-wrap">
              <img className="avatar" src={avatar} alt="Profile headshot" />
              <span className="ring" aria-hidden="true" />
            </div>
          </div>
          <div className="hero__right" data-reveal>
            <Name />
            <div className="cta-row">
              <a className="btn btn--primary" href={calendly} target="_blank" rel="noreferrer">
                Book a Free AI Strategy Call
              </a>
              <a className="btn btn--ghost" href={`mailto:${email}`}>Email Me</a>
            </div>
            <div className="marquee" aria-hidden="true">
              <span>LLMs • RAG • CV • MLOps • PyTorch • TensorFlow • FastAPI • Docker • AWS • GCP • </span>
              <span>LLMs • RAG • CV • MLOps • PyTorch • TensorFlow • FastAPI • Docker • AWS • GCP • </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section container" data-reveal>
        <h2 className="section__title">About</h2>
        <p className="muted maxch">
          I help teams ship reliable AI to production—NLP copilots, computer-vision analytics, and
          end-to-end MLOps. I optimize for measurable outcomes, lower latency, and scalable costs.
        </p>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="section container" data-reveal>
        <h2 className="section__title">Expertise</h2>
        <ul className="pills" role="list">
          {expertise.map((x) => (
            <li key={x} className="pill">{x}</li>
          ))}
        </ul>
      </section>

      {/* EXPERIENCE — Vertical Timeline */}
      <section id="experience" className="section container" data-reveal>
        <h2 className="section__title">Experience</h2>

        <div className="exp-legend">
          <span className="chip pro">Professional</span>
          <span className="chip acad">Academic</span>
        </div>

        <ol className="vtl">
          {professionalExp.map((e, i) => (
            <li key={`pro-${i}`} className="vtl__item" data-type="pro" style={{ "--i": i }}>
              <div className="vtl__dot" aria-hidden="true" />
              <article className="vtl__card">
                <header className="vtl__top">
                  <h3 className="vtl__role">{e.role}</h3>
                  <span className="vtl__period">{e.period}</span>
                </header>
                <div className="vtl__meta">{e.org}</div>
                <ul className="list vtl__list">
                  {e.wins.map((w, j) => <li key={j}>{w}</li>)}
                </ul>
              </article>
            </li>
          ))}

          {academicExp.map((e, i) => (
            <li key={`acad-${i}`} className="vtl__item" data-type="acad" style={{ "--i": i + professionalExp.length }}>
              <div className="vtl__dot" aria-hidden="true" />
              <article className="vtl__card">
                <header className="vtl__top">
                  <h3 className="vtl__role">{e.role}</h3>
                  <span className="vtl__period">{e.period}</span>
                </header>
                <div className="vtl__meta">{e.org}</div>
                <ul className="list vtl__list">
                  {e.wins.map((w, j) => <li key={j}>{w}</li>)}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </section>

      {/* PROJECTS — 3 image cards + inline see-more (name + description only) */}
      <section id="projects" className="section container" data-reveal>
        <div className="section__header">
          <h2 className="section__title">Selected Projects</h2>

          <button
            className="btn btn--small btn-toggle"
            onClick={() => setShowMore((v) => !v)}
            aria-expanded={showMore}
            aria-controls="more-projects-inline"
            title={showMore ? "Hide more projects" : "See more projects"}
          >
            {showMore ? "Hide more " : "See more "}
            <span className={`chev ${showMore ? "up" : "down"}`} aria-hidden="true" />
          </button>
        </div>

        <div className="proj-grid">
          {topThree.map((p, i) => (
            <article key={i} className="proj">
              <div className="proj__media">
                <img src={p.img} alt={`${p.title} thumbnail`} loading="lazy" />
                <span className={`tag ${tagClass(p.tag)}`}>{p.tag}</span>
              </div>
              <div className="proj__body">
                <h3 className="proj__title">{p.title}</h3>
                <p className="proj__value">{p.value}</p>
                <ul className="list">{p.points.map((pt, k) => <li key={k}>{pt}</li>)}</ul>
                <p className="proj__tech">{p.tech}</p>
              </div>
              <div className="proj__actions">
                <a className="btn btn--small btn--primary" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>
                <a className="btn btn--small btn--ghost" href={p.repo} target="_blank" rel="noreferrer">Repo</a>
              </div>
            </article>
          ))}
        </div>

        {/* inline compact list (name + description only) */}
        <div
          id="more-projects-inline"
          className={`proj-more ${showMore ? "is-open" : ""}`}
          role="region"
          aria-label="More projects (names and descriptions)"
        >
          <ul className="proj-compact-list" role="list">
            {projects.map((p, i) => (
              <li className="proj-compact" key={`more-${i}`} style={{ "--i": i }}>
                <h3 className="proj-compact__title">{p.title}</h3>
                <p className="proj-compact__desc">{p.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT (unchanged) */}
      <section id="contact" className="section container" data-reveal>
        <h2 className="section__title">Contact</h2>
        <div className="contact-grid">
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              const name = new FormData(e.currentTarget).get("name");
              alert(`Thanks, ${name || "there"}! I’ll get back to you shortly.`);
              e.currentTarget.reset();
            }}
          >
            <div className="form__row">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="form__row">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@domain.com" required />
            </div>
            <div className="form__row">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell me about your project…" required />
            </div>
            <button className="btn btn--primary" type="submit">Send Message</button>
          </form>

          <aside className="contact-aside">
            <p>Prefer scheduling?</p>
            <a className="btn btn--ghost" href={calendly} target="_blank" rel="noreferrer">
              Book a Free AI Strategy Call
            </a>
            <p className="muted">Or email me directly: <a className="link" href={`mailto:${email}`}>{email}</a></p>
          </aside>
        </div>
      </section>

      <footer className="site-footer" role="contentinfo">
        © {new Date().getFullYear()} Saad Asif — All rights reserved.
      </footer>
    </main>
  );
}
