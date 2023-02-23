import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { useDebounce, useUpdateEffect } from "react-haiku";
import { useState } from "react";
import { TRIGGER_TABLE_SEARCH } from "../../../redux/actions/config/table/table.actions";
import { useAppDispatch } from "../../../redux/store";

const TableSearch = () => {
  const searchDelay = 400;
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const value = useDebounce(search, searchDelay);
  const dispatch = useAppDispatch();

  const handleDataSearch = (value) => {
    setSearch(value);
    setSearching(true);
  };

  const clearSearchData = () => {
    setSearch("");
  };

  // Handle Change After Debounce
  useUpdateEffect(() => {
    // New search implementation
    if (searching) {
      dispatch(TRIGGER_TABLE_SEARCH(value)).then((r: void) => r);
    }
  }, [value]);

  return (
    <div className="w-full relative overflow-hidden">
      <input
        type="text"
        className="form-control"
        placeholder={"Search"}
        value={search}
        onChange={(e) => handleDataSearch(e.target.value)}
      />
      <div
        className="absolute top-[10px] right-3"
        onClick={() => clearSearchData()}
      >
        {search ? (
          <div
            className="relative w-[20px] h-[20px] flex items-center justify-center dark:text-light-primary"
            key="search"
          >
            <span>
              <Icon width={20} icon="clarity:close-line" />
            </span>
          </div>
        ) : (
          <div
            className="relative w-[20px] h-[20px] flex items-center justify-center dark:text-light-primary"
            key="close"
          >
            <span>
              <Icon width={16} icon="bytesize:search" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

TableSearch.propTypes = {
  phText: PropTypes.string,
};

export default TableSearch;
