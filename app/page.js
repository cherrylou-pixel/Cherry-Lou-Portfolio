"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building clean, responsive, and modern websites with a focus on usability, structure, and visual experience.",
  },
  {
    number: "02",
    title: "Graphic Design",
    description:
      "Creating visual content, branding materials, social media graphics, and digital designs that communicate clearly.",
  },
  {
    number: "03",
    title: "Virtual Assistance",
    description:
      "Supporting digital workflows through research, organization, administrative tasks, content support, and data management.",
  },
];

const works = [
  {
    number: "01",
    title: "Web Development",
    type: "WEBSITE",
    description:
      "Responsive websites and digital experiences designed with clean layouts, modern interfaces, and smooth interactions.",
  },
  {
    number: "02",
    title: "Graphic Design",
    type: "VISUAL DESIGN",
    description:
      "Creative visual projects including branding, social media graphics, promotional materials, and digital content.",
  },
  {
    number: "03",
    title: "Virtual Assistance",
    type: "DIGITAL SUPPORT",
    description:
      "Organized research, prospecting, content support, administrative work, and digital workflow management.",
  },
];

export default function Home() {
  const [activeService, setActiveService] = useState(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="site">

      {/* =========================
          FIXED NAVIGATION
      ========================== */}
      <header className="site-header">
        <div
          className="logo"
          onClick={() => scrollToSection("home")}
        >
          CHERRY<span>LOU</span>
        </div>

        <nav className="main-nav">
          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button onClick={() => scrollToSection("services")}>
            Services
          </button>

          <button onClick={() => scrollToSection("work")}>
            Work
          </button>

          <button onClick={() => scrollToSection("experience")}>
            Experience
          </button>
        </nav>
      </header>


      {/* =========================
          HERO
      ========================== */}
      <section className="hero" id="home">

        <div className="hero-content">

          {/* AVAILABLE FOR OPPORTUNITIES */}
          <div className="hero-availability">
            <span className="availability-dot"></span>
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          {/* HELLO */}
          <div className="hero-greeting">
            HELLO, I'M
          </div>

          {/* NAME */}
          <h1>
            <span>Cherry</span>
            <span>Lou.</span>
          </h1>

          {/* ROLE */}
          <p className="hero-role">
            WEB DEVELOPER / GRAPHIC DESIGNER
            <br />
            GENERAL VIRTUAL ASSISTANT
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">

            <button
              className="outline-button"
              onClick={() => scrollToSection("work")}
            >
              <span>Explore my work</span>
              <span className="button-arrow">↓</span>
            </button>

            <a
              href="/resume.pdf"
              className="outline-button"
              target="_blank"
              rel="noreferrer"
            >
              <span>Download Resume</span>
              <span className="button-arrow">↗</span>
            </a>

            <button
              className="outline-button"
              onClick={() => scrollToSection("contact")}
            >
              <span>Let's Talk</span>
              <span className="button-arrow">↗</span>
            </button>

          </div>
        </div>


        {/* HERO BOTTOM */}
        <div className="hero-bottom">

          <span>
            BASED IN THE PHILIPPINES
          </span>

          <span>
            SCROLL TO EXPLORE ↓
          </span>

        </div>

      </section>


      {/* =========================
          ABOUT
      ========================== */}
      <section id="about" className="content-section">

        <div className="section-heading">
          <span className="section-number">01</span>
          <span className="section-label">ABOUT ME</span>
        </div>

        <div className="about-grid">

          <div className="about-heading">

            <p className="small-label">
              A LITTLE ABOUT ME
            </p>

            <h2>
              Creative
              <br />
              mind,
              <br />
              <span>organized</span>
              <br />
              <span>execution.</span>
            </h2>

          </div>


          <div className="about-text">

            <p className="about-lead">
              I'm Cherry Lou — a creative and detail-oriented
              professional with an interest in web development,
              graphic design, and virtual assistance.
            </p>

            <p>
              I'm a multidisciplinary creative with a background
              that combines graphic design, multimedia arts,
              office administration, and digital development.
              In 2025, I graduated from two degree programs
              simultaneously: Bachelor of Multimedia Arts –
              Graphic Design Specialization at CIIT College of
              Arts and Technology and Bachelor of Science in
              Office Administration at Pangasinan State University.
            </p>

            <p>
              My journey began as an academic commissioner,
              where I took on a wide range of roles—from research
              writer and analyst to teacher, math tutor, and
              physics tutor. This experience taught me how to
              communicate ideas clearly, solve problems creatively,
              and adapt to different challenges.
            </p>

            <p>
              In 2023, I expanded my experience into the gaming
              industry, working as a web developer for one gaming
              company and a graphic designer for another until
              2025. These experiences allowed me to combine my
              technical skills with my passion for visual
              storytelling and design.
            </p>

            <p>
              I enjoy working where creativity and organization
              meet. Whether it's creating visual content,
              building a website, researching prospects,
              organizing information, or supporting a digital
              workflow, I focus on producing work that is both
              visually engaging and useful.
            </p>

            <p>
              I'm always learning, experimenting, and looking for
              better ways to turn ideas into meaningful digital
              experiences.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          SERVICES
      ========================== */}
      <section id="services" className="content-section">

        <div className="section-heading">
          <span className="section-number">02</span>
          <span className="section-label">WHAT I DO</span>
        </div>

        <div className="services-list">

          {services.map((service) => (

            <div
              className="service-item"
              key={service.number}
              onClick={() => setActiveService(service)}
            >

              <div className="service-left">

                <span className="service-number">
                  {service.number}
                </span>

                <h3>
                  {service.title}
                </h3>

              </div>


              <button
                className="service-arrow"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveService(service);
                }}
                aria-label={`View ${service.title}`}
              >
                ↗
              </button>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          WORK
      ========================== */}
      <section id="work" className="content-section">

        <div className="section-heading">
          <span className="section-number">03</span>
          <span className="section-label">SELECTED WORK</span>
        </div>


        <div className="work-grid">

          {works.map((work) => (

            <article
              className="work-card"
              key={work.number}
            >

              <div className="work-top">

                <span className="work-number">
                  {work.number}
                </span>

                <span className="work-type">
                  {work.type}
                </span>

              </div>


              <div className="work-preview">
                <span>{work.title}</span>
              </div>


              <div className="work-info">

                <h3>
                  {work.title}
                </h3>

                <p>
                  {work.description}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =========================
          EXPERIENCE
      ========================== */}
      <section
        id="experience"
        className="content-section"
      >

        <div className="section-heading">
          <span className="section-number">04</span>
          <span className="section-label">EXPERIENCE</span>
        </div>


        <div className="experience-list">

          <div className="experience-item">

            <div className="experience-year">
              2023 — 2025
            </div>

            <div className="experience-content">

              <h3>
                Web Developer
              </h3>

              <p>
                Gaming Industry
              </p>

              <span>
                Developed and maintained websites while working
                with layouts, interfaces, responsive structures,
                and digital experiences.
              </span>

            </div>

          </div>


          <div className="experience-item">

            <div className="experience-year">
              2023 — 2025
            </div>

            <div className="experience-content">

              <h3>
                Graphic Designer
              </h3>

              <p>
                Gaming Industry
              </p>

              <span>
                Created visual materials, digital graphics,
                promotional content, and design assets for
                gaming-related projects.
              </span>

            </div>

          </div>


          <div className="experience-item">

            <div className="experience-year">
              EARLIER
            </div>

            <div className="experience-content">

              <h3>
                Academic Commissioner
              </h3>

              <p>
                Research • Teaching • Tutoring
              </p>

              <span>
                Worked across research writing, analysis,
                teaching, mathematics tutoring, and physics
                tutoring.
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CONTACT
      ========================== */}
      <section
        id="contact"
        className="content-section contact-section"
      >

        <div className="section-heading">
          <span className="section-number">05</span>
          <span className="section-label">LET'S CONNECT</span>
        </div>


        <div className="contact-content">

          <p className="small-label">
            HAVE A PROJECT IN MIND?
          </p>

          <h2>
            Let's create
            <br />
            something
            <br />
            <span>meaningful.</span>
          </h2>

          <a
            href="mailto:your-email@example.com"
            className="contact-email"
          >
            your-email@example.com ↗
          </a>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================== */}
      <footer className="footer">

        <span>
          © {new Date().getFullYear()} CHERRY LOU
        </span>

        <span>
          WEB DEVELOPER / GRAPHIC DESIGNER
        </span>

      </footer>


      {/* =========================
          SERVICE POPUP
      ========================== */}
      {activeService && (

        <div
          className="service-modal"
          onClick={() => setActiveService(null)}
        >

          <div
            className="service-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setActiveService(null)}
              aria-label="Close"
            >
              ×
            </button>


            <span className="modal-number">
              {activeService.number}
            </span>


            <h2>
              {activeService.title}
            </h2>


            <p>
              {activeService.description}
            </p>


            <div className="modal-placeholder">

              <span>
                YOUR WORK WILL APPEAR HERE
              </span>

            </div>


            <button
              className="modal-back"
              onClick={() => setActiveService(null)}
            >
              ← Back
            </button>

          </div>

        </div>

      )}

    </main>
  );
}
