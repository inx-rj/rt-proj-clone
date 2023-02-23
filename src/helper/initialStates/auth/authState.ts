import { UserDetailsType } from "../../types/auth/authType";

// Select Auth Options
export const AuthOptions = {
  PHONE_NUMBER: "phone_number",
  GOOGLE: "google",
};

// Update User Details Initial State
export const updateUserDetails: UserDetailsType = {
  email: "",
  first_name: "",
  id: 0,
  last_name: "",
  phone_number: "",
};
