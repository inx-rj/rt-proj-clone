import { AppTokenType, EmailType, EmailPWDType, LoadingHasDataType, LoadingType, PasswordType, PhoneNumType } from "..";

export interface RegisterUserType extends EmailPWDType, PhoneNumType {
  first_name: string;
  last_name: string;
}

export interface LoginUserType extends EmailPWDType {
  remember_me?: boolean;
}

export interface UserDetailsType extends EmailType {
  id?: number;
  password?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  mobile_number_2fa?: string;
}

export interface UserDataObjType {
  "2FA": boolean;
  google_verified: boolean;
  phone_verified: boolean;
  token?: AppTokenType
  user_details: UserDetailsType
}

export interface UserStateType extends LoadingHasDataType {
  data: UserDataObjType;
}

export interface AuthInitialType extends LoadingType {
  isLoginTabActive: boolean;
  user: UserStateType;
  authOption: {
    type: string
  }
}

export interface ResetPasswordType extends PasswordType {
  token: string;
}

export interface PasswordValueType {
  new_password: string,
  confirm_password: string,
}