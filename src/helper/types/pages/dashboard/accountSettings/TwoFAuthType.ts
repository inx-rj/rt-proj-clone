import { EmailType, LoadingHasDataType, PhoneNumType } from "../../.."

export interface TwoFAuthPhoneNumberVerifyTypes extends PhoneNumType {
  otp: string,
}

export interface QrCodeTypes {
  base32: string,
  otpauth_url: string
}

export interface PhoneNumStateType extends LoadingHasDataType {
  phoneNum: string;
}
export interface GoogleStateType extends LoadingHasDataType {
  email: string;
  data: QrCodeTypes;
}
export interface TwoFAuthInitialTypes {
  TwoFALoading: boolean,
  phone_number: PhoneNumStateType,
  google: GoogleStateType
}

export interface TwoFAuthGoogleVerifyTypes extends EmailType {
  token: string;
}

export interface TwoFAuthDisableTypes extends EmailType {
  reset?: string
}