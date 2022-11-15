import "./Header.css";

function Header() {
  return (
    <nav id="navbar">
      <ul className="nav">
        <li className="logo">
          <a href="#logo">mindX School</a>
        </li>
        <li className="item">
          <a href="#welcome-section">About</a>
        </li>
        <li className="item">
          <a href="#projects">Project</a>
        </li>
        <li className="item">
          <a href="#contact">Contact</a>
        </li>
        <li className="item button">
          <a href="#">Log In</a>
        </li>
        <li className="item button secondary">
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
