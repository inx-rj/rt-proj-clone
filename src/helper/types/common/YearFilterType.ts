export interface YearFilter {
  start_year: string
  end_year: string
}

export interface IActionYearFilter {
  readonly type: string
  readonly payload?: YearFilter
}

export interface YearsResponse {
  data: {
    data: Array<YearFilter>
  }
}
