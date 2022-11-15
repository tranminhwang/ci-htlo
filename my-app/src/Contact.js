import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-header">
        <h2>Let's work together...</h2>
        <p>How do you take your coffee?</p>
      </div>
      <div className="contact-links">
        <a
          href="#welcome-section"
          target="_blank"
          className="btn contact-details"
        >
          <i className="fab fa-facebook-square"></i> Facebook
        </a>
        <a
          id="profile-link"
          href="#welcome-section"
          target="_blank"
          className="btn contact-details"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="#welcome-section" className="btn contact-details">
          <i className="fas fa-at"></i> Send a mail
        </a>
        <a href="#welcome-section" className="btn contact-details">
          <i className="fas fa-mobile-alt"></i> Call me
        </a>
      </div>
    </section>
  );
}

export default Contact;
