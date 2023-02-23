import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { GoogleOtpSchema } from "../../../../../helper/validations/auth/TwoFAuthSchema";
import { RESET_AUTH_OPTION, USER_PROFILE_DATA } from "../../../../../redux/reducers/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "../../../../../redux/store";
import Button from "../../../../common/button/Button";
import { OtpInputField } from "../../../../fields";
import { VERIFY_2FA_GOOGLE } from "../../../../../redux/actions/dashboard/settings/TwoFAuth.actions";
import { TwoFAuthGoogleVerifyTypes } from "../../../../../helper/types/pages/dashboard/accountSettings/TwoFAuthType";
import { toast } from "react-toastify";
import SuccessPopup from "../../../../common/popup/UI/SuccessPopup";
import { openModal } from "@mantine/modals";
import ToastSuccessIcon from "../../../../UI/ToastSuccessIcon";
import ToastErrorIcon from "../../../../UI/ToastErrorIcon";
import { DASHBOARD_ROUTE } from "../../../../../routes/baseRoute";
import { TRIGGER_PERSIST_MODE } from "../../../../../redux/actions/config/app/app.actions";
import { IS_PERSISTED } from "../../../../../redux/reducers/config/app/app.slice";
import { SET_2FA_LOADING } from "../../../../../redux/reducers/dashboard/settings/TwoFAuth.slice";

interface GoogleOtpFormType {
  showAnotherWay?: boolean;
  userEmail?: string;
}

const GoogleOtpForm = (props: GoogleOtpFormType) => {
  const { showAnotherWay = false, userEmail = "" } = props;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Redux states
  const isPersist = useAppSelector(IS_PERSISTED);

  const initialValues = {
    token: "",
    email: ""
  };

  const handleOtpVerifyForm = async (values: TwoFAuthGoogleVerifyTypes, actions: { resetForm: () => void; }) => {
    const updatedValues = {
      ...values,
      email: userEmail,
      verify_type: isPersist ? "setup-2FA" : "login"
    };

    dispatch(SET_2FA_LOADING(true));

    await dispatch(VERIFY_2FA_GOOGLE(updatedValues))
      .then(response => {
        if (response?.data?.data?.google_verified) {
          // Toast message on success
          toast.success(response?.data?.message, { icon: ToastSuccessIcon, toastId: '2FA_verification_success' });
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
              children:
                <SuccessPopup
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

          // To store response data and loader false
          dispatch(USER_PROFILE_DATA(response?.data?.data));
        }
        // To clear the token value
        actions.resetForm();
      })
      .catch(exception => {
        // To clear the token value
        actions.resetForm();
        // Toast message with cause verification fail
        toast.error(exception?.response?.data?.message || exception?.message, { icon: ToastErrorIcon, toastId: 'verfication_failed_error' });
      }).finally(() => {
        dispatch(SET_2FA_LOADING(false));
      })
  };

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={GoogleOtpSchema}
        onSubmit={handleOtpVerifyForm}
      >
        {({ resetForm }) => (
          <Form>
            <div className="max-w-[520px] w-full mx-auto text-center">
              <p className="text-base text-info mb-10 max-w-[320px] w-full mx-auto">
                Enter 6 digit verification code from{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_IN&gl=US&pli=1"
                  target={"_blank"}
                  title="Google Authenticator app"
                  className="text-theme"
                >
                  Google Authenticator app
                </a>
              </p>
              <div className="mb-5">
                <OtpInputField id="token" name="token" numInputs={6} />
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

export default GoogleOtpForm;
