import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    //delete()
  },
});

export const { add } = CartSlice.actions;
export default CartSlice.reducer;

//immerjs library
