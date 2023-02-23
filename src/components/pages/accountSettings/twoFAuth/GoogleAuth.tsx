import { lazy, Suspense } from "react";
import { useSingleEffect, useUpdateEffect } from "react-haiku";
import QRCode from "react-qr-code";
import { SEND_2FA_GOOGLE } from "../../../../redux/actions/dashboard/settings/TwoFAuth.actions";
import {
  TwoFAuth_GOOGLE,
} from "../../../../redux/reducers/dashboard/settings/TwoFAuth.slice";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import Loader from "../../../common/loader/Loader";
import { USER_DATA } from "../../../../redux/reducers/auth/auth.slice";
import PopupContext from "../../../common/popup/PopupContext";
import ViewTwoFAuthCard from "./view/ViewTwoFAuthCard";
import TwoFAResetFormWrapper from "./TwoFAResetFormWrapper";
import { TWOFA_KEY } from "../../../../helper/constants";
import { EmailType } from "../../../../helper/types";

const GoogleOtpForm = lazy(() => import("./form/GoogleOtpForm"));

const GoogleAuth = () => {
  // hooks
  const dispatch = useAppDispatch();

  // redux states
  const TwoFAuthGoogle = useAppSelector(TwoFAuth_GOOGLE);
  const UserData = useAppSelector(USER_DATA);

  const data: EmailType = {
    email: UserData.data.user_details.email,
  };

  useSingleEffect(() => {
    if (!TwoFAuthGoogle.hasData && !UserData.data.google_verified) {
      dispatch(SEND_2FA_GOOGLE(data));
    }
  });

  return (
    <>
      <div className="card p-0">
        <div className="px-4 py-3 border-b border-color flex justify-between">
          <h5 className="">Let’s Set Up Authenticator App</h5>
          {(UserData.data["2FA"] && UserData.data.google_verified) && (
            <PopupContext
              buttonLabel="Reset"
              buttonIcon="ic:sharp-lock-reset"
              iconSize={20}
              hideHeader
              formComponent={
                <Suspense fallback="">
                  <TwoFAResetFormWrapper
                    resetKey={TWOFA_KEY.RESET_GOOGLE_2FA}
                    messageContent={`<p>Are you sure you want to reset authenticator app 2FA verification?</p>`}
                  />
                </Suspense>
              }
              buttonClass="btn-outline min-w-[auto] border-0 p-0 hover:bg-white disabled:bg-white disabled:text-dark-400 hover:text-theme h-auto"
            />
          )}
        </div>
        {(UserData.data["2FA"] && UserData.data.google_verified) ? (
          <Suspense fallback="Loading...">
            <ViewTwoFAuthCard
              icon="uil:qrcode-scan"
              iconSize={35}
              info={`<p>Your google authentication done successfully<p class="text-theme invisible">${"Redmi Note 7"}</p></p>`}
            />
          </Suspense>
        ) : (
          <div className="p-4">
            <p className="text-center max-w-[450px] w-full mx-auto">
              Download the free{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_IN&gl=US&pli=1"
                target={"_blank"}
                title="Google Authenticator app"
                className="text-theme"
              >
                Google Authenticator app
              </a>
              , Add a new account, then scan this barcode to setup your account.
            </p>
            <div className="py-5 max-w-[150px] w-full mx-auto relative">
              {TwoFAuthGoogle.loading ? (
                <Loader />
              ) : (
                <QRCode
                  value={TwoFAuthGoogle?.data?.otpauth_url}
                  className="max-w-[150px] w-full h-[150px] mx-auto"
                />
              )}
            </div>
            {TwoFAuthGoogle.hasData && (
              <Suspense fallback="">
                <GoogleOtpForm userEmail={data.email} />
              </Suspense>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default GoogleAuth;
