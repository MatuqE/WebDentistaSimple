import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usuariosRegistrados } from "../data/usuarios"; // Importar usuarios registrados
import "../Styles/RegistrarseLogin.css";

export const RegistrarLogin = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const handleRegistrar = (e) => {
    e.preventDefault(); // Prevenir recarga de la página

    // Verificar que ambos campos estén llenos
    if (!usuario || !contraseña) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Verificar si el usuario ya existe
    const usuarioExistente = usuariosRegistrados.find(
      (u) => u.usuario === usuario
    );

    if (usuarioExistente) {
      alert("El nombre de usuario ya está registrado.");
      return;
    }

    // Agregar el nuevo usuario al array
    usuariosRegistrados.push({ usuario, contraseña });
    alert("Usuario registrado con éxito.");
    navigate("/login", { replace: true });
  };

  return (
    <div className="contenedor-centrador">
      <div className="register-container">
        <form onSubmit={handleRegistrar} className="form-content">
          <h2 className="form-title">Registrar Usuario</h2>
          <label>Usuario</label>
          <input
            type="text"
            placeholder="Ingrese su usuario"
            onChange={(e) => setUsuario(e.target.value)}
          />
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            onChange={(e) => setContraseña(e.target.value)}
          />
          <button type="submit" id="registrarse-boton">
            Registrar
          </button>
          <Link to="/login">
            <button id="volver-boton">Volver</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegistrarLogin;
