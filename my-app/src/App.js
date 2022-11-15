import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      {/* <!-- END NAV --> */}
      <Header />
      {/* <!-- START WELCOME SECTION --> */}

      <section id="welcome-section" class="welcome-section">
        <h1>Hey I am mindXer</h1>
        <p>A Full Stack Web Developer</p>
      </section>

      {/* <!-- END WELCOME SECTION --> */}

      {/* <!-- START PROJECTS SECTION --> */}

      <section id="projects" class="projects-section">
        <h2 class="projects-section-header">These are some of my projects</h2>

        <div class="projects-grid">
          <a
            href="#welcome-section"
            target="_blank"
            class="project project-tile"
          >
            <img
              class="project-image"
              src="https://resources.mindx.edu.vn/uploads/images/anh%20web-02.png"
              alt="project"
            />
            <p class="project-title">
              <span class="code">&lt;</span>
              Sample 1<span class="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="#welcome-section"
            target="_blank"
            class="project project-tile"
          >
            <img
              class="project-image"
              src="https://resources.mindx.edu.vn/uploads/images/anh%20web-10.png"
              alt="project"
            />
            <p class="project-title">
              <span class="code">&lt;</span>
              Sample 2<span class="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="#welcome-section"
            target="_blank"
            class="project project-tile"
          >
            <img
              class="project-image"
              src="https://resources.mindx.edu.vn/uploads/images/anh%20web-11%20.png"
              alt="project"
            />
            <p class="project-title">
              <span class="code">&lt;</span>
              Sample 3<span class="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="#welcome-section"
            target="_blank"
            class="project project-tile"
          >
            <img
              class="project-image"
              src="https://resources.mindx.edu.vn/uploads/images/anh%20web-08.png"
              alt="project"
            />
            <p class="project-title">
              <span class="code">&lt;</span>
              Sample 4<span class="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="#welcome-section"
            target="_blank"
            class="project project-tile"
          >
            <img
              class="project-image"
              src="https://resources.mindx.edu.vn/uploads/images/anh%20web-13%20.png"
              alt="project"
            />
            <p class="project-title">
              <span class="code">&lt;</span>
              Sample 5<span class="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="#welcome-section"
            target="_blank"
            class="project project-tile"
          >
            <img
              class="project-image"
              src="https://resources.mindx.edu.vn/uploads/images/anh%20web-12.png"
              alt="project"
            />
            <p class="project-title">
              <span class="code">&lt;</span>
              Sample 6<span class="code">&#47;&gt;</span>
            </p>
          </a>
        </div>

        <a href="#welcome-section" class="btn btn-show-all" target="_blank">
          Show all<i class="fas fa-chevron-right"></i>
        </a>
      </section>

      {/* <!-- END PROJECTS SECTION --> */}

      {/* <!-- START CONTACT SECTION --> */}

      <section id="contact" class="contact-section">
        <div class="contact-section-header">
          <h2>Let's work together...</h2>
          <p>How do you take your coffee?</p>
        </div>
        <div class="contact-links">
          <a
            href="#welcome-section"
            target="_blank"
            class="btn contact-details"
          >
            <i class="fab fa-facebook-square"></i> Facebook
          </a>
          <a
            id="profile-link"
            href="#welcome-section"
            target="_blank"
            class="btn contact-details"
          >
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="#welcome-section" class="btn contact-details">
            <i class="fas fa-at"></i> Send a mail
          </a>
          <a href="#welcome-section" class="btn contact-details">
            <i class="fas fa-mobile-alt"></i> Call me
          </a>
        </div>
      </section>

      {/* <!-- END CONTACT SECTION --> */}

      {/* <!-- START FOOTER SECTION --> */}

      <footer>
        <p>
          **This is just a fake portfolio. All the projects and contact details
          given are not real.
        </p>
        <p>
          &copy; Created for
          <a href="#welcome-section" target="_blank">
            mindX Technology School
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
