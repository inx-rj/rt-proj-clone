import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import Logout from "../../../auth/Logout";
import PopupClose from "../../popupclose/PopupClose";

interface LogoutConfirmPopupType {
  messageContent: string;
  isSubmitting?: boolean;
  icon?: string;
  iconSize?: number;
}

const LogoutConfirmPopup = (props: LogoutConfirmPopupType) => {
  const { messageContent, icon, iconSize = "35" } = props;
  return (
    <div className="text-center">
      <div className="mb-4 flex items-center justify-center">
        <span className="bg-theme rounded-full text-white w-12 h-12 flex justify-center items-center">
          <Icon width={iconSize} icon={icon} className="" />
        </span>
      </div>
      <h3 className="mb-3">Are you sure?</h3>
      <h6 className="mb-8 px-2 sm:px-5">
        <div
          className="max-w-[300px] w-full mx-auto"
          dangerouslySetInnerHTML={{
            __html: messageContent,
          }}
        ></div>
      </h6>
      <div className="flex justify-center items-center gap-3">
        <Logout logoutClass="btn btn-primary cursor-pointer" />
        <PopupClose />
      </div>
    </div>
  );
};
LogoutConfirmPopup.propTypes = {
  messageContent: PropTypes.string,
  isSubmitting: PropTypes.bool,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
};
export default LogoutConfirmPopup;
