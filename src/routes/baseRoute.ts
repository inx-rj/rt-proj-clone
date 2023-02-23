import { string } from "prop-types";

export const SYSTEM: Readonly<{ AUTH: string; HOME: string }> = Object.freeze({
  AUTH: "/auth",
  HOME: "/",
});

// Authentication Route
export const AUTH_ROUTE: Readonly<{
  LOGIN: string;
  FORGOT_PASSWORD: string;
  CHANGE_PASSWORD: string;
  RESET_PASSWORD: string;
  PASSWORD_CHANGED: string;
}> = Object.freeze({
  LOGIN: `${SYSTEM.AUTH}`,
  FORGOT_PASSWORD: `${SYSTEM.AUTH}/forgot-password`,
  CHANGE_PASSWORD: `${SYSTEM.AUTH}/change-password`,
  RESET_PASSWORD: `${SYSTEM.AUTH}/reset-password`,
  PASSWORD_CHANGED: `${SYSTEM.AUTH}/password-changed`,
});

export const DASHBOARD_ROUTE: Readonly<{ HOME: string }> = Object.freeze({
  HOME: `${SYSTEM.HOME}`,
});

// Dashboard Route
export const DASH_CHILD: Readonly<{
  HOME: string;
  NOTIFICATION: string;
  NUMBERS: string;
  MESSAGING: string;
  ACCOUNT_SETTINGS: string;
  REPORTING: string;
}> = Object.freeze({
  HOME: `${DASHBOARD_ROUTE.HOME}`,
  NOTIFICATION: `${DASHBOARD_ROUTE.HOME}notifications`,
  NUMBERS: `${DASHBOARD_ROUTE.HOME}numbers`,
  MESSAGING: `${DASHBOARD_ROUTE.HOME}messaging`,
  ACCOUNT_SETTINGS: `${DASHBOARD_ROUTE.HOME}account-settings`,
  REPORTING: `${DASHBOARD_ROUTE.HOME}reporting`,
});

// Numbers Module Routes
export const DASH_NUMBERS: Readonly<{ HOME: string }> = Object.freeze({
  HOME: `${DASH_CHILD.HOME}numbers`,
});
// Numbers Sub Page Routes
export const NUMBERS_ROUTE: Readonly<{
  HOME: string;
  MY_NUMBERS: string;
  PORT_NUMBERS: string;
}> = {
  HOME: `${DASH_NUMBERS.HOME}`,
  MY_NUMBERS: `${DASH_NUMBERS.HOME}/mynumbers`,
  PORT_NUMBERS: `${DASH_NUMBERS.HOME}/portnumbers`,
};

// Messaging Module Routes
export const DASH_MESSAGING: Readonly<{ HOME: string }> = Object.freeze({
  HOME: `${DASH_CHILD.HOME}messaging`,
});
// Messaging Sub Page Routes
export const MESSAGING_ROUTE: Readonly<{
  HOME: string;
  PROFILES: string;
  SHORTCODES: string;
  DLC: string;
}> = {
  HOME: `${DASH_MESSAGING.HOME}`,
  PROFILES: `${DASH_MESSAGING.HOME}/profiles`,
  SHORTCODES: `${DASH_MESSAGING.HOME}/shortcodes`,
  DLC: `${DASH_MESSAGING.HOME}/dlc`,
};

// Profiles Module Routes
export const DASH_PROFILES: Readonly<{ HOME: string }> = Object.freeze({
  HOME: `${DASHBOARD_ROUTE.HOME}profiles`,
});

// Profiles Module Route
export const DASHBOARD_PROFILE_ROUTE = {
  HOME: `${DASH_PROFILES.HOME}`,
  CREATE_PROFILE: `${DASHBOARD_ROUTE.HOME}create`,
  UPDATE_PROFILE: `${DASHBOARD_ROUTE.HOME}update`,
};

// Account Settings Sub Pages Route
export const ACCOUNT_SETTINGS_ROUTE: Readonly<{
  HOME: string;
  MY_ACCOUNT: string;
  BILLING: string;
  KEYS_CREDENTIAL: string;
  CREATE_API_KEY: string;
  COMPANY: string;
  TwoFAuth: string;
}> = {
  HOME: `${DASH_CHILD.ACCOUNT_SETTINGS}`,
  MY_ACCOUNT: `${DASH_CHILD.ACCOUNT_SETTINGS}/my-account`,
  BILLING: `${DASH_CHILD.ACCOUNT_SETTINGS}/billing`,
  KEYS_CREDENTIAL: `${DASH_CHILD.ACCOUNT_SETTINGS}/keys-cred`,
  CREATE_API_KEY: `${DASH_CHILD.ACCOUNT_SETTINGS}/create-api-key`,
  COMPANY: `${DASH_CHILD.ACCOUNT_SETTINGS}/company`,
  TwoFAuth: `${DASH_CHILD.ACCOUNT_SETTINGS}/2FA`,
};
