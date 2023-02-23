import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../rootReducer';

const initialState = {
  navigation: {
    settings: {
      active: ''
    }
  },
  config: {
    data: {
      company_email: '',
      company_logo: '',
      company_name: '',
      date_format: '',
      favicon: '',
      id: ''
    }
  }
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    //Set the configuration data after login
    SET_CONFIG: (state, action) => ({
      ...state,
      config: action.payload
    }),

    //Set the layout navigation
    SET_TAB_NAVIGATION_CONFIG: (state, action) => {
      switch (action.payload.type) {
        case 'settings': {
          return Object.assign({}, state, {
            ...state,
            navigation: {
              ...state.navigation,
              settings: {
                ...state.navigation.settings,
                active: action.payload.active
              }
            }
          });
        }
        default:
          return state;
      }
    },

    //Reset the layout navigation
    RESET_TAB_NAVIGATION_CONFIG: state => ({
      ...state,
      navigation: initialState.navigation
    })
  }
});

export const { SET_CONFIG, SET_TAB_NAVIGATION_CONFIG, RESET_TAB_NAVIGATION_CONFIG } =
  globalSlice.actions;

export const CONFIG = (state: RootState) => state.config.global.config;
export const TAB_NAVIGATION_CONFIG = (state: RootState) => state.config.global.navigation;
