/** @format */

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ProductsFilterState {
  search: string;
  selectedCategory: string | undefined;
}

const initialState: ProductsFilterState = {
  search: "",
  selectedCategory: undefined,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      
    },
    setSelectedCategory: (state, action: PayloadAction<string | undefined>) => {
      state.selectedCategory = action.payload;
      
    },
  },
});

export const { setSearch, setSelectedCategory } = productsSlice.actions;

export default productsSlice.reducer;
