import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Header, TablaTurno, AgregarTurno, EditarTurno } from "../Constants"; // Asegúrate de tener los componentes correspondientes
import "../Styles/Turnos.css";
import turnosData from "../data/turnosData"; // Datos iniciales de turnos

export const Turno = () => {
  const [turnos, setTurnos] = useState(turnosData); // Estado para los turnos
  const [view, setView] = useState("tabla"); // 'tabla', 'agregar', 'editar'
  const [turnoEditar, setTurnoEditar] = useState(null);

  // Función para agregar un nuevo turno
  const handleAgregarTurno = (nuevoTurno) => {
    setTurnos((prevTurnos) => {
      const nuevoId = prevTurnos.length ? prevTurnos[prevTurnos.length - 1].id + 1 : 1;
      return [...prevTurnos, { id: nuevoId, ...nuevoTurno }];
    });
    setView("tabla");
  };

  // Función para manejar la edición del turno
  const handleEditarTurno = (turno) => {
    setTurnos((prevTurnos) =>
      prevTurnos.map((t) => (t.id === turno.id ? { ...t, ...turno } : t))
    );
    setView("tabla");
  };

  // Función para abrir la vista de edición de un turno
  const handleEditarClick = (idTurno) => {
    const turnoParaEditar = turnos.find((turno) => turno.id === idTurno);
    setTurnoEditar(turnoParaEditar);
    setView("editar");
  };

  // Función para guardar los cambios del turno editado
  const handleGuardarEdit = (turnoEditado) => {
    setTurnos((prevTurnos) =>{

      return prevTurnos.map((turno) => {
         if (turno.id === turnoEditado.id) {
           return { ...turno, ...turnoEditado }; // Actualiza solo los campos modificados
         }
         return turno; // Mantiene los demás sin cambios
       })
      }
    );
    setView("tabla");
  };

  // Función para eliminar un turno
  const handleEliminar = (id) => {
    setTurnos((prevTurnos) => prevTurnos.filter((turno) => turno.id !== id));
  };

  // Función para volver a la vista de la tabla
  const handleVolverClick = () => {
    setView("tabla");
  };

  return (
    <div className="contenedor-turno">
      <Header />
      <h2>Turnos</h2>

      {view === "tabla" && (
        <>
          <div className="divBtn">
            <button className="boton-agregar" onClick={() => setView("agregar")}>
              Agregar Turno
            </button>
          </div>
          <div className="container divTabla">
            <TablaTurno
              turnosData={turnos}
              onEditarClick={handleEditarClick}
              handleEliminar={handleEliminar}
            />
          </div>
        </>
      )}

      {view === "agregar" && (
        <AgregarTurno onAgregar={handleAgregarTurno} handleVolverClick={handleVolverClick} />
      )}

      {view === "editar" && (
        <EditarTurno
          turno={turnoEditar} // Pasamos el turno a editar
          handleGuardarEdit={handleGuardarEdit} // Llamada para guardar los cambios
          handleVolverClick={handleVolverClick}
        />
      )}

      <Footer />
    </div>
  );
};

export default Turno;
