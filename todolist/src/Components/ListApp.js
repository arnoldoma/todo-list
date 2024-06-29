import { Row, Col, Table, Button } from 'react-bootstrap';

function ListApp() {
    return (
        <Col>
            <h3>Listado de tareas</h3>
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Descripcion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>React JS</td>
                        <td>Desarrollo Web</td>
                        <td>Aprender a utilizar react en el interfaz del usuario.</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <Row>
                        <Button variant="primary">Primary</Button>
                        </Row>
                    </tr>
                </tbody>
            </Table>
        </Col>

    );
}

export default ListApp;