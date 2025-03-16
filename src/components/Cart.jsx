import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from "../Store/CartSlice"; // ✅ Correct import

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id)); // ✅ No infinite recursion
  };

  const cards = products.map((product) => (
    <div
      key={product.id}
      className="col-md-12 m-8"
      style={{ marginBottom: "20px" }}
    >
      <Card className="h-100">
        <div className="flex justify-center">
          <Card.Img
            variant="top"
            className="mx-auto"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title} </Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          <Button variant="danger" onClick={() => handleRemove(product.id)}>
            Remove item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Cart</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Cart;
