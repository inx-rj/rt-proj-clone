import { AppDispatch } from '../../../store';
import {
  SET_TABLE_PAGE,
  SET_TABLE_PAGE_SIZE,
  SET_TABLE_SEARCH,
  SET_TABLE_SORTING,
} from '../../../reducers/config/table/table.slice';
import { DataTableSortStatus } from 'mantine-datatable';

const TRIGGER_SORTING = (data: DataTableSortStatus) => async (dispatch: AppDispatch) => {
  let sorting: string;
  if (data.direction === 'asc') {
    sorting = data.columnAccessor;
  } else {
    sorting = `-${data.columnAccessor}`;
  }
  await dispatch(SET_TABLE_SORTING(sorting));
};

const TRIGGER_PAGE = (page: number) => async (dispatch: AppDispatch) => {
  await dispatch(SET_TABLE_PAGE(page));
};
const TRIGGER_PAGE_SIZE = (size: string) => async (dispatch: AppDispatch) => {
  await dispatch(SET_TABLE_PAGE_SIZE(size));
};

const TRIGGER_TABLE_SEARCH = (search: string) => async (dispatch: AppDispatch) => {
  await dispatch(SET_TABLE_SEARCH(search));
};


export {
  TRIGGER_SORTING,
  TRIGGER_PAGE,
  TRIGGER_PAGE_SIZE,
  TRIGGER_TABLE_SEARCH,
};
