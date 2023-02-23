import Select from "react-select";
import { tablePageSize } from "../../../../helper/initialStates/common/tablefilter";
import { transformDataForSelect } from "../../../../helper/utility/functions";
import {
  TRIGGER_PAGE,
  TRIGGER_PAGE_SIZE,
} from "../../../../redux/actions/config/table/table.actions";
import { GET_TABLE_CONFIG } from "../../../../redux/reducers/config/table/table.slice";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { ReactSelectField } from "../../../fields/selection/ReactSelectField";

const PerPage = () => {
  const dispatch = useAppDispatch();
  const tableConfig = useAppSelector(GET_TABLE_CONFIG);
  const handleInputChange = (value) => {
    dispatch(TRIGGER_PAGE(1)).then((r: void) => r);
    dispatch(TRIGGER_PAGE_SIZE(value.value)).then((r: void) => r);
  };

  return (
    <div className="w-full page-size-select">
      <ReactSelectField
        menuPlacement="top"
        defaultValue={{
          value: tableConfig.perPage,
          label: tableConfig.perPage,
        }}
        options={tablePageSize.map((item) => ({ value: item, label: item }))}
        components={{
          // DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        handleChange={(value) => handleInputChange(value)}
        isSearchable={false}
      />
    </div>
  );
};

export default PerPage;
