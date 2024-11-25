import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Styles/Agregar.css";

 export const AgregarDentista = ({ onAgregar, handleVolverClick }) => {
  let navigate = useNavigate();

  // Estados para los campos del formulario
  const [id_dentista] = useState(0);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [matricula, setMatricula] = useState("");
  const [sexo, setSexo] = useState("");
  const [turno, setTurno] = useState("");

  // Maneja el evento de agregar un dentista
  const handleAgregar = () => {
    const nuevoDentista = {
      id_dentista: id_dentista, // Puede generarse automáticamente en el componente principal
      nombre: nombre.trim(),
      apellido: apellido.trim(),
      dni: parseInt(dni),
      matricula: parseInt(matricula),
      sexo,
      turno,
    };

    if (
      nuevoDentista.nombre &&
      nuevoDentista.apellido &&
      nuevoDentista.dni &&
      nuevoDentista.matricula &&
      nuevoDentista.sexo &&
      nuevoDentista.turno
    ) {
      onAgregar(nuevoDentista); // Llama la función para agregar al array
      navigate("/dentistas"); // Redirige a la tabla principal
    } else {
      alert("Por favor completa todos los campos correctamente.");
    }
  };

  return (
    <div className="contenedor-ad">
      <div id="container-ad" className="container p-6">
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            placeholder="DNI"
            type="number"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>N° Matricula</Form.Label>
          <Form.Control
            placeholder="Ingrese su n° de Matricula"
            type="number"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Sexo</Form.Label>
          <Form.Select value={sexo} onChange={(e) => setSexo(e.target.value)}>
            <option value="">Seleccione un campo</option>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Turno</Form.Label>
          <Form.Select value={turno} onChange={(e) => setTurno(e.target.value)}>
            <option value="">Seleccione un campo</option>
            <option value="Mañana">Mañana</option>
            <option value="Tarde">Tarde</option>
            <option value="Noche">Noche</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Button variant="success fw-bold" onClick={handleAgregar}>
            Agregar
          </Button>

            <Button variant="btn btn-primary m-2 fw-bold" onClick={handleVolverClick}>Volver</Button>

        </Form.Group>
      </div>
    </div>
  );
};

export default AgregarDentista;
