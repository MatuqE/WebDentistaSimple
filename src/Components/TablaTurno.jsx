import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export const TablaTurno = ({ turnosData, handleEliminar, onEditarClick }) => {
  return (
    <div className="row">
      <Table striped bordered hover variant="dark" className="col">
        <thead>
          <tr>
            <th>ID Paciente</th>
            <th>Fecha del Turno</th>
            <th>Número de Turno</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {turnosData && turnosData.length > 0 ? (
            turnosData.map((turno) => (
              <tr key={turno.id}>
                <td>{turno.idPaciente}</td>
                <td>{turno.fechaTurno.slice(0, 10)}</td>
                <td>{turno.numOrden}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => onEditarClick(turno.id)}
                  >
                    Editar
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleEliminar(turno.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No hay turnos registrados.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaTurno;
