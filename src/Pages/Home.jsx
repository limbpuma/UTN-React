import React, { useState, useEffect } from "react";
import { Row, Col, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCard from "../components/ProductCard";
import { getAll } from "../Services/ProductServices";
import homeimg from '../assets/homeimg.jpg';
import home2 from '../assets/home2.png';
import home3 from '../assets/home3.png';
import home4 from '../assets/home4.png';
import firebase from "../Config/firebase";



const Home = () => {

    console.log('firebase');
    console.log(firebase);
    
    const numProductosAMostrar = 5;
    const [compra, setCompra] = useState(false);
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);


    //componentDidMount
    useEffect(() => {
        const request = async () => {
            try {
                const response = await getAll();
                setProductos(response?.results);
                setLoading(false);
            } catch (e) {
                console.log(e);
            }
        };
        request();
    }, []);



    const handleComprar = () => {
        setCompra(true);
    };

    if (loading) {
        return <div>Cargando...</div>;
    }
    if (compra) {
        return <div>Gracias por su compra!</div>;
    } else {


        return (
            <div className="container">

                <div className="hero" style={{ backgroundImage: `url(${homeimg})` }}>
                    <Container>
                        <Row className="hero-text align-items-center justify-content-center w-50">
                            <Col lg={6} className="text-left">
                                <h1>Bienvenido a mi web</h1>
                                <p>
                                    Para la concepcion de esta web he usado, react y bootstrap la lista de producto se carga a travez de una api fetch desde mercado libre el login y el registro a travez de Firebase, encantado de recibir feedbacks.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <div className="container home-featured">
  <Row xs={1} md={3} className="home-featured-row g-4 text-center justify-content-center">
    <Col className="mb-4">
      <Card>
        <Card.Img variant="top" src={home2} className="w-50 mx-auto" />
        <Card.Body>
          <Card.Title><h3>Card title 1</h3></Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col className="mb-4">
      <Card>
        <Card.Img variant="top" src={home3} className="w-50 mx-auto" />
        <Card.Body>
          <Card.Title><h3>Card title 2</h3></Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col className="mb-4">
      <Card>
        <Card.Img variant="top" src={home4} className="w-50 mx-auto" />
        <Card.Body>
          <Card.Title><h3>Card title 3</h3></Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</div>



                <div>
                    <Row xs={1} sm={2} md={3} lg={4} xl={5} className="card-product-custom text-center mx-auto justify-content-center">
                        {productos.slice(0, numProductosAMostrar).map((producto) => (
                            <Col key={producto.id} className="mb-4">
                                <ProductCard {...producto} buy={handleComprar} />
                            </Col>
                        ))}
                    </Row>
                    <div className="home-button text-center">
                    <button variant="success" className="primary-button sm ">
                        <Link to='./ProductList'>Ver Todos los productos</Link>
                    </button>
                    </div>
                </div>
            </div>
        );
    }
}


export default Home;
