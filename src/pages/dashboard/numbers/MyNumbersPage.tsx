import { Icon } from "@iconify/react";
import { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import GlobalTable from "../../../components/common/table/global/GlobalTable";
import {
  myNumbersColumn,
  myNumbersList,
} from "../../../components/common/table/pages/numbers/myNumbersColumn";
import ContentLayout from "../../../layouts/ContentLayout";
import { DASHBOARD_ROUTE } from "../../../routes/baseRoute";

import PopupContext from "../../../components/common/popup/PopupContext";

const PageHeading = lazy(
  () => import("../../../components/heading/PageHeading")
);

const FilterFormWrapper = lazy(
  () => import("../../../components/pages/myNumbers/filter/FilterFormWrapper")
);

const MyNumbersPage = () => {

  const [tabClassName, setTabClassName] = useState({
    isTabActive: false,
    className: "px-2 text-[#6F6F6F]"
  });

  const handleClick = (e: any) => {
    console.log("this is working fine");
    e.preventDefault();

    setTabClassName({
      isTabActive: true,
      className: "text-theme mb-2.5"
    });
  }

  return (
    <>
      <Suspense fallback="">
        <PageHeading title="My Numbers" />
      </Suspense>
      <Suspense fallback="Loading...">
        <ContentLayout
          contentWrapperClass="max-w-[100%]"
          leftContentArea={
            <div className="flex gap-3 items-start">
              <p className="pr-2 text-[#6F6F6F]">Search & Buy Numbers</p>
              <Suspense fallback="">
                <div className="border-b-2 border-theme">
                  <button className={"text-theme mb-2.5"} onClick={handleClick}>My Numbers
                    <span
                      className="ml-2.5 rounded px-1.5 pt-1.5 pb-[6px] bg-theme-100/10 text-center align-baseline text-theme text-[0.875em] font-medium"
                    >
                      25
                    </span>
                  </button>
                </div>
              </Suspense>
              <Suspense fallback="">
                {/* <div className="border-b-2 border-theme"> */}
                <button className={"px-2 text-theme mb-2.5"} onClick={handleClick}>
                  Orders
                  {/* <span
                      className="ml-2.5 rounded px-1.5 pt-1.5 pb-[6px] bg-theme-100/10 text-center align-baseline text-theme text-[0.875em] font-medium"
                    >
                      25
                    </span> */}
                </button>
                {/* </div> */}
              </Suspense>
            </div>
          }
          searchBox={true}
          childAction={
            <div className="flex gap-3">
              <Suspense fallback="">
                <PopupContext
                  buttonLabel=""
                  buttonIcon="system-uicons:filtering"
                  modelTitle="Filters"
                  formComponent={<FilterFormWrapper />}
                  buttonClass="btn btn-primary btn-outline min-w-[41px] px-2 grey-btn"
                  size="780px"
                />
              </Suspense>
              <select className="form-control w-auto min-w-[100px] grey-btn">
                <option value="" disabled selected>
                  Sort By
                </option>
                <option value="sort">sort</option>
                <option value="sort">sort</option>
                <option value="sort">sort</option>
              </select>
              <Link
                to={DASHBOARD_ROUTE.HOME}
                className="btn btn-primary btn-outline grey-btn"
              >
                Bulk Edit
              </Link>
              <Link
                to={DASHBOARD_ROUTE.HOME}
                className="btn btn-primary btn-outline grey-btn bg-theme text-white"
              >
                Export to CSV
                <Icon icon="material-symbols:download-rounded" width={20} />
              </Link>
            </div>
          }
        >
          <Suspense fallback="Loading...">
            <div className="px-4 pb-4">
              <GlobalTable
                column={myNumbersColumn}
                records={myNumbersList}
                loading={false}
                isRecordSelection={true}
              />
            </div>
          </Suspense>
        </ContentLayout>
      </Suspense>
    </>
  );
};

export default MyNumbersPage;
