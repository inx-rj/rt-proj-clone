import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { DASHBOARD_PROFILE_ROUTE } from "../../../../../routes/baseRoute";

export const profileList: any = [
  {
    name: "Ryan Schmitt",
    linked_number: "+1 202-918-2132",
    webhooks: "3 Weeks Ago",
    status: "",
    action: "delete",
  },
  {
    name: "Megan Waters",
    linked_number: "+912264070675",
    webhooks: "Never Used",
    status: "",
    action: "delete",
  },
  {
    name: "Melissa Henry",
    linked_number: "+912383532102",
    webhooks: "3 Weeks Ago",
    status: "",
    action: "delete",
  },
];

export const profileColumn: any = [
  {
    accessor: "name",
    title: "Name",
    sortable: true,
    textAlignment: "left",
  },
  {
    accessor: "linked_number",
    title: "Linked Phone Numbers",
    sortable: true,
    textAlignment: "left",
  },
  {
    accessor: "webhooks",
    title: "Webhooks",
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
          <span>Enable</span>
        </div>
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
          <span>Active ind</span>
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
