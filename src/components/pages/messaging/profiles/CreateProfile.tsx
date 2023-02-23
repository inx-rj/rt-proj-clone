import { lazy, Suspense } from "react";
import { ActionTypes } from "../../../../helper/actions";

const Profile = lazy(() => import("./ProfilesFormWrapper"));

const CreateProfile = () => {
  return (
    <Suspense fallback="">
      <Profile type={ActionTypes.CREATE} />
    </Suspense>
  );
};
export default CreateProfile;
