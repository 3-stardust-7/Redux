import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
  },
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
    },
  },
  //extraReducers:(builder)=>{
    //add three cases of promises


 // }
});

export const { fetchProducts } = ProductSlice.actions; // Exporting the action correctly
export default ProductSlice.reducer;

//export const getProducts=createAsyncThunk("products/get",async ()=>{

//})

export function getProducts() {
  return async function getProductsThunk(dispatch, getState) {
    // Fixed typo
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json(); // Await result properly
      dispatch(fetchProducts(result)); // Dispatch after getting data
    } catch (error) {
      console.error("Error fetching products:", error); // Handle errors properly
    }
  };
}

// import { createSlice } from "@reduxjs/toolkit";

// const ProductSlice = createSlice({
//   name: "products",
//   initialState: {
//     data: [],
//   },
//   reducers: {
//     fetchProducts(state, action) {
//       state.data = action.payload;
//     },
//   },
// });

// export const {} = ProductSlice.actions;
// export default ProductSlice.reducer;

// export function getProducts() {
//   return async function getProductsThunk(diapatch, getstate) {
//     const data = await fetch("https://fakestoreapi.com/products");
//     const result = data.json();
//     dispatch(fetchProducts(result));
//   };
// }

// //immerjs library
