import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      state = action.payload
      return state
    }
  }
})

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;