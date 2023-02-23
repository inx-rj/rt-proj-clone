import Button from "../button/Button";
import { closeAllModals } from "@mantine/modals";

const PopupClose = () => {
  return (
    <Button
      className="btn-primary btn-outline shadow-none  hover:text-white"
      onClick={closeAllModals}
      text="Cancel"
    />
  );
};

export default PopupClose;
