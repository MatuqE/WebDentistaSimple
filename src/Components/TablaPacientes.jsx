import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export const TablaPacientes = ({ pacientesData, handleEliminar, onEditarClick }) => {
  return (
    <div className="row">
      <Table striped bordered hover variant="dark" className="col">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>DNI</th>
            <th>Teléfono</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {pacientesData && pacientesData.length > 0 ? (
            pacientesData.map((paciente) => (
              <tr key={paciente.id}>
                <td>{paciente.id}</td>
                <td>{paciente.nombre}</td>
                <td>{paciente.apellido}</td>
                <td>{paciente.dni}</td>
                <td>{paciente.telefono}</td>
                <td>
                  <Button 
                    variant="warning" 
                    onClick={() => onEditarClick(paciente.id)}
                  >
                    Editar
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleEliminar(paciente.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No hay pacientes registrados.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaPacientes;
