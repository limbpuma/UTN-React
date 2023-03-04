import { Card, Button, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../styles/General.css';


function ProductCard ({ title, price, category, buy, thumbnail, className, details, id }) {
    
    return (
        <Col xs={1} sm={2} md={3} lg={4} xl={5} >
            <Card className="product-card mx-auto shadow-lg">
                <Card.Img variant="top" src={thumbnail} alt="img-product"/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p className='product-price'>{price}$</p>
                        <p>{category}</p>
                    </Card.Text>
                    <Button variant="success" className="primary-button xs" >
                        <Link to={`/producto/${id}`}>Ver Detalles</Link>
                    </Button>
                    <Button variant="success" className="primary-button" onClick={buy}>Comprar</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ProductCard;


