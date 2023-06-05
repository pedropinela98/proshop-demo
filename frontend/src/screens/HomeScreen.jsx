import { Row, Col } from "react-bootstrap";
import products from "../products";
import Products from "./Products";

const HomeScreen = () => {
  return (
    <>
      <h1 style={{ color: "black" }}>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3} className="mb-3">
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
