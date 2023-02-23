import PropTypes from "prop-types";
import { StatusTypes } from "../../../helper/actions";

interface BadgeStatusType {
  type: string;
  customClass: string;
}

const BadgeStatus = (props: BadgeStatusType) => {
  const { type = "", customClass = "" } = props;
  return (
    <>
      {StatusTypes.filter(
        (status) => status?.trim().toLowerCase() === type?.trim().toLowerCase()
      ).map((item, i) => {
        return (
          <span
            key={i}
            className={`capitalize min-w-[95px] whitespace-nowrap badge badge-${item
              ?.toLowerCase()
              ?.trim()
              ?.replaceAll(/\s/g, "-")} ${customClass}`}
          >
            {item.toLowerCase()}
          </span>
        );
      })}
    </>
  );
};

BadgeStatus.propTypes = {
  type: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  customClass: PropTypes.string,
};

export default BadgeStatus;
