import { createSlice } from '@reduxjs/toolkit';
import { AuthInitialType } from '../../../helper/types/auth/authType';
import { RootState } from '../../rootReducer';

const initialState: AuthInitialType = {
  loading: false,
  isLoginTabActive: true,
  user: {
    loading: false,
    hasData: false,
    data: {
      "2FA": false,
      google_verified: false,
      phone_verified: false,
      user_details: {
        email: ""
      }
    },
  },
  authOption: {
    type: ''
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_AUTH_LOADING: (state, action) => {
      state.loading = action.payload;
    },

    SET_LOGIN_ACTIVE_TAB: (state, action) => ({
      ...state,
      isLoginTabActive: action.payload,
    }),

    USER_PROFILE_LOADING: (state, action) => ({
      ...state,
      user: {
        ...state.user,
        loading: action.payload,
      },
    }),

    USER_PROFILE_DATA: (state, action) => ({
      ...state,
      user: {
        ...state.user,
        hasData: true,
        data: action.payload,
      },
    }),

    SET_AUTH_OPTION: (state, action) => ({
      ...state,
      authOption: {
        ...state.authOption,
        type: action.payload
      }
    }),

    RESET_AUTH_OPTION: (state) => ({
      ...state,
      authOption: {
        ...initialState.authOption,
        type: initialState.authOption.type
      }
    }),

    CLEAR_AUTH: () => ({
      ...initialState
    }),
  },
});

export const {
  CLEAR_AUTH,
  SET_LOGIN_ACTIVE_TAB,
  USER_PROFILE_LOADING,
  USER_PROFILE_DATA,
  SET_AUTH_LOADING,
  SET_AUTH_OPTION,
  RESET_AUTH_OPTION,
} = authSlice.actions;

export const IS_LOGIN_TAB_ACTIVE = (state: RootState) => state.auth.isLoginTabActive;
export const USER_DATA = (state: RootState) => state.auth.user;
export const TOKEN = (state: RootState) => state.auth;
export const AUTH_LOADING = (state: RootState) => state.auth.loading;
export const AUTH_OPTION = (state: RootState) => state.auth.authOption;
