import { Form } from "formik";
import { CompanyListTypes } from "../../../../helper/types/pages/dashboard/accountSettings/CompanyTypes";
import DeleteConfirmPopup from "../../../common/popup/UI/DeleteConfirmation";

interface DeleteCompanyType {
  data: CompanyListTypes;
  isSubmitting: boolean;
}

const DeleteCompany = (props: DeleteCompanyType) => {
  const { data, isSubmitting } = props;

  return (
    <Form>
      <DeleteConfirmPopup isSubmitting={isSubmitting} name={data.name} />
    </Form>
  );
};

export default DeleteCompany;
