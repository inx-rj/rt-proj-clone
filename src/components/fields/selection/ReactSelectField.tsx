import PropTypes from "prop-types";
import Select from "react-select";

const ReactSelectField = ({
  label = "",
  name = "",
  placeholder = "",
  options,
  handleChange = null,
  isMulti = false,
  ...props
}) => {
  return (
    <div>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
      )}
      <div className={`form-react-select`}>
        <Select
          {...props}
          id={name}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          options={options}
          isMulti={isMulti}
          classNamePrefix="r-select"
        />
      </div>
    </div>
  );
};

ReactSelectField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  isMulti: PropTypes.bool,
  options: PropTypes.array,
  handleChange: PropTypes.func,
};

export { ReactSelectField };
