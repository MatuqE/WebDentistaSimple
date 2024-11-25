import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


export const TablaHistorial = ({ historialData, handleEliminar, onEditarClick,  }) => {
  const [historial, setHistorial] = useState(historialData);

  // Función para eliminar un historial
  const handleEliminarClick = (id) => {
    setHistorial((prevHistorial) =>
      prevHistorial.filter(item => item.id !== id)
    );
    handleEliminar(id); // Si necesitas hacer algo más al eliminar (como actualizar el estado global)
  };

  // Función para manejar la edición de un historial
  const handleEditarClick = (id) => {
    const historialEditar = historial.find(item => item.id === id); // Cambiar id_HistorialClinico por id
    onEditarClick(historialEditar.id); // Pasar solo el id para editar
  };
  

  return (
    <div className="row">
      <Table striped bordered hover variant="dark" className="col">
        <thead>
          <tr>
            <th>#</th>
            <th>Fecha del Turno</th>
            <th>Diagnóstico</th>
            <th>Observaciones</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {historial && historial.length > 0 ? (
            historial.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.fecha.slice(0, 10)}</td>
                <td>{item.diagnostico}</td>
                <td>{item.observaciones}</td>
                <td>
                    <Button variant="warning" onClick={() => handleEditarClick(item.id)}>
                      Editar
                    </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleEliminarClick(item.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No hay historiales registrados.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaHistorial;
