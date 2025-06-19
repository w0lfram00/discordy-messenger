import { createSlice, isAnyOf, type PayloadAction } from "@reduxjs/toolkit";

export interface SliceState {
  count: number;
}

const initialState: SliceState = { count: 0 };

const slice = createSlice({
  name: "mainReducer",
  initialState,
  reducers: {
    resetCarsState: (state) => {
      state.count = 0;
    },
    setFilter: (state, action: PayloadAction<number>) => {
      state.filterOptions = action.payload;
      state.filterOptions.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCarsFiltered.fulfilled, (state, action) => {
      state.cars.push(...action.payload.cars);
      state.totalPages = action.payload.totalPages;
    });
  },
});

export const mainReducer = slice.reducer;
export const {} = slice.actions;
