import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import { useClickOutside, useUpdateEffect } from "react-haiku";
import NotificationItem from "./NotificationItem";
import { DASH_CHILD } from "../../../routes/baseRoute";
import { Images } from "../../../helper/images";

const NotificationTrigger = () => {
  const notificationRef = useRef(null);
  const [showNotification, setShowNotification] = useState(false);
  const displayNotifications = false;
  const location = useLocation();

  useClickOutside(notificationRef, () => setShowNotification(false));
  useUpdateEffect(() => {
    if (location) {
      setShowNotification(false);
    }
  }, [location]);
  return (
    <div className="relative" ref={notificationRef}>
      <div
        onClick={() => setShowNotification(!showNotification)}
        className="btn-ic text-main"
      >
        <div className="relative">
          <Icon icon="ic:outline-notifications" width={25} />
          <span className="w-2 h-2 bg-theme ring-2 ring-white inline-block rounded-full absolute right-0 top-1"></span>
        </div>
      </div>

      <div>
        {showNotification && (
          <div className="w-full min-w-[390px] absolute top-[43px] right-0 card p-0 shadow-sm">
            <div className="flex items-center justify-between p-3 border-b">
              <h5 className="text-sm">Notifications</h5>
              <div className="w-auto bg-transparent p-0">
                <div
                  className="cursor-pointer"
                  onClick={() => setShowNotification(false)}
                >
                  <Icon width={22} icon="ep:close" cursor={"pointer"} />
                </div>
              </div>
            </div>
            {displayNotifications ? (
              <>
                <div className="p-4">
                  <div className="border-b py-3 border-color">
                    <NotificationItem />
                  </div>
                  <div className="py-3  border-color">
                    <NotificationItem />
                  </div>
                </div>
                <Link to={DASH_CHILD.NOTIFICATION}>
                  <p className="text-theme text-center py-2 font-bold border-t">
                    See All
                  </p>
                </Link>
              </>
            ) : (
              <>
                <img className="max-w-xs my-0 mx-auto p-5" src={Images.NoNotification} />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default NotificationTrigger;
