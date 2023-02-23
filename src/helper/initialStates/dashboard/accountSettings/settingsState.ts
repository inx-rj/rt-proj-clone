import { ACCOUNT_SETTINGS_ROUTE } from '../../../../routes/baseRoute';

export const settingsNavType = {
  MY_ACCOUNT: 'My Account',
  BILLING: 'Billing',
  KEY_AND_CRED: 'Key & Credentials',
  CREATE_API_KEY: 'Create api key',
  COMPANY: 'Company',
  TwoFAuth: '2FA Authentication',
};

export const settingsNavigation = [
  {
    icon: 'cil:user',
    iconSize: 28,
    name: settingsNavType.MY_ACCOUNT,
    info: 'Manage your  private information and secure it.',
    url: ACCOUNT_SETTINGS_ROUTE.MY_ACCOUNT
  },
  {
    icon: 'fluent:receipt-money-24-regular',
    iconSize: 28,
    name: settingsNavType.BILLING,
    info: 'Manage your  private information and secure it.',
    url: ACCOUNT_SETTINGS_ROUTE.BILLING
  },
  {
    icon: 'mdi:note-check-outline',
    iconSize: 28,
    name: settingsNavType.KEY_AND_CRED,
    info: 'Manage your  private information and secure it.',
    url: ACCOUNT_SETTINGS_ROUTE.KEYS_CREDENTIAL
  },
  {
    icon: 'carbon:data-1',
    iconSize: 28,
    name: settingsNavType.CREATE_API_KEY,
    info: 'Manage your  private information and secure it.',
    url: ACCOUNT_SETTINGS_ROUTE.CREATE_API_KEY
  },
  {
    icon: 'ic:twotone-apartment',
    iconSize: 28,
    name: settingsNavType.COMPANY,
    info: 'Manage your  private information and secure it.',
    url: ACCOUNT_SETTINGS_ROUTE.COMPANY
  },
  {
    icon: 'mdi:shield-lock-outline',
    iconSize: 28,
    name: settingsNavType.TwoFAuth,
    info: 'Manage your  private information and secure it.',
    url: ACCOUNT_SETTINGS_ROUTE.TwoFAuth
  },
];

// Todo - Need to remove old route for leave settings page
