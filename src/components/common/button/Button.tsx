import PropTypes from "prop-types";
import { ButtonProps, UnstyledButton } from "@mantine/core";
import { forwardRef, MouseEventHandler } from "react";
import { Icon } from "@iconify/react";
// import Loader from "../loader/Loader";

interface btnInterface extends ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text?: string | JSX.Element;
  icon?: string;
  iconSize?: number;
  IconClass?: string;
}

const Button = forwardRef<HTMLButtonElement, btnInterface>(
  ({ text, icon, iconSize = 20, IconClass, ...others }: btnInterface, ref) => (
    <UnstyledButton
      ref={ref}
      {...others}
      className={`btn btn-primary relative ${others["className"]} overflow-hidden`}
    >
      {/* {others["disabled"] && <Loader loaderClass="btn-loading" />} */}
      {icon && !others["disabled"] && (
        <span className={`${IconClass}`}>
          <Icon width={iconSize} height={iconSize} icon={icon} />
        </span>
      )}
      {text && <span>{text}</span>}
      {/* {text && !others["disabled"] && <span>{text}</span>} */}
      {/* {others["disabled"] && <span className="opacity-0">...</span>} */}
    </UnstyledButton>
  )
);

Button.displayName = "Button";

Button.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  onClick: PropTypes.func,
  IconClass: PropTypes.string,
};
export default Button;
