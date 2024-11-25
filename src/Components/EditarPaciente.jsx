import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../Styles/Editar.css";

export const EditarPaciente = ({ handleVolverClick, paciente, handleGuardarEdit }) => {
  const navigate = useNavigate();

  const [id, setId] = useState();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [sexo, setSexo] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [edad, setEdad] = useState("");
  const [idHistorialClinico, setIdHistorialClinico] = useState("");

  // Función para obtener los datos del paciente
  const getPaciente = () => {
    if (paciente) {
      setId(paciente.id || "");
      setNombre(paciente.nombre || "");
      setApellido(paciente.apellido || "");
      setDni(paciente.dni || "");
      setSexo(paciente.sexo || "");
      setDomicilio(paciente.domicilio || "");
      setFechaNacimiento(paciente.fechaNacimiento?.slice(0, 10) || "");
      setEdad(paciente.edad || "");
      setIdHistorialClinico(paciente.idHistorialClinico || "");
    } else {
      console.error("No se recibieron datos del paciente.");
    }
  };

  // Función para manejar la edición
  const handleEditar = async () => {
    if (!nombre || !apellido || !dni || !sexo || !domicilio || !fechaNacimiento || !edad || !idHistorialClinico) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      const pacienteEditado = {
        id, // Incluye el ID del paciente para identificarlo
        nombre,
        apellido,
        dni: parseInt(dni),
        sexo,
        domicilio,
        fechaNacimiento,
        edad: parseInt(edad),
        idHistorialClinico: parseInt(idHistorialClinico),
      };
      handleGuardarEdit(pacienteEditado);
      navigate("/pacientes"); // Redirige a la tabla principal
    } catch (error) {
      console.error("Error al actualizar el paciente:", error);
      alert("Hubo un error al actualizar el paciente.");
    }
  };

  useEffect(() => {
    getPaciente();
  }, [paciente]); // Dependencia para recargar si `paciente` cambia

  return (
    <div className="conteiner-ed">
      <div id="conteiner-ed" className="container p-6">
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            value={nombre}
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            value={apellido}
            placeholder="Apellido"
            onChange={(e) => setApellido(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            value={dni}
            type="number"
            placeholder="DNI"
            onChange={(e) => setDni(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Domicilio</Form.Label>
          <Form.Control
            value={domicilio}
            placeholder="Domicilio"
            onChange={(e) => setDomicilio(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            value={edad}
            type="number"
            placeholder="Edad"
            onChange={(e) => setEdad(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control
            value={fechaNacimiento}
            type="date"
            placeholder="Fecha de nacimiento"
            onChange={(e) => setFechaNacimiento(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Sexo</Form.Label>
          <Form.Select value={sexo} onChange={(e) => setSexo(e.target.value)}>
            <option value="" disabled>
              Selecciona un sexo
            </option>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Historial Clínico</Form.Label>
          <Form.Control
            value={idHistorialClinico}
            type="number"
            placeholder="Historial Clínico"
            onChange={(e) => setIdHistorialClinico(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Button variant="success" onClick={handleEditar}>
            Guardar
          </Button>
          <Button
            variant="btn btn-primary m-2 fw-bold"
            onClick={handleVolverClick}
          >
            Volver
          </Button>
        </Form.Group>
      </div>
    </div>
  );
};

export default EditarPaciente;
