import { Icon } from "@iconify/react";
import React, { Suspense, useState } from "react";
import Button from "../../components/common/button/Button";
import NotificationItem from "../../components/common/header/NotificationItem";
import TableSearch from "../../components/common/table/TableSearch";
import PageHeading from "../../components/heading/PageHeading";
import ContentLayout from "../../layouts/ContentLayout";

const NotificationPage = () => {
  return (
    <>
      <Suspense fallback="">
        <PageHeading title="Notifications" />
      </Suspense>
      <Suspense>
        <ContentLayout
          searchBox={false}
          leftContentArea={
            <>
              <TableSearch />
            </>
          }
          childAction={
            <>
              <Button type="button" text={"Clear All"} className="bg-transparent text-base text-theme-100"/>
            </>
          }
        >
          <>
            <div className="border-b p-2 mt-4">
              <NotificationItem isNotificationPage={true} />
            </div>
            <div className="border-b p-2">
              <NotificationItem isNotificationPage={true} />
            </div>
            <div className="border-b p-2">
              <NotificationItem isNotificationPage={true} />
            </div>
            <div className="border-b p-2">
              <NotificationItem isNotificationPage={true} />
            </div>
            <div className="border-b p-2">
              <NotificationItem isNotificationPage={true} />
            </div>
            <div className="p-2">
              <NotificationItem isNotificationPage={true} />
            </div>
          </>
        </ContentLayout>
      </Suspense>
    </>
  );
};

export default NotificationPage;
