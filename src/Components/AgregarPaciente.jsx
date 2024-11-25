import { useState } from "react";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../Styles/Agregar.css";
import { Link } from "react-router-dom";

export const AgregarPaciente = ({ onAgregar, handleVolverClick }) => {
  let navigate = useNavigate();

  // Estados para los campos del formulario
  const [id_paciente] = useState(0); // Puede ser autogenerado en la lógica principal
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sexo, setSexo] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [edad, setEdad] = useState("");
  const [idHistorialClinico, setIdHistorialClinico] = useState("");

  // Maneja el evento de agregar un paciente
  const handleAgregar = () => {
    const nuevoPaciente = {
      id_paciente, // Se puede ignorar si se genera automáticamente
      nombre: nombre.trim(),
      apellido: apellido.trim(),
      dni: parseInt(dni),
      telefono,
      sexo,
      domicilio: domicilio.trim(),
      fechaNacimiento,
      edad: parseInt(edad),
      idHistorialClinico: parseInt(idHistorialClinico),
    };

    // Validar campos requeridos
    if (
      nuevoPaciente.nombre &&
      nuevoPaciente.apellido &&
      nuevoPaciente.dni &&
      nuevoPaciente.telefono &&
      nuevoPaciente.sexo &&
      nuevoPaciente.domicilio &&
      nuevoPaciente.fechaNacimiento &&
      nuevoPaciente.edad &&
      nuevoPaciente.idHistorialClinico
    ) {
      onAgregar(nuevoPaciente); // Llama a la función para agregar al array o base de datos
      navigate("/pacientes"); // Redirige a la tabla de pacientes
    } else {
      alert("Por favor completa todos los campos correctamente.");
    }
  };

  return (
    <>
      <div className="contenedor-ad">
        <div id="container-ad" className="container p-2">
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              placeholder="Nombre"
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              placeholder="Apellido"
              onChange={(e) => setApellido(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>DNI</Form.Label>
            <Form.Control
              placeholder="DNI"
              onChange={(e) => setDni(e.target.value)}
              type="number"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Teléfono</Form.Label> {/* Nuevo campo para teléfono */}
            <Form.Control
              placeholder="Teléfono"
              type="text"
              onChange={(e) => setTelefono(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Domicilio</Form.Label>
            <Form.Control
              placeholder="Domicilio"
              onChange={(e) => setDomicilio(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              type="number"
              placeholder="Edad"
              onChange={(e) => setEdad(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control
              type="date"
              placeholder="Fecha de nacimiento"
              onChange={(e) => setFechaNacimiento(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Sexo</Form.Label>
            <Form.Select value={sexo} onChange={(e) => setSexo(e.target.value)}>
              <option value="" disabled>
                Selecciona una opcion
              </option>
              <option value="Mujer">Mujer</option>
              <option value="Hombre">Hombre</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Historial Clínico</Form.Label>
            <Form.Control
              placeholder="Historial Clínico"
              onChange={(e) => setIdHistorialClinico(e.target.value)}
              type="number"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Button variant="success fw-bold" onClick={handleAgregar}>
              Agregar
            </Button>
            
              <Button variant="btn btn-primary m-2 fw-bold" onClick={handleVolverClick}>Volver</Button>

          </Form.Group>
        </div>
      </div>
    </>
  );
};

export default AgregarPaciente;
