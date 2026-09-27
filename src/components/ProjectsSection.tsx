import { PROJECTS } from "../data/projects";
import { ArrowButton } from "./ArrowButton";
import { ProjectCard } from "./ProjectCard";
import "./ProjectsSection.css";

type ProjectsSectionProps = {
  /** Cuántas veces repetir el listado (la página de proyectos muestra la galería dos veces). */
  repeat?: number;
};

export function ProjectsSection({ repeat = 1 }: ProjectsSectionProps) {
  const projects = Array.from({ length: repeat }, () => PROJECTS).flat();

  return (
    <section id="proyectos" className="projects container">
      <div className="section-heading">
        <div className="section-heading__text">
          <h2 className="section-heading__title">Proyectos destacados</h2>
          <p className="section-heading__subtitle projects__subtitle">
            Intervenciones integrales para entornos residenciales y corporativos.
          </p>
        </div>
        <ArrowButton to="/proyectos" variant="urbanist">
          View All Testimonials
        </ArrowButton>
      </div>

      <div className="projects__list">
        {projects.map((project, index) => (
          <ProjectCard key={`${project.name}-${index}`} project={project} />
        ))}
      </div>
    </section>
  );
}
