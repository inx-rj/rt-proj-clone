import { Form } from "formik";
import { Input } from "../../../fields";
import PopupClose from "../../../common/popupclose/PopupClose";
import Button from "../../../common/button/Button";
import { ActionTypes } from "../../../../helper/actions";

interface CompanyFormType {
  type: string;
}

const CompanyForm = (props: CompanyFormType) => {
  const { type } = props;
  return (
    <>
      <Form>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Input
              name="name"
              type="text"
              placeholder="Enter Company Name"
              label="Company Name"
              disabled={type === ActionTypes.UPDATED}
            />
          </div>
          <div>
            <Input
              name="phone_number"
              type="text"
              placeholder="Enter Company Phone Number"
              label="Company Phone Number"
            />
          </div>
          <div>
            <Input
              name="email"
              placeholder="Enter Company Email"
              label="Company Email"
            />
          </div>
          <div className="flex justify-center gap-5 mt-3">
            <Button
              type="submit"
              className="px-5 btn btn-primary"
              text="Save"
            />
            <PopupClose />
          </div>
        </div>
      </Form>
    </>
  );
};

export default CompanyForm;
