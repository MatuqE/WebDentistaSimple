import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const EditarTurno = ({ handleGuardarEdit, turno, handleVolverClick }) => {
  // Estado para los datos del turno
  const [id, setId] = useState('');
  const [idPaciente, setIdPaciente] = useState('');
  const [fechaTurno, setFechaTurno] = useState('');
  const [numOrden, setNumOrden] = useState('');

  // Función para obtener los datos del turno
  const getTurno = () => {
    if (turno) {
      setId(turno.id || '')
      setIdPaciente(turno.idPaciente || '');
      setFechaTurno(turno.fechaTurno?.slice(0, 10) || ''); // Limitar a formato fecha
      setNumOrden(turno.numOrden || '');
    } else {
      console.error('No se recibieron datos del turno.');
    }
  };

  // Manejar la edición del turno
  const handleEditar = () => {
    if (!idPaciente || !fechaTurno || !numOrden) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    try {
      const turnoEditado = {
        id,
        idPaciente,
        fechaTurno,
        numOrden,
      };

      console.log(turnoEditado)
      handleGuardarEdit(turnoEditado); // Llamada a la función para guardar el turno editado
    } catch (error) {
      console.error('Error al editar el turno:', error);
      alert('Hubo un error al editar el turno.');
    }
  };

  // Se ejecuta cuando el componente se monta o cuando el turno cambia
  useEffect(() => {
    getTurno(); // Obtener los datos del turno cuando el componente se monta
  }, [turno]);

  return (
    <div className="container p-2">
      <h3>Editar Turno</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>ID Paciente</Form.Label>
          <Form.Control
            type="text"
            value={idPaciente}
            onChange={(e) => setIdPaciente(e.target.value)}
            placeholder="ID del paciente"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fecha de Turno</Form.Label>
          <Form.Control
            type="date"
            value={fechaTurno}
            onChange={(e) => setFechaTurno(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Número de Orden</Form.Label>
          <Form.Control
            type="text"
            value={numOrden}
            onChange={(e) => setNumOrden(e.target.value)}
            placeholder="Número de Orden"
          />
        </Form.Group>

        <Button variant="success" onClick={handleEditar}>
          Guardar
        </Button>
        <Button variant="secondary" className="ms-2" onClick={handleVolverClick}>
          Volver
        </Button>
      </Form>
    </div>
  );
};

export default EditarTurno;
