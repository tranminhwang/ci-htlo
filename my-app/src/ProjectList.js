import ProjectItem from "./ProjectItem";
import "./ProjectList.css";

function ProjectList() {
  const projectData = [
    {
      title: "C4EJS",
      thum: "https://bitnetinfotech.com/wp-content/uploads/2022/08/Frameworks-for-React-JS.jpg",
    },
    {
      title: "CIJS",
      thum: "https://i.ytimg.com/vi/yyUHQIec83I/maxresdefault.jpg",
    },
    {
      title: "Web3.0",
      thum: "https://bizflyportal.mediacdn.vn/bizflyportal/1453/2428/2021/05/13/21/21/ten16208940807508.jpg",
    },
  ];
  const projects = [];
  for (let i = 0; i < projectData.length; i++) {
    const temp = projectData[i];
    projects.push(<ProjectItem title={temp.title} thum={temp.thum} />);
  }
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-section-header">These are some of my projects</h2>
      <div className="projects-grid">
        {/* Cach 1 */}
        {projects}

        {/* Cach 2 */}
        {/* {projectData.map((pj) => (
          <ProjectItem title={pj.title} thum={pj.thum} />
        ))} */}
      </div>
      <a href="#welcome-section" className="btn btn-show-all" target="_blank">
        Show all<i className="fas fa-chevron-right"></i>
      </a>
    </section>
  );
}

export default ProjectList;
