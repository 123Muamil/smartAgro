import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as any,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.find((item: any) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item: any) => item.id === action.payload);
      if (item && item.quantity) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item: any) => item.id === action.payload);

      if (item && item.quantity) {
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
      }
    },
    removeItem: (state, action) => {
      return state.filter((item: any) => item.id !== action.payload);
    },
    clearCart: (state) => {
      return [];
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
