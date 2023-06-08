import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";

const Products = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Ratings value={product.rating} text={product.numReviews} />
        </Card.Text>
        <Card.Text as="h3" className="mt-1">
          <strong style={{ color: "#787878" }}>{product.price}€</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Products;
