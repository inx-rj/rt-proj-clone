import { Images } from "../../helper/images";
import Button from "../common/button/Button";

const MessageBox = () => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-1 gap-4">
        <div className="max-w-[366px] w-full mx-auto mt-8">
          <img
            src={Images.SuccessLogin}
            alt="Success"
            className="block mx-auto mb-5"
          />
          <p className="text-[28px] text-main font-medium text-center mb-12">
            Hurray! Password Changed Successfully
          </p>
        </div>
        <Button
          data-cy="loginFormSubmitBtn"
          className={`btn px-5 w-full btn-primary`}
          type="submit"
          text={"Login"}
        />
      </div>
    </div>
  );
};

export default MessageBox;
