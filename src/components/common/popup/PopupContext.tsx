import PropTypes from "prop-types";
import { openModal } from "@mantine/modals";
import Button from "../button/Button";

interface PopupContextType {
  buttonLabel: string;
  buttonIcon?: string;
  modelTitle?: string;
  formComponent: React.ReactElement;
  buttonClass?: string;
  icon?: string;
  size?: string;
  iconSize?: number;
  hideHeader?: boolean;
}

const PopupContext = ({
  modelTitle = "",
  buttonLabel = "",
  buttonIcon = "",
  formComponent,
  buttonClass = "btn-primary",
  size = "",
  iconSize = 16,
  hideHeader = false,
  ...props
}: PopupContextType) => {
  return (
    <Button
      type="button"
      className={`${buttonClass}`}
      icon={buttonIcon}
      text={buttonLabel}
      iconSize={iconSize}
      onClick={() => {
        openModal({
          centered: true,
          closeOnClickOutside: false,
          overlayBlur: 3,
          overlayOpacity: 0.5,
          transition: "fade",
          title: modelTitle,
          children: formComponent,
          className: `inx-modal ${hideHeader ? "hide-modal-header" : ""}`,
          size: size ? size : "",
          ...props,
        });
      }}
    />
  );
};

PopupContext.propTypes = {
  buttonLabel: PropTypes.string,
  buttonIcon: PropTypes.string,
  modelTitle: PropTypes.string,
  formComponent: PropTypes.element,
  buttonClass: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  iconSize: PropTypes.number,
  hideHeader: PropTypes.bool,
};

export default PopupContext;
