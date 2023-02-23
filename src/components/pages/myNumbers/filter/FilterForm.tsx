import { Form } from "formik";
import { Input } from "../../../fields";
import PopupClose from "../../../common/popupclose/PopupClose";
import Button from "../../../common/button/Button";

const FilterForm = () => {
  return (
    <Form>
      <div className="grid grid-cols-2  gap-4">
        <div>
          <Input
            label="Connection or Application"
            name="name"
            placeholder="Enter Name"
          />
        </div>

        <div>
          <Input
            label="Number (Partial or Full)"
            name="name"
            placeholder="Enter Number"
          />
        </div>
        <div className="col-span-2 ">
          <div className="checkbox flex items-center">
            <input id="no_connection" type="checkbox" />
            <label className=" text-sm form-label mb-0" htmlFor="no_connection">
              No Connection
            </label>
          </div>
        </div>
        <div>
          <label className="form-label">Status </label>
          <select className="form-control">
            <option value="" disabled selected>
              Select Status
            </option>
            <option value="volvo">Active</option>
            <option value="saab">Inactive</option>
          </select>
        </div>
        <div>
          <label className="form-label">Voice Billing Method </label>
          <select className="form-control">
            <option value="" disabled selected>
              Select Voice Billing Method
            </option>
            <option value="volvo">Active</option>
            <option value="saab">Inactive</option>
          </select>
        </div>
        <div>
          <label className="form-label">Tag </label>
          <select className="form-control">
            <option value="" disabled selected>
              Select Tag
            </option>
            <option value="volvo">Active</option>
            <option value="saab">Inactive</option>
          </select>
        </div>
        <div>
          <label className="form-label">Emergency Status </label>
          <select className="form-control">
            <option value="" disabled selected>
              Select Emergency Status
            </option>
            <option value="volvo">Active</option>
            <option value="saab">Inactive</option>
          </select>
        </div>

        <div className="col-span-2 text-center mt-3">
          <Button className="btn-primary mr-4" type="submit" text="Apply" />
          <PopupClose />
        </div>
      </div>
    </Form>
  );
};

export default FilterForm;
