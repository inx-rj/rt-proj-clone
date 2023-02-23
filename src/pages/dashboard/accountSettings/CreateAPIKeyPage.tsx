import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { lazy, Suspense } from "react";
import { useSingleEffect, useUpdateEffect } from "react-haiku";
import { TRIGGER_NAVIGATION_TAB_CONFIG } from "../../../redux/actions/config/global/global.actions";
import { settingsNavType } from "../../../helper/initialStates/dashboard/accountSettings/settingsState";
import GlobalTable from "../../../components/common/table/global/GlobalTable";
import { createApiColumn } from "../../../components/common/table/pages/account-settings/createApiColumn";
import PopupContext from "../../../components/common/popup/PopupContext";
import {
  GET_API_KEY_CONTENT,
  GET_API_KEY_LIST_DATA,
  GET_API_KEY_SUCCESS,
} from "../../../redux/reducers/dashboard/settings/createApiKey.slice";
import TableSearch from "../../../components/common/table/TableSearch";
import { GET_TABLE_CONFIG } from "../../../redux/reducers/config/table/table.slice";
import { GET_API_KEY_LIST } from "../../../redux/actions/dashboard/settings/createApiKey.actions";

const NavigationCardTitle = lazy(
  () => import("../../../components/common/navigation/NavigationCardTitle")
);
const CreateApiKeyConfirm = lazy(
  () =>
    import(
      "../../../components/pages/accountSettings/createApiKey/CreateApiKeyConfirm"
    )
);

const CreateAPIKeyPage = () => {
  const dispatch = useAppDispatch();
  const createApiKeyContent = useAppSelector(GET_API_KEY_CONTENT);
  const createApiKeyList = useAppSelector(GET_API_KEY_LIST_DATA);
  const tableConfig = useAppSelector(GET_TABLE_CONFIG);
  const success = useAppSelector(GET_API_KEY_SUCCESS);

  useSingleEffect(() => {
    dispatch(
      TRIGGER_NAVIGATION_TAB_CONFIG("settings", settingsNavType.CREATE_API_KEY)
    ).then((r) => r);
    if (!createApiKeyContent?.hasData) {
      dispatch(GET_API_KEY_LIST(tableConfig)).then((r: void) => r);
    }
  });

  // Get company list when filter change
  useUpdateEffect(() => {
    if (
      tableConfig.sortBy ||
      tableConfig.page ||
      tableConfig.perPage ||
      tableConfig.search
    ) {
      dispatch(GET_API_KEY_LIST(tableConfig)).then((r: void) => r);
    }
  }, [
    tableConfig.sortBy,
    tableConfig.page,
    tableConfig.perPage,
    tableConfig.search,
  ]);

  // Get company list when create, update, delete change
  useUpdateEffect(() => {
    dispatch(GET_API_KEY_LIST(tableConfig)).then((r: void) => r);
  }, [success.add, success.update, success.remove]);

  return (
    <>
      <Suspense fallback="">
        <NavigationCardTitle
          title={settingsNavType.CREATE_API_KEY}
          NavHeaderAction={
            <div className="flex items-center">
              <div className="flex items-center w-full max-w-[200px] mr-3">
                <TableSearch />
              </div>
              <Suspense fallback="">
                <PopupContext
                  buttonLabel="Create API Key"
                  buttonIcon="ic:twotone-plus"
                  modelTitle="Create API Key"
                  formComponent={<CreateApiKeyConfirm />}
                  buttonClass="btn-primary"
                />
              </Suspense>
            </div>
          }
        />
      </Suspense>

      <div className="card px-8 border-0 relative">
        <Suspense fallback="">
          <GlobalTable
            column={createApiColumn}
            records={createApiKeyList}
            loading={createApiKeyContent?.loading}
          />
        </Suspense>
      </div>
    </>
  );
};

export default CreateAPIKeyPage;
