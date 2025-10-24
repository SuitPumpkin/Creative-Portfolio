import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1 className="logo">Alejandro Loza - Portafolio</h1>
      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link className={location.pathname === "/" ? "active" : ""} to="/" onClick={() => setOpen(false)}>Inicio</Link>
        <Link className={location.pathname === "/modulo1" ? "active" : ""} to="/modulo1" onClick={() => setOpen(false)}>Módulo 1</Link>
        <Link className={location.pathname === "/modulo2" ? "active" : ""} to="/modulo2" onClick={() => setOpen(false)}>Módulo 2</Link>
        <Link className={location.pathname === "/modulo3" ? "active" : ""} to="/modulo3" onClick={() => setOpen(false)}>Módulo 3</Link>
      </div>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
