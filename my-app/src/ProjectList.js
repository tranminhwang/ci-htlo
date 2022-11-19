import ProjectItem from "./ProjectItem";
import projectData from "./mockData/productMock";
import "./ProjectList.css";

function ProjectList() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-section-header">These are some of my projects</h2>
      <div className="projects-grid">
        {projectData.map(({ id, thumNe, titleNe }) => (
          <ProjectItem key={id} thumNe={thumNe} titleNe={titleNe} />
        ))}
      </div>
      <a href="#welcome-section" className="btn btn-show-all" target="_blank">
        Show all<i className="fas fa-chevron-right"></i>
      </a>
    </section>
  );
}

export default ProjectList;
