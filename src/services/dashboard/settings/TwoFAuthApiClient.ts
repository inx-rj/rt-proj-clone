import axiosPrivate from "../../../api/axios";
import { API_URL } from "../../../helper/env";
import { EmailType, PhoneNumType } from "../../../helper/types";
import { TwoFAuthGoogleVerifyTypes, TwoFAuthPhoneNumberVerifyTypes, TwoFAuthDisableTypes } from "../../../helper/types/pages/dashboard/accountSettings/TwoFAuthType";


class TwoFAuthApiClient {
    // 2FA by send Phone number
    TwoFAuthPhoneNumber = (data: PhoneNumType) => axiosPrivate.post(`${API_URL.AUTH.TwoFA_PHONE_NUMBER}/`, data);

    // 2FA by verify Phone number
    TwoFAuthVerifyPhoneNumber = (data: TwoFAuthPhoneNumberVerifyTypes) => axiosPrivate.post(`${API_URL.AUTH.TwoFA_VERIFY_PHONE_NUMBER}/`, data);

    // 2FA by send Phone number
    TwoFAuthGoogle = (data: EmailType) => axiosPrivate.post(`${API_URL.AUTH.TwoFA_GOOGLE}/`, data);

    // 2FA by verify Phone number
    TwoFAuthVerifyGoogle = (data: TwoFAuthGoogleVerifyTypes) => axiosPrivate.post(`${API_URL.AUTH.TwoFA_VERIFY_GOOGLE}/`, data);

    // Disable 2FA
    TwoFAuthDisable = (data: TwoFAuthDisableTypes) => axiosPrivate.post(`${API_URL.AUTH.TwoFA_DISABLE}/`, data);
}

export default new TwoFAuthApiClient();