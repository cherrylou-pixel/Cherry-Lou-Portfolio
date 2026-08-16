"use client";

import { useEffect } from "react";

const skills = [
  "Web Development",
  "Graphic Design",
  "Virtual Assistance",
  "UI / UX",
  "Content Creation",
  "Research",
  "Digital Organization",
  "Administrative Support",
];

const tools = [
  "Canva",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Figma",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Google Workspace",
  "ChatGPT",
];

const projects = [
  {
    number: "01",
    title: "Project One",
    category: "Web Development",
    description:
      "Replace this with your actual project description.",
  },
  {
    number: "02",
    title: "Project Two",
    category: "Graphic Design",
    description:
      "Replace this with your actual project description.",
  },
  {
    number: "03",
    title: "Project Three",
    category: "Creative Work",
    description:
      "Replace this with your actual project description.",
  },
];

const experiences = [
  {
    year: "2023 — 2025",
    role: "Web Developer",
    company: "Gaming Company",
    description:
      "Worked on website development and digital projects, helping create functional and user-friendly web experiences.",
  },
  {
    year: "2023 — 2025",
    role: "Graphic Designer",
    company: "Gaming Company",
    description:
      "Created visual content, graphics, layouts, and digital materials while maintaining visual consistency and creative direction.",
  },
  {
    year: "Earlier Experience",
    role: "Academic Commissioner",
    company: "Academic / Freelance",
    description:
      "Worked as a research writer, analyst, teacher, math tutor, and physics tutor while handling different academic and organizational responsibilities.",
  },
];

export default function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* NAVIGATION */}
      <header className="nav">
        <a href="#home" className="logo">
          CHERRY<span>LOU</span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="availability">
          <span className="status-dot"></span>
          AVAILABLE FOR OPPORTUNITIES
        </div>

        <div className="hero-content">
          <p className="hero-small">HELLO, I'M</p>

          <h1>
            Cherry
            <br />
            <em>Lou.</em>
          </h1>

          <p className="hero-role">
            WEB DEVELOPER / GRAPHIC DESIGNER
            <br />
            GENERAL VIRTUAL ASSISTANT
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

        <div className="hero-bottom">
          <span>BASED IN THE PHILIPPINES</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-top">
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

          <div className="about-text reveal">
            <p className="large-text">
              I&apos;m Cherry Lou — a creative and detail-oriented
              professional with an interest in web development, graphic
              design, and virtual assistance.
            </p>

            <p>
              I&apos;m a multidisciplinary creative with a background that
              combines graphic design, multimedia arts, office
              administration, and digital development. In 2025, I graduated
              from two degree programs simultaneously: Bachelor of Multimedia
              Arts – Graphic Design Specialization at CIIT College of Arts
              and Technology and Bachelor of Science in Office Administration
              at Pangasinan State University.
            </p>

            <p>
              My journey began as an academic commissioner, where I took on
              a wide range of roles—from research writer and analyst to
              teacher, math tutor, and physics tutor. This experience taught
              me how to communicate ideas clearly, solve problems creatively,
              and adapt to different challenges.
            </p>

            <p>
              In 2023, I expanded my experience into the gaming industry,
              working as a web developer for one gaming company and a graphic
              designer for another until 2025. These experiences allowed me
              to combine my technical skills with my passion for visual
              storytelling and design.
            </p>

            <p>
              I enjoy working where creativity and organization meet. Whether
              it&apos;s creating visual content, building a website,
              researching prospects, organizing information, or supporting a
              digital workflow, I focus on producing work that is both
              visually engaging and useful.
            </p>

            <p>
              I&apos;m always learning, experimenting, and looking for better
              ways to turn ideas into meaningful digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="section-top">
          <span className="section-number">02</span>
          <span className="section-name">WHAT I DO</span>
        </div>

        <div className="services-grid">
          <div className="services-heading reveal">
            <p className="mini-label">SERVICES</p>

            <h2>
              What I
              <br />
              <em>do.</em>
            </h2>
          </div>

          <div className="services-list">
            {/* WEB DEVELOPMENT */}
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

              <span
                className="service-arrow"
                aria-label="View Web Development work"
              >
                ↗
              </span>
            </article>

            {/* GRAPHIC DESIGN */}
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

              <span
                className="service-arrow"
                aria-label="View Graphic Design work"
              >
                ↗
              </span>
            </article>

            {/* VIRTUAL ASSISTANCE */}
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

              <span
                className="service-arrow"
                aria-label="View Virtual Assistance work"
              >
                ↗
              </span>
            </article>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="section-top">
          <span className="section-number">02A</span>
          <span className="section-name">SKILLS &amp; EXPERTISE</span>
        </div>

        <div className="skills-grid">
          <div className="skills-intro reveal">
            <p className="mini-label">CAPABILITIES</p>

            <h2>
              Skills &amp;
              <br />
              <em>expertise.</em>
            </h2>
          </div>

          <div className="skills-content reveal">
            <div className="skill-list">
              {skills.map((skill, index) => (
                <span key={skill}>
                  {String(index + 1).padStart(2, "0")} {skill}
                </span>
              ))}
            </div>

            <div className="tools-list">
              <p className="mini-label">TOOLS</p>

              <div className="tool-tags">
                {tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="section" id="work">
        <div className="section-top">
          <span className="section-number">03</span>
          <span className="section-name">SELECTED WORK</span>
        </div>

        <div className="work-heading reveal">
          <p className="mini-label">PORTFOLIO</p>

          <h2>
            Selected
            <br />
            <em>projects.</em>
          </h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article
              className="project-card reveal"
              key={project.number}
            >
              <div className="project-number">
                {project.number}
              </div>

              <div className="project-content">
                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>

              <span className="project-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="section-top">
          <span className="section-number">04</span>
          <span className="section-name">EXPERIENCE</span>
        </div>

        <div className="experience-grid">
          <div className="experience-heading reveal">
            <p className="mini-label">MY JOURNEY</p>

            <h2>
              Experience &amp;
              <br />
              <em>growth.</em>
            </h2>
          </div>

          <div className="experience-list">
            {experiences.map((experience) => (
              <article
                className="experience-card reveal"
                key={experience.role}
              >
                <span className="experience-year">
                  {experience.year}
                </span>

                <div>
                  <h3>{experience.role}</h3>

                  <p className="experience-company">
                    {experience.company}
                  </p>

                  <p>{experience.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        className="contact-section section"
        id="contact"
      >
        <p className="mini-label reveal">
          <span className="contact-number">05</span>
          <span className="contact-label">
            {" "}
            / LET&apos;S CONNECT
          </span>
        </p>

        <div className="contact-content reveal">
          <h2>
            Let&apos;s make
            <br />
            something <em>meaningful.</em>
          </h2>

          <p>
            Have a project, opportunity, or idea in mind? I&apos;d love
            to hear about it.
          </p>

          <a
            href="mailto:your@email.com"
            className="contact-email"
          >
            your@email.com ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span>© 2026 CHERRY LOU</span>
        <span>WEB · DESIGN · SUPPORT</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
