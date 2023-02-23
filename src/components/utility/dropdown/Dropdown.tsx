import PropTypes from "prop-types";
import React from "react";
import { Menu, MenuProps, UnstyledButton } from "@mantine/core";
import { Icon } from "@iconify/react";

interface DropDownInterface {
  children: PropTypes.ReactElementLike;
  menuProps?: MenuProps;
  btnClass?: string;
  btnText?: string;
  btnIcon?: string;
}

const Dropdown = (props: DropDownInterface) => {
  const { children, btnClass, btnText, btnIcon, menuProps }: DropDownInterface =
    props;

  return (
    <div className="relative">
      <Menu transitionDuration={150} {...menuProps}>
        <Menu.Target>
          <UnstyledButton className={`btn-dropdown ${btnClass}`}>
            {btnIcon && (
              <span className="">
                <Icon icon={btnIcon} />
              </span>
            )}
            {btnText && <span>{btnText}</span>}
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>{children}</Menu.Dropdown>
      </Menu>
    </div>
  );
};

Dropdown.propTypes = {
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  children: PropTypes.element,
  btnText: PropTypes.string,
  icon: PropTypes.string,
  variant: PropTypes.string,
  position: PropTypes.string,
  menuProps: PropTypes.object,
};
export default Dropdown;
