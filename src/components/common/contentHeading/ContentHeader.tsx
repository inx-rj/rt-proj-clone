import PropTypes from "prop-types";
import TableSearch from "../table/TableSearch";

interface ContentHeaderType {
  searchBox?: boolean;
  leftContentArea?: JSX.Element;
  children?: JSX.Element;
  contentWrapperClass?: string;
  contentHeaderClass?: string;
}

const ContentHeader = (props: ContentHeaderType) => {
  const {
    leftContentArea,
    children,
    searchBox = true,
    contentWrapperClass = "justify-end flex items-center w-full max-w-[calc(100%-350px)]",
    contentHeaderClass = "flex items-center justify-end w-full",
  } = props;

  return (
    <>
      {leftContentArea || children ? (
        <div
          className={`pb-4 z-[4] flex items-center  rounded-none border-0 justify-between`}
        >
          {leftContentArea && <div className={`flex items-center  rounded-none border-0 justify-end`}>{leftContentArea}</div>}
          <div
            className={`flex items-center  rounded-none border-0 justify-end ${contentWrapperClass}`}
          >
            <div className={contentHeaderClass}>
              {searchBox && (
                <div className="flex items-center w-full max-w-[200px] mr-3">
                  <TableSearch />
                </div>
              )}
              {children}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

ContentHeader.propTypes = {
  searchBox: PropTypes.bool,
  leftContentArea: PropTypes.element,
  children: PropTypes.element,
  contentWrapperClass: PropTypes.string,
  contentHeaderClass: PropTypes.string,
};
export default ContentHeader;
