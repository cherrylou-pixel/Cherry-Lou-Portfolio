"use client";

import { useEffect } from "react";

const skills = [
  "Web Development",
  "Graphic Design",
  "General Virtual Assistance",
  "Digital Marketing",
  "Lead Generation",
  "Prospect Research",
  "Content Creation",
  "Social Media Management",
  "Canva",
  "ChatGPT",
  "Google Workspace",
  "Research & Organization",
];

const tools = [
  "Canva",
  "ChatGPT",
  "Google Workspace",
  "Microsoft Office",
  "Social Media",
  "HTML / CSS",
  "JavaScript",
];

const projects = [
  {
    number: "01",
    title: "Project One",
    category: "WEB DEVELOPMENT",
    description:
      "Replace this with your project description. Explain what you created, your role, and the result.",
    tags: ["Website", "Design", "Development"],
  },
  {
    number: "02",
    title: "Project Two",
    category: "GRAPHIC DESIGN",
    description:
      "Showcase a graphic design project, social media content, branding project, or creative work here.",
    tags: ["Canva", "Design", "Creative"],
  },
  {
    number: "03",
    title: "Project Three",
    category: "DIGITAL MARKETING",
    description:
      "Add a marketing, lead generation, content creation, or research project here.",
    tags: ["Marketing", "Research", "Content"],
  },
];

