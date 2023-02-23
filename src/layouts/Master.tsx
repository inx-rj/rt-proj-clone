import { useSingleEffect } from "react-haiku";
import { Navigate, Outlet } from "react-router-dom";
import { API_URL } from "../helper/env";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { IS_PERSISTED } from "../redux/reducers/config/app/app.slice";
import { USER_PROFILE_DATA, USER_PROFILE_LOADING } from "../redux/reducers/auth/auth.slice";
import { toast } from "react-toastify";
import ToastErrorIcon from "../components/UI/ToastErrorIcon";

const Master = () => {
  // Hooks
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useAppDispatch();

  // Redux states
  const isPersist = useAppSelector(IS_PERSISTED);

  // To retrive user profile data on refresh
  useSingleEffect(() => {
    if (isPersist) {
      dispatch(USER_PROFILE_LOADING(true));

      axiosPrivate.get(`${API_URL.AUTH.USER_PROFILE}/`)
        .then((response) => {
          if (response.status === 200) {
            dispatch(USER_PROFILE_DATA(response?.data?.data));
          }
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message || error.message, { icon: ToastErrorIcon, toastId: 'user_profile_data_error' })
        })
        .finally(() => {
          dispatch(USER_PROFILE_LOADING(false));
        })
    }
  });

  return isPersist ? (
    <div role="main">
      <Outlet />
    </div>
  ) : (
    <Navigate to={"/auth"} />
  );
};

export default Master;
