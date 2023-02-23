import { Form, Formik } from "formik";
import { TwoFAuthPhoneNumberVerifyTypes } from "../../../../../helper/types/pages/dashboard/accountSettings/TwoFAuthType";
import { PhoneOtpSchema } from "../../../../../helper/validations/auth/TwoFAuthSchema";
import { RESET_AUTH_OPTION, USER_PROFILE_DATA } from "../../../../../redux/reducers/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "../../../../../redux/store";
import Button from "../../../../common/button/Button";
import { OtpInputField } from "../../../../fields";
import { useNavigate } from "react-router-dom";
import { VERIFY_2FA_PHONE_NUMBER } from "../../../../../redux/actions/dashboard/settings/TwoFAuth.actions";
import { toast } from "react-toastify";
import ToastSuccessIcon from "../../../../UI/ToastSuccessIcon";
import { openModal } from "@mantine/modals";
import SuccessPopup from "../../../../common/popup/UI/SuccessPopup";
import { DASHBOARD_ROUTE } from "../../../../../routes/baseRoute";
import ToastErrorIcon from "../../../../UI/ToastErrorIcon";
import { IS_PERSISTED } from "../../../../../redux/reducers/config/app/app.slice";
import { TRIGGER_PERSIST_MODE } from "../../../../../redux/actions/config/app/app.actions";
import { encryptPhoneNum } from "../../../../../helper/utility/functions";
import { SET_2FA_LOADING } from "../../../../../redux/reducers/dashboard/settings/TwoFAuth.slice";

interface PhoneOtpFormType {
  showAnotherWay?: boolean;
  phone_number?: string;
}

const PhoneOtpForm = (props: PhoneOtpFormType) => {
  const { showAnotherWay = false, phone_number = "" } = props;

  // hooks
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Redux states
  const isPersist = useAppSelector(IS_PERSISTED);

  const initialValues: TwoFAuthPhoneNumberVerifyTypes = {
    otp: "",
    phone_number: ""
  };

  // handle otp submission
  const handleOtpVerifyForm = async (values: TwoFAuthPhoneNumberVerifyTypes, actions: { resetForm: () => void; }) => {
    const updatedValues = {
      ...values,
      phone_number: phone_number,
      verify_type: isPersist ? "setup-2FA" : "login"
    };

    dispatch(SET_2FA_LOADING(true));

    await dispatch(VERIFY_2FA_PHONE_NUMBER(updatedValues))
      .then(response => {
        // Toast message on success 
        toast.success(response?.data?.message, { icon: ToastSuccessIcon, toastId: '2FA_phone_number_verified' });

        // Modal Popup On successfully adding verification
        if (!response?.data?.data?.token) {
          openModal({
            centered: true,
            closeOnClickOutside: false,
            overlayBlur: 3,
            overlayOpacity: 0.5,
            transition: "fade",
            radius: 20,
            padding: 15,
            styles: {
              header: { marginBottom: "0px", paddingRight: "5px" },
              close: { scale: 1.4 }
            },
            children: <SuccessPopup
              messageTitle={"2FA Enrolled Successfully!"}
              messageContent={`<p>Next time you sign in, you’ll need to add verification code?</p>`
              }
            />,
          });
        } else {
          const { refresh, access } = response?.data?.data?.token;
          localStorage.setItem("refresh_token", refresh);
          localStorage.setItem("access_token", access);
          dispatch(TRIGGER_PERSIST_MODE(true)).then((r) => r);
          navigate(DASHBOARD_ROUTE.HOME, { replace: true, state: true });
        }

        // To store response data
        dispatch(USER_PROFILE_DATA(response?.data?.data));

        // To clear the token value
        actions.resetForm();
      })
      .catch(exception => {
        // To clear the token value
        actions.resetForm();
        // Toast message with cause verification fail
        toast.error(exception?.response?.data?.message || exception?.message, { icon: ToastErrorIcon, toastId: 'user_profile_data_error' });
      }).finally(() => {
        dispatch(SET_2FA_LOADING(false));
      })
  };

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        // validationSchema={PhoneOtpSchema}
        onSubmit={handleOtpVerifyForm}
      >
        {({ resetForm }) => (
          <Form>
            <div className="max-w-[520px] w-full mx-auto text-center">
              <p className="text-base text-info mb-10 max-w-[320px] w-full mx-auto">
                Enter verification code we have sent to your number{" "}
                <span className="text-theme inline-block">
                  {encryptPhoneNum(phone_number)}
                </span>
              </p>
              <div className="mb-5">
                <OtpInputField id="otp" name="otp" numInputs={6} />
                <div className="flex items-center justify-center mt-5">
                  <p className="text-dark-400/70">
                    If you didn't received a code,
                  </p>
                  <Button
                    className="btn-outline border-0 p-0 hover:bg-white inline-block disabled:bg-white disabled:text-dark-400 hover:text-theme h-auto"
                    text="Resend code"
                  />
                </div>
              </div>
              <div className="flex justify-center gap-5 mt-3 mb-5">
                <Button type="submit" className="px-5" text="Verify" />
                <Button
                  className="px-5 btn-outline"
                  text="Clear"
                  onClick={() => resetForm()}
                />
              </div>
              {showAnotherWay && (
                <Button
                  className="btn-outline border-0 p-0 hover:bg-white mx-auto block hover:text-theme h-auto"
                  text="Try another way"
                  onClick={() => dispatch(RESET_AUTH_OPTION())}
                />
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PhoneOtpForm;
