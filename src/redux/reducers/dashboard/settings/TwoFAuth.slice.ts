import { createSlice } from "@reduxjs/toolkit";
import { TwoFAuthInitialTypes } from "../../../../helper/types/pages/dashboard/accountSettings/TwoFAuthType";
import { RootState } from "../../../rootReducer";

const initialState: TwoFAuthInitialTypes = {
    TwoFALoading: false,
    phone_number: {
        loading: false,
        hasData: false,
        phoneNum: "",
    },
    google: {
        loading: false,
        hasData: false,
        email: "",
        data: {
            base32: "",
            otpauth_url: "",
        },
    }
};

export const TwoFAuth = createSlice({
    name: "TwoFAuth",
    initialState: initialState,
    reducers: {
        SET_2FA_LOADING: (state, action) => ({
            ...state,
            TwoFALoading: action.payload,
        }),
        SET_PHONE_NUM_LOADING: (state, action) => ({
            ...state,
            phone_number: {
                ...state.phone_number,
                loading: action.payload,
            },
        }),
        SET_PHONE_NUM_DATA: (state, action) => ({
            ...state,
            phone_number: {
                ...state.phone_number,
                hasData: true,
                phoneNum: action.payload,
            },
        }),
        SET_GOOGLE_LOADING: (state, action) => ({
            ...state,
            google: {
                ...state.google,
                loading: action.payload,
            },
        }),
        SET_GOOGLE_DATA: (state, action) => ({
            ...state,
            google: {
                ...state.google,
                data: action.payload,
                hasData: true,
            },
        }),
        SET_GOOGLE_EMAIL: (state, action) => ({
            ...state,
            google: {
                ...state.google,
                email: action.payload,
            },
        }),
        CLEAR_2FA_DATA: () => ({
            ...initialState
        }),
    },
});

export const {
    SET_2FA_LOADING,
    SET_PHONE_NUM_LOADING,
    SET_PHONE_NUM_DATA,
    SET_GOOGLE_LOADING,
    SET_GOOGLE_DATA,
    SET_GOOGLE_EMAIL,
    CLEAR_2FA_DATA
} = TwoFAuth.actions;

export const TwoFALoader = (state: RootState) =>
    state.settings.TwoFAuth.TwoFALoading;

export const TwoFAuth_PHONE_NUMBER = (state: RootState) =>
    state.settings.TwoFAuth.phone_number;

export const TwoFAuth_GOOGLE = (state: RootState) =>
    state.settings.TwoFAuth.google;