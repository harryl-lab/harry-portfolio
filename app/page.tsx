const navigation = [
  ["Projects", "projects"], ["About", "about"],
  ["Experience", "experience"],
];

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#content">Skip to content</a>
      <header className="shell header">
        <a className="wordmark" href="#top" aria-label="Harry Luo, back to top">HL.</a>
        <nav aria-label="Main navigation">
          {navigation.map(([label, id]) => <a href={"#" + id} key={id}>{label}</a>)}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume PDF (opens in a new tab)">Resume</a>
          <a href="#contact" className="nav-contact">Get in touch <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="shell hero" id="content" tabIndex={-1}>
        <p className="eyebrow">University of Michigan · Computer Science</p>
        <h1>Harry Luo<span className="muted">.</span></h1>
        <h2>Software &amp;<br /><span className="muted">AI Engineering.</span></h2>
        <div className="hero-bottom">
          <p className="intro">Interested in building intelligent applications, integrating AI models,
            and developing reliable software. Seeking software and AI engineering internships.</p>
          <div className="actions">
            <a className="button button-primary" href="#projects">Explore projects <span aria-hidden="true">↓</span></a>
            <a className="button button-outline" href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume PDF (opens in a new tab)">Resume <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-foot"><span>Software &amp; AI Engineering</span><span>Ann Arbor, Michigan</span></div>
      </section>

      <section className="shell section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <div><p className="eyebrow">01 / Project focus</p><h2 id="projects-title">Selected projects.</h2></div>
          <p className="section-note">From concurrent task execution to everyday web tools—exploring different sides of software engineering.</p>
        </div>
        <div className="project-grid">
          <article className="project project-main">
            <div className="project-top"><span>01 / Systems</span></div>
            <h3>C++ Thread Pool<br />&amp; Task Executor</h3>
            <p>A focused exploration of concurrent task execution: how workers share work, return results, and shut down safely.</p>
            <ul className="project-scope">
              <li><span>01</span><div><h4>Concurrency fundamentals</h4><p>A fixed-size worker pool, shared task queue, mutexes, and condition variables.</p></div></li>
              <li><span>02</span><div><h4>Predictable task lifecycle</h4><p>Future-based results, exception propagation, and graceful shutdown.</p></div></li>
              <li><span>03</span><div><h4>Test, then measure</h4><p>Correctness tests and sequential-versus-parallel benchmarks with documented workloads.</p></div></li>
            </ul>
            <div className="project-stack">C++ <span>·</span> CMake <span>·</span> Concurrency</div>
          </article>
          <article className="project project-secondary">
            <div className="project-top"><span>02 / Web</span></div>
            <h3>Job Application<br />Tracker</h3>
            <p>A small, useful browser application for keeping a job search organized, built with native web technologies.</p>
            <ul className="feature-list">
              <li>Company, role, date, and status records</li>
              <li>Keyword search and status filters</li>
              <li>Local storage and input validation</li>
              <li>JSON import and export for backups</li>
            </ul>
            <div className="project-stack">JavaScript <span>·</span> HTML <span>·</span> CSS</div>
          </article>
        </div>
      </section>

      <section className="shell section about" id="about" aria-labelledby="about-title">
        <div><p className="eyebrow">02 / About</p><h2 id="about-title">A foundation<br />in the fundamentals.</h2></div>
        <div className="about-copy">
          <p>I&apos;m Hao Luo, also known as Harry, studying Computer Science and Mathematics of Finance and Risk Management at the University of Michigan.</p>
          <p>I’m interested in the intersection of software engineering and AI: connecting models with useful applications and building the systems that make them reliable. I enjoy working across application development, model integration, and deployment, grounded in data structures, concurrency, and software fundamentals.</p>
          <div className="education"><strong>University of Michigan</strong><span>B.S. · Expected May 2029</span></div>
        </div>
      </section>

      <section className="shell section" id="experience" aria-labelledby="experience-title">
        <div className="section-heading"><div><p className="eyebrow">03 / Experience</p><h2 id="experience-title">Industry experience.</h2></div></div>
        <div className="experience-list">
          <article className="experience-row">
            <p className="date">Jun — Jul 2026</p>
            <div><h3>Ningbo Pioneer Supply Chain Co., Ltd.</h3><p className="role">Software Engineer Intern · Ningbo, China</p>
              <p>Logistics platform development with React, FastAPI, and PostgreSQL, covering shipment search, tracking, and delivery exception monitoring.</p></div>
          </article>
          <article className="experience-row">
            <p className="date">Jan — Mar 2026</p>
            <div><h3>Avodah</h3><p className="role">AI Software Engineer Intern · Remote</p>
              <p>Speech-to-text infrastructure involving C++ preprocessing, asynchronous inference, and deployment on AWS ECS.</p></div>
          </article>
        </div>
      </section>

      <section className="shell section" id="skills" aria-labelledby="skills-title">
        <div className="section-heading"><div><p className="eyebrow">04 / Technical focus</p><h2 id="skills-title">A focused toolkit.</h2></div></div>
        <div className="skills-grid">
          <div><h3>Languages</h3><p>C++, C, Python<br />JavaScript, SQL, HTML/CSS</p></div>
          <div><h3>Web &amp; backend</h3><p>React, FastAPI<br />REST APIs, PostgreSQL</p></div>
          <div><h3>Tools &amp; infrastructure</h3><p>Git, Docker<br />AWS ECS</p></div>
        </div>
      </section>

      <section className="shell resume-section" id="resume" aria-labelledby="resume-title">
        <div><p className="eyebrow">Resume</p><h2 id="resume-title">The details, in one page.</h2><p>Education, experience, and selected projects.</p></div>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="View resume PDF (opens in a new tab)" className="button button-outline">View resume (PDF) <span aria-hidden="true">↗</span></a>
      </section>

      <section className="shell section contact" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow">05 / Contact</p><h2 id="contact-title">Let&apos;s talk<br /><span className="muted">about what&apos;s next.</span></h2>
        <p>Software and AI engineering internships, useful applications, and new conversations.</p>
        <div className="contact-links">
          <a href="mailto:luoha@umich.edu">luoha@umich.edu <span aria-hidden="true">↗</span></a>
          <a href="tel:+17344650568">+1 (734) 465-0568 <span aria-hidden="true">↗</span></a>
          <a href="https://harry-luo.com">harry-luo.com <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <footer className="shell footer"><span>© 2026 Harry Luo</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
