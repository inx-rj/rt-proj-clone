import { useAppDispatch } from "../../../redux/store";
import { lazy, Suspense } from "react";
import { useSingleEffect } from "react-haiku";
import { TRIGGER_NAVIGATION_TAB_CONFIG } from "../../../redux/actions/config/global/global.actions";
import { settingsNavType } from "../../../helper/initialStates/dashboard/accountSettings/settingsState";

const NavigationCardTitle = lazy(
  () => import("../../../components/common/navigation/NavigationCardTitle")
);

const BillingPage = () => {
  const dispatch = useAppDispatch();

  useSingleEffect(() => {
    dispatch(
      TRIGGER_NAVIGATION_TAB_CONFIG("settings", settingsNavType.BILLING)
    ).then((r) => r);
  });

  return (
    <>
      <Suspense fallback="">
        <NavigationCardTitle title={settingsNavType.BILLING} />
      </Suspense>
    </>
  );
};

export default BillingPage;
