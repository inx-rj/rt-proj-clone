/**
 * This function can be used anywhere in the app to greet the user
 * @param userName The user's first name
 * @returns A kind greeting message
 */

import { initialTableConfigInterface } from "../types/common/table";

// Convert data for Select
export const transformDataForSelect = (
  data: object[] | number[],
  label: string,
  value: string | number
) => {
  return data.map((item) => ({
    label: item[label],
    value: item[value],
  }));
};

// SET API URL Query params
export const setQueryParams = (config: initialTableConfigInterface) => {
  let queryParams = `?page=${config.page}&page_size=${config.perPage}&ordering=${config.sortBy}&search=${config.search}`;
  return queryParams;
};

// Pick any random item from array
export const pick_random = (item) => {
  return item[Math.floor(Math.random() * item.length)];
};

// To replace first 8 digits of number with 'X'
export const encryptPhoneNum = (phoneNum: string) => phoneNum?.replace(/.(?=.{2,}$)/g, "X");

//To replace last few characters of API key with *
export const encryptAPIKey = (key: string) => {
  if (key) return key.slice(0, key.length - 10) + "**********";
  else return "";
};
