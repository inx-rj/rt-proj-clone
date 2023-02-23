import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import { signupValidationSchema } from "../../helper/validations/auth/AuthSchema";
import { REGISTER_USER } from "../../redux/actions/auth/auth.actions";
import { useAppDispatch } from "../../redux/store";
import Button from "../common/button/Button";
import { Input } from "../fields";
import ToastErrorIcon from "../UI/ToastErrorIcon";
import { handleErrors } from "../utility/handleError";

const Signup = () => {
  const initialData = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
  };

  const dispatch = useAppDispatch();

  // Submit the form to server
  const handleSignupForm = async (values, actions) => {
    const updatedValues = {
      ...values,
      phone_number: `+91${values.phone_number}`,
    };
    await dispatch(REGISTER_USER(updatedValues))
      .then((r: void) => r)
      .catch((error) => {
        if (error?.response) {
          if (error.response && error.response.status === 400) {
            handleErrors(error.response.data.data, actions.setErrors);
          }
          toast.error(error?.response?.data?.message, { icon: ToastErrorIcon, toastId: 'register_user_error' });
        }
      });
  };

  return (
    <Formik
      initialValues={initialData}
      // validationSchema={signupValidationSchema}
      onSubmit={handleSignupForm}
    >
      {() => (
        <Form>
          <div className="w-full h-full">
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  name="first_name"
                  placeholder="Enter First Name"
                  label="First Name"
                />
                <Input
                  name="last_name"
                  placeholder="Enter Last Name"
                  label="Last Name"
                />
              </div>
              <Input
                name="email"
                placeholder="Enter Email"
                label="Email Address"
              />
              <Input
                name="phone_number"
                label="Phone Number"
                placeholder="Enter Phone Number"
              />
              <Input
                name="password"
                type="password"
                placeholder="Enter Password"
                label="Password"
                // showPasswordToggle
              />

              <div className="flex items-center justify-between mt-3">
                <Button
                  data-cy="loginFormSubmitBtn"
                  className={`px-5 w-full btn-primary`}
                  type="submit"
                  // disabled={isLoading}
                  text={"Sign Up"}
                />
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Signup;
