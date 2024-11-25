import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

export const TablaDentista = ({ dentistasData, handleEliminar, onEditarClick }) => {

  return (
    <div className="row">
      <Table striped bordered hover variant="dark" className="col">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Dni</th>
            <th>Sexo</th>
            <th>Turno</th>
            <th>N° Matricula</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {dentistasData && dentistasData.length > 0 ? (
            dentistasData.map((dentista) => (
              <tr key={dentista.id}>
                <td>{dentista.id}</td>
                <td>{dentista.nombre}</td>
                <td>{dentista.apellido}</td>
                <td>{dentista.dni}</td>
                <td>{dentista.sexo}</td>
                <td>{dentista.turno}</td>
                <td>{dentista.matricula}</td>
                <td>
                    <Button 
                      variant="warning" 
                      onClick={() => onEditarClick(dentista.id)}
                    >Editar</Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleEliminar(dentista.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center">
                No hay dentistas registrados.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaDentista;
