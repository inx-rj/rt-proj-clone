import { lazy, Suspense, useRef, useState } from "react";
import { Accordion } from "@mantine/core";
import { useUpdateEffect } from "react-haiku";
import { SIDEBAR_ROUTES } from "../../../routes/routes";
import { useAppSelector } from "../../../redux/store";
import { IS_SIDEBAR_COLLAPSED } from "../../../redux/reducers/config/app/app.slice";
import { SidebarRoutesTypes } from "../../../helper/types";

const SidebarInnerMenu = lazy(() => import("./SidebarInnerMenu"));
const SidebarMenuTrigger = lazy(() => import("./mini/SidebarMenuTrigger"));

const SidebarMenuItem = () => {
  const isSidebarCollapsed = useAppSelector(IS_SIDEBAR_COLLAPSED);
  const menuRef = useRef(null);
  const [activeMultiMenu, setActiveMultiMenu] = useState<string | null>(null);
  const [isCollapsedMenu, setIsCollapsedMenu] = useState<string | null>(
    activeMultiMenu
  );

  // Keep the active menu state when menu is collapsed
  useUpdateEffect(() => {
    setIsCollapsedMenu(activeMultiMenu);
    if (isSidebarCollapsed) {
      setActiveMultiMenu(null);
    } else {
      setActiveMultiMenu(isCollapsedMenu);
    }
  }, [isSidebarCollapsed]);

  return (
    <ul className="menu" ref={menuRef}>
      {SIDEBAR_ROUTES.map(
        (sidebarMenu: SidebarRoutesTypes, sidebarMenuIndex: number) =>
          sidebarMenu && sidebarMenu?.children?.length > 0 ? (
            <li key={sidebarMenuIndex} className="m-list">
              <Accordion
                styles={{
                  chevron: {
                    transform: "rotate(-90deg)",
                    display: isSidebarCollapsed ? "none" : "",
                  },
                }}
                key={sidebarMenuIndex}
                value={activeMultiMenu}
                onChange={setActiveMultiMenu}
                className="m-link-wrapper"
              >
                <Accordion.Item value={sidebarMenu.name}>
                  <Accordion.Control>
                    <SidebarMenuTrigger sidebarMenu={sidebarMenu} />
                  </Accordion.Control>

                  {!isSidebarCollapsed && (
                    <Accordion.Panel>
                      <Suspense fallback="loading...">
                        <SidebarInnerMenu items={sidebarMenu?.children} />
                      </Suspense>
                    </Accordion.Panel>
                  )}
                </Accordion.Item>
              </Accordion>
            </li>
          ) : (
            <li
              key={sidebarMenuIndex}
              className="m-list"
              onClick={() => setActiveMultiMenu(null)}
            >
              <SidebarMenuTrigger sidebarMenu={sidebarMenu} isLink={true} />
            </li>
          )
      )}
    </ul>
  );
};
export default SidebarMenuItem;
