import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import firebase from '../Config/firebase';
import '../styles/General.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email.trim(), password.trim());
      console.log(userCredential.user);
      if (userCredential.user.uid) {
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="register-container mx-auto">
      <Form className="form text-center " onSubmit={handleLogin}>
        <h1>Login!</h1>
        <p>Me alegra verte de vuelta!</p>
        <Form.Group controlId="formBasicEmail" className='form-label fs-4 fw-bold'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="myemail@example.com"
            className="form-control-custom text-center fs-4"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className='form-label fs-4 fw-bold'>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="*********"
            className="form-control-custom text-center fs-4"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        {error && <p className="text-danger">{error}</p>}
        <Button variant="success" className="primary-button" size="lg" type="submit">
          Ingresar
        </Button>
        <p className="forgot-password">
          <Link to="./Home">Olvidaste tu contraseña?</Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;


/*Trim() elimina cualquier espacio en blanco que pueda haber en el inicio o final de los valores ingresados email y user --
console.log nos ensena la informacion del usuario en la consola se der exitosa la autenticacion --
error, nos muestra el mensaje de error en caso de que no se pueda autenticar el usuario.

*/