import { ContactSection } from "../components/ContactSection";
import { ProjectsSection } from "../components/ProjectsSection";
import "./Projects.css";

export function Projects() {
  return (
    <div className="projects-page">
      <ProjectsSection repeat={2} />
      <ContactSection />
    </div>
  );
}
