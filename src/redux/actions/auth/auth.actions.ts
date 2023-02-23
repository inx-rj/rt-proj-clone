import AuthApiClient from "../../../services/auth/AuthApiClient";
import {
  CLEAR_AUTH,
  SET_AUTH_LOADING,
  SET_AUTH_OPTION,
  SET_LOGIN_ACTIVE_TAB,
  USER_PROFILE_LOADING,
} from "../../reducers/auth/auth.slice";
import { AppDispatch } from "../../store";
import { toast } from "react-toastify";
import ToastSuccessIcon from "../../../components/UI/ToastSuccessIcon";
import { SET_PERSIST } from "../../reducers/config/app/app.slice";
import { closeAllModals } from "@mantine/modals";
import { LoginUserType, RegisterUserType, ResetPasswordType } from "../../../helper/types/auth/authType";
import { EmailType } from "../../../helper/types";
import { CLEAR_2FA_DATA } from "../../reducers/dashboard/settings/TwoFAuth.slice";

// Login/signup Tab action
const TOGGLE_LOGIN_TAB = (type: boolean) => {
  return async (dispatch: AppDispatch) =>
    await dispatch(SET_LOGIN_ACTIVE_TAB(type));
};

// Perform Login
const TRIGGER_LOGIN = (data: LoginUserType) => async (dispatch: AppDispatch) => {
  dispatch(USER_PROFILE_LOADING(true));
  return await AuthApiClient.login(data);
};

//Perform Logout
const TRIGGER_LOGOUT = (data: string) => async (dispatch: AppDispatch) => {
  dispatch(SET_AUTH_LOADING(true));
  await AuthApiClient.signOut(data)
    .then(response => {
      if (response.status === 200) {
        toast.success(response.data.message, { icon: ToastSuccessIcon, toastId: 'login_success' });
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('access_token');
        closeAllModals();
        dispatch(CLEAR_AUTH());
        dispatch(CLEAR_2FA_DATA());
        dispatch(SET_PERSIST(false));
      }
    })
    .catch(error => {
      toast.error(error.response.data.message || error.message, { icon: ToastSuccessIcon, toastId: 'login_error' });
    })
    .finally(() => {
      dispatch(SET_AUTH_LOADING(false));
    });
};

//Perform User Registration
const REGISTER_USER = (data: RegisterUserType) => async (dispatch: AppDispatch) => {
  await AuthApiClient.register(data)
    .then((response) => {
      if (response.status === 201 || response.status === 200) {
        toast.success(response?.data?.message, { icon: ToastSuccessIcon, toastId: 'register_user_success' });
        dispatch(TOGGLE_LOGIN_TAB(true));
      }
    });
};

// Set AuthOption after Login 
const TRIGGER_AUTH_OPTION = (data: string) => async (dispatch: AppDispatch) => {
  dispatch(SET_AUTH_OPTION(data))
}

//Forgot Password 
const TRIGGER_FORGOT_PASSWORD = (data: EmailType) => async (dispatch: AppDispatch) => {
  return await AuthApiClient.forgotPassword(data)
}

//Reset Password
const TRIGGER_RESET_PASSWORD = (data: ResetPasswordType) => async (dispatch: AppDispatch) => {
  return await AuthApiClient.resetPassword(data)
}

// Common auth Config
export {
  TRIGGER_LOGIN,
  REGISTER_USER,
  TOGGLE_LOGIN_TAB,
  TRIGGER_AUTH_OPTION,
  TRIGGER_LOGOUT,
  TRIGGER_FORGOT_PASSWORD,
  TRIGGER_RESET_PASSWORD,
};
