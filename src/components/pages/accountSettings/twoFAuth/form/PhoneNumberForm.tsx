import { useState } from "react";
import { Form, Formik } from "formik";
import Button from "../../../../common/button/Button";
import { TwoFAuthPhoneNumberResponse } from "../../../../../helper/initialStates/dashboard/accountSettings/TwoFAuthState";
import { Input } from "../../../../fields";
import { ActionTypes } from "../../../../../helper/actions";
import { useAppDispatch } from "../../../../../redux/store";
import {
  SET_PHONE_NUM_DATA,
  SET_PHONE_NUM_LOADING,
} from "../../../../../redux/reducers/dashboard/settings/TwoFAuth.slice";
import { SEND_2FA_PHONE_NUMBER } from "../../../../../redux/actions/dashboard/settings/TwoFAuth.actions";
import { toast } from "react-toastify";
import { handleErrors } from "../../../../utility/handleError";
import ToastSuccessIcon from "../../../../UI/ToastSuccessIcon";
// import { TwoFAuthPhoneNumberSchema } from "../../../../../helper/validations/auth/TwoFAuthSchema";
import ToastErrorIcon from "../../../../UI/ToastErrorIcon";
import { PhoneNumType } from "../../../../../helper/types";
import { PhoneInputField } from "../../../../fields/PhoneInputField";

const PhoneNumberForm = () => {
  const [initialValues, setInitialValues] = useState<PhoneNumType>(
    TwoFAuthPhoneNumberResponse
  );
  const type = ActionTypes.CREATE;
  const dispatch = useAppDispatch();

  //Handle Send Phone number form
  const handleSendPhoneNumForm = async (values, actions) => {
    const updatedValue = {
      phone_number: `+${values?.phone_number}`,
    };
    dispatch(SET_PHONE_NUM_LOADING(true));
    await dispatch(SEND_2FA_PHONE_NUMBER(updatedValue))
      .then((response) => {
        toast.success(response?.data?.message, { icon: ToastSuccessIcon, toastId: 'phone_number_sent_success' });
        dispatch(SET_PHONE_NUM_DATA(updatedValue.phone_number));
        actions.resetForm();
      })
      .catch((exception) => {
        if (exception.response && exception.response.status === 400) {
          const error = exception.response.data;
          handleErrors(error.message, actions.setErrors);
          if (error.message.validation_error) {
            error.message.validation_error.map((validationError) => {
              return toast.error(validationError,{icon: ToastErrorIcon, toastId: 'validation_error'});
            });
          }
        } else {
          toast.error(
            exception?.response?.data?.message || exception?.message,
            {
              icon: ToastErrorIcon,
              toastId: 'error_message'
            }
          );
        }
      })
      .finally(() => {
        dispatch(SET_PHONE_NUM_LOADING(false));
        actions.setSubmitting(false);
      });
  };

  //Handle Update Phone number form
  const handleUpdatePhoneNumForm = async (values) => {};

  const handlePhoneForm = (values, actions) => {
    if (type === ActionTypes.CREATE) {
      handleSendPhoneNumForm(values, actions);
    } else {
      handleUpdatePhoneNumForm(values);
    }
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      // validationSchema={TwoFAuthPhoneNumberSchema}
      onSubmit={handlePhoneForm}
    >
      {({ values }) => (
        <Form>
          <div className={`flex items-end justify-center gap-3 w-full`}>
            <PhoneInputField
              id="phone_number"
              name="phone_number"
              label="Contact Number"
              placeholder="+911234567890"
              prefix="+"
            />
            {/* <Input
              id="phone_number"
              name="phone_number"
              label="Contact Number"
              placeholder="+911234567890"
            /> */}
            <Button
              type="submit"
              text={"Send"}
              disabled={!values.phone_number}
              className="mt-2"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PhoneNumberForm;
