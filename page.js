const skills = [
  "Web Development",
  "Graphic Design",
  "General Virtual Assistance",
  "Digital Marketing",
  "Lead Generation",
  "Prospect Research",
  "Content Creation",
  "Social Media",
  "Canva",
  "ChatGPT",
  "Google Workspace",
];

const projects = [
  {
    number: "01",
    title: "Project One",
    category: "Web / Creative",
    description: "Replace this with a short description of your project, your role, and the result.",
  },
  {
    number: "02",
    title: "Project Two",
    category: "Design / Marketing",
    description: "Add another project here. You can duplicate this card as many times as you need.",
  },
  {
    number: "03",
    title: "Project Three",
    category: "Virtual Assistance",
    description: "Showcase a school project, freelance work, personal project, or professional sample.",
  },
];

const experience = [
  {
    year: "20XX — Present",
    role: "Your Position",
    company: "Company / Organization",
    description: "Add your work experience, responsibilities, achievements, or academic experience here.",
  },
  {
    year: "20XX — 20XX",
    role: "Your Previous Role",
    company: "Company / School",
    description: "Replace this placeholder with another experience entry.",
  },
];

export default function Home() {
  return (
    <main>
      <div className="noise" />

      <nav className="nav">
        <a href="#home" className="logo">CL<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-button" href="#contact">Let's talk <span>↗</span></a>
      </nav>

      <section id="home" className="hero section">
        <div className="hero-glow" />
        <div className="hero-content">
          <p className="eyebrow"><span className="dot" /> Available for opportunities</p>
          <h1>Cherry <em>Lou</em></h1>
          <p className="hero-title">Web Developer / Graphic Designer <span>|</span> General Virtual Assistant</p>
          <p className="hero-copy">
            I create thoughtful digital experiences, compelling visuals, and organized
            solutions that help ideas turn into meaningful results.
          </p>
          <div className="hero-actions">
            <a href="#work" className="primary-button">View my work <span>↓</span></a>
            <a href="#contact" className="text-button">Get in touch <span>↗</span></a>
          </div>
        </div>
        <div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section id="about" className="section about">
        <div className="section-label">01 / ABOUT</div>
        <div className="about-grid">
          <div>
            <h2>Creative thinking.<br /><em>Practical execution.</em></h2>
          </div>
          <div className="about-copy">
            <p>
              I’m Cherry Lou, a creative and detail-oriented professional interested in
              web development, graphic design, digital marketing, and virtual assistance.
            </p>
            <p>
              I enjoy combining creativity with organization — from designing engaging
              visuals and content to researching prospects, managing information, and
              building useful digital experiences.
            </p>
            <p>
              My goal is simple: create work that looks good, works well, and makes a
              real difference.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="section-label">02 / SKILLS</div>
        <div className="skills-head">
          <h2>What I <em>do.</em></h2>
          <p>Replace the skills below with your own. The cards are intentionally easy to edit.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div className="skill-card" key={skill}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{skill}</h3>
              <b>↗</b>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="section work-section">
        <div className="section-label">03 / SELECTED WORK</div>
        <div className="work-head">
          <h2>Things I’ve <em>created.</em></h2>
          <p>Replace these placeholder projects with your own work, screenshots, links, and descriptions.</p>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-image">
                <span>{project.number}</span>
                <div className="project-placeholder">PROJECT<br />PREVIEW</div>
                <div className="project-arrow">↗</div>
              </div>
              <div className="project-info">
                <div>
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section">
        <div className="section-label">04 / EXPERIENCE</div>
        <h2>A little more<br /><em>about my journey.</em></h2>
        <div className="timeline">
          {experience.map((item) => (
            <div className="timeline-item" key={`${item.year}-${item.role}`}>
              <div className="timeline-year">{item.year}</div>
              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="contact-orb" />
        <div className="section-label">05 / CONTACT</div>
        <div className="contact-content">
          <p className="eyebrow">Have a project in mind?</p>
          <h2>Let’s make something<br /><em>worth remembering.</em></h2>
          <p className="contact-copy">Replace the email and social links below with your own details.</p>
          <a className="email-link" href="mailto:your@email.com">your@email.com <span>↗</span></a>
          <div className="socials">
            <a href="#" aria-label="LinkedIn">LinkedIn ↗</a>
            <a href="#" aria-label="Facebook">Facebook ↗</a>
            <a href="#" aria-label="Instagram">Instagram ↗</a>
            <a href="/resume.pdf" aria-label="Resume">Resume ↗</a>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 CHERRY LOU</span>
        <span>BUILT WITH NEXT.JS · READY FOR VERCEL</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}