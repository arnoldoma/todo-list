// import { type } from '@testing-library/user-event/dist/type';
import { Col, Row, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useReducer, useState } from 'react';
import { tasksReducer } from "../reducers/tasksReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

const FormApp = () => {
  //Inicializador
  const [tasks, dispatch] = useReducer(tasksReducer, [], init);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState([]);

  // Cargar las tareas
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  // Load editIndex
  useEffect(() => {

    if (editIndex !== null) {
      const tarea = tasks.filter(task => task.id === editIndex);

      // Pasamos los valores recibidos para editar
      setEditName({ id: tarea[0].id, nombre: tarea[0].nombre, categoria: tarea[0].categoria, descripcion: tarea[0].descripcion });
    } else {
      setEditName('');
    }
    // console.log(`Editando tarea ${editIndex}`);
  }, [editIndex, tasks]);

  // Obtener registro formulario
  const handleOnSubmit = e => {


    e.preventDefault();

    if (!e.target.nombre.value || !e.target.categoria.value || !e.target.descripcion.value) {
        return alert("Debes ingresar todos los campos.");
    }
    let task = {
      id: new Date().getTime(),
      nombre: e.target.nombre.value,
      categoria: e.target.categoria.value,
      descripcion: e.target.descripcion.value
    };

    const action = {
      type: "create",
      payload: task
    }

    dispatch(action);
    // Limpiar imputs
    e.target.nombre.value = ''
    e.target.categoria.value = ''
    e.target.descripcion.value = ''
  }


  const handleEdit = id => {
    setEditIndex(id);
    return alert("Necesito ayuda con el código para modificar, me da error.");
  }

  // const saveChange = (e) => {
  //   // console.log( id );
  //   // const tarea = tasks.filter(task => task.id === editIndex);
  //   let task = {
  //     nombre: e.target.nombre.value,
  //     categoria: e.target.categoria.value,
  //     descripcion: e.target.descripcion.value
  //   };
    
  //   const action = {
  //     type: "edit",
  //     payload: task
  //   };
  //   dispatch(action);
  // }

  // pasamos las modificaciones del imput
  const changeManage = (e) => {
    const tarea = tasks.filter(task => task.id === editIndex.id);
    let task = {
      id: tarea.id,
      nombre: tarea.nombre,
      categoria: tarea.categoria,
      descripcion: tarea.descripcion
    };
    setEditName(task);
  }

  // Boton eliminar tarea
  const handleDelete = id => {
    const action = {
      type: "delete",
      payload: id
    };
    dispatch(action);
  }


  return (
    <Row>

      {editIndex === null ? (
        // Formulario Agregar Tarea
        <Col xl={5}>
          <Form onSubmit={handleOnSubmit}>
            <h3 className="text-center">Nueva Tarea</h3>
            <br />
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Nombre de la tarea</Form.Label>
              <Form.Control type="text" name="nombre" placeholder="Ingrese el nombre de la tarea" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Categoría</Form.Label>
              <Form.Control type="text" name="categoria" placeholder="Ingrese la categoría" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" name="descripcion" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Form>
        </Col>
      ) : (
        // Formulario Actualizar Tarea
        <Col xl={5}>
          <Form>
            <h3 className="text-center">Actualizar Tarea</h3>
            <br />
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Nombre de la tarea</Form.Label>
              <Form.Control type="text" name="nombre" value={editName.nombre} onChange={changeManage} placeholder="Ingrese el nombre de la tarea" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Categoría</Form.Label>
              <Form.Control type="text" name="categoria" value={editName.categoria} onChange={changeManage} placeholder="Ingrese la categoría" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" name="descripcion" value={editName.descripcion} onChange={changeManage} rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Actualizar
            </Button>
          </Form>
        </Col>
      )
      }
      <Col xl={7}>
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
            {tasks && tasks.map(task => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.nombre}</td>
                <td>{task.categoria}</td>
                <td>{task.descripcion}</td>
                <td>
                  <Button variant="primary" onClick={e => handleEdit(task.id)}>Editar</Button>{" "}
                </td>
                <td>
                  <Button variant="danger" onClick={e => handleDelete(task.id)}>Eliminar</Button>{" "}
                </td>
              </tr>
            ))
            }
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}

export default FormApp
