import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterField, UIState } from "./types.ts";

const initialState: UIState = {
  filters: {
    filteredBy: "",
    searchQuery: "",
  },
  pagination: {
    totalItems: 0,
    itemsPerScroll: 12,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterField>) => {
      state.filters.filteredBy = action.payload;
    },

    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.filters.searchQuery = action.payload;
    },

    resetFilters: (state) => {
      state.filters = initialState.filters;
    },

    setTotal: (state, action) => {
      state.pagination.totalItems = action.payload;
    },
  },
});

export const { setFilter, setSearchQuery, resetFilters, setTotal } =
  uiSlice.actions;

export default uiSlice.reducer;
