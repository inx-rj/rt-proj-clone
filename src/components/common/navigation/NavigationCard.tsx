import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

interface NavigationCardType {
  title: string;
  info: string;
  icon: string;
  iconSize: number;
  active?: string;
}

const NavigationCard = (props: NavigationCardType) => {
  const {
    title = "",
    info = "",
    icon = "",
    active = "",
    iconSize = 20,
  } = props;
  return (
    <div className={`nav-card ${title === active ? "active" : ""}`}>
      <div className="w-[30px] h-[30px] flex items-center justify-center">
        <Icon width={iconSize} height={iconSize} icon={icon} />
      </div>
      <div className="w-[calc(100%-30px)]">
        <h3 className="title">{title}</h3>
        <span className="info">{info}</span>
      </div>
    </div>
  );
};
NavigationCard.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  active: PropTypes.string,
};
export default NavigationCard;
