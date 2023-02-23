import { ErrorMessage, useField, useFormikContext } from "formik";
import PropTypes from "prop-types";
import Select from "react-select";
import { useId } from "react";

interface SelectOption {
  label: string;
  value: string;
}

export const FormikReactSelect = ({
  label = "",
  placeholder,
  options,
  handleChange = null,
  isMulti = false,
  ...props
}) => {
  const id = useId();
  const [field, meta] = useField(props["name"]);
  const isInvalid = !!(meta.error && meta.touched);

  const formik = useFormikContext();

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter(
            (option: SelectOption) => field?.value?.indexOf(option?.value) >= 0
          )
        : options.find(
            (option: SelectOption) => option?.value === field?.value
          );
    } else {
      return isMulti ? [] : ("" as unknown);
    }
  };

  const onOptionChange = (option: SelectOption | SelectOption[]) => {
    formik.setFieldValue(
      field.name,
      isMulti
        ? (option as SelectOption[]).map((item: SelectOption) => item.value)
        : (option as SelectOption).value
    );
  };

  return (
    <div>
      {label && (
        <label className="form-label" htmlFor={`${id}-${field.name}`}>
          {label || ""}
        </label>
      )}
      <div className={`form-react-select ${isInvalid ? "is-invalid" : ""}`}>
        <Select
          {...field}
          {...props}
          id={field.name}
          name={field.name}
          value={getValue()}
          onChange={handleChange ? handleChange : onOptionChange}
          placeholder={placeholder}
          options={options}
          isMulti={isMulti}
          classNamePrefix="r-select"
          onBlur={() => formik.setFieldTouched(field.name, true)}
        />
      </div>
      <ErrorMessage
        component="div"
        className="invalid-feedback"
        name={field.name}
      />
    </div>
  );
};

FormikReactSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  isMulti: PropTypes.bool,
  options: PropTypes.array,
  handleChange: PropTypes.func,
};

export default FormikReactSelect;
