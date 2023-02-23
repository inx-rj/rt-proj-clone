import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import PopupContext from "../../popup/PopupContext";

export interface editBtnDataInterface {
  buttonClass?: string;
  isPopup?: false;
  icon?: string;
  label?: string;
  url?: string;
  popupTitle?: string;
  formComponent?: React.ReactElement;
}

export interface EditBtnInterface {
  edit: editBtnDataInterface;
}

const EditButton = (props: EditBtnInterface) => {
  const { edit }: EditBtnInterface = props;
  const { icon = "clarity:edit-line", label = "Edit", isPopup = true } = edit;
  return (
    <div className={`btn-act ${edit["buttonClass"]}`}>
      {isPopup ? (
        <PopupContext
          buttonLabel={label}
          buttonIcon={icon}
          modelTitle={edit["popupTitle"]}
          formComponent={edit["formComponent"]}
          buttonClass={`btn-popup ${edit["buttonClass"]}`}
        />
      ) : (
        <Link className={`btn-link ${edit["buttonClass"]}`} to={edit["url"]}>
          <span className="w-[25px] h-[20px] inline-flex items-center justify-center ">
            <Icon icon={icon} width={18} height={18} />
          </span>
          {label && <span>{label}</span>}
        </Link>
      )}
    </div>
  );
};

EditButton.propTypes = {
  edit: PropTypes.object,
};

export default EditButton;
