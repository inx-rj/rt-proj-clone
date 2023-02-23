import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { DASHBOARD_PROFILE_ROUTE } from "../../../../../routes/baseRoute";
import BadgeUI from "../../../badge/BadgeUI";

export const myNumbersList: any = [
  {
    number: "+1-507-306-8846",
    connection_app: "",
    message_profile: "",
    billing_group: "",
    services: "",
    tags: "",
    status: "",
    action: "",
  },
  {
    number: "+1-507-306-8846",
    connection_app: "",
    message_profile: "",
    billing_group: "",
    services: "",
    tags: "",
    status: "",
    action: "",
  },
  {
    number: "+1-507-306-8846",
    connection_app: "",
    message_profile: "",
    billing_group: "",
    services: "",
    tags: "",
    status: "",
    action: "",
  },
];

export const myNumbersColumn: any = [
  {
    accessor: "number",
    title: "Number",
    sortable: true,
    textAlignment: "left",
  },
  {
    accessor: "connection_app",
    title: "Connection or App",
    sortable: true,
    textAlignment: "left",
    render: () => (
      <>
        <select className="form-control">
          <option value="" disabled selected>
            Select Connection
          </option>
          <option value="connection1">Connection 1</option>
          <option value="connection2">Connection 2</option>
          <option value="connection3">Connection 3</option>
          <option value="connection4">Connection 4</option>
        </select>
      </>
    ),
  },
  {
    accessor: "message_profile",
    title: "Messaging Profile",
    sortable: true,
    render: () => (
      <>
        <select className="form-control">
          <option value="" disabled selected>
            Select Connection
          </option>
          <option value="connection1">Connection 1</option>
          <option value="connection2">Connection 2</option>
          <option value="connection3">Connection 3</option>
          <option value="connection4">Connection 4</option>
        </select>
      </>
    ),
  },
  {
    accessor: "billing_group",
    title: "Billing Group",
    sortable: true,
    textAlignment: "left",
    render: () => (
      <>
        <select className="form-control">
          <option value="" disabled selected>
            Select Connection
          </option>
          <option value="connection1">Connection 1</option>
          <option value="connection2">Connection 2</option>
          <option value="connection3">Connection 3</option>
          <option value="connection4">Connection 4</option>
        </select>
      </>
    ),
  },
  {
    accessor: "services",
    title: "Services",
    sortable: true,
    textAlignment: "left",
    render: () => (
      <>
        <Icon icon="fluent:call-16-regular" width={20} />
      </>
    ),
  },
  {
    accessor: "tags",
    title: "Tags",
    sortable: true,
    textAlignment: "left",
    render: () => (
      <>
        <BadgeUI variant="badge badge-light-info mb-1 last:mb-0 w-2">
          {"LA_LC "}
        </BadgeUI>
      </>
    ),
  },
  {
    accessor: "status",
    title: "Status",
    sortable: true,
    render: () => (
      <>
        <div className="switch">
          <input
            id={`switch`}
            name="switch"
            type="checkbox"
            defaultChecked={true}
            onChange={() => { }}
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
    render: () => (
      <>
        <Link to={DASHBOARD_PROFILE_ROUTE.UPDATE_PROFILE} title="edit">
          <Icon icon="lucide:edit" className="text-info mx-auto" />
        </Link>
      </>
    ),
  },
];
