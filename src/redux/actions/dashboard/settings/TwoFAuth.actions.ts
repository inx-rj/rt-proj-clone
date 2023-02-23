import { toast } from "react-toastify";
import { TwoFAuthDisableTypes, TwoFAuthGoogleVerifyTypes, TwoFAuthPhoneNumberVerifyTypes } from "../../../../helper/types/pages/dashboard/accountSettings/TwoFAuthType";
import TwoFAuthApiClient from "../../../../services/dashboard/settings/TwoFAuthApiClient";
import { CLEAR_2FA_DATA, SET_2FA_LOADING, SET_GOOGLE_DATA, SET_GOOGLE_EMAIL, SET_GOOGLE_LOADING } from "../../../reducers/dashboard/settings/TwoFAuth.slice";
import { AppDispatch } from "../../../store";
import ToastSuccessIcon from "../../../../components/UI/ToastSuccessIcon";
import { TWOFA_KEY } from "../../../../helper/constants";
import { closeAllModals } from "@mantine/modals";
import { USER_PROFILE_DATA, } from "../../../reducers/auth/auth.slice";
import ToastErrorIcon from "../../../../components/UI/ToastErrorIcon";
import { EmailType, PhoneNumType } from "../../../../helper/types";

// 2FA by send phone number
const SEND_2FA_PHONE_NUMBER = (data: PhoneNumType) => async () => {
  return await TwoFAuthApiClient.TwoFAuthPhoneNumber(data);
};

// Verify 2FA by google
const VERIFY_2FA_PHONE_NUMBER = (data: TwoFAuthPhoneNumberVerifyTypes) => async () => {
  return await TwoFAuthApiClient.TwoFAuthVerifyPhoneNumber(data);
};

// 2FA by send google
const SEND_2FA_GOOGLE = (data: EmailType) => async (dispatch: AppDispatch) => {
  dispatch(SET_GOOGLE_LOADING(true));
  await TwoFAuthApiClient.TwoFAuthGoogle(data)
    .then((response) => {
      if (response.status === 200) {
        dispatch(SET_GOOGLE_DATA(response.data.data));
        dispatch(SET_GOOGLE_EMAIL(data.email));
        dispatch(SET_GOOGLE_LOADING(false));
      }
    })
    .catch((exception) => {
      if (exception.response && exception.response.status === 400) {
      }
    })
    .finally(() => {
      dispatch(SET_GOOGLE_LOADING(false));
    });
};

// Verify 2FA by google
const VERIFY_2FA_GOOGLE = (data: TwoFAuthGoogleVerifyTypes) => async () => {
  return await TwoFAuthApiClient.TwoFAuthVerifyGoogle(data);
};

// Disable 2FA Completely
const RESET_DISABLE_2FA = (data: TwoFAuthDisableTypes) => async (dispatch: AppDispatch) => {

  dispatch(SET_2FA_LOADING(true));

  await TwoFAuthApiClient.TwoFAuthDisable(data)
    .then(response => {
      if (response.status === 200) {
        // Toast message on success
        toast.success(response.data.message, { icon: ToastSuccessIcon, toastId: 'disable_2FA_success' });

        // To set profile data and clear 2FA data respectively
        if (data?.reset === TWOFA_KEY.RESET_GOOGLE_2FA) {
          //To generate QR code when reset google 2FA
          dispatch(SEND_2FA_GOOGLE({ email: data?.email }));
        }
        else {
          // To reset 2FA data to initial state
          dispatch(CLEAR_2FA_DATA());
        }

        // dispatch(SET_2FA_DATA(response.data.data));
        dispatch(USER_PROFILE_DATA(response.data.data));

        closeAllModals(); // closes all popup on the screen
      }
    })
    .catch(error => {
      toast.error(error.response.data.message || error.message, { icon: ToastErrorIcon, toastId: 'disable_2FA_error' });
    })
    .finally(() => {
      // To set loader false
      dispatch(SET_2FA_LOADING(false));
    });
};

export {
  SEND_2FA_PHONE_NUMBER,
  VERIFY_2FA_PHONE_NUMBER,
  SEND_2FA_GOOGLE,
  VERIFY_2FA_GOOGLE,
  RESET_DISABLE_2FA
};