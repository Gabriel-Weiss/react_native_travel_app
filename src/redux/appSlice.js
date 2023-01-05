import { createSlice } from "@reduxjs/toolkit";

initialState = {
  startPoint: null,
  endPoint: null,
  travelTime: null,
};

export const appSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setStartPoint: (state, action) => {
      state.startPoint = action.payload;
    },
    setEndPoint: (state, action) => {
      state.endPoint = action.payload;
    },
    setTravelTime: (state, action) => {
      state.travelTime = action.payload;
    },
  },
});

export const selectStartPoint = (state) => state.navigation.startPoint;
export const selectEndPoint = (state) => state.navigation.endPoint;
export const selectTravelTime = (state) => state.navigation.travelTime;

export const { setStartPoint, setEndPoint, setTravelTime } = appSlice.actions;
export default appSlice.reducer;
