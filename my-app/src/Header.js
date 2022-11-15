import "./Header.css";

function Header() {
  return (
    <nav id="navbar">
      <ul class="nav">
        <li class="logo">
          <a href="#logo">mindX School</a>
        </li>
        <li class="item">
          <a href="#welcome-section">About</a>
        </li>
        <li class="item">
          <a href="#projects">Project</a>
        </li>
        <li class="item">
          <a href="#contact">Contact</a>
        </li>
        <li class="item button">
          <a href="#">Log In</a>
        </li>
        <li class="item button secondary">
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
