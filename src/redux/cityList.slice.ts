import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface cityListType {
  nameList: string[];
}

const initialState = {
  nameList: [],
} as cityListType;

const cityNameSlice = createSlice({
  name: "cityName",
  initialState,
  reducers: {
    setNameList(state, action: PayloadAction<string>) {
      state.nameList.push(action.payload);
    },
    setFilterName(state, action: PayloadAction<string>) {
       const temp = state.nameList.filter(
        (cityName) => cityName !== action.payload
      );
      state.nameList = temp
    },
  },
});

export const { setNameList, setFilterName } = cityNameSlice.actions;

export const cityName = (state: RootState) => state.cityName.nameList;

export default cityNameSlice.reducer;
