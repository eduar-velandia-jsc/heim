import type { Project } from "../data/projects";
import "./ProjectCard.css";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <img
        className="project-card__image"
        src={project.image}
        alt={project.name}
        width={649}
        height={project.imageHeight}
        style={{ aspectRatio: `649 / ${project.imageHeight}` }}
        loading="lazy"
      />
      <div className="project-card__body">
        <div className="project-card__block">
          <h3 className="project-card__heading">
            <span className="project-card__date">{project.date}</span>
            <span>{project.category}</span>
          </h3>
          <p className="project-card__text">{project.name}</p>
        </div>
        <div className="project-card__block">
          <h4 className="project-card__heading">{project.challengeTitle}</h4>
          <p className="project-card__text">{project.challenge}</p>
        </div>
        <div className="project-card__block">
          <h4 className="project-card__heading">Especificaciones técnicas:</h4>
          <div className="project-card__text">
            {project.specs.map((spec) => (
              <p key={spec}>{spec}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
