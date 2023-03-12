import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import firebase from '../Config/firebase';

function AltaForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  const onSubmit = async (data) => {
    try {
      const document = await firebase.firestore().collection('products').add(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="register-container ">
      <Form onSubmit={handleSubmit(onSubmit)} className="form text-center">
        <h3 className="text-center">Registro</h3>
        <p>Bienvenido a nuestra comunidad!</p>
        <Form.Group controlId="firstName" className='form-label fs-4 fw-bold'>
          <Form.Label>Nombre del Producto</Form.Label>
          <Form.Control type="text" placeholder="Ingresa el nombre" {...register('title', { required: true })} className="form-control-custom text-center fs-4" />
          {errors.title && <p className="error">This field is required</p>}
        </Form.Group>

        <Form.Group controlId="price" className='form-label fs-4 fw-bold'>
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" placeholder="Ingresa el precio" {...register('price', { required: true })} className="form-control-custom text-center fs-4" />
          {errors.price && <p className="error">This field is required</p>}
        </Form.Group>

        <Form.Group controlId="description" className='form-label fs-4 fw-bold'>
          <Form.Label>Descripcion del producto</Form.Label>
          <Form.Control type="text" placeholder="Ingresa La descripcion" {...register('description', { required: true })} className="form-control-custom text-center fs-4" />
          {errors.description && <p className="error">This field is required</p>}
        </Form.Group>

        <Form.Group controlId="image" className='form-label fs-4 fw-bold'>
          <Form.Label>Imagen del producto</Form.Label>
          <Form.Control type="text" placeholder="Agrega la imagen" {...register('thumbail', { required: true })} className="form-control-custom text-center fs-4" />
          {errors.thumbail && <p className="error">This field is required</p>}
        </Form.Group>



        <Button variant="success" className="primary-button" size="lg" type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Guardar'}
        </Button>

      </Form>
    </div>
  );
}

export default AltaForm;
