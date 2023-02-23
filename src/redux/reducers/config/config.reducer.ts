import { combineReducers } from '@reduxjs/toolkit';
import { configAppSlice } from './app/app.slice';
import { globalSlice } from './global/global.slice';
import { tableSlice } from './table/table.slice';


export const configReducer = combineReducers({
  app: configAppSlice.reducer,
  global: globalSlice.reducer,
  table: tableSlice.reducer
});
