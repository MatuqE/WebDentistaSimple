import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { TablaPacientes, AgregarPaciente, EditarPaciente } from "../Constants";
import "../Styles/Pacientes.css";
import pacientesData from "../data/pacientesData"; // Archivo con datos iniciales de pacientes

export const Pacientes = () => {
  const [pacientes, setPacientes] = useState(pacientesData);
  const [view, setView] = useState("tabla"); // 'tabla', 'agregar', 'editar'
  const [pacienteEditar, setPacienteEditar] = useState(null);

  const handleAgregarPaciente = (nuevoPaciente) => {
    setPacientes((prevPacientes) => {
      const nuevoId = prevPacientes.length ? prevPacientes[prevPacientes.length - 1].id + 1 : 1;
      return [...prevPacientes, { id: nuevoId, ...nuevoPaciente }];
    });
    setView("tabla");
  };

  const handleEditarPaciente = (paciente) => {
    setPacientes((prevPacientes) =>
      prevPacientes.map((p) => (p.id === paciente.id ? { ...p, ...paciente } : p))
    );
    setView("tabla");
  };

  const handleEditarClick = (idPaciente) => {
    const pacienteParaEditar = pacientes.find((paciente) => paciente.id === idPaciente);
    setPacienteEditar(pacienteParaEditar);
    setView("editar");
  };

  const handleGuardarEdit = (pacienteEditado) => {
    setPacientes((prevPacientes) => {
      return prevPacientes.map((paciente) => {
        // Busca el dentista que tiene el mismo ID y lo actualiza
        if (paciente.id === pacienteEditado.id) {
          return { ...paciente, ...pacienteEditado }; // Actualiza solo los campos modificados
        }
        setView("tabla");
        return paciente; // Mantiene los demás sin cambios
      });
    });
  };

  const handleEliminar = (id) => {
    setPacientes((prevPacientes) => prevPacientes.filter((paciente) => paciente.id !== id));
  };

  const handleVolverClick = () => {
    setView("tabla");
  };

  return (
    <div className="contenedor-pacientes">
      <Header />
      <h2>Pacientes</h2>

      {view === "tabla" && (
        <>
        <div className="divBtn">
          <button
            className="boton-agregar"
            onClick={() => setView("agregar")}
          >
            Agregar Paciente
          </button>
        </div>
          <div className="container divTabla">
            <TablaPacientes
              pacientesData={pacientes}
              onEditarClick={handleEditarClick}
              handleEliminar={handleEliminar}
            />
          </div>
        </>
      )}

      {view === "agregar" && (
        <AgregarPaciente onAgregar={handleAgregarPaciente} handleVolverClick={handleVolverClick} />
      )}

      {view === "editar" && (
        <EditarPaciente
          paciente={pacienteEditar}
          onEditar={handleEditarPaciente}
          handleVolverClick={handleVolverClick}
          handleGuardarEdit={handleGuardarEdit}
        />
      )}

      <Footer />
    </div>
  );
};

export default Pacientes;
