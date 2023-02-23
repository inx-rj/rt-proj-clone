import { Form } from "formik";
import { ApiKeyTableListType } from "../../../../helper/types/pages/dashboard/accountSettings/CreateApiKeyTypes";
import DeleteConfirmPopup from "../../../common/popup/UI/DeleteConfirmation";

interface DeleteApiKeyType {
  data: ApiKeyTableListType;
  isSubmitting: boolean;
}

const DeleteApiKey = (props: DeleteApiKeyType) => {
  const { data, isSubmitting } = props;

  return (
    <Form>
      <DeleteConfirmPopup isSubmitting={isSubmitting} name={data.api_key} />
    </Form>
  );
};

export default DeleteApiKey;
