import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { ActionTypes } from "../../../../helper/actions";

const ProfilesFormWrapper = lazy(() => import("./ProfilesFormWrapper"));

const UpdateProfile = () => {
  const { id } = useParams();

  return (
    <div className="relative">
      <Suspense fallback="">
        <ProfilesFormWrapper id={id} type={ActionTypes.UPDATED} />
      </Suspense>
    </div>
  );
};
export default UpdateProfile;
