import '../styles/projects.css';

type Props = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  url: Record<string, string>;
  isActive: boolean;
  onToggle: () => void;
}

export default function ProjectCard({ id, title, description, tech, url, isActive, onToggle }: Props) {
  return (
    <article className={`project-card ${isActive ? 'active' : ''}`}>
      <button
        className="project-header"
        type="button"
        onClick={onToggle}
        aria-expanded={isActive}
        aria-controls={`project-details-${id}`}
      >
        <h3>{title}</h3>
        <span className={`project-arrow ${isActive ? 'open' : ''}`} />
      </button>

      <div
        id={`project-details-${id}`}
        className={`project-details ${isActive ? 'open' : ''}`}
      >
        <p className="muted">{description}</p>

        <div className="tags">
          {tech.map((t) => (
            <span key={t} className="tag">{t.trim()}</span>
          ))}
        </div>

        <div className="links">
          {Object.entries(url).map(([label, href]) => (
            <a
              key={label}
              className="link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label} 
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
