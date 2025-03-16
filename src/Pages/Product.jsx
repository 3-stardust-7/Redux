import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { add } from "../Store/CartSlice";

const Product = () => {
  const dispatch = useDispatch();

  // State to store products
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
  }, []); // Empty dependency array ensures this runs only once

  const addToCart = (product) => {
    //dispatch on add action
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div className="col-md-3 m-8" style={{ marginBottom: "20px" }}>
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
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add To Cart{" "}
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  //   // useEffect uses a callback function
  //   useEffect(() => {
  //     // API call to fetch products
  //     fetch("https://fakestoreapi.com/products")
  //       .then((res) => res.json()) // Convert response to JSON
  //       .then((data) => {
  //         setProducts(data); // Update state with fetched data
  //         console.log("Fetched Products:", data); // Log the data
  //       })
  //       .catch((err) => console.error("Error fetching products:", err)); // Handle errors
  //   }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <h1>Products</h1>
      {/* Display products as JSON */}
      {/* <pre>{JSON.stringify(products,null,3)}</pre> */}
      <div className="row">{cards}</div>
    </div>
  );
};

export default Product;

// import React, { useState, useEffect } from "react";
// import { Box, Image, Text, Button, Grid,Stack, Heading, Center } from "@chakra-ui/react";
// import axios from "axios";

// const Product = () => {
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
//   }, []);

//   return (
//     <>
//       <h1>Products</h1>
//       <Grid
//         templateColumns={{
//           base: "1fr",
//           md: "repeat(2, 1fr)",
//           lg: "repeat(3, 1fr)",
//         }}
//         gap={20}
//         p={6}
//         maxW="1200px"
//         maxH="2400px"
//       >
//         {products.length > 0 ? (
//           products.map((product) => (
//             <Box
//               key={product.id}
//               borderWidth="1px"
//               borderRadius="lg"
//               p={4} // Reduced padding
//               boxShadow="lg"
//               textAlign="center"
//               bg="white"
//               display="flex"
//               flexDirection="column"
//               height="auto" // Prevents unnecessary stretching
//               maxH="1200px" // Limit card height
//             >
//               <Image
//                 src={product.image}
//                 alt={product.title}
//                 borderRadius="lg"
//                 maxH={80}
//                 objectFit="cover"
//                 mx="auto"
//               />
//               <Stack mt={4} spacing={4} flex="1" justify="space-between">
//                 <Heading size="sm" fontWeight="semibold">
//                   {product.title}
//                 </Heading>
//                 <Text noOfLines={2} fontSize="xl" color="gray.600">
//                   {product.price}
//                 </Text>
//                 <Text
//                   fontSize="xl"
//                   fontWeight="bold"
//                   bgGradient="linear(to-r, blue.400, blue.600)"
//                   bgClip="text"
//                 >
//                   ${product.price}
//                 </Text>
//                 <Button
//                   colorScheme="blue"
//                   size="lg"
//                   boxShadow="md"
//                   _hover={{ boxShadow: "xl" }}
//                   // Pushes the button to the bottom
//                 >
//                   Add to Cart
//                 </Button>
//               </Stack>
//             </Box>
//           ))
//         ) : (
//           <Text fontSize="lg" color="gray.500" textAlign="center">
//             Loading products...
//           </Text>
//         )}
//       </Grid>
//     </>
//   );
// };

// export default Product;
