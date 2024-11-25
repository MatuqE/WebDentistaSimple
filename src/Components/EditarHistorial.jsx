import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "../Styles/Editar.css";

export const EditarHistorial = ({ handleVolverClick, historial, handleGuardarEdit }) => {


  const [fecha, setFecha] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [observaciones, setObservaciones] = useState("");

  // Función para obtener los datos del historial
  const getHistorial = () => {
    if (historial) {
      setFecha(historial.fecha ? historial.fecha.slice(0, 10) : "");
      setDiagnostico(historial.diagnostico || "");
      setObservaciones(historial.observaciones || "");
    } else {
      console.error("No se recibieron datos del historial.");
    }
  };

  // Función para manejar la edición del historial
  const handleEditar = async () => {
    if (!fecha || !diagnostico || !observaciones) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    try {
      const historialEditado = {
        id: historial.id, // Incluye el ID para actualizar el historial correcto
        fecha,
        diagnostico,
        observaciones,
      };
  
      handleGuardarEdit(historialEditado); // Actualiza el historial con ID
    } catch (error) {
      console.error("Error al editar el historial:", error);
      alert("Hubo un error al editar el historial.");
    }
  };
  

  useEffect(() => {
    if (historial) {
      getHistorial();
    }
  }, [historial]);
  
  return (
    <div className="conteiner-ed">
      <div className='container m-3' id='conteiner-ed'>
        <Form.Group className="mb-3">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            type="date"
            placeholder="Fecha"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Diagnóstico</Form.Label>
          <Form.Control
            value={diagnostico}
            onChange={(e) => setDiagnostico(e.target.value)}
            placeholder="Diagnóstico"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Observaciones</Form.Label>
          <Form.Control
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
            placeholder="Observaciones"
          />
        </Form.Group>

        <Button variant="success" onClick={handleEditar}>Guardar</Button>
        <Button variant="primary" className="m-2" onClick={handleVolverClick}>Volver</Button>
      </div>
    </div>
  );
};

export default EditarHistorial;
