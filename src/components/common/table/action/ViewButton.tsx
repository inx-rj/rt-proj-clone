import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import PopupContext from "../../popup/PopupContext";

export interface viewBtnDataInterface {
  buttonClass?: string;
  isPopup?: false;
  icon?: string;
  label?: string;
  url?: string;
  popupTitle?: string;
  formComponent?: React.ReactElement;
}

export interface ViewBtnInterface {
  view: viewBtnDataInterface;
}

const ViewButton = (props: ViewBtnInterface) => {
  const { view }: ViewBtnInterface = props;
  const { icon = "ph:eye", label = "View", isPopup = true } = view;

  return (
    <div className={`btn-act ${view["buttonClass"]}`}>
      {isPopup ? (
        <PopupContext
          buttonLabel={label}
          buttonIcon={icon}
          modelTitle={view["popupTitle"]}
          formComponent={view["formComponent"]}
          buttonClass={`btn-popup ${view["buttonClass"]}`}
        />
      ) : (
        <Link className={`btn-link ${view["buttonClass"]}`} to={view["url"]}>
          <span className="w-[25px] h-[20px] inline-flex items-center justify-center">
            <Icon icon={icon} width={18} height={18} />
          </span>
          {label && <span>{label}</span>}
        </Link>
      )}
    </div>
  );
};

ViewButton.propTypes = {
  view: PropTypes.object,
};

export default ViewButton;
