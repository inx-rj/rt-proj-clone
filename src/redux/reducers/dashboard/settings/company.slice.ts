import { createSlice } from "@reduxjs/toolkit";
import { CompanyInitialTypes } from "../../../../helper/types/pages/dashboard/accountSettings/CompanyTypes";
import { RootState } from "../../../rootReducer";

const initialState: CompanyInitialTypes = {
    company_list: {
        content: {
            loading: false,
            hasData: false
        },
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

export const Company = createSlice({
    name: "Company",
    initialState: initialState,
    reducers: {
        SET_COMPANY_LOADING: (state, action) => ({
            ...state,
            company_list: {
                ...state.company_list,
                content: {
                    ...state.company_list.content,
                    loading: action.payload
                }
            }
        }),
        SET_COMPANY_ADD: (state, action) => ({
            ...state,
            response: {
                ...state.response,
                add: action.payload,
                update: null,
                remove: null
            }
        }),
        SET_COMPANY_UPDATE: (state, action) => ({
            ...state,
            response: {
                ...state.response,
                add: null,
                update: action.payload,
                remove: null
            }
        }),
        SET_COMPANY_REMOVE: (state, action) => ({
            ...state,
            response: {
                ...state.response,
                add: null,
                update: null,
                remove: action.payload
            }
        }),
        SET_COMPANY_LIST: (state, action) => ({
            ...state,
            company_list: {
                ...state.company_list,
                data: {
                    ...state.company_list.data,
                    results: action.payload
                },
                content: {
                    ...state.company_list.content,
                    hasData: true
                }
            }
        }),
        RESET_COMPANY_RESPONSE: state => ({
            ...state,
            response: initialState.response
        })
    },
});

export const {
    SET_COMPANY_LOADING,
    SET_COMPANY_LIST,
    SET_COMPANY_ADD,
    SET_COMPANY_UPDATE,
    RESET_COMPANY_RESPONSE,
    SET_COMPANY_REMOVE
} = Company.actions;

export const GET_COMPANY_DATA = (state: RootState) =>
    state.settings.Company.company_list?.content;

export const GET_COMPANY_LIST_DATA = (state: RootState) =>
    state.settings.Company.company_list?.data?.results;

export const GET_COMPANY_SUCCESS = (state: RootState) =>
    state.settings.Company.response;
