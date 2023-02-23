import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { lazy, Suspense } from "react";
import { useSingleEffect, useUpdateEffect } from "react-haiku";
import { TRIGGER_NAVIGATION_TAB_CONFIG } from "../../../redux/actions/config/global/global.actions";
import { settingsNavType } from "../../../helper/initialStates/dashboard/accountSettings/settingsState";
import PopupContext from "../../../components/common/popup/PopupContext";
import CompanyFormWrapper from "../../../components/pages/accountSettings/company/CompanyFormWrapper";
import GlobalTable from "../../../components/common/table/global/GlobalTable";
import { companyColumn } from "../../../components/common/table/pages/account-settings/companyColumn";
import {
  GET_COMPANY_DATA,
  GET_COMPANY_LIST_DATA,
  GET_COMPANY_SUCCESS,
} from "../../../redux/reducers/dashboard/settings/company.slice";
import { GET_COMPANY_LIST } from "../../../redux/actions/dashboard/settings/company.actions";
import { ActionTypes } from "../../../helper/actions";
import TableSearch from "../../../components/common/table/TableSearch";
import { GET_TABLE_CONFIG } from "../../../redux/reducers/config/table/table.slice";

const NavigationCardTitle = lazy(
  () => import("../../../components/common/navigation/NavigationCardTitle")
);

const CompanyPage = () => {
  const dispatch = useAppDispatch();
  const success = useAppSelector(GET_COMPANY_SUCCESS);
  const company_list = useAppSelector(GET_COMPANY_LIST_DATA);
  const company_data = useAppSelector(GET_COMPANY_DATA);
  const tableConfig = useAppSelector(GET_TABLE_CONFIG);

  useSingleEffect(() => {
    console.log("SingleEffect", { success, company_list, company_data, tableConfig });
    dispatch(
      TRIGGER_NAVIGATION_TAB_CONFIG("settings", settingsNavType.COMPANY)
    ).then((r) => r);
    if (!company_data?.hasData) {
      dispatch(GET_COMPANY_LIST(tableConfig)).then((r: void) => r);
    }
  });

  // Get company list when filter change
  useUpdateEffect(() => {
    console.log("UpdateEffect tableconfig", { success, company_list, company_data, tableConfig });
    if (
      tableConfig.sortBy ||
      tableConfig.page ||
      tableConfig.perPage ||
      tableConfig.search
    ) {
      dispatch(GET_COMPANY_LIST(tableConfig)).then((r: void) => r);
    }
  }, [
    tableConfig.sortBy,
    tableConfig.page,
    tableConfig.perPage,
    tableConfig.search,
  ]);

  // Get company list when create, update, delete change
  useUpdateEffect(() => {
    console.log("UpdateEffect success", { success, company_list, company_data, tableConfig });
    dispatch(GET_COMPANY_LIST(tableConfig)).then((r: void) => r);
  }, [success.add, success.update, success.remove]);

  return (
    <>
      <Suspense fallback="">
        <NavigationCardTitle
          title={settingsNavType.COMPANY}
          NavHeaderAction={
            <div className="flex items-center">
              <div className="flex items-center w-full max-w-[200px] mr-3">
                <TableSearch />
              </div>
              <PopupContext
                buttonLabel="Add Company"
                buttonIcon="ic:twotone-plus"
                modelTitle="Add Company"
                formComponent={<CompanyFormWrapper type={ActionTypes.CREATE} />}
                buttonClass="btn-primary"
              />
            </div>
          }
        />
      </Suspense>

      <div className="card px-8 border-0 relative">
        <Suspense fallback="">
          <GlobalTable
            column={companyColumn}
            records={company_list}
            loading={company_data?.loading}
          />
        </Suspense>
      </div>
    </>
  );
};

export default CompanyPage;
