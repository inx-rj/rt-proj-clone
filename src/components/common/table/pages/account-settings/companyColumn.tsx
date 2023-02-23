import { DataTableColumn } from "mantine-datatable";
import { ActionTypes } from "../../../../../helper/actions";
import { CompanyListTypes } from "../../../../../helper/types/pages/dashboard/accountSettings/CompanyTypes";
import CompanyFormWrapper from "../../../../pages/accountSettings/company/CompanyFormWrapper";
import ActionButton from "../../action/ActionButton";

export const companyColumn: DataTableColumn<CompanyListTypes>[] = [
  {
    accessor: "name",
    title: "Company Name",
    sortable: true,
    textAlignment: "left",
  },
  {
    accessor: "phone_number",
    title: "Company  Phone Number",
    sortable: true,
    textAlignment: "left",
  },
  {
    accessor: "email",
    title: "Company  Email",
    sortable: true,
    textAlignment: "left",
  },
  {
    accessor: "action",
    textAlignment: "right",
    width: 70,
    render: (data) => (
      <>
        <ActionButton
          edit={{
            popupTitle: "Update Company",
            formComponent: (
              <CompanyFormWrapper data={data} type={ActionTypes.UPDATED} />
            ),
          }}
          remove={{
            popupTitle: "Delete Company",
            formComponent: (
              <CompanyFormWrapper data={data} type={ActionTypes.DELETE} />
            ),
          }}
        />
      </>
    ),
  },
];
