import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import firebase from '../Config/firebase';

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
      await firebase.firestore().collection('users').add({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container ">
      <Form onSubmit={handleSubmit(onSubmit)} className="form text-center">
        <h3 className="text-center">Registro</h3>
        <p>Bienvenido a nuestra comunidad!</p>
        <Form.Group controlId="firstName" className='form-label fs-4 fw-bold'>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" {...register('firstName', { required: true })} className="form-control-custom text-center fs-4" />
          {errors.firstName && <p className="error">This field is required</p>}
        </Form.Group>

        <Form.Group controlId="lastName" className='form-label fs-4 fw-bold'>
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu apellido" {...register('lastName', { required: true })} className="form-control-custom text-center fs-4" />
          {errors.lastName && <p className="error">This field is required</p>}
        </Form.Group>

        <Form.Group controlId="email" className='form-label fs-4 fw-bold'>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="myemail@example.com" {...register('email', { required: true })} className="form-control-custom text-center fs-4" />
          {errors.email && <p className="error">This field is required</p>}
        </Form.Group>

        <Form.Group controlId="password" className='form-label fs-4 fw-bold'>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" {...register('password', { required: true })} className="form-control-custom text-center fs-4" />
          {errors.password && <p className="error">This field is required</p>}
        </Form.Group>

        {error && <p className="error">{error}</p>}

        <Button variant="success" className="primary-button" size="lg" type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Register'}
        </Button>
      </Form>
    </div>
  );
}

export default RegisterForm;



/*Apuntes sobre mi elemento Register: propiedades del objeto devuelo por el Hook useForm que se utiliza para inicializar y manejar el estado del formulario---

register:: se utiliza para registrar cada campo del formulario en el hook useForm(). Esto permite que useForm() sepa cuáles campos deben validarse y manejar su estado.
handleSubmit:: es un método que se utiliza para manejar la acción de enviar el formulario. En este componente, handleSubmit se pasa como prop a <Form> y se ejecuta cuando se envía el formulario.
errors:: es un objeto que contiene los errores de validación de cada campo del formulario. Si un campo tiene un error, se agrega una propiedad con el nombre del campo al objeto errors. Si el campo no tiene errores, la propiedad correspondiente en errors es undefined.

*/