import { closeAllModals } from "@mantine/modals";
import { toast } from "react-toastify";
import ToastSuccessIcon from "../../../../components/UI/ToastSuccessIcon";
import { CompanyListTypes } from "../../../../helper/types/pages/dashboard/accountSettings/CompanyTypes";
import CompanySettingsApiClient from "../../../../services/dashboard/settings/CompanySettingsApiClient";
import { SET_TABLE_TOTAL_COUNT } from "../../../reducers/config/table/table.slice";
import { SET_COMPANY_ADD, SET_COMPANY_LIST, SET_COMPANY_LOADING, SET_COMPANY_REMOVE, SET_COMPANY_UPDATE } from "../../../reducers/dashboard/settings/company.slice";
import { AppDispatch } from "../../../store";

//Get Company List
const GET_COMPANY_LIST = (tableConfig) => async (dispatch: AppDispatch) => {
    dispatch(SET_COMPANY_LOADING(true));
    await CompanySettingsApiClient.fetchCompanyList(tableConfig)
        .then((response) => {
            const result = response?.data?.data;
            dispatch(SET_COMPANY_LIST(result));
            dispatch(SET_TABLE_TOTAL_COUNT(response?.data?.count))
        })
        .catch(() => {
            //404-No data available in response
            dispatch(SET_COMPANY_LIST([]));
            dispatch(SET_TABLE_TOTAL_COUNT(null));
        })
        .finally(() => {
            dispatch(SET_COMPANY_LOADING(false));
        });
}

// Create Company Details
const ADD_COMPANY_DETAILS = (data: CompanyListTypes) => async (dispatch: AppDispatch) => {
    dispatch(SET_COMPANY_LOADING(true));
    await CompanySettingsApiClient.register(data).then((response) => {
        if (response.status === 201) {
            toast.success(response?.data?.message, {
              icon: ToastSuccessIcon,
              toastId: "add_company_details_success",
            });
            dispatch(SET_COMPANY_ADD(response?.data?.data))
            closeAllModals();
        }
    })
}

//Edit Company Details
const UPDATE_COMPANY = (data: CompanyListTypes) => async (dispatch: AppDispatch) => {
    await CompanySettingsApiClient.update(data)
        .then(response => {
            toast.success(response.data.message, { icon: ToastSuccessIcon, toastId: 'update_company_success' });
            dispatch(SET_COMPANY_UPDATE(response.data.data));
            closeAllModals();
        })
        .finally(() => {
        });
}

//Delete Company
const DELETE_COMPANY = (data: CompanyListTypes) => async (dispatch: AppDispatch) => {
    await CompanySettingsApiClient.remove(data)
        .then(response => {
            toast.success(response.data.message, { icon: ToastSuccessIcon, toastId: 'delete_company_success' });
            dispatch(SET_COMPANY_REMOVE(response.data.message));
            closeAllModals();
        })
        .finally(() => {
        });
}

export { GET_COMPANY_LIST, ADD_COMPANY_DETAILS, UPDATE_COMPANY, DELETE_COMPANY };