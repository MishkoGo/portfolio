import { useEffect, useState, type ReactNode } from "react";
import { CodeBackground } from "./CodeBackground";
import { portfolio, type LinkItem, type ProjectItem, type TimelineItem, type ViewKey } from "./data";
import { VoxelScene } from "./VoxelScene";
import profilePhoto from "./assets/profile-photo.jpg";

const views: ViewKey[] = ["home", "works"];

function getHashView(): ViewKey {
  const hash = window.location.hash.replace("#", "");
  return views.includes(hash as ViewKey) ? (hash as ViewKey) : "home";
}

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const stored = window.localStorage.getItem("portfolio-theme");
    if (stored === "light" || stored === "dark") {
      return stored;
    }

    return "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return { theme, toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")) };
}

function App() {
  const [activeView, setActiveView] = useState<ViewKey>(getHashView);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onPopState = () => setActiveView(getHashView());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const nextHash = `#${activeView}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState({}, "", nextHash);
    }
  }, [activeView]);

  return (
    <>
      <header className="topbar">
        <div className="nav-inner">
          <button className="brand" type="button" onClick={() => setActiveView("home")}>
            <PawMark />
            <span>{portfolio.name}</span>
          </button>

          <nav className="nav">
            <NavButton active={activeView === "home"} onClick={() => setActiveView("home")}>
              Home
            </NavButton>
            <NavButton active={activeView === "works"} onClick={() => setActiveView("works")}>
              Works
            </NavButton>
            <a className="nav-link" href={portfolio.sourceUrl} target="_blank" rel="noreferrer">
              Source
            </a>
            <button className="theme-button" type="button" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? "☀" : "☾"}
            </button>
          </nav>
        </div>
      </header>

      <main className="viewport">
        <div key={activeView} className="view">
          {activeView === "home" ? (
            <HomeScreen onOpenWorks={() => setActiveView("works")} />
          ) : (
            <WorksScreen />
          )}
        </div>
      </main>
    </>
  );
}

function PawMark() {
  return (
    <span className="paw-mark" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

function NavButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button className={`nav-link ${active ? "is-active" : ""}`} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

function HomeScreen({ onOpenWorks }: { onOpenWorks: () => void }) {
  return (
    <div className="page page-home page-with-code-background">
      <CodeBackground />
      <section className="hero">
        <DeskVisual />
        <p className="speech">{portfolio.greeting}</p>

        <div className="hero-summary">
          <div>
            <h1>{portfolio.name}</h1>
            <p>{portfolio.role}</p>
          </div>
          <div className="avatar-placeholder">
            <img src={profilePhoto} alt="Mikhail Goranin" />
          </div>
        </div>
      </section>

      <ContentSection title="Work">
        <p>{portfolio.workSummary}</p>
        <div className="center-action">
          <button className="cta-button" type="button" onClick={onOpenWorks}>
            My works <span aria-hidden="true">›</span>
          </button>
        </div>
      </ContentSection>

      <ContentSection title="Bio">
        <Timeline items={portfolio.bio} />
      </ContentSection>

      <ContentSection title="I ♥">
        <InlineList items={portfolio.interests} />
      </ContentSection>

      <ContentSection title="On the web">
        <LinkList items={portfolio.links} />
      </ContentSection>

      <ContentSection title="Core Skills">
        <div className="skill-columns">
          <SkillGroup title="Mobile" items={portfolio.skills.mobile} />
          <SkillGroup title="Frontend" items={portfolio.skills.frontend} />
          <SkillGroup title="Backend" items={portfolio.skills.backend} />
          <SkillGroup title="Tools" items={portfolio.skills.tools} />
        </div>
      </ContentSection>

      <Footer />
    </div>
  );
}

function WorksScreen() {
  return (
    <div className="page page-works page-with-code-background">
      <CodeBackground />
      <ContentSection title="Works">
        <div className="works-grid">
          {portfolio.projects.map((project) => (
            <ProjectPreview key={project.title} project={project} />
          ))}
        </div>
      </ContentSection>

      <Footer />
    </div>
  );
}

function DeskVisual() {
  return (
    <div className="hero-visual">
      <VoxelScene />
    </div>
  );
}

function ContentSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="content-section">
      <h2>{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}

function Timeline({ items }: { items: readonly TimelineItem[] }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <div className="timeline-item" key={`${item.year}-${item.text}`}>
          <strong>{item.year}</strong>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}

function InlineList({ items }: { items: readonly string[] }) {
  return (
    <p className="inline-list">
      {items.map((item, index) => (
        <span className={index % 2 === 0 ? undefined : "accent-text"} key={item}>
          {item}
          {index < items.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  );
}

function LinkList({ items }: { items: readonly LinkItem[] }) {
  return (
    <div className="link-list">
      {items.map((item) => (
        <a key={item.label} className="social-link" href={item.href} target="_blank" rel="noreferrer">
          <span className="social-icon">{item.icon}</span>
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );
}

function SkillGroup({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="skill-group">
      <h3>{title}</h3>
      <p>{items.join(", ")}</p>
    </div>
  );
}

function ProjectPreview({ project, compact = false }: { project: ProjectItem; compact?: boolean }) {
  return (
    <article className={`project-preview ${compact ? "is-compact" : ""}`}>
      <ProjectDemo project={project} compact={compact} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a className="project-link" href={project.projectUrl} target="_blank" rel="noreferrer">
        {project.linkLabel}
      </a>
    </article>
  );
}

function ProjectDemo({ project, compact }: { project: ProjectItem; compact: boolean }) {
  const [step, setStep] = useState(0);
  const scannerSteps = ["Capture", "Crop", "Export"];
  const memoryPlaces = ["Home", "Park", "Trip"];
  const myUniSections = ["Study", "Jobs", "Events"];

  if (project.demo === "scanner") {
    const labels = scannerSteps;

    return (
      <div className={`project-image demo-phone tone-${project.tone}`}>
        <div className="phone-shell">
          <div className="phone-topbar">
            <span>PDF Scanner</span>
            <strong>{labels[step]}</strong>
          </div>
          <div className={`scan-paper scan-step-${step}`}>
            <span />
            <span />
            <span />
          </div>
          <div className="demo-controls">
            {labels.map((label, index) => (
              <button
                className={step === index ? "is-selected" : ""}
                key={label}
                type="button"
                onClick={() => setStep(index)}
              >
                {compact ? index + 1 : label}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (project.demo === "memories") {
    const labels = memoryPlaces;

    return (
      <div className={`project-image demo-map tone-${project.tone}`}>
        <div className="map-grid">
          <span className={`map-pin pin-one ${step === 0 ? "is-selected" : ""}`} />
          <span className={`map-pin pin-two ${step === 1 ? "is-selected" : ""}`} />
          <span className={`map-pin pin-three ${step === 2 ? "is-selected" : ""}`} />
          <svg viewBox="0 0 240 140" aria-hidden="true">
            <path d="M34 102 C76 42, 132 132, 202 42" />
          </svg>
        </div>
        <div className="memory-panel">
          <span>{labels[step]}</span>
          <strong>{step === 0 ? "Family note" : step === 1 ? "City walk" : "Travel memory"}</strong>
        </div>
        <div className="demo-controls">
          {labels.map((label, index) => (
            <button
              className={step === index ? "is-selected" : ""}
              key={label}
              type="button"
              onClick={() => setStep(index)}
            >
              {compact ? index + 1 : label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const labels = myUniSections;

  return (
    <div className={`project-image demo-uni tone-${project.tone}`}>
      <div className="uni-phone">
        <div className="uni-header">
          <span>MyUni</span>
          <strong>{labels[step]}</strong>
        </div>
        <div className="uni-card-stack">
          <div className={`uni-card card-study ${step === 0 ? "is-selected" : ""}`}>
            <span>Courses</span>
            <strong>12 new</strong>
          </div>
          <div className={`uni-card card-jobs ${step === 1 ? "is-selected" : ""}`}>
            <span>Student jobs</span>
            <strong>Nearby</strong>
          </div>
          <div className={`uni-card card-events ${step === 2 ? "is-selected" : ""}`}>
            <span>Campus events</span>
            <strong>Tonight</strong>
          </div>
        </div>
      </div>
      <div className="demo-controls">
        {labels.map((label, index) => (
          <button
            className={step === index ? "is-selected" : ""}
            key={label}
            type="button"
            onClick={() => setStep(index)}
          >
            {compact ? index + 1 : label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return <footer className="footer">© 2026 {portfolio.name}. All Rights Reserved.</footer>;
}

export default App;
