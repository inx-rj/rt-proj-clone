export const env = {
  APP_NAME: "RailsText",
  
  REACT_BASE_URL: import.meta.env["REACT_APP_FRONTEND_URL"],
  REACT_API_URL: import.meta.env["REACT_APP_BACKEND_API_URL"],
  
  API_URL: import.meta.env["VITE_BACKEND_API_URL"],
  API_USER_SERVER: `${import.meta.env["VITE_BACKEND_API_URL"]}/user`,
  API_AUTH_SERVER: `${import.meta.env["VITE_BACKEND_API_URL"]}/user/auth`,
  API_COMPANY_SERVER: `${import.meta.env["VITE_BACKEND_API_URL"]}/company`,
};

export const API_URL = {
  AUTH: {
    REGISTER: `${env.API_USER_SERVER}/register`,
    LOGIN: `${env.API_USER_SERVER}/login`,
    USER_PROFILE: `${env.API_USER_SERVER}/profile`,
    LOGOUT: `${env.API_USER_SERVER}/logout`,
    AUTH_REFRESH: `${env.API_USER_SERVER}/refresh-token`,
  RESET_PASSWORD: `${env.API_USER_SERVER}/api/password_reset`,
    CHANGE_PASSWORD: `${env.API_USER_SERVER}/api/password_reset/confirm`,
    ONE_TIME_RESET_PASSWORD: `${env.API_USER_SERVER}/one-time-reset-password`,
    SEND_RESET_PASS_MAIL: `${env.API_USER_SERVER}/send-password-reset-email`,
    TwoFA_PHONE_NUMBER: `${env.API_AUTH_SERVER}/send-otp-sms/2FA`,
    TwoFA_VERIFY_PHONE_NUMBER: `${env.API_AUTH_SERVER}/validate-otp`,
    TwoFA_GOOGLE: `${env.API_AUTH_SERVER}/generate-google-auth`,
    TwoFA_VERIFY_GOOGLE: `${env.API_AUTH_SERVER}/verify-google-auth-otp`,
    TwoFA_DISABLE: `${env.API_AUTH_SERVER}/disable-2FA`,
  },

  COMPANY_SETTINGS: {
    COMPANY_CREATE: `${env.API_COMPANY_SERVER}/register`,
    GET_COMPANY_LIST: `${env.API_COMPANY_SERVER}/register`,
    COMPANY_DETAIL: `${env.API_COMPANY_SERVER}/company-details`,
  },

  CREATE_API_KEY_SETTINGS: {
    GENERATE_API_KEY: `${env.API_COMPANY_SERVER}/api-key-generate`,
    CREATE_API_KEY: `${env.API_COMPANY_SERVER}/api-key`,
    API_KEY_LIST: `${env.API_COMPANY_SERVER}/api-key`,
    API_KEY_DETAIL: `${env.API_COMPANY_SERVER}/api-key-details`,
  },
};
