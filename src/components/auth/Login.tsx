import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginValidationSchema } from "../../helper/validations/auth/AuthSchema";
import { TRIGGER_LOGIN } from "../../redux/actions/auth/auth.actions";
import { TRIGGER_PERSIST_MODE } from "../../redux/actions/config/app/app.actions";
import {
  CLEAR_AUTH,
  USER_PROFILE_DATA,
  USER_PROFILE_LOADING,
} from "../../redux/reducers/auth/auth.slice";
import { useAppDispatch } from "../../redux/store";
import { AUTH_ROUTE, DASHBOARD_ROUTE } from "../../routes/baseRoute";
import Button from "../common/button/Button";
import { Checkbox, Input } from "../fields";
import { handleErrors } from "../utility/handleError";
import ToastErrorIcon from "../UI/ToastErrorIcon";
import ToastSuccessIcon from "../UI/ToastSuccessIcon";
import { LoginUserType } from "../../helper/types/auth/authType";
import { SET_PHONE_NUM_DATA } from "../../redux/reducers/dashboard/settings/TwoFAuth.slice";

const Login = () => {

  // Hooks
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const initialData: LoginUserType = {
    email: localStorage.getItem("remember_email") || "",
    password: "",
    remember_me: localStorage.getItem("remember_email") ? true : false
  };

  //Handle Login Form
  const handleLoginForm = (values, actions) => {
    dispatch(TRIGGER_LOGIN(values))
      .then((response) => {
        if (response.status === 200) {

          if (!response?.data?.data?.["2FA"]) {
            toast.success(response?.data?.message, { icon: ToastSuccessIcon, toastId: 'login_success' });
            dispatch(TRIGGER_PERSIST_MODE(true)).then((r) => r);
            const { refresh, access } = response?.data?.data?.token;
            localStorage.setItem("refresh_token", refresh);
            localStorage.setItem("access_token", access);
            navigate(DASHBOARD_ROUTE.HOME, { replace: true, state: true });
          }

          // To set User data
          if(response?.data?.data?.user_details?.mobile_number_2fa){
            dispatch(SET_PHONE_NUM_DATA(response?.data?.data?.user_details?.mobile_number_2fa));
          }
          dispatch(USER_PROFILE_DATA(response?.data?.data));

          // To set and remove email from localStorage as per 'remember_me' checkbox
          values.remember_me ? localStorage.setItem("remember_email", values.email) : localStorage.removeItem("remember_email");
        }
      })
      .catch((error) => {
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("access_token");
        if (error?.response) {
          if (error.response && error.response.status === 400) {
            handleErrors(error.response.data.data, actions.setErrors);
          }
          toast.error(error?.response?.data?.message, { icon: ToastErrorIcon, toastId: 'login_error' });
        }
        dispatch(TRIGGER_PERSIST_MODE(false)).then((r) => r);
        dispatch(CLEAR_AUTH);
      })
      .finally(() => {
        dispatch(USER_PROFILE_LOADING(false));
        actions.setSubmitting(false);
      });
  };

  return (
    <>
      <Formik
        initialValues={initialData}
        validationSchema={loginValidationSchema}
        onSubmit={handleLoginForm}
      >
        {() => (
          <Form>
            <div className="w-full h-full">
              <div className="mb-10">
                <h3 className="welcome-title">Welcome Back!</h3>
                <p className="mb-0 welcome-desc">
                  Please login to your account
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <Input
                  name="email"
                  placeholder="Enter Email"
                  label="Email Address"
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  label="Password"
                // showPasswordToggle
                />
                <div className="flex items-center justify-between mt-2">
                  <Checkbox name="remember_me" text="Remember me" />
                  <Link to={AUTH_ROUTE.FORGOT_PASSWORD}>
                    <div
                      data-cy="loginFormGoToForgotPasswordLink"
                      className="text-sm text-theme hover:text-theme text-main capitalize"
                    >
                      Forgot Password ?
                    </div>
                  </Link>
                </div>

                <div className="flex items-center justify-between lg:mt-7  ">
                  <Button
                    type="submit"
                    className="px-5 w-full btn btn-primary"
                    text="Login"
                  />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
