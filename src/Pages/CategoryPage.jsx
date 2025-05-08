import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/ProductSlice";
import { add } from "../store/CartSlice";
import statusCode from "../utils/StatusCode";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === statusCode.IDLE && data.length === 0) {
      dispatch(getProducts());
    }
  }, [status, data.length, dispatch]);

  const filtered = data.filter(
    (product) =>
      product.category.toLowerCase() ===
      decodeURIComponent(categoryName).toLowerCase()
  );

  const addToCart = (product) => {
    dispatch(add(product));
  };

  if (status === statusCode.LOADING)
    return <h2 className="text-center">Loading...</h2>;

  if (status === statusCode.ERROR)
    return (
      <Alert key="danger" variant="danger" className="text-center">
        Oops! Something went wrong.
      </Alert>
    );

  return (
    <div className="p-4">
      <h2 className="mb-4">Category: {decodeURIComponent(categoryName)}</h2>
      <div className="row">
        {filtered.map((item) => (
          <div key={item.id} className="col-md-3 mb-4">
            <Card className="h-100">
              <div className="flex justify-center">
                <Card.Img
                  variant="top"
                  className="mx-auto"
                  src={item.image}
                  style={{ width: "100px", height: "130px" }}
                />
              </div>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>INR: {item.price}</Card.Text>
              </Card.Body>
              <Card.Footer style={{ background: "white" }}>
                <Button variant="primary" onClick={() => addToCart(item)}>
                  Add To Cart
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
