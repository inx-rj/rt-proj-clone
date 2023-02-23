import axiosPrivate from "../../../api/axios";
import { API_URL } from "../../../helper/env";
import { initialTableConfigInterface } from "../../../helper/types/common/table";
import { CreateApiKeyTypes } from "../../../helper/types/pages/dashboard/accountSettings/CreateApiKeyTypes";
import { setQueryParams } from "../../../helper/utility/functions";

class CreateApiKeySettingsApiClient {

  // Generate API key 
  generateApiKey = () =>
    axiosPrivate.get(`${API_URL.CREATE_API_KEY_SETTINGS.GENERATE_API_KEY}/`);

  // Create API key with company 
  register = (data: CreateApiKeyTypes) =>
    axiosPrivate.post(`${API_URL.CREATE_API_KEY_SETTINGS.CREATE_API_KEY}/`, data);

  // Fetch API key list 
  fetchAllApiKeyList = (filter: initialTableConfigInterface) =>
    axiosPrivate.get(`${API_URL.CREATE_API_KEY_SETTINGS.API_KEY_LIST}/` + setQueryParams(filter));

  // Delete company data 
  remove = (data: CreateApiKeyTypes) =>
    axiosPrivate.delete(
      `${API_URL.CREATE_API_KEY_SETTINGS.API_KEY_DETAIL}/${data?.id}`
    );

}

export default new CreateApiKeySettingsApiClient();
