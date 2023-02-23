import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { DASHBOARD_PROFILE_ROUTE } from "../../../../../routes/baseRoute";
import BadgeUI from "../../../badge/BadgeUI";
import ConfirmationPopup from "../../../popup/UI/ConfirmationPopup";
import ActionButton from "../../action/ActionButton";

export const reportingList: any = [
  {
    number: "+1-507-306-8846",
    record_id: "AB0105",
    start_date: "13 Feb, 2023",
    end_date: "15 Feb, 2023",
    type: "Inbound",
    error: "",
    download: "",
    action: "",
  },
  {
    number: "+1-507-306-8846",
    record_id: "XY5206",
    start_date: "13 Feb, 2023",
    end_date: "15 Feb, 2023",
    type: "Inbound",
    error: "",
    download: "",
    action: "",
  },
  {
    number: "+1-507-306-8846",
    record_id: "CD3658",
    start_date: "13 Feb, 2023",
    end_date: "15 Feb, 2023",
    type: "Inbound",
    error: "",
    download: "",
    action: "",
  },
];

export const reportingColumn: any = [
  {
    accessor: "number",
    title: "Number",
    sortable: true,
    textAlignment: "left",
  },
  {
    accessor: "record_id",
    title: "Connection or App",
    sortable: true,
    textAlignment: "left",
  },
  {
    accessor: "start_date",
    title: "Messaging Profile",
    sortable: true,
  },
  {
    accessor: "end_date",
    title: "Billing Group",
    sortable: true,
    textAlignment: "left",
  },
  {
    accessor: "type",
    title: "Type",
    sortable: true,
    textAlignment: "left",
  },
  {
    accessor: "error",
    title: "Error",
    sortable: true,
    textAlignment: "left",
    render: () => (
      <Icon icon="bx:error" width={20} className="text-[#FFC02C]" />
    ),
  },
  {
    accessor: "download",
    title: "Download",
    sortable: true,
    render: () => <Icon icon="fluent:call-16-regular" width={20} />,
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
            formComponent: <ConfirmationPopup messageContent={data} />,
          }}
        />
      </>
    ),
  },
];