const experience = [
  {
    date: "20XX — PRESENT",
    role: "Your Current Position",
    company: "Company / Organization",
    description:
      "Replace this with your responsibilities, achievements, and experience.",
  },
  {
    date: "20XX — 20XX",
    role: "Previous Position",
    company: "Company / Organization",
    description:
      "Add another professional, freelance, internship, or academic experience here.",
  },
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <div className="cursor-glow" />

      {/* NAVIGATION */}
      <header className="nav-wrap">
        <nav className="nav">
          <a href="#home" className="brand">
            CHERRY<span>LOU</span>
          </a>

          <div className="nav-links">
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#work">Work</a>
  <a href="#experience">Experience</a>
</div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="hero section">
        <div className="hero-grid" />

        <div className="hero-content reveal">
          <div className="availability">
            <span className="status-dot" />
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="hero-small">HELLO, I&apos;M</p>

          <h1>
            Cherry
            <br />
            <span>Lou.</span>
          </h1>

          <div className="hero-role">
            <span>Web Developer</span>
            <i>/</i>
            <span>Graphic Designer</span>
            <i>/</i>
            <span>Virtual Assistant</span>
          </div>

          <p className="hero-description">
            I create clean digital experiences, thoughtful visuals, and
            organized solutions that help people and businesses turn ideas
            into something real.
          </p>

          <div className="hero-buttons">
  <a href="#work" className="button button-primary">
    Explore my work <span>↓</span>
  </a>

  <a href="/resume.pdf" className="button button-outline">
    Download Resume <span>↗</span>
  </a>

  <a href="#contact" className="button button-outline">
    Let's Talk <span>↗</span>
  </a>
</div>
        </div>

        <div className="hero-side">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-circle">
            <span>CREATIVE</span>
            <strong>CL</strong>
            <span>DIGITAL</span>
          </div>
        </div>

        <div className="hero-bottom">
          <span>BASED IN THE PHILIPPINES</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="section-top reveal">
          <span className="section-number">01</span>
          <span className="section-name">ABOUT ME</span>
        </div>

        <div className="about-grid">
          <div className="about-heading reveal">
            <p className="mini-label">A LITTLE ABOUT ME</p>
            <h2>
              Creative mind,
              <br />
              <em>organized execution.</em>
            </h2>
          </div>

          <div className="about-text">
  <p className="large-text">
    I&apos;m Cherry Lou — a creative and detail-oriented professional
    with an interest in web development, graphic design, digital
    marketing, and virtual assistance.
  </p>

  <p>
    I&apos;m a multidisciplinary creative with a background that combines
    graphic design, multimedia arts, office administration, and digital
    development. In 2025, I graduated from two degree programs
    simultaneously: Bachelor of Multimedia Arts – Graphic Design
    Specialization at CIIT College of Arts and Technology and Bachelor
    of Science in Office Administration at Pangasinan State University.
  </p>

  <p>
    My journey began as an academic commissioner, where I took on a
    wide range of roles—from research writer and analyst to teacher,
    math tutor, and physics tutor. This experience taught me how to
    communicate ideas clearly, solve problems creatively, and adapt to
    different challenges.
  </p>

  <p>
    In 2023, I expanded my experience into the gaming industry, working
    as a web developer for one gaming company and a graphic designer
    for another until 2025. These experiences allowed me to combine my
    technical skills with my passion for visual storytelling and
    design.
  </p>

  <p>
    I enjoy working where creativity and organization meet. Whether
    it&apos;s creating visual content, building a website, researching
    prospects, organizing information, or supporting a digital workflow,
    I focus on producing work that is both visually engaging and useful.
  </p>

  <p>
    I&apos;m always learning, experimenting, and looking for better ways
    to turn ideas into meaningful digital experiences.
  </p>
</div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section services-section">
        <div className="section-top reveal">
          <span className="section-number">02</span>
          <span className="section-name">WHAT I DO</span>
        </div>

        <div className="services-heading reveal">
          <h2>
            Skills that
            <br />
            <em>make ideas happen.</em>
          </h2>
          <p>
            A combination of creative, technical, and organizational skills
            that I can bring into different projects.
          </p>
        </div>

        <div className="service-list">
          <article className="service-card reveal">
            <span className="service-number">01</span>
            <div>
              <p className="service-label">DIGITAL</p>
              <h3>Web Development</h3>
              <p>
                Building clean, responsive, and user-friendly digital
                experiences.
              </p>
            </div>
            <span className="service-arrow">↗</span>
          </article>

          <article className="service-card reveal">
            <span className="service-number">02</span>
            <div>
              <p className="service-label">CREATIVE</p>
              <h3>Graphic Design</h3>
              <p>
                Creating aesthetic visuals, layouts, graphics, and content
                designed to communicate clearly.
              </p>
            </div>
            <span className="service-arrow">↗</span>
          </article>

          <article className="service-card reveal">
            <span className="service-number">03</span>
            <div>
              <p className="service-label">SUPPORT</p>
              <h3>Virtual Assistance</h3>
              <p>
                Helping organize tasks, information, research, and digital
                workflows efficiently.
              </p>
            </div>
            <span className="service-arrow">↗</span>
          </article>

          <article className="service-card reveal">
            <span className="service-number">04</span>
            <div>
              <p className="service-label">GROWTH</p>
              <h3>Digital Marketing</h3>
              <p>
                Supporting lead generation, prospect research, content
                creation, and social media initiatives.
              </p>
            </div>
            <span className="service-arrow">↗</span>
          </article>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills-section">
        <div className="skills-intro reveal">
          <div>
            <p className="mini-label">SKILLS & EXPERTISE</p>
            <h2>
              What I
              <br />
              <em>bring to the table.</em>
            </h2>
          </div>

          <p>
            Replace these skills with your own. You can easily edit the
            <strong> skills</strong> array in this file later.
          </p>
        </div>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-item reveal" key={skill}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{skill}</h3>
              <span className="skill-icon">↗</span>
            </div>
          ))}
        </div>

        <div className="tools">
          <p className="mini-label">TOOLS I USE</p>

          <div className="tool-list">
            {tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="section work-section">
        <div className="section-top reveal">
          <span className="section-number">03</span>
          <span className="section-name">SELECTED WORK</span>
        </div>

        <div className="work-heading reveal">
          <h2>
            Selected
            <br />
            <em>projects.</em>
          </h2>

          <p>
            A collection of work that represents my creativity, skills, and
            approach. Replace these placeholders with your actual projects.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card reveal ${
                project.number === "01" ? "project-featured" : ""
              }`}
              key={project.number}
            >
              <div className="project-preview">
                <div className="preview-grid" />
                <span className="project-number">{project.number}</span>

                <div className="preview-title">
                  <span>CHERRY</span>
                  <strong>LOU</strong>
                </div>

                <span className="preview-arrow">↗</span>
              </div>

              <div className="project-details">
                <div>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                </div>

                <p className="project-description">
                  {project.description}
                </p>
              </div>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section experience-section">
        <div className="section-top reveal">
          <span className="section-number">04</span>
          <span className="section-name">EXPERIENCE</span>
        </div>

        <div className="experience-heading reveal">
          <h2>
            My
            <br />
            <em>journey.</em>
          </h2>
        </div>

        <div className="experience-list">
          {experience.map((item, index) => (
            <article className="experience-item reveal" key={index}>
              <div className="experience-date">{item.date}</div>

              <div className="experience-main">
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company}</p>
                <p>{item.description}</p>
              </div>

              <span className="experience-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-background">
          <div className="contact-ring ring-one" />
          <div className="contact-ring ring-two" />
          <div className="contact-ring ring-three" />
        </div>

        <div className="section contact-inner">
          <p className="mini-label reveal">05 / LET&apos;S CONNECT</p>

          <h2 className="reveal">
            Let&apos;s create
            <br />
            something <em>great.</em>
          </h2>

          <p className="contact-description reveal">
            Have a project, opportunity, or idea in mind? I&apos;d love to hear
            about it.
          </p>

          <a
            href="mailto:your@email.com"
            className="contact-email reveal"
          >
            your@email.com <span>↗</span>
          </a>

          <div className="social-links reveal">
            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              Facebook ↗
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              Instagram ↗
            </a>
            <a href="/resume.pdf">
              Resume ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span>© 2026 CHERRY LOU</span>
        <span>WEB · DESIGN · DIGITAL</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
