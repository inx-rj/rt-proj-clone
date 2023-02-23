import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RouteType } from "./helper/types";
import Dashboard from "./layouts/Dashboard";
import SettingLayout from "./layouts/SettingLayout";

import {
  AUTH_ROUTES,
  DASHBOARD_ACCCOUNT_SETTINGS_MODULE_ROUTES,
  DASHBOARD_MESSAGING_MODULE_ROUTES,
  DASHBOARD_NUMBERS_MODULE_ROUTES,
  DASHBOARD_ROUTES,
} from "./routes/routes";

// Import lazy load component
const AuthLayout = lazy(() => import("./layouts/AuthLayout"));
const Master = lazy(() => import("./layouts/Master"));
const NotFound = lazy(() => import("./pages/error/NotFound"));

const RouteApp = () => {
  return (
    <Routes>
      {/* Authentication Routing  */}
      <Route
        element={
          <Suspense fallback={""}>
            <AuthLayout />
          </Suspense>
        }
      >
        {AUTH_ROUTES?.map((authItem: RouteType, authIndex: number) => {
          return (
            <Route
              key={authIndex}
              path={authItem?.path}
              element={authItem.component}
            />
          );
        })}
      </Route>

      {/* Dashboard Routing  */}
      <Route
        element={
          <Suspense fallback={""}>
            <Master />
          </Suspense>
        }
      >
        <Route
          element={
            <Suspense fallback={""}>
              <Dashboard />
            </Suspense>
          }
        >
          {/* Homepage Route  */}
          {DASHBOARD_ROUTES?.map((dashItem: RouteType, dashIndex: number) => {
            return (
              <Route
                key={dashIndex}
                path={dashItem?.path}
                element={dashItem.component}
              />
            );
          })}

          {/* Numbers Page Route  */}
          {DASHBOARD_NUMBERS_MODULE_ROUTES?.map(
            (dashItem: RouteType, dashIndex: number) => {
              return (
                <Route
                  key={dashIndex}
                  path={dashItem?.path}
                  element={dashItem.component}
                />
              );
            }
          )}

          {/* Messaging Page Route  */}
          {DASHBOARD_MESSAGING_MODULE_ROUTES?.map(
            (dashItem: RouteType, dashIndex: number) => {
              return (
                <Route
                  key={dashIndex}
                  path={dashItem?.path}
                  element={dashItem.component}
                />
              );
            }
          )}

          {/* Account Settings Route  */}
          <Route
            element={
              <Suspense fallback={""}>
                <SettingLayout />
              </Suspense>
            }
          >
            {DASHBOARD_ACCCOUNT_SETTINGS_MODULE_ROUTES.map(
              (routeItem, routeIndex) => {
                return (
                  <Route
                    key={routeIndex}
                    path={routeItem.path}
                    element={routeItem.component}
                  />
                );
              }
            )}
          </Route>
        </Route>
      </Route>

      {/* Not Found Page  */}
      <Route
        path="*"
        element={
          <Suspense fallback={""}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};
export default RouteApp;
