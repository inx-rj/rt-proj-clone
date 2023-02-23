import { Icon } from "@iconify/react";
import React from "react";

const NotificationItem = (props) => {
  const { isNotificationPage } = props;

  return (
    <div className="flex justify-between">
      <div className="flex grid-rows-1 gap-3">
        <div className="left-content">
          <span className="w-2 h-2 bg-success inline-block rounded-full mb-0.5"></span>
        </div>
        <div className="right-content space-y-1.5">
          <h3 className="font-bold text-sm"> Title 01 </h3>
          <h4 className="font-medium text-sm"> Subject line 01</h4>
          <p className="text-xs">
            Lorem ip sum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <p className="text-theme text-xs">12 Feb, 2023 / 5:26 PM</p>
        </div>
      </div>
      {isNotificationPage && (
        <div className="py-8">
          <Icon width={22} icon="ep:close" />
        </div>
      )}
    </div>
  );
};

export default NotificationItem;
