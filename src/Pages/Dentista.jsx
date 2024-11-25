import { useState } from "react";
import { AgregarDentista, EditarDentista, Footer, Header, TablaDentista } from "../Constants";
import "../Styles/Dentista.css";
import dentistasData from "../data/dentistasData";

export const Dentista = () => {
  const [dentistas, setDentistas] = useState(dentistasData);
  const [view, setView] = useState("tabla"); // 'tabla', 'agregar', 'editar'
  const [dentistaEditar, setDentistaEditar] = useState(null);

  const handleAgregarDentista = (nuevoDentista) => {
    setDentistas((prevDentistas) => {
      const nuevoId = prevDentistas.length ? prevDentistas[prevDentistas.length - 1].id + 1 : 1;
      return [...prevDentistas, { id: nuevoId, ...nuevoDentista }];
    });
    setView("tabla");
  };

  const handleEditarDentista = (dentista) => {
    setDentistas((prevDentistas) => 
      prevDentistas.map((d) => (d.id === dentista.id ? { ...d, ...dentista } : d))
    );
    setView("tabla");
  };

  const handleEditarClick = (idDentista) => {
    
    
    const dentistaParaEditar = dentistas.find((dentista) => dentista.id == idDentista);
    setDentistaEditar(dentistaParaEditar);    

    setView("editar");
  };

  const handleGuardarEdit = (dentistaEditado) => {
    setDentistas((prevDentistas) => {
      return prevDentistas.map((dentista) => {
        // Busca el dentista que tiene el mismo ID y lo actualiza
        if (dentista.id === dentistaEditado.id) {
          return { ...dentista, ...dentistaEditado }; // Actualiza solo los campos modificados
        }
        setView("tabla");
        return dentista; // Mantiene los demás sin cambios
      });
    });
  };
  

  const handleVolverClick = () => {
    setView("tabla");
  };

  const handleEliminar = (id) => {
    setDentistas((prevDentistas) => prevDentistas.filter((dentista) => dentista.id !== id));
  };

  return (
    <div className="contenedor-dentista">
      <Header />
      <h2>Dentista</h2>

      {view === "tabla" && (
        <>
          <button
            className="boton-agregar"
            onClick={() => setView("agregar")}
          >
            Agregar Dentista
          </button>
          <div className="container divTabla">
            <TablaDentista
              dentistasData={dentistas} // Aquí siempre pasamos el estado actualizado
              onEditarClick={handleEditarClick}
              handleEliminar={handleEliminar} // Pasamos la función para eliminar
            />
          </div>
        </>
      )}

      {view === "agregar" && (
        <AgregarDentista onAgregar={handleAgregarDentista} handleVolverClick={handleVolverClick} />
      )}

      {view === "editar" && (
        <EditarDentista
          dentista={dentistaEditar}
          onEditar={handleEditarDentista}
          handleVolverClick={handleVolverClick}
          handleGuardarEdit = {handleGuardarEdit}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default Dentista;

