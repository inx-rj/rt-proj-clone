import { lazy, Suspense } from "react";
import ViewTwoFAuthCard from "./view/ViewTwoFAuthCard";
import PopupContext from "../../../common/popup/PopupContext";
import { useAppSelector } from "../../../../redux/store";
import { TwoFAuth_PHONE_NUMBER } from "../../../../redux/reducers/dashboard/settings/TwoFAuth.slice";
import Loader from "../../../common/loader/Loader";
import TwoFAResetFormWrapper from "./TwoFAResetFormWrapper";
import { TWOFA_KEY } from "../../../../helper/constants";
import { USER_DATA } from "../../../../redux/reducers/auth/auth.slice";
import { encryptPhoneNum } from "../../../../helper/utility/functions";

const PhoneOtpForm = lazy(() => import("./form/PhoneOtpForm"));
const PhoneNumberForm = lazy(() => import("./form/PhoneNumberForm"));

const PhoneNumAuth = () => {
  // Redux data
  const UserData = useAppSelector(USER_DATA);
  const PhoneNum2FA = useAppSelector(TwoFAuth_PHONE_NUMBER);

  // Sent OTP and verified number
  const VerifiedPhoneNum =
    PhoneNum2FA?.phoneNum ||
    UserData?.data?.user_details?.mobile_number_2fa ||
    "";

  return (
    <>
      <div className="card p-0">
        <div className="px-4 py-3 border-b border-color flex justify-between">
          <h5 className="">Let’s Set Up Your Phone Verification</h5>
          {UserData.data["2FA"] && UserData.data.phone_verified && (
            <PopupContext
              buttonLabel="Reset"
              buttonIcon="ic:sharp-lock-reset"
              iconSize={20}
              hideHeader
              formComponent={
                <Suspense fallback="">
                  <TwoFAResetFormWrapper
                    resetKey={TWOFA_KEY.RESET_PHONE_NUM_2FA}
                    messageContent={`<p>Are you sure you want to reset phone 2FA verification?</p>`}
                  />
                </Suspense>
              }
              buttonClass="btn-outline min-w-[auto] border-0 p-0 hover:bg-white disabled:bg-white disabled:text-dark-400 hover:text-theme h-auto"
            />
          )}
        </div>
        {UserData.data["2FA"] && UserData.data.phone_verified ? (
          <Suspense fallback="Loading...">
            <ViewTwoFAuthCard
              icon="eva:message-square-outline"
              iconSize={35}
              info={`<p>Your registered mobile number is<p class="text-theme">${encryptPhoneNum(
                VerifiedPhoneNum
              )}</p></p>`}
            />
          </Suspense>
        ) : (
          <div className="p-4">
            <p className="text-center max-w-[400px] w-full mx-auto mb-8">
              We’ll text a verification code to this mobile number whenever you
              sign in to your account.
            </p>
            <div className="mb-10">
              <Suspense fallback="">
                <PhoneNumberForm />
              </Suspense>
            </div>
            {!PhoneNum2FA?.loading && VerifiedPhoneNum && (
              <Suspense fallback={""}>
                <PhoneOtpForm phone_number={VerifiedPhoneNum} />
              </Suspense>
            )}
            {PhoneNum2FA?.loading && (
              <div className="py-5 max-w-[150px] w-full mx-auto relative">
                <Loader />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default PhoneNumAuth;
