// import { type } from '@testing-library/user-event/dist/type';
import React from "react";
import { useForm } from 'react-hook-form';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormEdit = ({ editName, updateTask }) => {

    // CREAMOS LA VARIABLE DEL FOMULARIO
    const { register, handleSubmit, setValue, reset, formState: { errors }} = useForm({
        defaultValues: editName
    });

    // Seteamos los valores al formulario
    setValue('nombre', editName.nombre);
    setValue('categoria', editName.categoria);
    setValue('descripcion', editName.descripcion);

    // Obtener registro formulario
    const onSubmit = (data, e) => {
        // Recibimos la data para mostrar en el formulario
        updateTask(editName.id, data);
        // Limpiar los campos
        reset()
    }

    return (
        <>
            <Col xl={5}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-center">Actualizar Tarea</h3>
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Nombre de la tarea</Form.Label>
                        <Form.Control
                            type="text"
                            name="nombre"
                            placeholder="Ingrese el nombre de la tarea"
                            {...register('nombre',
                                {
                                    required: { value: true, message: 'Campo requerido' },
                                })} />
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.nombre?.message}
                        </span>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Categoría</Form.Label>
                        <Form.Control
                            type="text"
                            name="categoria"
                            placeholder="Ingrese la categoría"
                            {...register('categoria',
                                {
                                    required: { value: true, message: 'Campo requerido' },
                                })} />
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.categoria?.message}
                        </span>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="descripcion"
                            rows={3}
                            {...register('descripcion',
                                {
                                    required: { value: true, message: 'Campo requerido' },
                                })} />
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.descripcion?.message}
                        </span>

                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Actualizar
                    </Button>
                </Form>
            </Col>
        </>
    )
}

export default FormEdit
