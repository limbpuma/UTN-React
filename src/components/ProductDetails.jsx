import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById, getDescription } from "../Services/ProductServices";
import { Card, Button, Col } from "react-bootstrap";
import "../styles/General.css";

function ProductDetails() {
  const { productoId } = useParams();
  const [producto, setProducto] = useState({});
  const [description, setDescription] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const request = async () => {
      try {
        const responseProducto = await getById(productoId);
        setProducto(responseProducto);
        const responseDescription = await getDescription(productoId);
        setDescription(responseDescription);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, [productoId]);

  const buy = () => {
    console.log("Se ha comprado el producto");
  };

  if (loading) {
    return <div>Cargando ...</div>;
  }
  return (
    <Col className="my-3 mx-auto">
      <Card
        className="product-card-details shadow-lg mx-auto"
      >
        <Card.Img
          variant="top"
          src={producto.thumbnail}
          alt={producto.title}
          className="w-90"
        />
        <Card.Body>
          <Card.Title className="text-center"><h3>{producto.title}</h3></Card.Title>
          <Card.Text>
            <h3 className="product-price text-center font-weight-bold">$ {producto.price}</h3>
            <p className="product-card-details-text">{description.plain_text}</p>
            <h3 className="text-center font-weight-bold">{producto.warranty}</h3>
            <p className="text-center">SKU:{producto.id}</p>
          </Card.Text>
          <Button variant="success" className="primary-button" onClick={buy}>
            Comprar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductDetails;
