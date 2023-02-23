import { combineReducers } from "redux";
import { Company } from "./company.slice";
import { CreateApiKey } from "./createApiKey.slice";
import { TwoFAuth } from "./TwoFAuth.slice";

export const settingsReducer = combineReducers({
    TwoFAuth: TwoFAuth.reducer,
    Company: Company.reducer,
    CreateApiKey: CreateApiKey.reducer,
})