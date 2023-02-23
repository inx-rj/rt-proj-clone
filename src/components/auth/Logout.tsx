import { useAppDispatch, useAppSelector } from "../../redux/store";
import PropTypes from "prop-types";
import { TRIGGER_LOGOUT } from "../../redux/actions/auth/auth.actions";
import { DASHBOARD_ROUTE } from "../../routes/baseRoute";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { IS_PERSISTED } from "../../redux/reducers/config/app/app.slice";

interface LogoutPropsType {
  logoutClass: string;
}

const Logout = (props: LogoutPropsType) => {
  const { logoutClass = "" } = props;
  const refresh_token = () => localStorage.getItem("refresh_token");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isPersist = useAppSelector(IS_PERSISTED);

  useEffect(() => {
    if (!isPersist) navigate(DASHBOARD_ROUTE.HOME, { replace: true, state: true });
  }, [isPersist])

  return (
    <span
      onClick={() => dispatch(TRIGGER_LOGOUT(refresh_token().toString()))}
      className={`btn-logout ${logoutClass}`}
    >
      Logout
    </span>
  );
};
Logout.propTypes = {
  logoutClass: PropTypes.string,
};
export default Logout;
