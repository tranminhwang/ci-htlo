import "./ProjectItem.css";

function ProjectItem() {
  return (
    <a href="#welcome-section" target="_blank" className="project project-tile">
      <img
        className="project-image"
        src="https://resources.mindx.edu.vn/uploads/images/anh%20web-02.png"
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        Sample 1<span className="code">&#47;&gt;</span>
      </p>
    </a>
  );
}

export default ProjectItem;
