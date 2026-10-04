import { ALL_PROJECTS, FEATURED_PROJECTS } from "../data/projects";
import { ArrowButton } from "./ArrowButton";
import { ProjectCard } from "./ProjectCard";
import "./ProjectsSection.css";

type ProjectsSectionProps = {
  /** "home": proyectos destacados con botón a la galería; "page": galería completa de /proyectos. */
  variant?: "home" | "page";
};

export function ProjectsSection({ variant = "home" }: ProjectsSectionProps) {
  const isHome = variant === "home";
  const projects = isHome ? FEATURED_PROJECTS : ALL_PROJECTS;

  return (
    <section id="proyectos" className={`projects projects--${variant} container`}>
      <div className="section-heading">
        <div className="section-heading__text">
          <h2 className="section-heading__title">Proyectos destacados</h2>
          <p className="section-heading__subtitle projects__subtitle">
            Intervenciones integrales para entornos residenciales y corporativos.
          </p>
        </div>
        {isHome && (
          <ArrowButton to="/proyectos" variant="urbanist">
            Ver mas proyectos
          </ArrowButton>
        )}
      </div>

      <div className="projects__list">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} dashedSpecs={!isHome} />
        ))}
      </div>
    </section>
  );
}
