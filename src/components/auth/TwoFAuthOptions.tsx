import { Icon } from "@iconify/react";
import { Suspense } from "react";
import { AuthOptions } from "../../helper/initialStates/auth/authState";
import { TRIGGER_AUTH_OPTION } from "../../redux/actions/auth/auth.actions";
import { AUTH_OPTION, USER_DATA } from "../../redux/reducers/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { encryptPhoneNum } from "../../helper/utility/functions";

const TwoFAuthOptions = () => {
  const dispatch = useAppDispatch();
  const authOption = useAppSelector(AUTH_OPTION);
  const UserData = useAppSelector(USER_DATA);

  interface AuthChooseAactionType {
    className: string;
    title: string;
    icon: string;
    iconSize: number;
    info: string;
    handleAction: () => void;
  }

  const AuthChooseCard = (props: AuthChooseAactionType) => {
    const { className, title, icon, iconSize, info, handleAction } = props;
    return (
      <>
        <div
          onClick={handleAction}
          className={` group btn btn-primary btn-outline cursor-pointer bg-white hover:border-[#219ebc] w-full h-auto flex flex-col py-5 auth-disabled ${className}`}
        >
          <span className="auth-icon inline-block border rounded-full overflow-hidden p-4">
            <Icon icon={icon} className="block" width={iconSize} />
          </span>
          <h6>{title}</h6>
          <div
            dangerouslySetInnerHTML={{
              __html: info,
            }}
          ></div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="max-w-[520px] w-full mx-auto text-center mb-12">
        <h6 className="text-xl text-main mb-2">
          Choose Your Two Factor Authentication Method
        </h6>
        <p className="text-base text-info">
          With two factor authentication, you’ll protect your account with both
          your password and your phone.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 mb-14 max-w-[550px] w-full mx-auto">
        {UserData.data["2FA"] && UserData.data.phone_verified && (
          <Suspense fallback="">
            <AuthChooseCard
              className={`${
                authOption.type === AuthOptions.PHONE_NUMBER && "auth-enabled"
              } ${
                UserData.data.phone_verified && UserData.data.google_verified
                  ? ""
                  : "col-span-2"
              }`}
              title="Text Message"
              icon="eva:message-square-outline"
              iconSize={25}
              info={`<p class="text-xs mt-1">We’ll send a code to ${encryptPhoneNum(
                UserData.data.user_details.mobile_number_2fa
              )} to get you a code.</p>`}
              handleAction={() =>
                dispatch(TRIGGER_AUTH_OPTION(AuthOptions.PHONE_NUMBER))
              }
            />
          </Suspense>
        )}
        {UserData.data["2FA"] && UserData.data.google_verified && (
          <Suspense fallback="">
            <AuthChooseCard
              className={`${
                authOption.type === AuthOptions.GOOGLE && "auth-enabled"
              } ${
                UserData.data.phone_verified && UserData.data.google_verified
                  ? ""
                  : "col-span-2"
              }`}
              title="Google Authenticator App"
              icon="uil:qrcode-scan"
              iconSize={25}
              info={`<p class="text-xs mt-1">
            We’ll send a code to authenticator app for login.
          </p>`}
              handleAction={() =>
                dispatch(TRIGGER_AUTH_OPTION(AuthOptions.GOOGLE))
              }
            />
          </Suspense>
        )}
      </div>
    </>
  );
};

export default TwoFAuthOptions;
