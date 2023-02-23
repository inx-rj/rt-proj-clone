import React from "react";
import PropTypes from "prop-types";
import PopupContext from "../../popup/PopupContext";

export interface cancelBtnDataInterface {
  buttonClass?: string;
  isPopup: true;
  icon?: string;
  label: string;
  popupTitle?: string;
  formComponent?: React.ReactElement;
}

export interface CancelBtnInterface {
  cancel: cancelBtnDataInterface;
}

const CancelButton = (props) => {
  const { cancel }: CancelBtnInterface = props;
  const { icon = "gg:close", label = "Cancel", isPopup = true } = cancel;
  return (
    <div className={`btn-act ${cancel["buttonClass"]}`}>
      {isPopup && (
        <PopupContext
          buttonLabel={label}
          buttonIcon={icon}
          modelTitle={cancel["popupTitle"]}
          formComponent={cancel["formComponent"]}
          buttonClass={`btn-popup cancel ${cancel["buttonClass"]}`}
        />
      )}
    </div>
  );
};

CancelButton.propTypes = {
  cancel: PropTypes.object,
};

export default CancelButton;
