import "../Styles/MainHome.css";
import Button from "react-bootstrap/Button";
import icono2 from "../assets/icon2.png";
import icono3 from "../assets/icon3.png";
import icono4 from "../assets/icon4.png";
import icono5 from "../assets/icon5.png";
import { Link } from "react-router-dom";
import { Footer } from "../Constants";

export const Home = () => {
  return (
    <div className="fondo">
      <div className="contenedor-home">
        <Link to="/login" className="contenedor-login">
          <button className="boton-login">Iniciar Sesión</button>
        </Link>

        <header>
          <h3 className="h2_main_header">"Centro de Salud Dental"</h3>
          <div className="contenedor-boton-login"></div>
        </header>

        <div className="contenedor_button">
          <Link to="/dentistas" className="link-button">
            <Button className="buton1" variant="primary">
              <img src={icono5} alt="" />
              <h4>Ir a Sección Dentista</h4>
            </Button>
          </Link>

          <Link to="/pacientes" className="link-button">
            <Button className="buton1" variant="primary">
              <img src={icono2} alt="" />
              <h4>Ir a Sección Paciente</h4>
            </Button>
          </Link>
        </div>

        <div className="contenedor_button">
          <Link to="/historialclinico" className="link-button">
            <Button className="buton1" variant="primary">
              <img src={icono3} alt="" className="icono3" />
              <h4>Ir a Sección Historial Clínico</h4>
            </Button>
          </Link>

          <Link to="/turno" className="link-button">
            <Button className="buton1" variant="primary">
              <img src={icono4} alt="" className="icono3" />
              <h4>Ir a Sección Turnos</h4>
            </Button>
          </Link>
        </div>

        <div className="banner">
          <p>
            <strong>Esta es una demo de la web realizada.</strong>
            <br />
            Esta aplicación está deployada únicamente con fines demostrativos,
            ya que para su funcionamiento completo es necesario subir el
            backend y la base de datos, lo cual puede ser complicado debido a la
            falta de servicios gratuitos confiables y de larga duración.
            <br />
            Esta web fue creada como parte de un proyecto universitario para
            una clínica dental. Su objetivo es gestionar dentistas, pacientes,
            turnos e historiales médicos, además de proporcionar
            funcionalidades como login, registro y operaciones CRUD para
            optimizar la administración de datos en la clínica.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
