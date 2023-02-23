import { Icon } from "@iconify/react";
import { DataTableColumn } from "mantine-datatable";
import moment from "moment";
import { Link } from "react-router-dom";
import { ActionTypes } from "../../../../../helper/actions";
import { ApiKeyTableListType } from "../../../../../helper/types/pages/dashboard/accountSettings/CreateApiKeyTypes";
import { encryptAPIKey } from "../../../../../helper/utility/functions";
import CreateApiKeyFormWrapper from "../../../../pages/accountSettings/createApiKey/CreateApiKeyFormWrapper";
import ActionButton from "../../action/ActionButton";

export const createApiColumn: DataTableColumn<ApiKeyTableListType>[] = [
  {
    accessor: "api_key",
    title: "API Keys",
    sortable: true,
    textAlignment: "left",
    width: 400,
    render: (data) => <span>{encryptAPIKey(data?.api_key)}</span>,
  },
  {
    accessor: "created_by",
    title: "Created  By",
    sortable: true,
    textAlignment: "left",
    render: (data) => (
      <span className="capitalize">
        {data?.created_by?.first_name} {data?.created_by?.last_name}
      </span>
    ),
  },
  {
    accessor: "created_at",
    title: "Created At",
    sortable: true,
    textAlignment: "left",
    render: (data) => (
      <span>{moment(data.created_at).format("MM-DD-YYYY")}</span>
    ),
  },
  {
    accessor: "last_used",
    title: "Last Used",
    sortable: true,
    textAlignment: "left",
    render: (data) => (
      <span>{moment(data.last_used).format("MM-DD-YYYY")}</span>
    ),
  },
  {
    accessor: "status",
    title: "Status",
    sortable: true,
    render: (data) => (
      <>
        <div
          className={`switch ${
            data?.status ? "active-switch" : "inactive-switch"
          }`}
        >
          <input
            id={`switch`}
            name="switch"
            type="checkbox"
            defaultChecked={data?.status}
            disabled
            onChange={() => {}}
          />
          <label htmlFor={`switch`}></label>
          <span>Active</span>
        </div>
      </>
    ),
  },
  {
    accessor: "action",
    textAlignment: "right",
    width: 70,
    render: (data) => (
      <>
        <ActionButton
          remove={{
            popupTitle: "Delete Company",
            formComponent: (
              <CreateApiKeyFormWrapper data={data} type={ActionTypes.DELETE} />
            ),
          }}
        />
      </>
    ),
  },
];
