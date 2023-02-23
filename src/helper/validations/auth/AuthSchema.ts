import * as Yup from "yup";

const phoneRegExp = /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/;

//Validation Schema for User Registration
export const signupValidationSchema = Yup.object().shape({
  first_name: Yup.string()
    .matches(/^[-a-zA-Z ]+$/, "First Name must have letters only")
    .required("First Name is required"),
  last_name: Yup.string()
    .matches(/^[-a-zA-Z ]+$/, "Last Name must have letters only")
    .required("Last Name is required"),
  email: Yup.string()
    .email("Enter valid email address")
    .required("Email is required"),
  phone_number: Yup.string()
    .min(1, "Phone number must have 10 digits")
    .max(10, "Phone number must have 10 digits")
    .matches(phoneRegExp, "Enter valid phone number")
    .required("Phone number is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must contain min. 8 Characters including 1 Uppercase, 1 Lowercase, 1 Number and 1 Special character"
    ),
});

//Validation Schema for User Login
export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter valid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must contain min. 8 Characters including 1 Uppercase, 1 Lowercase, 1 Number and 1 Special character"
    ),
});

//Validation Schema for Forgot Password
export const forgortPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Enter valid email address").required("Email is required"),
});

//Validation Schema for Reset Password
export const resetPassword = Yup.object().shape({
  //New Password Field Validation
  new_password: Yup.string()
    .required("Please enter new password!")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must contain min. 8 Characters including 1 Uppercase, 1 Lowercase, 1 Number and 1 Special character"
    ),

  //Confirm Password Field Validation
  confirm_password: Yup.string()
    .required("Confirm password field is required!")
    .oneOf([Yup.ref("new_password")], "Your password doesn't match."),
});
