import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  size: null,
  order : null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSize: (state, action) => {
        state.size = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
  },
  },
});

export const {
  setSize,
  setOrder
  
} = productSlice.actions;
export default productSlice.reducer;
