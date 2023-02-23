import { toast } from "react-toastify";
import ToastSuccessIcon from "../../../../components/UI/ToastSuccessIcon";
import AuthApiClient from "../../../../services/auth/AuthApiClient";
import { USER_PROFILE_DATA } from "../../../reducers/auth/auth.slice";
import { AppDispatch } from "../../../store";

//Get User Details
const GET_USER_DETAILS = () => async (dispatch: AppDispatch) => {
  await AuthApiClient.profile().then((response) => {
    dispatch(
      USER_PROFILE_DATA({
        user_details: { ...response?.data?.data?.user_details },
      })
    );
  });
};

//Edit user details
const UPDATE_USER_DETAILS = (data) => async (dispatch: AppDispatch) => {
  await AuthApiClient.updateUserDetails(data).then((response) => {
    toast.success(response.data.message, { icon: ToastSuccessIcon, toastId: 'update_user_details_success' });
    dispatch(GET_USER_DETAILS());
  });
};

export { GET_USER_DETAILS, UPDATE_USER_DETAILS };
