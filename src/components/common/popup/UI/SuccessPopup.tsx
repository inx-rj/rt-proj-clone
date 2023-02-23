import { Icon } from "@iconify/react";
import { closeAllModals } from "@mantine/modals";
import PropTypes from "prop-types";
import Button from "../../button/Button";

interface SuccessPopupType {
  messageContent: string;
  isSubmitting?: boolean;
  messageTitle: string;
}

const SuccessPopup = (props: SuccessPopupType) => {
  const { messageContent, messageTitle } = props;
  return (
    <div className="text-center">
      <div className="mb-5 flex items-center justify-center">
        <span className="bg-theme rounded-full text-white w-12 h-12 flex justify-center items-center">
          <Icon width={30} icon="ph:check-bold" className="" />
        </span>
      </div>
      <h3 className="mb-1.5">{messageTitle}</h3>
      <h6 className="mb-[30px] px-2 sm:px-5">
        <div
          className="max-w-[300px] w-full mx-auto"
          dangerouslySetInnerHTML={{
            __html: messageContent,
          }}
        ></div>
      </h6>
      <div className="flex justify-center items-center gap-3 mb-[25px]">
        <Button
          onClick={() => closeAllModals()}
          className="btn-primary"
          text="Ok"
        />
      </div>
    </div>
  );
};
SuccessPopup.propTypes = {
  messageContent: PropTypes.string,
  isSubmitting: PropTypes.bool,
  messageTitle: PropTypes.string,
};
export default SuccessPopup;
