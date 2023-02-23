import PropTypes from "prop-types";

import ViewButton, { viewBtnDataInterface } from "./ViewButton";
import EditButton, { editBtnDataInterface } from "./EditButton";
import RemoveButton, { removeBtnDataInterface } from "./RemoveButton";
import CancelButton, { cancelBtnDataInterface } from "./CancelButton";
import Dropdown from "../../../utility/dropdown/Dropdown";

export interface ActionBtnInterface {
  dropdownWidth?: number;
  data: object;
  btnClass?: string;
  view?: viewBtnDataInterface;
  edit?: editBtnDataInterface;
  remove?: removeBtnDataInterface;
  cancel?: cancelBtnDataInterface;
}

const ActionButton = (props) => {
  const {
    dropdownWidth = 110,
    view,
    edit,
    remove,
    cancel,
    btnClass,
  }: ActionBtnInterface = props;

  return (
    <>
      <Dropdown
        icon="mdi:dots-vertical"
        btnIcon="mdi:dots-vertical"
        btnClass={`${btnClass}`}
        menuProps={{
          withArrow: true,
          arrowOffset: 10,
          position: "left-start",
          transition: "pop-top-right",
          width: dropdownWidth,
          zIndex: 20,
        }}
      >
        <div className="btn-action">
          {view && <ViewButton view={view} />}
          {edit && <EditButton edit={edit} />}
          {remove && <RemoveButton remove={remove} />}
          {cancel && <CancelButton cancel={cancel} />}
        </div>
      </Dropdown>
    </>
  );
};

ActionButton.propTypes = {
  dropdownWidth: PropTypes.number,
  data: PropTypes.object,
  btnClass: PropTypes.string,
  view: PropTypes.object,
  edit: PropTypes.object,
  remove: PropTypes.object,
  cancel: PropTypes.object,
};
export default ActionButton;
