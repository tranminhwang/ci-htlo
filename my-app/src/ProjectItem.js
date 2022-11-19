import "./ProjectItem.css";

function ProjectItem(props) {
  const { thumNe, titleNe } = props;

  const handleBuyCourse = () => {
    console.log("Buy course");
  };

  return (
    <a href="#" className="project project-tile">
      <img className="project-image" src={thumNe} alt="project" />
      <p className="project-title">
        <span className="code"></span>
        {titleNe}
        <span className="code"></span>
      </p>
      <button className="buy-course" onClick={handleBuyCourse}>
        Mua khoa hoc
      </button>
    </a>
  );
}

export default ProjectItem;
