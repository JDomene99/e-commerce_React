import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (itemInCart) {
        itemInCart.quantity++;
        itemInCart.totalPrice += itemInCart.price;
        state.total = itemInCart.totalPrice;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
        state.total += action.payload.price;
        state.totalCount = state.totalCount + 1;
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.total = 0;
      state.totalCount = 0;
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity++;
        item.totalPrice += item.price;
        state.total += item.price;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
        item.totalPrice -= item.price;
        state.total -= item.price;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item._id !== action.payload._id
      );
      const removeItem2 = state.cart.find(
        (item) => item._id == action.payload._id
      );
      if (removeItem2) {
        state.total -= removeItem2.totalPrice;
      }
      state.cart = removeItem;
      state.totalCount = state.totalCount - 1;
    },
  },
});

export const {
  addToCart,
  removeItem,
  decrementQuantity,
  incrementQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
