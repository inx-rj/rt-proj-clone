import * as Yup from "yup";


export const phoneRegExp = /^(?:[0-9] ?){7,15}[0-9]$/

export const TwoFAuthPhoneNumberSchema = Yup.object().shape({
    phone_number: Yup.string()
        .matches(phoneRegExp, "Enter valid contact number")
        .required('Contact Number is required').nullable()
})

export const PhoneOtpSchema = Yup.object().shape({
    otp: Yup.string()
        .min(6, "It should be 4 digit")
        .max(6, "It should be 6 digit")
        .matches(/^[0-9]+$/, "Enter valid contact number")
        .required('OTP is required').nullable()
})

export const GoogleOtpSchema = Yup.object().shape({
    token: Yup.string()
        .min(6, "It should be 6 digit")
        .max(6, "It should be 6 digit")
        .matches(/^[0-9]+$/, "Enter valid contact number")
        .required('Token is required').nullable()
})