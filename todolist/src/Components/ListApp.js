import { useEffect, useState } from 'react';
import { Col, Table, Button } from 'react-bootstrap';


function ListApp() {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));
    useEffect(() => {
        setTasks(tasks);
    }, [tasks]);

    return (
        <Col className="col-12" >
            <h3 className="text-center">Listado de tareas</h3>
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Descripcion</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.nombre}</td>
                                <td>{task.categoria}</td>
                                <td>{task.descripcion}</td>
                                <td>
                                    <Button variant="primary">Editar</Button>{" "}
                                </td>
                                <td>
                                    <Button variant="danger">Eliminar</Button>{" "}
                                </td>
                            </tr>
                        ))
                    } 
                </tbody>
            </Table>
        </Col>

    );
}

export default ListApp;