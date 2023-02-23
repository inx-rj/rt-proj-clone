import React from "react";
import SidebarToggle from "./SidebarToggle";
import NotificationTrigger from "./NotificationTrigger";
import UserMenuTrigger from "./UserMenuTrigger";
import Logo from "../logo/Logo";

const Header: React.FC = () => {
  return (
    <nav className="header">
      <div className="flex items-center h-full">
        <div className="w-[240px] py-2 border-r border-color text-black flex items-center h-full">
          <span className=" block w-[130px] h-[40px]">
            <Logo />
          </span>
        </div>
        <div className="pl-5 leading-[0]">
          <SidebarToggle />
        </div>
      </div>
      <ul className="flex items-center gap-4">
        <li className="max-w-[75px] w-full">
          <p className="text-xs text-main">Updated a minute ago</p>
        </li>
        <li className="border-r border-desc-color h-[30px]"></li>
        <li>
          <p className="text-main text-xs">
            Server Status{" "}
            <strong className="font-semiBold flex items-center">
              <span className="w-2 h-2 bg-success inline-block rounded-full mr-1"></span>
              Active
            </strong>
          </p>
        </li>
        <li className="border-r border-desc-color h-[30px]"></li>
        <li>
          <p className="text-main text-xs">
            Balance <strong className="font-semiBold block">$50.00 USD</strong>
          </p>
        </li>
        <li className="border-r border-desc-color h-[30px]"></li>
        <li>
          <NotificationTrigger />
        </li>
        <li>
          <UserMenuTrigger />
        </li>
      </ul>
    </nav>
  );
};
export default Header;
