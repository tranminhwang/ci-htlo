import { useContext } from "react";
import { ContextDemo } from "./ContextDemo";

import ProjectItem from "./ProjectItem";
import projectData from "./mockData/productMock";
import "./ProjectList.css";

function ProjectList() {
  const { products, handleBuy } = useContext(ContextDemo);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-section-header">These are some of my projects</h2>
      <div className="projects-grid">
        {products.map(({ id, name, url }) => (
          <ProjectItem
            key={id}
            thumNe={url}
            titleNe={name}
            handleBuy={handleBuy}
          />
        ))}
      </div>
      <a href="#welcome-section" className="btn btn-show-all" target="_blank">
        Show all<i className="fas fa-chevron-right"></i>
      </a>
    </section>
  );
}

export default ProjectList;
