import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ActionTypes } from "../../../../helper/actions";
import { Input, Switch } from "../../../fields";
import { MESSAGING_ROUTE } from "../../../../routes/baseRoute";
import Button from "../../../common/button/Button";

const ProfileForm = (props) => {
  const { type } = props;
  return (
    <div className="relative grid gap-7">
      <div className="card p-0">
        <h5 className="px-4 py-3 border-b border-color">Profile Information</h5>
        <div className="px-4 py-3 grid grid-cols-3">
          <Input name="name" label="Name" placeholder="Enter name" />
        </div>
      </div>
      <div className="card p-0">
        <h5 className="px-4 py-3 border-b border-color">
          Outbound Information
        </h5>
        <div className="px-4 py-3 grid grid-cols-3">
          <Input
            name="outbound_url"
            label="Outbound Webhook url"
            placeholder="Enter Outbound  Webhook url"
          />
          <Switch name="is_active" label="Status" />
        </div>
      </div>
      <div className="card p-0">
        <h5 className="px-4 py-3 border-b border-color">Inbound Information</h5>
        <div className="px-4 py-3 grid grid-cols-3">
          <Input
            name="inbound_url"
            label="Inbound Webhook url"
            placeholder="Enter Inbound Webhook url"
          />
          <Input
            name="number"
            label="Inbound Call Routing Phone Number "
            placeholder="Enter Inbound Call  Routing Phone Number"
          />
        </div>
      </div>
      <div className="card p-0">
        <h5 className="px-4 py-3 border-b border-color">Key Information</h5>
        <div className="px-4 py-3 grid grid-cols-3">
          <Input
            name="signing_key"
            label="Signing Key"
            placeholder="Enter Signing Key"
          />
        </div>
      </div>
      <div className="my-5">
        <Button
          className="btn-primary"
          type="submit"
          text={type === ActionTypes.UPDATED ? "Update" : "Add"}
        />
        <Link
          to={MESSAGING_ROUTE.PROFILES}
          title="Cancel"
          className="btn btn-outline ml-4"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
};
ProfileForm.propTypes = {
  type: PropTypes.string,
};
export default ProfileForm;
