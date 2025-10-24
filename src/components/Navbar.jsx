import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1 className="logo">Alejandro Loza - Portafolio</h1>
      <ul className="nav-links">
        <li>
          <Link className={location.pathname === "/" ? "active" : ""} to="/">Inicio</Link>
        </li>
        <div className="separator"></div>
        <li>
          <Link className={location.pathname === "/modulo1" ? "active" : ""} to="/modulo1">Módulo 1</Link>
        </li>
        <li>
          <Link className={location.pathname === "/modulo2" ? "active" : ""} to="/modulo2">Módulo 2</Link>
        </li>
        <li>
          <Link className={location.pathname === "/modulo3" ? "active" : ""} to="/modulo3">Módulo 3</Link>
        </li>
      </ul>
    </nav>
  );
}
