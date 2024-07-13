import { Container, Row } from 'react-bootstrap';
import { useEffect, useReducer, useState } from 'react';
import FormAdd from './Components/FormAdd';
import ListApp from './Components/ListApp';
import FormEdit from './Components/FormEdit';
import { tasksReducer } from "./reducers/tasksReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function App() {
  //Inicializador
  const [tasks, dispatch] = useReducer(tasksReducer, [], init);
  // Cargar las tareas
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Obtener registro formulario
  const addTask = (task) => {
    let newtask = {
      id: new Date().getTime(),
      nombre: task.nombre,
      categoria: task.categoria,
      descripcion: task.descripcion
    };
    const action = {
      type: "create",
      payload: newtask
    }
    dispatch(action);
  }

  // *** EDITAR USUARIO ***
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState({
    id: null, nombre: '', categoria: '', descripcion: ''
  });
  useEffect(() => {
    if (editIndex !== null) {
      const task = tasks.filter(task => task.id === editIndex);
      // Pasamos los valores recibidos para editar
      setEditName({ 
        id: task[0].id, 
        nombre: task[0].nombre, 
        categoria: task[0].categoria, 
        descripcion: task[0].descripcion 
      });
    } else {
      setEditName('');
    }
  }, [editIndex, tasks]);
  
  // Recibmos los datos para editar y lo pasamos a setEditName
  const handleEdit = (task) => {
    // Opcion 1
    setEditIndex(task.id);
  }
  // *** ACTUALIZAR TAREA ***
  // Creamos la funcion actualizar y pasamos los parametros id y callback updateUser
  const updateTask = (id, updateTask) => {

    let task = {
      id: id,
      nombre: updateTask.nombre,
      categoria: updateTask.categoria,
      descripcion: updateTask.descripcion
    };
    // Enviamos a reducer
    const action = {
      type: "edit",
      payload: task
    };
    dispatch(action);
    // Resetear index a editar
    setEditIndex(null)
  }

  // *** ELIMINAR TAREA ***
  const handleDelete = id => {
    const action = {
      type: "delete",
      payload: id
    };
    dispatch(action);
  }

  return (
    <div className="App">
      <Container expand="lg">
        <h1 className="text-center">CRUD App TodoList -  LocalStorage</h1>
        <br />
        <Row>
          {
            editIndex ? (
              <FormEdit
                editName={editName}
                updateTask={updateTask}
              />
            ) : (

              <FormAdd
                addTask={addTask}
              />
            )}
          <ListApp
            tasks={tasks}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </Row>
      </Container>
    </div>
  );
}

export default App;
