import ProjectItem from "./ProjectItem";
import "./ProjectList.css";

function ProjectList() {
  let projects = [];
  for (let i = 0; i < 6; i++) {
    projects.push(<ProjectItem />);
  }

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-section-header">These are some of my projects</h2>
      <div className="projects-grid">{projects}</div>
      <a href="#welcome-section" className="btn btn-show-all" target="_blank">
        Show all<i className="fas fa-chevron-right"></i>
      </a>
    </section>
  );
}

export default ProjectList;
