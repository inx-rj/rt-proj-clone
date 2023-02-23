import { Icon } from "@iconify/react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import GlobalTable from "../../../components/common/table/global/GlobalTable";
import {
  profileColumn,
  profileList,
} from "../../../components/common/table/pages/messaging/profileColumn";
import ContentLayout from "../../../layouts/ContentLayout";
import { DASHBOARD_PROFILE_ROUTE } from "../../../routes/baseRoute";

const PageHeading = lazy(
  () => import("../../../components/heading/PageHeading")
);

const ProfilePage = () => {
  return (
    <>
      <Suspense fallback="">
        <PageHeading title="Profile" />
      </Suspense>
      <Suspense fallback="Loading...">
        <ContentLayout
          contentWrapperClass="max-w-[100%] w-full"
          searchBox={true}
          childAction={
            <>
              <Suspense fallback="Loading...">
                <Link
                  to={DASHBOARD_PROFILE_ROUTE.CREATE_PROFILE}
                  className="btn btn-primary"
                >
                  <Icon icon="ic:twotone-plus" width={20} />
                  Add New
                </Link>
              </Suspense>
            </>
          }
        >
          <Suspense fallback="Loading...">
            <div className="px-4 pb-4">
              <GlobalTable
                column={profileColumn}
                records={profileList}
                loading={false}
              />
            </div>
          </Suspense>
        </ContentLayout>
      </Suspense>
    </>
  );
};

export default ProfilePage;
