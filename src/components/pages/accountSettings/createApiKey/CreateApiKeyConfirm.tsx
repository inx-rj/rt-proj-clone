import PopupClose from "../../../common/popupclose/PopupClose";
import PopupContext from "../../../common/popup/PopupContext";
import CreateApiKeyFormWrapper from "./CreateApiKeyFormWrapper";

const CreateApiKeyConfirm = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <p className="text-center">
        Once created you will be able to view the API key secret among the other
        info in the table view.
      </p>

      <div className="flex items-center gap-3 justify-center mt-4">
        <PopupContext
          buttonLabel="Create "
          modelTitle="Create API Key"
          formComponent={<CreateApiKeyFormWrapper />}
          buttonClass="btn-primary"
        />
        <PopupClose />
      </div>
    </div>
  );
};

export default CreateApiKeyConfirm;
