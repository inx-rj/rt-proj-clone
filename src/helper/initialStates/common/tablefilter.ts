import { initialFilterConfigInterface, initialTableConfigInterface } from "../../types/common/table";


export const filterPageSize: number[] = [10, 15, 25, 50, 75, 100];
export const filterConfig: initialFilterConfigInterface = {
  search: '',
  page: 1,
  size: filterPageSize[2],
};


// Table initial config 
export const tablePageSize: number[] = [15, 20, 25, 30, 35, 40];
export const initialTableConfig: initialTableConfigInterface = {
  total: null,
  page: 1,
  perPage: tablePageSize[0],
  sortBy: 'id',
  search: '',
};
