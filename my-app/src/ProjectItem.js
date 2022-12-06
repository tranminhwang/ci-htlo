import "./ProjectItem.css";

function ProjectItem(props) {
  const { thumNe, titleNe, handleBuy } = props;
  const btnText = `Mua ${titleNe.split(" ")[1]}`;

  return (
    <div className="project project-tile">
      <img className="project-image" src={thumNe} alt="project" />
      <p className="project-title">{titleNe}</p>
      <button className="buy-course" onClick={handleBuy}>
        {btnText}
      </button>
    </div>
  );
}

export default ProjectItem;
