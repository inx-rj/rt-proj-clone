import { Navigate, Outlet } from "react-router-dom";
import { IS_PERSISTED } from "../redux/reducers/config/app/app.slice";
import { useAppSelector } from "../redux/store";
import { DASHBOARD_ROUTE } from "../routes/baseRoute";

const AuthLayout = () => {
  const isPersist = useAppSelector(IS_PERSISTED);

  // To be updated with redux
  if (isPersist) {
    return <Navigate to={DASHBOARD_ROUTE.HOME} replace={true} state={true} />;
  }

  return (
    <div role="main">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
