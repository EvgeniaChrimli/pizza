import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItemsToBasket(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      console.log(findItem);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
    },
    removeItemsFromBasket(state, action) {
      state.items = state.items.filter((obj) => obj !== action.payload);
    },
    clearItemsFromBasket(state) {
      state.items = [];
    },
  },
});

export const { addItemsToBasket, removeItemsFromBasket, clearItemsFromBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
