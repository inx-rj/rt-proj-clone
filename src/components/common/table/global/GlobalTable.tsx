import PropTypes from "prop-types";
import { lazy, Suspense, useState } from "react";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import Loader from "../../loader/Loader";
import { GET_TABLE_CONFIG } from "../../../../redux/reducers/config/table/table.slice";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import {
  TRIGGER_PAGE,
  TRIGGER_SORTING,
  TRIGGER_TABLE_SEARCH,
} from "../../../../redux/actions/config/table/table.actions";
import { useIsomorphicLayoutEffect, useUpdateEffect } from "react-haiku";

const PerPage = lazy(() => import("./PerPage"));
const TableInsideNoData = lazy(() => import("../TableInsideNoData"));

const GlobalTable = ({
  column = [],
  records = [],
  loading = true,
  sortBy = "id",
  tableWrapperClass = "h-[calc(100vh-239px)]",
  hidePagination = false,
  isRecordSelection = false,
  ...props
}) => {
  const initialSorting: DataTableSortStatus = {
    columnAccessor: sortBy,
    direction: "desc",
  };
  const tableConfig = useAppSelector(GET_TABLE_CONFIG);
  const dispatch = useAppDispatch();

  const [sortStatus, setSortStatus] =
    useState<DataTableSortStatus>(initialSorting);

  const handleSortStatusChange = (status: DataTableSortStatus) => {
    console.log("Status", status);
    setSortStatus(status);
  };

  // Reset page number when main page changed
  useUpdateEffect(() => {
    if (sortStatus) {
      dispatch(TRIGGER_SORTING(sortStatus)).then((r: void) => r);
    }

    if (sortStatus || tableConfig.search) {
      dispatch(TRIGGER_PAGE(1)).then((r: void) => r);
    }
  }, [sortStatus, tableConfig.search]);

  useIsomorphicLayoutEffect(() => {
    return () => {
      dispatch(TRIGGER_PAGE(1)).then((r: void) => r);
      if (tableConfig.search) {
        dispatch(TRIGGER_TABLE_SEARCH("")).then((r: void) => r);
      }
    };
  }, [location]);

  return (
    <div className={`relative -mx-4 ${tableWrapperClass}`}>
      <Suspense fallback="">
        <DataTable
          textSelectionDisabled
          // Loader
          loaderBackgroundBlur={4}
          customLoader={<Loader fixed={true} />}
          emptyState={<TableInsideNoData />}
          className="table-tail card p-0"
          fetching={loading}
          columns={column}
          records={records}
          // Sorting
          sortStatus={sortStatus}
          onSortStatusChange={handleSortStatusChange}
          // Pagination
          page={hidePagination ? null : tableConfig.page}
          totalRecords={tableConfig.total}
          onPageChange={(page) => dispatch(TRIGGER_PAGE(page))}
          recordsPerPage={tableConfig.perPage}
          paginationText={({ from, to, totalRecords }) =>
            `Showing ${from} - ${to} of ${totalRecords}`
          }
          styles={() => ({
            pagination: {
              borderTop: `1px solid #E6E6E6`,
              paddingLeft: records?.length > 0 ? 85 : 15,
              minHeight: 56,
            },
          })}
          {...props}
        />
      </Suspense>
      {!hidePagination && records?.length > 0 && (
        <Suspense fallback="...">
          <div className="absolute left-2.5 bottom-[8px]">
            <PerPage />
          </div>
        </Suspense>
      )}
    </div>
  );
};

GlobalTable.propTypes = {
  column: PropTypes.array,
  data: PropTypes.array,
  loading: PropTypes.bool,
  sortBy: PropTypes.string,
  tableWrapperClass: PropTypes.string,
  hidePagination: PropTypes.bool,
  isRecordSelection: PropTypes.bool,
};
export default GlobalTable;
