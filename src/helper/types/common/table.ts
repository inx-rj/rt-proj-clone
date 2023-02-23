export interface initialTableConfigInterface {
  total?: null | number;
  page?: number;
  perPage?: number;
  sortBy?: string;
  search?: string;
}

export interface initialFilterConfigInterface {
  search: string,
  page: number,
  size: number,
}
