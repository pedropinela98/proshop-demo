import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import Message from "../screens/Message";
import { Row, Image, Button, Col } from "react-bootstrap";

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const msg = "Your card is empty";

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <Row>
      <Col md={8}>
        <h1 style={{ marginBottom: "20px" }}>Shopping Cart</h1>
        {cartItems.length === 0 ? <Message>{msg}</Message> : <h1>ola</h1>}
      </Col>
    </Row>
  );
};

export default CartScreen;
