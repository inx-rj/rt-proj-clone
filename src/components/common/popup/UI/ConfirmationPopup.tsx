import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import Button from "../../button/Button";
import PopupClose from "../../popupclose/PopupClose";

interface ConfirmationPopupType {
  messageContent: string;
  isSubmitting?: boolean;
  icon?: string;
  iconSize?: number;
  confirmBtnText?: string;
}

const ConfirmationPopup = (props: ConfirmationPopupType) => {
  const {
    messageContent,
    icon = "tabler:question-mark",
    iconSize = "35",
    confirmBtnText = "Yes",
    isSubmitting,
  } = props;
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
      <div className="flex justify-center items-center gap-3 mb-[25px]">
        <Button
          type="submit"
          className="btn-primary"
          data-cy="deleteHolidayFormSubmitBtn"
          disabled={isSubmitting}
          text={confirmBtnText}
        />
        <PopupClose />
      </div>
    </div>
  );
};
ConfirmationPopup.propTypes = {
  messageContent: PropTypes.string,
  isSubmitting: PropTypes.bool,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  confirmBtnText: PropTypes.string,
};
export default ConfirmationPopup;
