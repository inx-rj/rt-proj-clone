import axiosPrivate from "../../../api/axios";
import { API_URL } from "../../../helper/env";
import { initialTableConfigInterface } from "../../../helper/types/common/table";
import { CompanyListTypes } from "../../../helper/types/pages/dashboard/accountSettings/CompanyTypes";
import { setQueryParams } from "../../../helper/utility/functions";

class CompanySettingsApiClient {
  // List out all Company list 
  fetchCompanyList = (filter: initialTableConfigInterface) =>
    axiosPrivate.get(`${API_URL.COMPANY_SETTINGS.GET_COMPANY_LIST}/` + setQueryParams(filter));

  // Create new company 
  register = (data: CompanyListTypes) =>
    axiosPrivate.post(`${API_URL.COMPANY_SETTINGS.COMPANY_CREATE}/`, data);

  // Edit existing company data 
  update = (data: CompanyListTypes) =>
    axiosPrivate.put(
      `${API_URL.COMPANY_SETTINGS.COMPANY_DETAIL}/${data?.id}`,
      data
    );

  // Delete company data 
  remove = (data: CompanyListTypes) =>
    axiosPrivate.delete(
      `${API_URL.COMPANY_SETTINGS.COMPANY_DETAIL}/${data?.id}`
    );
}

export default new CompanySettingsApiClient();
