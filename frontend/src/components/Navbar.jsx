import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src={logo} alt="PrompTea Logo" className="nav-logo" />

        <h1 className="nav-title">PrompTea</h1>
      </div>

      <div className="nav-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </Link>

        <Link
          to="/brew"
          className={location.pathname === "/brew" ? "active" : ""}
        >
          Brew
        </Link>

        <Link
          to="/history"
          className={location.pathname === "/history" ? "active" : ""}
        >
          History
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;