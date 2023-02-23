import { createSlice } from '@reduxjs/toolkit';
import { initialTableConfigInterface } from '../../../../helper/types/common/table';
import { initialTableConfig } from '../../../../helper/initialStates/common/tablefilter';
import { RootState } from '../../../rootReducer';

const initialState: initialTableConfigInterface = {
  ...initialTableConfig
};

export const tableSlice = createSlice({
  name: 'tableSlice',
  initialState,
  reducers: {
    SET_TABLE_TOTAL_COUNT: (state, action) => ({
      ...state,
      total: action.payload
    }),

    SET_TABLE_SORTING: (state, action) => ({
      ...state,
      sortBy: action.payload
    }),

    SET_TABLE_PAGE: (state, action) => ({
      ...state,
      page: action.payload
    }),

    SET_TABLE_PAGE_SIZE: (state, action) => ({
      ...state,
      perPage: action.payload
    }),

    SET_TABLE_SEARCH: (state, action) => ({
      ...state,
      search: action.payload
    }),
    RESET_FILTER_DATA: () => ({
      ...initialState
    })
  }
});

export const {
  SET_TABLE_TOTAL_COUNT,
  SET_TABLE_SORTING,
  SET_TABLE_PAGE,
  SET_TABLE_PAGE_SIZE,
  SET_TABLE_SEARCH,
  RESET_FILTER_DATA,
} = tableSlice.actions;

export const GET_TABLE_CONFIG = (state: RootState) => state.config.table;
