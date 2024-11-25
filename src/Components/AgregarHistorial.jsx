import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const AgregarHistorial = ({ onAgregar, handleVolverClick }) => {
  let navigate = useNavigate();

  // Estados para los campos del formulario
  const [fecha, setFecha] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [observaciones, setObservaciones] = useState("");

  // Maneja el evento de agregar un historial clínico
  const handleAgregar = () => {
    const nuevoHistorial = {
      fecha,
      diagnostico: diagnostico.trim(),
      observaciones: observaciones.trim(),
    };

    // Validar campos requeridos
    if (nuevoHistorial.fecha && nuevoHistorial.diagnostico && nuevoHistorial.observaciones) {
      onAgregar(nuevoHistorial); // Llama a la función para agregar al array o base de datos
      navigate("/historialclinico"); // Redirige a la tabla de historiales
    } else {
      alert("Por favor completa todos los campos correctamente.");
    }
  };

  return (
    <div className="contenedor-ad">
      <div id="container-ad" className="container p-5">
        <Form.Group className="mb-3">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date"
            placeholder="Fecha"
            onChange={(e) => setFecha(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Diagnóstico</Form.Label>
          <Form.Control
            placeholder="Diagnóstico"
            onChange={(e) => setDiagnostico(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Observaciones</Form.Label>
          <Form.Control
            placeholder="Observaciones"
            onChange={(e) => setObservaciones(e.target.value)}
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
  );
};

export default AgregarHistorial;
