import React from "react";
import PropTypes from "prop-types";
import PopupContext from "../../popup/PopupContext";

export interface removeBtnDataInterface {
  buttonClass?: string;
  isPopup: true;
  icon?: string;
  label: string;
  popupTitle?: string;
  formComponent?: React.ReactElement;
}

export interface RemoveBtnInterface {
  remove: removeBtnDataInterface;
}

const RemoveButton = (props: RemoveBtnInterface) => {
  const { remove }: RemoveBtnInterface = props;
  const {
    icon = "fluent:delete-24-regular",
    label = "Delete",
    isPopup = true,
  } = remove;

  return (
    <div className={`btn-act ${remove["buttonClass"]}`}>
      {isPopup && (
        <PopupContext
          buttonLabel={label}
          buttonIcon={icon}
          modelTitle={remove["popupTitle"]}
          formComponent={remove["formComponent"]}
          buttonClass={`btn-popup ${remove["buttonClass"]}`}
        />
      )}
    </div>
  );
};

RemoveButton.propTypes = {
  remove: PropTypes.object,
};

export default RemoveButton;
