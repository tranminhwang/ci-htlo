import { Link } from "react-router-dom";
import { Navbar, Text } from "@nextui-org/react";

const Header = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Text h2>
          <Link to="/">MindX Movie</Link>
        </Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Link>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/contact">Contact</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/about">About</Link>
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};

export default Header;
