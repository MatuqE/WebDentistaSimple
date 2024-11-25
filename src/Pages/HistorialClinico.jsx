import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { TablaHistorial, AgregarHistorial, EditarHistorial } from "../Constants";
import "../Styles/Historial.css";
import historialData from "../data/historialData"; // Archivo con datos iniciales de historial

export const HistorialClinico = () => {
  const [historiales, setHistoriales] = useState(historialData);
  const [view, setView] = useState("tabla"); // 'tabla', 'agregar', 'editar'
  const [historialEditar, setHistorialEditar] = useState(null);

  // Maneja la acción de agregar un nuevo historial
  const handleAgregarHistorial = (nuevoHistorial) => {
    setHistoriales((prevHistoriales) => {
      const nuevoId = prevHistoriales.length ? prevHistoriales[prevHistoriales.length - 1].id + 1 : 1;
      return [...prevHistoriales, { id: nuevoId, ...nuevoHistorial }];
    });
    setView("tabla");
  };

  // Maneja la acción de editar un historial existente
  const handleEditarHistorial = (historial) => {
    setHistoriales((prevHistoriales) =>
      prevHistoriales.map((h) => (h.id === historial.id ? { ...h, ...historial } : h))
    );
    setView("tabla");
  };

  // Activa la vista de edición para un historial específico
  const handleEditarClick = (idHistorial) => {
    const historialParaEditar = historiales.find((historial) => historial.id === idHistorial);
    setHistorialEditar(historialParaEditar);
    setView("editar"); // Cambiar la vista a 'editar'
  };
  
  // Maneja la eliminación de un historial
  const handleEliminar = (id) => {
    setHistoriales((prevHistoriales) => prevHistoriales.filter((historial) => historial.id !== id));
  };

  // Regresa a la vista de tabla
  const handleVolverClick = () => {
    setView("tabla");
  };

  const handleGuardarEdit = (historialEditado) => {
    setHistoriales((prevHistoriales) =>
      prevHistoriales.map((historial) =>
        historial.id === historialEditado.id ? { ...historial, ...historialEditado } : historial
      )
    );
    setView("tabla");
  };
  

  return (
    <div className="contenedor-historial">
      <Header />
      <h2>Historial Clínico</h2>

      {view === "tabla" && (
        <>
          <div className="divBtn">
            <button
              className="boton-agregar"
              onClick={() => setView("agregar")}
            >
              Agregar Historial
            </button>
          </div>
          <div className="container divTabla">
            <TablaHistorial
              historialData={historiales}
              onEditarClick={handleEditarClick}
              handleEliminar={handleEliminar}
            />
          </div>
        </>
      )}

      {view === "agregar" && (
        <AgregarHistorial
          onAgregar={handleAgregarHistorial}
          handleVolverClick={handleVolverClick}
        />
      )}

      {view === "editar" && (
        <EditarHistorial
          historial={historialEditar}
          onEditar={handleEditarHistorial}
          handleVolverClick={handleVolverClick}
          handleGuardarEdit={handleGuardarEdit}
        />
      )}

      <Footer />
    </div>
  );
};

export default HistorialClinico;
