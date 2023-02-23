import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { DASHBOARD_ROUTE } from "../../routes/baseRoute";

interface BreadcrumbType {
  urlName: string;
}

const Breadcrumb = (props: BreadcrumbType) => {
  const { urlName } = props;
  const { pathname } = useLocation();
  const pathNames = pathname.split("/").filter(Boolean);

  return pathNames.length ? (
    <div className="flex items-center">
      <ul className="flex items-center gap-2">
        <li className="flex items-center justify-center">
          <Link
            className="text-sm text-theme relative top-[-1px]"
            to={DASHBOARD_ROUTE.HOME}
          >
            <Icon width={16} icon="jam:home" />
          </Link>
        </li>
        {pathNames.map((name, index) => {
          const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathNames.length - 1;
          return isLast ? (
            <li
              key={name}
              className="capitalize text-sm flex items-center text-main"
            >
              <span className="inline-block pr-2">|</span>
              {urlName ? (
                <span>{urlName}</span>
              ) : (
                <span>{name.replace("-", " ")}</span>
              )}
            </li>
          ) : name === "master" || name === "settings" ? (
            <li
              key={name}
              className="capitalize text-sm flex items-center gap-2 text-main"
            >
              <span>|</span>
              <span>{name.replace("-", " ")}</span>
            </li>
          ) : (
            <li
              key={name}
              className="capitalize text-sm flex items-center gap-2 text-main"
            >
              <span>|</span>
              {/* <NavLink to={routeTo} className="text-theme"> */}
                {name}
              {/* </NavLink> */}
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <span></span>
  );
};

Breadcrumb.propTypes = {
  urlName: PropTypes.string,
};

export default Breadcrumb;
