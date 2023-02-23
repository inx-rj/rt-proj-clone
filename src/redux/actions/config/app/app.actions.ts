import { AppDispatch } from "../../../store";
import {
  SET_PERSIST,
  SET_VARIABLE, TOGGLE_SIDEBAR,
} from "../../../reducers/config/app/app.slice";

// Trigger Theme mode
const TRIGGER_CLICK = (value: boolean) => {
  return async (dispatch: AppDispatch) => dispatch(SET_VARIABLE(value));
};

// Triger Persist mode
const TRIGGER_PERSIST_MODE = (payload: boolean) => {
  return async (dispatch: AppDispatch) => dispatch(SET_PERSIST(payload));
};

// Handle sidebar
const HANDLE_TOGGLE_SIDEBAR = (payload: boolean) => {
  return async (dispatch: AppDispatch) => dispatch(TOGGLE_SIDEBAR(payload));
};

export {
  TRIGGER_CLICK,
  HANDLE_TOGGLE_SIDEBAR,
  TRIGGER_PERSIST_MODE
};
