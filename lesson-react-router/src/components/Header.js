import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

const Header = () => {
  const navigate = useNavigate();
  const isLogin = useAuth();

  const handleLogout = () => {
    localStorage.setItem("isLogin", false);
    navigate("/login");
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
              to="/list-users"
            >
              List User
            </NavLink>
          </li>
          <li>
            {isLogin ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "red" } : undefined
                }
                to="/login"
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
