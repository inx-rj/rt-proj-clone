import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PasswordValueType } from "../../helper/types/auth/authType";
import { resetPassword } from "../../helper/validations/auth/AuthSchema";
import { TRIGGER_RESET_PASSWORD } from "../../redux/actions/auth/auth.actions";
import { useAppDispatch } from "../../redux/store";
import { AUTH_ROUTE } from "../../routes/baseRoute";
import cloneDeep from "lodash.clonedeep";
import Button from "../common/button/Button";
import { Input } from "../fields";
import ToastErrorIcon from "../UI/ToastErrorIcon";
import ToastSuccessIcon from "../UI/ToastSuccessIcon";

const ResetPassword = (props) => {
  // hooks
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { token } = props;

  const initialData: PasswordValueType = {
    new_password: "",
    confirm_password: "",
  };

  // To handle reset password
  const handleResetPasswordForm = async (values: PasswordValueType) => {
    const formValues = cloneDeep(values);
    const updatedValues = {
      password: formValues["new_password"],
      token: token,
    };
    dispatch(TRIGGER_RESET_PASSWORD(updatedValues))
      .then((response) => {
        toast.success("Password Changed Successfully!", { icon: ToastSuccessIcon, toastId: 'reset_password_success' })
        navigate(AUTH_ROUTE.PASSWORD_CHANGED)
      })
      .catch((error) =>
        toast.error(error?.response?.data?.password[0], {
          icon: ToastErrorIcon,
          toastId: "reset_password_error",
        })
      );
  };
  return (
    <Formik
      initialValues={initialData}
      validationSchema={resetPassword}
      onSubmit={(values) => {
        handleResetPasswordForm(values);
      }}
    >
      {() => (
        <Form>
          <div className="grid grid-cols-1 gap-4">
            <Input
              name="new_password"
              type="password"
              placeholder="New Password"
              label="New Password"
              // showPasswordToggle
            />
            <Input
              name="confirm_password"
              type="password"
              placeholder="Confirm New Password"
              label="Confirm New Password"
              // showPasswordToggle
            />

            <div className="flex items-center justify-between lg:mt-7  ">
              <Button
                type="submit"
                className="px-5 w-full btn btn-primary"
                text="Reset Password"
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ResetPassword;
