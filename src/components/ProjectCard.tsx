import type { Project } from "../data/projects";
import { ProjectCarousel } from "./ProjectCarousel";
import "./ProjectCard.css";

type ProjectCardProps = {
  project: Project;
  /** En /proyectos cada especificación va precedida de un guion. */
  dashedSpecs?: boolean;
};

export function ProjectCard({ project, dashedSpecs = false }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        <ProjectCarousel slides={project.gallery} label={project.name} aspectRatio={`649 / ${project.imageHeight}`} />
      </div>
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
              <p key={spec}>{dashedSpecs ? `-${spec}` : spec}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
