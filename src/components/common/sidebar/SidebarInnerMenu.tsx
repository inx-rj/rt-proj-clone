import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { SidebarRoutesTypes } from "../../../helper/types";

const SidebarInnerMenu = ({ items }) => {
  return (
    <ul className="submenu">
      {items.map(
        (subMenuRoute: SidebarRoutesTypes, subMenuIndex: number) =>
          subMenuRoute && (
            <li key={subMenuIndex} className="m-im">
              <NavLink end to={subMenuRoute.path} className="m-im-link">
                <span className="icon">
                  <Icon width={20} icon="ci:line-s" rotate={1} />
                </span>
                <span className="text">{subMenuRoute.name}</span>
              </NavLink>
            </li>
          )
      )}
    </ul>
  );
};

SidebarInnerMenu.propTypes = {
  items: PropTypes.array,
};
export default SidebarInnerMenu;
