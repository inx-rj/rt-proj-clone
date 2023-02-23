import { useAppDispatch } from "../../../redux/store";
import { lazy, Suspense } from "react";
import { useSingleEffect } from "react-haiku";
import { TRIGGER_NAVIGATION_TAB_CONFIG } from "../../../redux/actions/config/global/global.actions";
import { settingsNavType } from "../../../helper/initialStates/dashboard/accountSettings/settingsState";

const NavigationCardTitle = lazy(
  () => import("../../../components/common/navigation/NavigationCardTitle")
);

const KeyCredPage = () => {
  const dispatch = useAppDispatch();

  useSingleEffect(() => {
    dispatch(
      TRIGGER_NAVIGATION_TAB_CONFIG("settings", settingsNavType.KEY_AND_CRED)
    ).then((r) => r);
  });

  return (
    <>
      <Suspense fallback="">
        <NavigationCardTitle title={settingsNavType.KEY_AND_CRED} />
      </Suspense>
    </>
  );
};

export default KeyCredPage;
