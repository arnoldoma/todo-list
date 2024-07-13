// import { type } from '@testing-library/user-event/dist/type';
import React from "react";
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';




const FormAdd = (props) => {

  //Inicializador
  // const [tasks, dispatch] = useReducer(tasksReducer, [], init);
  // const [editIndex, setEditIndex] = useState(null);
  // const [editName, setEditName] = useState([]);

  // Cargar las tareas
  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);


  // Load editIndex
  // useEffect(() => {

  //   if (editIndex !== null) {
  //     const tarea = tasks.filter(task => task.id === editIndex);

  //     // Pasamos los valores recibidos para editar
  //     setEditName({ id: tarea[0].id, nombre: tarea[0].nombre, categoria: tarea[0].categoria, descripcion: tarea[0].descripcion });
  //   } else {
  //     setEditName('');
  //   }
  //   // console.log(`Editando tarea ${editIndex}`);
  // }, [editIndex, tasks]);

  // Obtener registro formulario
  // const handleOnSubmit = e => {


  //   e.preventDefault();

  //   if (!e.target.nombre.value || !e.target.categoria.value || !e.target.descripcion.value) {
  //       return alert("Debes ingresar todos los campos.");
  //   }
  //   let task = {
  //     id: new Date().getTime(),
  //     nombre: e.target.nombre.value,
  //     categoria: e.target.categoria.value,
  //     descripcion: e.target.descripcion.value
  //   };

  //   const action = {
  //     type: "create",
  //     payload: task
  //   }

  //   dispatch(action);
  //   // Limpiar imputs
  //   e.target.nombre.value = ''
  //   e.target.categoria.value = ''
  //   e.target.descripcion.value = ''
  // }


  // const handleEdit = id => {
  //   setEditIndex(id);
  //   return alert("Necesito ayuda con el código para modificar, me da error.");
  // }

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
  // const changeManage = (e) => {
  //   const tarea = tasks.filter(task => task.id === editIndex.id);
  //   let task = {
  //     id: tarea.id,
  //     nombre: tarea.nombre,
  //     categoria: tarea.categoria,
  //     descripcion: tarea.descripcion
  //   };
  //   setEditName(task);
  // }

  // // Boton eliminar tarea
  // const handleDelete = id => {
  //   const action = {
  //     type: "delete",
  //     payload: id
  //   };
  //   dispatch(action);
  // }

  // *** GUARDAR TAREA ***
  // CREAMOS LA VARIABLE DEL FOMULARIO
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Obtener registro formulario
  const OnSubmit = (data, e) => {
    // Enviar Datos
    // console.log(data)
    // Recibimos la data para mostrar en la listad
    props.addTask(data);
    // Limpiar los campos
    e.target.reset();

  }
  return (
    <>
      {/* Formulario Agregar Tarea */}
      <Col xl={5}>
        <Form onSubmit={handleSubmit(OnSubmit)}>
          <h3 className="text-center">Nueva Tarea</h3>
          <br />
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nombre de la tarea</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              placeholder="Ingrese el nombre de la tarea"
              {...register('nombre',
                {
                  required: { value: true, message: 'Ingrese una tarea' },
                  minLength: { value: 2, message: 'La tarea debe ser por lo menos 2 caracteres' },
                  maxLength: { value: 20, message: 'La tarea debe ser por lo mas 20 caracteres' }
                })} />
            {errors.nombre &&
              <span className="text-danger text-small d-block mb-2">
                {errors?.nombre?.message}
              </span>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              type="text"
              name="categoria"
              placeholder="Ingrese la categoría"
              {...register('categoria',
                {
                  required: { value: true, message: 'Ingrese una categoría' },
                  minLength: { value: 2, message: 'La categoría debe ser por lo menos 2 caracteres' },
                  maxLength: { value: 20, message: 'La categoría debe ser por lo mas 20 caracteres' }
                })} />
            {errors.categoria &&
              <span className="text-danger text-small d-block mb-2">
                {errors?.categoria?.message}
              </span>
            }
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              name="descripcion"
              rows={3}
              {...register('descripcion',
                {
                  required: { value: true, message: 'Ingrese una descripción' },
                  minLength: { value: 2, message: 'La descripción debe ser por lo menos 2 caracteres' }
                })} />
            {errors.descripcion &&
              <span className="text-danger text-small d-block mb-2">
                {errors.descripcion.message}
              </span>
            }
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </Col >
    </>
  )
}

export default FormAdd;
