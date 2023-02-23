import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../rootReducer";
import { CreateApiInitialTypes } from "../../../../helper/types/pages/dashboard/accountSettings/CreateApiKeyTypes";

const initialState: CreateApiInitialTypes = {
    api_key: '',
    content: {
        loading: false,
        hasData: false
    },
    createApiKey_list: {
        data: {
            results: []
        }
    },
    response: {
        add: null,
        update: null,
        remove: null
    }
};

export const CreateApiKey = createSlice({
    name: "CreateApiKey",
    initialState: initialState,
    reducers: {
        SET_API_KEY_LOADING: (state, action) => ({
            ...state,
            content: {
                ...state.content,
                loading: action.payload
            }
        }),
        SET_GENERATED_API_KEY: (state, action) => ({
            ...state,
            api_key: action.payload
        }),
        SET_API_KEY_ADD: (state, action) => ({
            ...state,
            response: {
                ...state.response,
                add: action.payload,
                update: null,
                remove: null
            }
        }),
        SET_API_KEY_UPDATE: (state, action) => ({
            ...state,
            response: {
                ...state.response,
                add: null,
                update: action.payload,
                remove: null
            }
        }),
        SET_API_KEY_REMOVE: (state, action) => ({
            ...state,
            response: {
                ...state.response,
                add: null,
                update: null,
                remove: action.payload
            }
        }),
        SET_API_KEY_LIST: (state, action) => ({
            ...state,
            createApiKey_list: {
                ...state.createApiKey_list,
                data: {
                    ...state.createApiKey_list.data,
                    results: action.payload
                }
            }
        }),
        RESET_API_KEY_RESPONSE: state => ({
            ...state,
            response: initialState.response
        })
    },
});

export const {
    SET_API_KEY_LOADING,
    SET_GENERATED_API_KEY,
    SET_API_KEY_LIST,
    SET_API_KEY_ADD,
    SET_API_KEY_UPDATE,
    RESET_API_KEY_RESPONSE,
    SET_API_KEY_REMOVE
} = CreateApiKey.actions;

export const GET_API_KEY_LIST_DATA = (state: RootState) =>
    state.settings.CreateApiKey.createApiKey_list?.data?.results;

export const GET_API_KEY_SUCCESS = (state: RootState) =>
    state.settings.CreateApiKey.response;

export const GET_API_KEY = (state: RootState) =>
    state.settings.CreateApiKey.api_key;

export const GET_API_KEY_CONTENT = (state: RootState) =>
    state.settings.CreateApiKey.content;
