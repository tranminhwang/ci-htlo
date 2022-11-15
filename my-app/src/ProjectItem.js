import "./ProjectItem.css";

function ProjectItem(props) {
  return (
    <a href="#welcome-section" target="_blank" className="project project-tile">
      <img className="project-image" src={props.thum} alt="project" />
      <p className="project-title">
        <span className="code"></span>
        {props.title}
        <span className="code"></span>
      </p>
    </a>
  );
}

export default ProjectItem;
