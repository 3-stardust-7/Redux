import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const products = useSelector((state) => state.cart);

    const cards = products.map((product) => (
      <div className="col-md-12 m-8" style={{ marginBottom: "20px" }}>
        <Card key={product.id} className="h-100">
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
            <Card.Text>INR:{product.price}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ background: "white" }}>
            <Button variant="danger" onClick={() => addToCart(product)}>
             Remove item
            </Button>
          </Card.Footer>
        </Card>
      </div>
    ));
  return (
    <>
      <h1>Cart</h1>
      {/* {JSON.stringify(cartProducts)} */}

      <div className="row">
        {cards}
      </div>
    </>
  );
};

export default Cart;
