import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Menu, Tooltip } from "@mantine/core";
import { useAppSelector } from "../../../../redux/store";
import { IS_SIDEBAR_COLLAPSED } from "../../../../redux/reducers/config/app/app.slice";
import { Icon } from "@iconify/react";
import { SidebarRoutesTypes } from "../../../../helper/types";

const SidebarMenuTrigger = (props) => {
  const { sidebarMenu, isLink = false } = props;
  const isSidebarCollapsed = useAppSelector(IS_SIDEBAR_COLLAPSED);
  return (
    <>
      <Tooltip
        label={sidebarMenu.name}
        position="right"
        withinPortal={true}
        transition="pop"
        styles={{
          tooltip: {
            backgroundColor: "#fff",
            color: "#444",
            border: "1px solid #d8d8d8",
            textTransform: "capitalize",
          },
        }}
        zIndex={20}
        events={{ hover: isSidebarCollapsed, focus: false, touch: false }}
      >
        {isLink ? (
          <NavLink end to={sidebarMenu.path} className="m-link flex">
            <Icon
              width={20}
              icon={sidebarMenu.icon}
              className="icon min-w-[25px]"
            />
            {!isSidebarCollapsed && (
              <span className="text w-[100%-25px] whitespace-nowrap">
                {sidebarMenu.name}
              </span>
            )}
          </NavLink>
        ) : (
          <div className="m-link-inner">
            {isSidebarCollapsed && (
              <Menu
                shadow="sm"
                width={250}
                position="right-start"
                withArrow={false}
                arrowSize={10}
                arrowOffset={40}
                withinPortal={true}
                zIndex={18}
                transition="pop"
                styles={{ dropdown: { padding: 0 } }}
              >
                <Menu.Target>
                  <div className="m-inner-wrap">
                    <Icon icon={sidebarMenu.icon} className="icon" />
                  </div>
                </Menu.Target>
                <Menu.Dropdown>
                  <h4 className="shadow-sm text-base px-3 py-2 mb-2">
                    {sidebarMenu.name}
                  </h4>
                  <div className="max-h-[350px] overflow-hidden overflow-y-auto w-full">
                    {sidebarMenu.children.map(
                      (item: SidebarRoutesTypes, i: number) => {
                        return (
                          <Menu.Item
                            key={i}
                            className="p-0 hover:bg-theme/10 hover:text-theme"
                          >
                            <NavLink
                              to={item.path}
                              className="capitalize font-sans text-sm w-full block py-2 px-3"
                            >
                              <span className="mr-3 inline-block">-</span>
                              <span>{item.name}</span>
                            </NavLink>
                          </Menu.Item>
                        );
                      }
                    )}
                  </div>
                </Menu.Dropdown>
              </Menu>
            )}
            {!isSidebarCollapsed && (
              <div className="m-inner-wrap">
                <Icon
                  width={20}
                  icon={sidebarMenu.icon}
                  className="icon min-w-[25px]"
                />
                <span className="text">{sidebarMenu.name}</span>
              </div>
            )}
          </div>
        )}
      </Tooltip>
    </>
  );
};
SidebarMenuTrigger.propTypes = {
  sidebarMenu: PropTypes.object,
  isLink: PropTypes.bool,
};
export default SidebarMenuTrigger;
