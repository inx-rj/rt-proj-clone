import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { authSlice } from './reducers/auth/auth.slice';

import { configReducer } from './reducers/config/config.reducer';
import { settingsReducer } from './reducers/dashboard/settings/settings.reducer';


const persistAppConfig = {
  key: 'app',
  storage: storage,
  whitelist: ['app']
};

export const rootReducer = combineReducers({
  config: persistReducer(persistAppConfig, configReducer),
  auth: authSlice.reducer,
  settings: settingsReducer
});
export type RootState = ReturnType<typeof rootReducer>;
