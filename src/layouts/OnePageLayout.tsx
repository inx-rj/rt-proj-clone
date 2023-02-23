import Logo from "../components/common/logo/Logo";
import PropTypes from "prop-types";
import { Images } from "../helper/images";

interface OnePageLayoutType {
  children: JSX.Element;
}

const OnePageLayout = (props: OnePageLayoutType) => {
  const { children } = props;
  return (
    <>
      <div className=" min-h-screen p-4 flex items-center justify-center">
        <div>
          <img
            src={Images.AuthBG}
            alt="Background"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute w-full h-full bg-black opacity-[0.5] inset-0"></div>
        </div>

        <div className="flex items-center justify-center">
          <div className="card-modal card">
            <span className="max-w-[200px] w-full mx-auto mb-10 block">
              <Logo />
            </span>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

OnePageLayout.propTypes = {
  children: PropTypes.element,
};

export default OnePageLayout;
