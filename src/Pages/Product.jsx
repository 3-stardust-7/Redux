import React, { useState, useEffect } from "react";
import { Box, Image, Text, Button, Stack, Heading } from "@chakra-ui/react";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      // API call to fetch products using Axios
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts(); // Call the function
  }, []); 

  return (
    <Stack spacing={6} direction="row" justify="center" p={5} wrap="wrap">
      {products.length > 0 ? (
        products.map((product) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            maxW="sm"
            boxShadow="md"
            textAlign="center"
          >
            <Image
              src={product.image}
              alt={product.title}
              borderRadius="lg"
            />
            <Stack mt="4" spacing="3">
              <Heading size="md">{product.title}</Heading>
              <Text noOfLines={2}>{product.price}</Text>
              <Text color="blue.600" fontSize="2xl">
                ${product.price}
              </Text>
            </Stack>
            <Button colorScheme="blue" mt={4}>
              Add to Cart
            </Button>
          </Box>
        ))
      ) : (
        <Text>Loading products...</Text>
      )}
    </Stack>
  );
};

export default Product;














// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Card  from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

// const Product = () => {
//   // State to store products
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       // API call to fetch products using Axios
//       try {
//         const response = await axios.get("https://fakestoreapi.com/products");
//         setProducts(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProducts(); // Call the function
//   }, []); // Empty dependency array ensures this runs only once

//   const cards = products.map((product) => (
//     <div className="col-md-3" style={{ marginBottom: "10px" }}>
//       <Card key={product.id} className="h-100">
//         <div className="text-centre">
//           <Card.Img
//             variant="top"
//             src={product.image}
//             style={{ width: "100px", height: "130px" }}
//           />
//         </div>
//         <Card.Body>
//           <Card.Title>{product.title} </Card.Title>
//           <Card.Text>INR:{product.price}</Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           <Button variant="primary">Add To Cart </Button>
//         </Card.Footer>
//       </Card>
//     </div>
//   ));

//   //   // useEffect uses a callback function
//   //   useEffect(() => {
//   //     // API call to fetch products
//   //     fetch("https://fakestoreapi.com/products")
//   //       .then((res) => res.json()) // Convert response to JSON
//   //       .then((data) => {
//   //         setProducts(data); // Update state with fetched data
//   //         console.log("Fetched Products:", data); // Log the data
//   //       })
//   //       .catch((err) => console.error("Error fetching products:", err)); // Handle errors
//   //   }, []); // Empty dependency array ensures this runs only once

//   return (
//     <div>
//       <h1>Products</h1>
//       {/* Display products as JSON */}
//       {/* <pre>{JSON.stringify(products,null,3)}</pre> */}
//       <div className="row">
//         {cards}
//       </div>
//     </div>
//   );
// };

// export default Product;
