import { HANDLE_TOGGLE_SIDEBAR } from "../../../redux/actions/config/app/app.actions";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { IS_SIDEBAR_COLLAPSED } from "../../../redux/reducers/config/app/app.slice";
import { Icon } from "@iconify/react";

const SidebarToggle = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(IS_SIDEBAR_COLLAPSED);

  return (
    <button
      className="btn-ic"
      onClick={() => dispatch(HANDLE_TOGGLE_SIDEBAR(!isSidebarCollapsed))}
    >
      <Icon icon="heroicons-outline:menu-alt-2" width={25} />
    </button>
  );
};
export default SidebarToggle;
