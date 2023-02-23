import LoginBackground from "../../assets/images/auth-bg.png";
import { lazy, Suspense } from "react";
import OnePageLayout from "../../layouts/OnePageLayout";
import { useAppSelector } from "../../redux/store";
import { AUTH_OPTION, USER_DATA } from "../../redux/reducers/auth/auth.slice";
import { AuthOptions } from "../../helper/initialStates/auth/authState";
import Loader from "../../components/common/loader/Loader";
import { TwoFAuth_PHONE_NUMBER } from "../../redux/reducers/dashboard/settings/TwoFAuth.slice";

// Import Lazy components
const AuthWrapper = lazy(() => import("../../components/auth/AuthWrapper"));
const TwoFAuthOptions = lazy(
  () => import("../../components/auth/TwoFAuthOptions")
);
const PhoneOtpForm = lazy(
  () =>
    import("../../components/pages/accountSettings/twoFAuth/form/PhoneOtpForm")
);
const GoogleOtpForm = lazy(
  () =>
    import("../../components/pages/accountSettings/twoFAuth/form/GoogleOtpForm")
);

const LoginPage = () => {
  // Redux data
  const authOption = useAppSelector(AUTH_OPTION);
  const UserData = useAppSelector(USER_DATA);
  const PhoneNum2FA = useAppSelector(TwoFAuth_PHONE_NUMBER);

  // Sent OTP and verified number
  const VerifiedPhoneNum = (PhoneNum2FA.phoneNum || UserData.data.user_details.mobile_number_2fa);

  if (authOption.type === '') {
    return (
      <OnePageLayout>
        {UserData.data['2FA'] ? (
          <Suspense fallback={""}>
            <TwoFAuthOptions />
          </Suspense>
        ) : (
          <div className="min-h-[383px]">
            <Suspense fallback={""}>
              <AuthWrapper />
            </Suspense>
          </div>
        )}
      </OnePageLayout>
    )
  }

  return (
    <OnePageLayout>
      <>
        {authOption.type === AuthOptions.PHONE_NUMBER && (
          <Suspense fallback={<Loader />}>
            <PhoneOtpForm showAnotherWay={(UserData.data.phone_verified && UserData.data.google_verified)} phone_number={VerifiedPhoneNum} />
          </Suspense>
        )}

        {authOption.type === AuthOptions.GOOGLE && (
          <Suspense fallback={<Loader />}>
            <GoogleOtpForm showAnotherWay={(UserData.data.phone_verified && UserData.data.google_verified)} userEmail={UserData.data.user_details.email} />
          </Suspense>
        )}
      </>
    </OnePageLayout>
  );
};

export default LoginPage;
