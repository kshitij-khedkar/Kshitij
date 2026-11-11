import { useEffect, useState } from "react";

const capabilities = [
  ["01", "Graphic Design", "Identity systems, campaign design, posters and print"],
  ["02", "Video Editing", "Rhythm, pacing, narrative structure and post-production"],
  ["03", "Motion Graphics", "Type in motion, transitions and visual sequences"],
  ["04", "3D Practice", "Modelling, texturing and image-making experiments"],
  ["05", "Illustration", "Image construction, form, texture and visual studies"],
  ["06", "UI / UX", "Digital interfaces, visual systems and interaction thinking"],
];

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="arrow-icon">
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <span>{children}</span>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };

    updateTime();
    const timer = window.setInterval(updateTime, 30_000);

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));

    return () => {
      window.clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="wordmark" onClick={closeMenu} aria-label="Kshitij Khedkar, home">
          K<span>K</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav
          id="site-nav"
          className={menuOpen ? "site-nav is-open" : "site-nav"}
          aria-label="Primary navigation"
        >
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#capabilities" onClick={closeMenu}>
            Capabilities
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <div className="header-status">
          <span className="status-dot" />
          Open to opportunities
        </div>
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero-meta mono">
          <span>Portfolio / 2026</span>
          <span>Graphic Designer / Visual Creative</span>
          <span>Pune, India</span>
        </div>

        <h1 id="hero-title" className="hero-title">
          <span className="hero-line" data-reveal>
            Kshitij
          </span>
          <span className="hero-line hero-line-offset" data-reveal>
            Khedkar<span className="red-dot">.</span>
          </span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-intro" data-reveal>
            A 2026 portfolio of identity, campaign and packaging work—built through graphic design,
            moving image and experimental form.
          </p>
          <a className="round-link" href="#work" aria-label="Scroll to selected work">
            <span>Explore</span>
            <span>↓</span>
          </a>
        </div>

        <div className="hero-mark" aria-hidden="true">
          <span>K</span>
          <span>K</span>
        </div>
      </section>

      <section className="manifesto" aria-label="Design philosophy">
        <p data-reveal>
          Structure gives an idea clarity.
          <br />
          Experiment gives it <em>character.</em>
        </p>
      </section>

      <section id="work" className="work">
        <SectionLabel index="01">Selected Work / 04 Projects</SectionLabel>

        <div className="work-intro">
          <h2 data-reveal>
            Selected
            <br />
            <span>work.</span>
          </h2>
          <div className="work-index mono" data-reveal>
            <span>Identity</span>
            <span>Campaign</span>
            <span>Packaging</span>
            <span>Art direction</span>
          </div>
        </div>

        <article className="project project-vyre">
          <header className="project-header">
            <span className="project-number mono">01 / 04</span>
            <h3>Vyre 01</h3>
            <p className="mono">Product identity / Campaign</p>
          </header>
          <figure className="project-image project-image-vyre" data-reveal>
            <img
              src={`${import.meta.env.BASE_URL}work/vyre-01.webp`}
              alt="Vyre 01 metallic lighter identity and product campaign presentation"
            />
          </figure>
          <div className="project-gallery project-gallery-vyre" data-reveal>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}work/vyre-02.webp`}
                alt="Vyre Object 001 metallic series campaign board"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}work/vyre-03.webp`}
                alt="Vyre Fire Meets Form product campaign board"
                loading="lazy"
              />
            </figure>
          </div>
        </article>

        <article className="project project-lace">
          <header className="project-header">
            <span className="project-number mono">02 / 04</span>
            <h3>Lace Different</h3>
            <p className="mono">Fashion campaign / Art direction</p>
          </header>
          <div className="project-gallery project-gallery-lace" data-reveal>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}work/lace-different-04.webp`}
                alt="Lace Different Puma shoes arranged on burgundy velvet"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}work/lace-different-01.webp`}
                alt="Lace Different Puma campaign featuring burgundy lace trainers"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}work/lace-different-02.webp`}
                alt="Burgundy Puma shoe with lace detailing on a red textured surface"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}work/lace-different-03.webp`}
                alt="White and burgundy Puma shoes styled with patterned stockings"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}work/lace-different-05.webp`}
                alt="Lace Different Puma campaign featuring burgundy shoes and white socks"
                loading="lazy"
              />
            </figure>
          </div>
        </article>

        <article className="project project-mellow">
          <header className="project-header">
            <span className="project-number mono">03 / 04</span>
            <h3>Mellow</h3>
            <p className="mono">Packaging / Graphic design</p>
          </header>
          <figure className="project-image project-image-wide" data-reveal>
            <img
              src={`${import.meta.env.BASE_URL}work/mellow-packaging.png`}
              alt="Mellow dark chocolate packaging dieline and colour specification"
              loading="lazy"
            />
          </figure>
          <div className="project-gallery project-gallery-mellow" data-reveal>
            <figure className="mellow-mark">
              <img
                src={`${import.meta.env.BASE_URL}work/mellow-mark.png`}
                alt="Mellow cocoa bean geometric brand mark"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}work/mellow-mockup.webp`}
                alt="Mellow dark chocolate packaging mockup with cocoa beans"
                loading="lazy"
              />
            </figure>
          </div>
        </article>

        <article className="project project-racer">
          <header className="project-header">
            <span className="project-number mono">04 / 04</span>
            <h3>Racer</h3>
            <p className="mono">Audio campaign / Product art direction</p>
          </header>
          <div className="project-gallery project-gallery-racer" data-reveal>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}work/racer-01.webp`}
                alt="Racer wired audio campaign in blue and white"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}work/racer-02.webp`}
                alt="Listen Closer Racer wired earphones campaign"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}work/racer-03.webp`}
                alt="Make Sound Personal Racer audio collection campaign"
                loading="lazy"
              />
            </figure>
          </div>
        </article>
      </section>

      <section id="about" className="about section-dark">
        <SectionLabel index="02">About / Profile</SectionLabel>

        <div className="about-grid">
          <div
            className="identity-poster portrait-poster"
            data-reveal
            aria-label="Portrait of Kshitij Khedkar"
          >
            <img
              className="portrait-image"
              src="/kshitij-portrait.webp"
              alt="Kshitij Khedkar in a contemplative black and white portrait"
              loading="lazy"
            />
            <div className="poster-top mono">
              <span>Visual Creative</span>
              <span>Pune / IN</span>
            </div>
            <div className="portrait-monogram" aria-hidden="true">
              KK
            </div>
            <div className="poster-caption mono">
              <span>Kshitij Khedkar</span>
              <span>Curiosity / Structure / Experiment</span>
            </div>
          </div>

          <div className="about-copy">
            <h2 data-reveal>I make visuals that communicate before they decorate.</h2>
            <div className="about-columns" data-reveal>
              <p>
                I’m Kshitij, a Graphic Designer and Visual Creative currently studying BSc Animation
                at Fergusson College in Pune. My practice moves between graphic design, video
                editing and digital media.
              </p>
              <p>
                I begin with purpose, collect references, test directions, and shape each idea
                through composition, type, colour and storytelling. I’m interested in the tension
                between a clear system and an unexpected visual moment.
              </p>
            </div>
            <blockquote data-reveal>
              “I don’t want to be restricted to a single style. I want to keep learning,
              experimenting and developing my own visual language.”
            </blockquote>
          </div>
        </div>
      </section>

      <section id="capabilities" className="capabilities">
        <SectionLabel index="03">Capabilities / Practice</SectionLabel>
        <div className="capabilities-heading">
          <h2 data-reveal>What I do</h2>
          <p className="mono">A growing, multidisciplinary practice</p>
        </div>

        <div className="capability-list">
          {capabilities.map(([number, title, description]) => (
            <div className="capability-row" key={number} data-reveal>
              <span className="mono capability-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="capability-plus" aria-hidden="true">
                +
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact section-red">
        <div className="contact-top">
          <SectionLabel index="04">Contact / Enquiries</SectionLabel>
          <div className="contact-availability mono">
            <span className="status-dot status-dot-light" />
            Open to opportunities
          </div>
        </div>

        <div className="contact-main">
          <p className="contact-kicker mono" data-reveal>
            Have an idea, project or conversation?
          </p>
          <h2 data-reveal>
            Let’s make
            <br />
            something <span>clear.</span>
          </h2>
          <a className="email-link" href="mailto:kzhitix@gmail.com" data-reveal>
            <span>kzhitix@gmail.com</span>
            <ArrowUpRight />
          </a>
        </div>

        <div className="contact-info">
          <p>
            Currently based in Pune, India. Open to internships, freelance projects and creative
            collaborations—remote or selected in-person.
          </p>
          <div className="contact-data mono">
            <div>
              <span>Location</span>
              <strong>Pune, India</strong>
            </div>
            <div>
              <span>Timezone</span>
              <strong>IST / UTC +05:30</strong>
            </div>
            <div>
              <span>Local time</span>
              <strong>{time || "--:--"}</strong>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 Kshitij Khedkar</span>
        <span className="mono">Designed with intent / Built to evolve</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
