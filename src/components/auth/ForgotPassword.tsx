import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import { forgortPasswordSchema } from "../../helper/validations/auth/AuthSchema";
import { TRIGGER_FORGOT_PASSWORD } from "../../redux/actions/auth/auth.actions";
import { useAppDispatch } from "../../redux/store";
import Button from "../common/button/Button";
import { Input } from "../fields";
import ToastErrorIcon from "../UI/ToastErrorIcon";
import ToastSuccessIcon from "../UI/ToastSuccessIcon";
import { EmailType } from "../../helper/types";

const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const initialState: EmailType = {
    email: "",
  };

  const handleForgotPasswordForm = async (values) => {
    await dispatch(TRIGGER_FORGOT_PASSWORD(values))
      .then((response) => {
        if (response.status === 200) {
          toast.success("Link sent to your registered email.", { icon: ToastSuccessIcon, toastId: 'link_sent_to_email' });
        }
      })
      .catch((error) =>
        toast.error(error?.response?.data?.email[0], { icon: ToastErrorIcon, toastId: 'forgot_password_error' })
      )
  };

  return (
    <Formik
      initialValues={initialState}
      validationSchema={forgortPasswordSchema}
      onSubmit={(values) => {
        handleForgotPasswordForm(values);
      }}
    >
      {() => (
        <Form>
          <div className="grid grid-cols-1 gap-2">
            <Input
              name="email"
              placeholder="Enter Email"
              label="Email Address"
            />
            <Button
              type="submit"
              className="px-5 w-full btn btn-primary mt-[40px]"
              text="Send Link"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ForgotPassword;
