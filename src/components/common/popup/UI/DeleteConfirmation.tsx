import { Icon } from "@iconify/react";
import Button from "../../button/Button";
import PopupClose from "../../popupclose/PopupClose";

interface DeleteConfirmPopupType {
  name: string;
  isSubmitting?: boolean;
  confirmBtnText?: string;
}

const DeleteConfirmPopup = (props: DeleteConfirmPopupType) => {
  const { name, isSubmitting } = props;
  return (
    <div className="text-center">
      <div className="mb-4 flex items-center justify-center">
        <span className="bg-theme rounded-full text-white w-12 h-12 flex justify-center items-center">
          <Icon width={35} icon="tabler:question-mark" />
        </span>
      </div>
      <h3 className="mb-3">Are you sure?</h3>
      <h6 className="mb-8 px-2 sm:px-5">
        Do you want to delete <b>{name}</b> ?
      </h6>
      <div className="flex justify-center items-center gap-3">
        <Button
          type="submit"
          className="btn-primary"
          data-cy="deleteHolidayFormSubmitBtn"
          disabled={isSubmitting}
          text={"Yes"}
        />
        <PopupClose />
      </div>
    </div>
  );
};
export default DeleteConfirmPopup;
