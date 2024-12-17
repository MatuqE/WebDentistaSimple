import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Header.css";

export const Header = () => {
  const location = useLocation();

  return (
    <div className="linea">
      <header className="header_principal">
        <a href="/" className="Logo_header">
          <img src={logo} alt="Logo" className="img_logo" />
        </a>
        <nav>
          <Link
            to="/"
            className={`link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/dentistas"
            className={`link ${
              location.pathname === "/dentistas" ? "active" : ""
            }`}
          >
            Dentista
          </Link>
          <Link
            to="/pacientes"
            className={`link ${
              location.pathname === "/pacientes" ? "active" : ""
            }`}
          >
            Paciente
          </Link>
          <Link
            to="/historialClinico"
            className={`link ${
              location.pathname === "/historialClinico" ? "active" : ""
            }`}
          >
            Historial clínico
          </Link>
          <Link
            to="/turno"
            className={`link ${
              location.pathname === "/turno" ? "active" : ""
            }`}
          >
            Turnos
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
