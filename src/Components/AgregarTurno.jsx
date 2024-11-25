import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Styles/Agregar.css";

// Importa los datos locales para los turnos
import turnosData from "../data/turnosData"; 

export const AgregarTurno = ({ onAgregar, handleVolverClick }) => {
  let navigate = useNavigate();

  // Estados para los campos del formulario
  const [idPaciente, setIdPaciente] = useState(0);
  const [fechaTurno, setFechaTurno] = useState("");
  const [numOrden, setNumOrden] = useState("");

  // Maneja el evento de agregar un turno
  const handleAgregar = () => {
    const nuevoTurno = {
      id_Turnos: turnosData.length + 1, // Genera un ID autoincremental (puedes ajustarlo según tu necesidad)
      idPaciente,
      fechaTurno,
      numOrden,
    };

    // Validar campos requeridos
    if (nuevoTurno.idPaciente && nuevoTurno.fechaTurno && nuevoTurno.numOrden) {
      onAgregar(nuevoTurno); // Llama a la función para agregar el turno al array
      navigate("/turno"); // Redirige a la lista de turnos
    } else {
      alert("Por favor, completa todos los campos correctamente.");
    }
  };

  return (
    <>
      <div className="contenedor-ad">
        <div id="container-ad" className="container p-2">
          <Form.Group className="mb-3">
            <Form.Label>Id Paciente</Form.Label>
            <Form.Control
              placeholder="ID del paciente"
              type="number"
              onChange={(e) => setIdPaciente(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha del Turno</Form.Label>
            <Form.Control
              type="date"
              placeholder="Fecha del turno"
              onChange={(e) => setFechaTurno(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Número de Orden</Form.Label>
            <Form.Control
              placeholder="Número de orden"
              onChange={(e) => setNumOrden(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Button variant="success fw-bold" onClick={handleAgregar}>
              Agregar
            </Button>
            <Button variant="btn btn-primary m-2 fw-bold" onClick={handleVolverClick}>
              Volver
            </Button>
          </Form.Group>
        </div>
      </div>
    </>
  );
};

export default AgregarTurno;
