import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import { useClickOutside, useSingleEffect, useUpdateEffect } from "react-haiku";
import { Suspense, useRef, useState } from "react";
import { ACCOUNT_SETTINGS_ROUTE, DASH_CHILD } from "../../../routes/baseRoute";
import { Images } from "../../../helper/images";
import PopupContext from "../popup/PopupContext";
import LogoutConfirmPopup from "../popup/UI/LogoutConfirmPopup";
import { pick_random } from "../../../helper/utility/functions";
import { useAppSelector } from "../../../redux/store";
import { USER_DATA } from "../../../redux/reducers/auth/auth.slice";

const UserMenuTrigger = () => {
  const randomColor = ["#5f873d", "#75359e", "#a76c28", "#b22759", "#DF2D03FF"];
  const [showUserMenu, setUserMenu] = useState(false);
  const [bgColor, setBgColor] = useState("");
  const currentUser = useAppSelector(USER_DATA)
  const currentUserDetails = currentUser?.data?.user_details;  
  const userMenuRef = useRef(null);
  const location = useLocation();

  useClickOutside(userMenuRef, () => setUserMenu(false));

  useSingleEffect(() => {
    setBgColor(pick_random(randomColor));
  });

  useUpdateEffect(() => {
    if (location) {
      setUserMenu(false);
    }
  }, [location]);

  return (
    <div className="relative" ref={userMenuRef}>
      <div
        onClick={() => setUserMenu(!showUserMenu)}
        className="cursor-pointer flex items-center justify-center text-center text-xs tracking-widest font-bold "
      >
        <div
          onClick={() => setUserMenu(!showUserMenu)}
          className="cursor-pointer flex items-center justify-center text-center text-white p-1 text-xs tracking-widest font-bold w-[35px] h-[35px] rounded-full"
          style={{ background: bgColor }}
        >
          <span className="uppercase">{`${currentUserDetails?.first_name?.charAt(
            0
          )}${currentUserDetails?.last_name?.charAt(0)}`}</span>
        </div>
        <Icon
          icon="ic:round-arrow-drop-down"
          className="ml-1 text-main"
          width={25}
          height={25}
        />
      </div>

      <div>
        {showUserMenu && (
          <div className="w-full p-3 min-w-[150px] absolute top-[53px] right-0 bg-white rounded shadow-md border-[1px] border-gray-200">
            <div className="px-3 pb-2">
              Welcome!
              <p className="capitalize" >{ currentUserDetails?.first_name + " " + currentUserDetails.last_name}</p>
            </div>
            <div className={" text-sm"}>
              <Link
                className="flex items-center py-1 my-1 gap-2 px-3 capitalize text-info hover:text-theme "
                to={ACCOUNT_SETTINGS_ROUTE.MY_ACCOUNT}
              >
                <span className={"block w-6 h-6"}>
                  <Icon width={22} icon="ep:user" />
                </span>
                <span>Profile</span>
              </Link>
            </div>
            <div className="cursor-pointer text-sm  flex items-center  my-1 gap-2 capitalize text-info hover:text-theme">
              <form className="w-full">
                <PopupContext
                  buttonLabel="Logout"
                  buttonIcon="clarity:logout-line"
                  iconSize={22}
                  hideHeader
                  formComponent={
                    <Suspense fallback="">
                      <LogoutConfirmPopup
                        icon="tabler:question-mark"
                        messageContent={`<p>You want to logout</p>`}
                      />
                    </Suspense>
                  }
                  buttonClass="btn-outline min-w-[auto] w-full justify-start py-1 px-3 gap-2 border-0 p-0 hover:bg-white disabled:bg-white disabled:tet-dark-400 text-info hover:text-theme h-auto"
                />
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenuTrigger;
