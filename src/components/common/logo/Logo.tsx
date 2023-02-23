import React from "react";
import { Link } from "react-router-dom";
import { Images } from "../../../helper/images";
import { DASHBOARD_ROUTE } from "../../../routes/baseRoute";

const Logo: React.FC = () => {
  return (
    <Link
      className="brand inline-flex items-center text-theme w-full h-full"
      to={DASHBOARD_ROUTE.HOME}
    >
      <img src={Images.Logo} alt="Rails" className=" h-full w-full" />
    </Link>
  );
};
export default Logo;
