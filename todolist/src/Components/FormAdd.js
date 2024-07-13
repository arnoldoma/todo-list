import React from "react";
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

const FormAdd = (props) => {

  // *** GUARDAR TAREA ***
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  // Obtener registro formulario
  const OnSubmit = (data, e) => {
    // Enviar Datos
    props.addTask(data);
    // Limpiar los campos
    reset();
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
