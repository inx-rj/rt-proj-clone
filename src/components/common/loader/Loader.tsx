import PropTypes from "prop-types";
import { LoadingInterface } from "../../../helper/types/loading";

const Loader = (props: LoadingInterface) => {
  const { fixed, loaderClass = "", isLoading = true } = props;
  return (
    <div>
      {isLoading && (
        <div
          key={`load-${isLoading}`}
          className={`${
            fixed ? " fixed  bg-white  z-[13]" : " absolute"
          }  inset-0  w-full  h-full  inline-flex  items-center  justify-center  z-[1] ${loaderClass}`}
        >
          <div className="loader">Loading...</div>
        </div>
      )}
    </div>
  );
};

Loader.propTypes = {
  fixed: PropTypes.bool,
  isLoading: PropTypes.bool,
  loaderClass: PropTypes.string,
};

export default Loader;
