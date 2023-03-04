import React, { useState, useEffect} from 'react';
import ProductCard from '../components/ProductCard';
import { getAll } from '../Services/ProductServices';
import { Row, Col } from 'react-bootstrap';
import '../styles/General.css'



function ProductList() {
    const [compra, setCompra] = useState(false);
  const [loading, setLoading] = useState(true);
  const [titulo, setTitulo] = useState("Productos");
  const [productos, setProductos] = useState([]);



  //componentDidMount
  useEffect(() => {
    const request = async () => {
      try {
        const response = await getAll();
        console.log(response?.results);
        setProductos(response?.results);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, []);
  
  const handleClick = () => {
    setTitulo("Productos Modificado");
  };

  const handleClickAgregarProducto = () => {
    setProductos([
      ...productos,
      {
        id: 4,
        title: "iPhone 13",
        price: "$2500",
        category: "Celulares",
        className: "product-card"
      },
    ]);
  };

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
      <div className="container text-center">
        <h1 className='productlist-h1'>{titulo}</h1>
        <button className="primary-button add-to-cart-button" id="button-none" onClick={handleClick}>Cambiar Titulo</button>
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="text-center mx-auto align-items-center justify-content-center">
        {productos.map((producto) => (
          <Col key={producto.id} className="mb-4">
          <ProductCard {...producto} buy={handleComprar}/>
          </Col>
        ))}
        </Row>
        <button className='producto-add' onClick={handleClickAgregarProducto}>Agregar Producto</button>
      </div>
    );
  }
}


export default ProductList;
