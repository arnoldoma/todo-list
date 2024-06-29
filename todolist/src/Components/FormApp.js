import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormApp = () => {
  return (
    <Row>
    <Form>
      <h3>Nueva Tarea</h3>
      <br />
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombre de la tarea</Form.Label>
        <Form.Control type="text" placeholder="Ingrese el nombre de la tarea" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Categoría</Form.Label>
        <Form.Control type="text" placeholder="Ingrese la categoría" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
    </Row>
  )
}

export default FormApp
