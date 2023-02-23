import React from "react";
import PropTypes from "prop-types";
import Breadcrumb from "../breadcrumb/Breadcrumb";

interface PageHeadingType {
  sticky?: boolean;
  loading?: object;
  title: string;
  urlName?: string;
}

const PageHeading = (props: PageHeadingType) => {
  const { title, urlName, sticky = false } = props;
  return (
    <div
      className={`flex items-center capitalize justify-between px-5 py-3 ${
        sticky ? "sticky" : ""
      }`}
    >
      {title && (
        <h4
          id={`${title.toLowerCase().replaceAll(" ", "_")}_id`}
          data-cy={`${title.toLowerCase().replaceAll(" ", "_")}_test`}
        >
          {title}
        </h4>
      )}
      <Breadcrumb urlName={urlName} />
    </div>
  );
};

PageHeading.propTypes = {
  sticky: PropTypes.bool,
  loading: PropTypes.object,
  title: PropTypes.string,
  urlName: PropTypes.string,
};

export default PageHeading;
