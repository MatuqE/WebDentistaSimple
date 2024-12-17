import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../Styles/Editar.css";

export const EditarDentista = ({ handleVolverClick, dentista, handleGuardarEdit }) => {

  const navigate = useNavigate();

  const [id, setId] = useState();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [matricula, setMatricula] = useState("");
  const [sexo, setSexo] = useState("");
  const [turno, setTurno] = useState("");


  // Función para obtener los datos del dentista
  const getDentista = () => {
    if (dentista) {
      setId(dentista.id || "");
      setNombre(dentista.nombre || "");
      setApellido(dentista.apellido || "");
      setDni(dentista.dni || "");
      setMatricula(dentista.matricula || "");
      setSexo(dentista.sexo || "");
      setTurno(dentista.turno || "");
    } else {
      console.error("No se recibieron datos del dentista.");
    }
  };

  // Función para manejar la edición
  const handleEditar = async () => {
    if (!nombre || !apellido || !dni || !matricula || !sexo || !turno) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    try {
      const dentistaEditado = {
        id, // Incluye el ID del dentista para identificarlo
        nombre,
        apellido,
        dni: parseInt(dni),
        matricula,
        sexo,
        turno,
      };
      handleGuardarEdit(dentistaEditado);
      navigate("/dentistas"); // Redirige a la tabla principal
    } catch (error) {
      console.error("Error al actualizar el dentista:", error);
      alert("Hubo un error al actualizar el dentista.");
    }
  };
  
  useEffect(() => {
    getDentista();
  }, [dentista]); // Dependencia para recargar si `dentista` cambia
 // Dependencia de `id` para cargar los datos cuando cambie

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
        <Form.Label>Matricula</Form.Label>
        <Form.Control
          value={matricula}
          type="text"
          placeholder="N° Matricula"
          onChange={(e) => setMatricula(e.target.value)}
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
        <Form.Label>Turno</Form.Label>
        <Form.Select value={turno} onChange={(e) => setTurno(e.target.value)}>
          <option value="" disabled>
            Selecciona un turno
          </option>
          <option value="mañana">Mañana</option>
          <option value="tarde">Tarde</option>
          <option value="noche">Noche</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
          <Button variant="success" onClick={handleEditar}>
            Editar
          </Button>
          <Button variant="btn btn-primary m-2 fw-bold" onClick={handleVolverClick}>Volver</Button>

        </Form.Group>

      </div>
    </div>
  );
};

export default EditarDentista;
