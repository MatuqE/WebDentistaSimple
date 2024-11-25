import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usuariosRegistrados } from "../data/usuarios"; // Importar usuarios registrados
import "../Styles/Login.css";
import logo from "../assets/logo.png";

export const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const handleIngresar = (e) => {
    e.preventDefault(); // Prevenir recarga de la página

    // Validar si el usuario existe y la contraseña es correcta
    const usuarioEncontrado = usuariosRegistrados.find(
      (u) => u.usuario === usuario && u.contraseña === contraseña
    );

    if (usuarioEncontrado) {
      alert("Bienvenido, " + usuarioEncontrado.usuario + "!");
      navigate("/", { replace: true });
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div>
      <div className="body">
        <div className="login-box">
          <img src={logo} alt="" className="avatar" />
          <h1>Ingrese su usuario</h1>
          <form>
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              placeholder="Ingrese su usuario"
              onChange={(e) => setUsuario(e.target.value)}
            />
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
            <input type="submit" value="Ingresar" onClick={handleIngresar} />
            <Link to="/registrarLogin">
            <button id="registrarse-boton">Registrarse</button>
            </Link>
            <Link to="/">
            <button id="volver-boton">Volver</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


