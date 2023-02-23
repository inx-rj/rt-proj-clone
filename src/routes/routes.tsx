import { lazy, Suspense } from "react";
import { RouteType, SidebarRoutesTypes } from "../helper/types";
import {
  ACCOUNT_SETTINGS_ROUTE,
  AUTH_ROUTE,
  DASHBOARD_PROFILE_ROUTE,
  DASHBOARD_ROUTE,
  DASH_CHILD,
  MESSAGING_ROUTE,
  NUMBERS_ROUTE,
} from "./baseRoute";

// Import lazy load component
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const ForgotPasswordPage = lazy(
  () => import("../pages/auth/ForgotPasswordPage")
);
const ResetPasswordPage = lazy(() => import("../pages/auth/ResetPasswordPage"));

const PasswordChangedPage = lazy(
  () => import("../pages/auth/PasswordChangedPage")
);

const HomePage = lazy(() => import("../pages/dashboard/HomePage"));

//Notification Page
const NotificationsPage = lazy(
  () => import("../pages/dashboard/NotificationPage")
);

// Numbers
const MyNumbersPage = lazy(
  () => import("../pages/dashboard/numbers/MyNumbersPage")
);
const PortNumbersPage = lazy(
  () => import("../pages/dashboard/numbers/PortNumbersPage")
);

// Messaging
const ProfilePage = lazy(
  () => import("../pages/dashboard/messaging/ProfilePage")
);
// Profile Sub Page Route
const CreateProfile = lazy(
  () => import("../components/pages/messaging/profiles/CreateProfile")
);
const UpdateProfile = lazy(
  () => import("../components/pages/messaging/profiles/UpdateProfile")
);

const ShortCodesPage = lazy(
  () => import("../pages/dashboard/messaging/ShortCodesPage")
);
const DlcPage = lazy(() => import("../pages/dashboard/messaging/DlcPage"));

// Reporting page
const ReportingPage = lazy(
  () => import("../pages/dashboard/reporting/ReportingPage")
);

// Account Settings
const MyAccountPage = lazy(
  () => import("../pages/dashboard/accountSettings/MyAccountPage")
);
const BillingPage = lazy(
  () => import("../pages/dashboard/accountSettings/BillingPage")
);
const KeyCredPage = lazy(
  () => import("../pages/dashboard/accountSettings/KeyCredPage")
);
const CreateAPIKeyPage = lazy(
  () => import("../pages/dashboard/accountSettings/CreateAPIKeyPage")
);
const CompanyPage = lazy(
  () => import("../pages/dashboard/accountSettings/CompanyPage")
);
const TwoFAuthPage = lazy(
  () => import("../pages/dashboard/accountSettings/TwoFAuthPage")
);

