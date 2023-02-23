import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../rootReducer";

interface appInitialType {
  value: boolean,
  persist: boolean,
  isMiniSidebar: boolean,
}

const initialState: appInitialType = {
  value: false,
  isMiniSidebar: false,
  persist: false,
};

export const configAppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    SET_VARIABLE: (state, action) => {
      state.value = action.payload;
    },
    TOGGLE_SIDEBAR: (state, action) => {
      state.isMiniSidebar = action.payload;
    },
    SET_PERSIST: (state, action) => {
      state.persist = action.payload
    }
  },
});

export const {
  SET_VARIABLE,
  SET_PERSIST,
  TOGGLE_SIDEBAR
} = configAppSlice.actions;

export const VARIABLE = (state: RootState) => state.config.app.value;
export const IS_SIDEBAR_COLLAPSED = (state: RootState) =>
  state.config.app.isMiniSidebar;
export const IS_PERSISTED = (state: RootState) => state.config.app.persist;

