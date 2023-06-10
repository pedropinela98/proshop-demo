import { Link, useParams } from "react-router-dom";
import {
  Form,
  Col,
  Row,
  Image,
  ListGroup,
  ListGroupItem,
  Card,
  Button,
} from "react-bootstrap";
import Ratings from "../components/Ratings";
import Loader from "./Loader";
import Message from "./Message";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import { useState } from "react";

const ProductScreen = () => {
  const { id: productId } = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  const [qty, setQty] = useState(1);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Row className="d-flex align-items-center">
            <Col md={5}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={4}>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <h3>{product.name} </h3>
                </ListGroupItem>
                <ListGroupItem>
                  <Ratings value={product.rating} text={product.numReviews} />
                </ListGroupItem>
                <ListGroupItem>
                  <h3>Price: {product.price}€</h3>
                </ListGroupItem>
                <ListGroupItem>
                  <p>{product.description}</p>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card className="d-flex">
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <Row>
                      <Col md={8}>Price:</Col>
                      <Col>
                        <strong>{product.price}€</strong>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col md={8}>Status:</Col>
                      <Col>
                        <strong>
                          {product.countInStock > 0
                            ? "In Stock"
                            : "Out of Stock"}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  {product.countInStock > 0 && (
                    <ListGroupItem>
                      <Row>
                        <Col>Quantity</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  )}
                  <ListGroupItem>
                    <div className="d-flex justify-content-center">
                      <Button
                        className="btn btn-secondary center-button"
                        type="button"
                        disabled={product.countInStock === 0}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;
