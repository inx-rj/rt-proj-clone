import * as Yup from "yup";

const phoneRegExp = /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/;

//Add Company details schema
export const addCompanySchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[-a-zA-Z ]+$/, "Company Name should contain only text")
    .required("Company name is required"),
  phone_number: Yup.string()
    .min(1, "Phone number must have 10 digits")
    .max(12, "Phone number must have 12 digits")
    // .matches(phoneRegExp, "Enter valid phone number")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Enter valid email address")
    .required("Email is required"),
});
