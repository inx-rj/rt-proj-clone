import { Icon } from "@iconify/react";
import { useAppSelector } from "../../../../../redux/store";
import Loader from "../../../../common/loader/Loader";
import { TwoFALoader } from "../../../../../redux/reducers/dashboard/settings/TwoFAuth.slice";

interface ViewTwoFAuthCardType {
  className?: string,
  icon: string,
  iconSize: number,
  info: string,
}

const ViewTwoFAuthCard = (props: ViewTwoFAuthCardType) => {
  const { className, icon, iconSize, info } = props;

  const TwoFADataLoader = useAppSelector(TwoFALoader);

  return (
    <div className={`p-4 py-8 text-center ${className}`}>
      {TwoFADataLoader ? (
        <div className="py-5 max-w-[150px] w-full mx-auto relative">
          <Loader />
        </div>
      ) : (
        <>
          <span className="inline-block border-2 border-theme rounded-full overflow-hidden p-4">
            <Icon
              icon={icon}
              className="block text-theme"
              width={iconSize}
            />
          </span>
          <div dangerouslySetInnerHTML={{
            __html: info,
          }} ></div>
        </>
      )}
    </div>
  )
}

export default ViewTwoFAuthCard;