// Define Authentication Route
export const AUTH_ROUTES: RouteType[] = [
  {
    path: AUTH_ROUTE.LOGIN,
    component: (
      <Suspense fallback={""}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: AUTH_ROUTE.LOGIN,
    component: (
      <Suspense fallback={""}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: AUTH_ROUTE.FORGOT_PASSWORD,
    component: (
      <Suspense fallback={""}>
        <ForgotPasswordPage />
      </Suspense>
    ),
  },
  {
    path: AUTH_ROUTE.RESET_PASSWORD,
    component: (
      <Suspense fallback={""}>
        <ResetPasswordPage />
      </Suspense>
    ),
  },
  {
    path: AUTH_ROUTE.PASSWORD_CHANGED,
    component: (
      <Suspense fallback={""}>
        <PasswordChangedPage />
      </Suspense>
    ),
  },
];

// Define Dashboard Route
export const DASHBOARD_ROUTES: RouteType[] = [
  {
    path: DASH_CHILD.HOME,
    component: (
      <Suspense fallback={""}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: DASH_CHILD.NOTIFICATION,
    component: (
      <Suspense fallback={""}>
        <NotificationsPage />
      </Suspense>
    ),
  },
  {
    path: DASHBOARD_PROFILE_ROUTE.CREATE_PROFILE,
    component: (
      <Suspense fallback={""}>
        <CreateProfile />
      </Suspense>
    ),
  },
  {
    path: DASHBOARD_PROFILE_ROUTE.UPDATE_PROFILE,
    component: (
      <Suspense fallback={""}>
        <UpdateProfile />
      </Suspense>
    ),
  },
  {
    path: DASH_CHILD.REPORTING,
    component: (
      <Suspense fallback={""}>
        <ReportingPage />
      </Suspense>
    ),
  },
];

// Numbers Components Routes
export const DASHBOARD_NUMBERS_MODULE_ROUTES = [
  {
    path: NUMBERS_ROUTE.MY_NUMBERS,
    component: (
      <Suspense fallback={""}>
        <MyNumbersPage />
      </Suspense>
    ),
  },
  {
    path: NUMBERS_ROUTE.PORT_NUMBERS,
    component: (
      <Suspense fallback={""}>
        <PortNumbersPage />
      </Suspense>
    ),
  },
];

// Messaging Components Routes
export const DASHBOARD_MESSAGING_MODULE_ROUTES = [
  {
    path: MESSAGING_ROUTE.PROFILES,
    component: (
      <Suspense fallback={""}>
        <ProfilePage />
      </Suspense>
    ),
  },
  {
    path: MESSAGING_ROUTE.SHORTCODES,
    component: (
      <Suspense fallback={""}>
        <ShortCodesPage />
      </Suspense>
    ),
  },
  {
    path: MESSAGING_ROUTE.DLC,
    component: (
      <Suspense fallback={""}>
        <DlcPage />
      </Suspense>
    ),
  },
];

// Account Setting Components Routes
export const DASHBOARD_ACCCOUNT_SETTINGS_MODULE_ROUTES = [
  {
    path: ACCOUNT_SETTINGS_ROUTE.MY_ACCOUNT,
    component: (
      <Suspense fallback={""}>
        <MyAccountPage />
      </Suspense>
    ),
  },
  {
    path: ACCOUNT_SETTINGS_ROUTE.BILLING,
    component: (
      <Suspense fallback={""}>
        <BillingPage />
      </Suspense>
    ),
  },
  {
    path: ACCOUNT_SETTINGS_ROUTE.KEYS_CREDENTIAL,
    component: (
      <Suspense fallback={""}>
        <KeyCredPage />
      </Suspense>
    ),
  },
  {
    path: ACCOUNT_SETTINGS_ROUTE.CREATE_API_KEY,
    component: (
      <Suspense fallback={""}>
        <CreateAPIKeyPage />
      </Suspense>
    ),
  },
  {
    path: ACCOUNT_SETTINGS_ROUTE.COMPANY,
    component: (
      <Suspense fallback={""}>
        <CompanyPage />
      </Suspense>
    ),
  },
  {
    path: ACCOUNT_SETTINGS_ROUTE.TwoFAuth,
    component: (
      <Suspense fallback={""}>
        <TwoFAuthPage />
      </Suspense>
    ),
  },
];

// Define Sidebar Route
export const SIDEBAR_ROUTES: SidebarRoutesTypes[] = [
  // Dashboard
  {
    name: "Dashboard",
    path: DASHBOARD_ROUTE.HOME,
    icon: "radix-icons:dashboard",
    children: [],
  },
  {
    name: "Numbers",
    path: NUMBERS_ROUTE.HOME,
    icon: "fluent:call-16-regular",
    children: [
      {
        name: "My Numbers",
        path: NUMBERS_ROUTE.MY_NUMBERS,
        children: [],
      },
      {
        name: "Port Numbers",
        path: NUMBERS_ROUTE.PORT_NUMBERS,
        children: [],
      },
    ],
  },
  {
    name: "Messaging",
    path: MESSAGING_ROUTE.HOME,
    icon: "eva:message-square-outline",
    children: [
      {
        name: "Profiles",
        path: MESSAGING_ROUTE.PROFILES,
        children: [],
      },
      {
        name: "ShortCodes",
        path: MESSAGING_ROUTE.SHORTCODES,
        children: [],
      },
      {
        name: "10DLC",
        path: MESSAGING_ROUTE.DLC,
        children: [],
      },
    ],
  },
  {
    name: "Account Settings",
    path: ACCOUNT_SETTINGS_ROUTE.MY_ACCOUNT,
    icon: "ant-design:setting-outlined",
    children: [],
  },
  {
    name: "Reporting",
    path: DASH_CHILD.REPORTING,
    icon: "mdi:file-document-outline",
    children: [],
  },
];
