import axiosPrivate from "../../api/axios";
import { API_URL } from "../../helper/env";
import { EmailType } from "../../helper/types";
import { LoginUserType, RegisterUserType, ResetPasswordType } from "../../helper/types/auth/authType";

class AuthApiClient {
  // Refresh token
  refreshTokenAPI = (refreshToken: string) =>
    axiosPrivate.post(`${API_URL.AUTH.AUTH_REFRESH}/`, {
      refresh: refreshToken,
    });

  //User Registration
  register = (data: RegisterUserType) =>
    axiosPrivate.post(`${API_URL.AUTH.REGISTER}/`, data, {
      headers: {
        Authorization: "",
      },
    });

  //User Login
  login = (data: LoginUserType) =>
    axiosPrivate.post(`${API_URL.AUTH.LOGIN}/`, data, {
      headers: {
        Authorization: "",
      },
    });

  //User Profile
  profile = () => axiosPrivate.get(`${API_URL.AUTH.USER_PROFILE}/`);
  
  //Update current user details
  updateUserDetails = (data) =>
    axiosPrivate.put(`${API_URL.AUTH.USER_PROFILE}/`, data);

  //Perform Logout
  signOut = (refreshToken: string) =>
    axiosPrivate.post(
      `${API_URL.AUTH.LOGOUT}/`,
      { refresh: refreshToken },
      {
        headers: {
          Authorization: "",
        },
      }
    );

  //Forgot Password
  forgotPassword = (data: EmailType) =>
    axiosPrivate.post(`${API_URL.AUTH.RESET_PASSWORD}/`, data, {
      headers: {
        Authorization: "",
      },
    });

  //Reset Password
  resetPassword = (data: ResetPasswordType) =>
    axiosPrivate.post(`${API_URL.AUTH.CHANGE_PASSWORD}/`, data, {
      headers: {
        Authorization: "",
      },
    });
}

export default new AuthApiClient();