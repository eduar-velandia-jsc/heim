import { ContactSection } from "../components/ContactSection";
import { ProjectsSection } from "../components/ProjectsSection";
import "./Projects.css";

export function Projects() {
  return (
    <div className="projects-page">
      <ProjectsSection variant="page" />
      <ContactSection />
    </div>
  );
}
