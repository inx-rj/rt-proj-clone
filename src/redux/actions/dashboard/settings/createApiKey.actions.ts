import { closeAllModals } from "@mantine/modals";
import { toast } from "react-toastify";
import ToastSuccessIcon from "../../../../components/UI/ToastSuccessIcon";
import { CreateApiKeyTypes } from "../../../../helper/types/pages/dashboard/accountSettings/CreateApiKeyTypes";
import CreateApiKeySettingsApiClient from "../../../../services/dashboard/settings/CreateApiKeySettingsApiClient";
import { SET_TABLE_TOTAL_COUNT } from "../../../reducers/config/table/table.slice";
import { SET_API_KEY_ADD, SET_API_KEY_LIST, SET_API_KEY_LOADING, SET_API_KEY_REMOVE, SET_GENERATED_API_KEY } from "../../../reducers/dashboard/settings/createApiKey.slice";
import { AppDispatch } from "../../../store";

//Generate API key
const GENERATE_API_KEY = () => async (dispatch: AppDispatch) => {
    dispatch(SET_API_KEY_LOADING(true));
    await CreateApiKeySettingsApiClient.generateApiKey()
        .then(response => {
            dispatch(SET_GENERATED_API_KEY(response?.data?.data?.api_key));
        })
        .finally(() => {
            dispatch(SET_API_KEY_LOADING(false));
        });
}

// Create New Created API key
const ADD_API_KEY = (data: CreateApiKeyTypes) => async (dispatch: AppDispatch) => {
    dispatch(SET_API_KEY_LOADING(true));
    await CreateApiKeySettingsApiClient.register(data)
        .then(response => {
            toast.success(response?.data?.message, { icon: ToastSuccessIcon, toastId: 'add_api_key_success' });
            dispatch(SET_API_KEY_ADD(response?.data?.data));
            closeAllModals();
        })
        .finally(() => {
            dispatch(SET_API_KEY_LOADING(false));
        });
};

//Get all API key List
const GET_API_KEY_LIST = (tableConfig) => async (dispatch: AppDispatch) => {
    dispatch(SET_API_KEY_LOADING(true));
    await CreateApiKeySettingsApiClient.fetchAllApiKeyList(tableConfig)
        .then((response) => {
            const result = response?.data;
            dispatch(SET_API_KEY_LIST(result?.data));
            dispatch(SET_TABLE_TOTAL_COUNT(result?.count))
        })
        .catch(() => {
            //404-No data available in response
            dispatch(SET_API_KEY_LIST([]));
            dispatch(SET_TABLE_TOTAL_COUNT(null));
        })
        .finally(() => {
            dispatch(SET_API_KEY_LOADING(false));
        });
}

//Delete API key
const DELETE_API_KEY = (data: CreateApiKeyTypes) => async (dispatch: AppDispatch) => {
    await CreateApiKeySettingsApiClient.remove(data)
        .then(response => {
            toast.success(response.data.message, { icon: ToastSuccessIcon, toastId: 'delete_api_key_success' });
            dispatch(SET_API_KEY_REMOVE(response.data.data));
            closeAllModals();
        })
        .finally(() => {
        });
}

export { GENERATE_API_KEY, ADD_API_KEY, DELETE_API_KEY, GET_API_KEY_LIST };