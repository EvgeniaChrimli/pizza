import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "", //?
  categoryId: 0,
  pageCount: 1,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    //setFilters(state, action) {
    //  state.pageCount = Number(action.payload.pageCount);
    // state.sort = action.payload.sort;
    // state.categoryId = Number(action.payload.categoryId);
    //},
  },
});
export const { setCategoryId, setSort, setPageCount } = filterSlice.actions;
export default filterSlice.reducer;
