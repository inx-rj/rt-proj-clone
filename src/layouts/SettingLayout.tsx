import { lazy, Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import { ScrollArea } from "@mantine/core";
import { TAB_NAVIGATION_CONFIG } from "../redux/reducers/config/global/global.slice";
import { settingsNavigation } from "../helper/initialStates/dashboard/accountSettings/settingsState";

const PageHeading = lazy(() => import("../components/heading/PageHeading"));
const NavigationCard = lazy(
  () => import("../components/common/navigation/NavigationCard")
);

const SettingLayout = () => {
  const navConfig = useAppSelector(TAB_NAVIGATION_CONFIG);
  return (
    <>
      <Suspense fallback="">
        <PageHeading title={navConfig.settings.active} />
      </Suspense>
      <section className="flex p-5 gap-5 pt-0">
        <div className="card p-0 w-[300px] h-[calc(100vh-180px)] sticky top-[75px] left-0 right-0 shadow-xs overflow-hidden">
          <ScrollArea
            style={{ height: "calc(100vh - 180px)" }}
            scrollbarSize={6}
            scrollHideDelay={100}
          >
              <Suspense fallback="Loading...">
              {settingsNavigation.map((nav, navIndex) => {
                return (
                    <NavLink
                      key={navIndex}
                      to={nav.url}
                      className="nav-card-wrapper"
                      end
                    >
                      <NavigationCard
                        title={nav.name}
                        info={nav.info}
                        icon={nav.icon}
                        iconSize={nav.iconSize}
                      />
                  </NavLink>
                );
              })}
              </Suspense>
          </ScrollArea>
        </div>
        <div className="w-[calc(100%-300px)] shadow-xs card p-0">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default SettingLayout;
