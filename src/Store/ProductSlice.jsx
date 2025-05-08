import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import statusCode from "../utils/StatusCode";
const ProductSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: statusCode.IDLE,
  },
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {
    //add three cases of promises

    //PENDING STATE SHOW LOADER!! USEFUL YAYY
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = statusCode.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = statusCode.IDLE;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = statusCode.ERROR;
      });
  },
});

export const { fetchProducts } = ProductSlice.actions; // Exporting the action correctly
export default ProductSlice.reducer;

export const getProducts = createAsyncThunk(
  "products/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products"); // Change this to an incorrect URL to test rejection
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
        console.log("Fetched Products in thunk:", result);
      return result;
    } catch (error) {
      return rejectWithValue(error.message); // This ensures rejection
    }
  }
);

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// const ProductSlice = createSlice({
//   name: "product",
//   initialState: {
//     data: [],
//     status: "idle",
//   },
//   reducers: {
//     // fetchResults(state, action) {
//     //     state.data = action.payload;
//     // }
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getproduct.pending, (state, action) => {
//       state.status = "loading";
//     });
//     builder.addCase(getproduct.fulfilled, (state, action) => {
//       state.data = action.payload;
//       state.status = "idle";
//     });
//     builder.addCase(getproduct.rejected, (state, action) => {
//       state.data = action.payload;
//       state.status = "error";
//     });
//   },
// });
// export const { fetchResults } = ProductSlice.actions;
// export default ProductSlice.reducer;
// export const getproduct = createAsyncThunk("product/get", async () => {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const result = await response.json();
//   return result;
// });
//krish code

// export const getProducts = createAsyncThunk("products/get", async () => {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const result = await response.json(); // Await result properly
//     return result;
//   } catch (error) {
//     console.error("Error fetching products:", error); // Handle errors properly
//   }
// });

// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     // Fixed typo
//     try {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const result = await response.json(); // Await result properly
//       dispatch(fetchProducts(result)); // Dispatch after getting data
//     } catch (error) {
//       console.error("Error fetching products:", error); // Handle errors properly
//     }
//   };
// }

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
