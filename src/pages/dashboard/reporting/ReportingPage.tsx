import { lazy, Suspense } from "react";
import GlobalTable from "../../../components/common/table/global/GlobalTable";
import {
  reportingColumn,
  reportingList,
} from "../../../components/common/table/pages/reporting/reportingColumn";
import TableSearch from "../../../components/common/table/TableSearch";
import ReportSearchFilterFormWrapper from "../../../components/pages/reporting/ReportSearchFilterFormWrapper";
import ContentLayout from "../../../layouts/ContentLayout";

const PageHeading = lazy(
  () => import("../../../components/heading/PageHeading")
);

const ReportingPage = () => {
  const handleType = (type: string) => {};

  return (
    <>
      <Suspense fallback="">
        <PageHeading title="Reporting" />
      </Suspense>
      <Suspense fallback="">
        <ContentLayout
          leftContentArea={
            <Suspense fallback="">
              <p>tabbing</p>
            </Suspense>
          }
          childAction={
            <Suspense fallback="">
              <div className="w-full max-w-[200px]">
                <TableSearch />
              </div>
            </Suspense>
          }
          searchBox={false}
        >
          <div className="card grid grid-cols-1 gap-5">
            <Suspense fallback="">
              <ReportSearchFilterFormWrapper />
            </Suspense>
            <Suspense fallback="Loading...">
              <div className="px-4 pb-4">
                <GlobalTable
                  column={reportingColumn}
                  records={reportingList}
                  loading={false}
                />
              </div>
            </Suspense>
          </div>
        </ContentLayout>
      </Suspense>
    </>
  );
};

export default ReportingPage;
