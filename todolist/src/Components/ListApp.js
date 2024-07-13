import { Col, Table, Button } from 'react-bootstrap';
function ListApp(props) {
    return (
        <Col>
            <h3 className="text-center">Listado de tareas</h3>
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Descripcion</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.tasks && props.tasks.length > 0 ?
                            props.tasks.map(task => (
                                <tr key={task.id}>
                                    <td>{task.nombre}</td>
                                    <td>{task.categoria}</td>
                                    <td>{task.descripcion}</td>
                                    <td>
                                        <Button variant="primary" onClick={() => (
                                            props.handleEdit(task)
                                        )}>Editar</Button>
                                    </td>
                                    <td>
                                        <Button variant="danger" onClick={() => (props.handleDelete(task.id))}>Eliminar</Button>
                                    </td>
                                </tr>
                            )) : //Si es falso
                            (<tr>
                                <td colSpan={6} className="text-center">No hay tareas</td>
                            </tr>
                            )
                    }
                </tbody>
            </Table>
        </Col>

    );
}

export default ListApp;