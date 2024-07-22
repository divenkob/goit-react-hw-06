import { createSlice } from "@reduxjs/toolkit";
const filtersReducer = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.name;
export const { changeFilter } = filtersReducer.actions;
export default filtersReducer.reducer;