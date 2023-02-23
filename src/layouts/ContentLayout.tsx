import PropTypes from "prop-types";
import { lazy, Suspense } from "react";

const ContentHeader = lazy(
  () => import("../components/common/contentHeading/ContentHeader")
);

interface ContentLayoutType {
  heading?: boolean;
  searchBox?: boolean;
  leftContentArea?: JSX.Element;
  children: JSX.Element;
  childAction?: JSX.Element;
  contentWrapperClass?: string;
  contentHeaderClass?: string;
  contentClass?: string;
  disableHeader?: boolean;
}

const ContentLayout = (props: ContentLayoutType) => {
  const {
    children = null,
    heading = true,
    childAction = null,
    leftContentArea = null,
    searchBox = true,
    contentWrapperClass,
    contentHeaderClass,
    disableHeader = false,
    contentClass = "",
  } = props;
  return (
    <div className={`${contentClass}`}>
      <div className="container-fluid">
        <div className="card pb-0 min-h-[calc(100vh-165px)] mb-4 mx-4">
          {heading && !disableHeader && (
            <Suspense fallback="">
              <ContentHeader
                searchBox={searchBox}
                leftContentArea={leftContentArea}
                contentHeaderClass={contentHeaderClass}
                contentWrapperClass={contentWrapperClass}
              >
                {childAction}
              </ContentHeader>
            </Suspense>
          )}
          <div className="content-layout">{children}</div>
        </div>
      </div>
    </div>
  );
};

ContentLayout.propTypes = {
  heading: PropTypes.bool,
  searchBox: PropTypes.bool,
  leftContentArea: PropTypes.element,
  children: PropTypes.element,
  childAction: PropTypes.element,
  contentWrapperClass: PropTypes.string,
  contentHeaderClass: PropTypes.string,
  contentClass: PropTypes.string,
  disableHeader: PropTypes.bool,
};

export default ContentLayout;
