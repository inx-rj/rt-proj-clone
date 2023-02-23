import PropTypes from "prop-types";

interface NavigationCardTitleType {
  title: string;
  customClass?: string;
  NavHeaderAction?: JSX.Element;
}

const NavigationCardTitle = (props: NavigationCardTitleType) => {
  const { title = "", customClass = "", NavHeaderAction = null } = props;
  return (
    title && (
      <>
        <div className="flex justify-between items-center px-4 py-3 border-b border-color">
          <h3 className={`text-base font-medium ${customClass}`}>{title}</h3>
          {NavHeaderAction && <div>{NavHeaderAction}</div>}
        </div>
      </>
    )
  );
};

NavigationCardTitle.propTypes = {
  title: PropTypes.string,
  customClass: PropTypes.string,
  NavHeaderAction: PropTypes.element,
};
export default NavigationCardTitle;
