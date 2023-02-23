import { ErrorMessage, useField } from "formik";
import PropTypes from "prop-types";
import Button from "../common/button/Button";
import { useRef } from "react";

function Input({
  label = "",
  inputClass = "",
  type = "text",
  placeholder = "",
  showPasswordToggle = false,
  ...props
}) {
  const inputRef = useRef(null);
  const [field, meta] = useField(props["name"]);
  const isInvalid = !!(meta.error && meta.touched);

  const showPassword = () => {
    const currentType = inputRef.current.getAttribute("type");
    if (currentType === "text") {
      inputRef.current.setAttribute("type", "password");
    } else {
      inputRef.current.setAttribute("type", "text");
    }
  };

  return (
    <div className={`relative ${type === "password" ? "pass-wrap" : ""}`}>
      {label && (
        <label
          className="form-label"
          data-cy={"form_" + field.name + "_label"}
          id={"form_" + field.name + "_label_id"}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          ref={inputRef}
          className={`form-control ${inputClass} ${
            isInvalid ? "is-invalid" : ""
          }`}
          {...field}
          {...props}
          placeholder={placeholder}
          type={type}
          autoComplete="off"
          data-cy={"form_" + field.name + "_input_id"}
        />
        {type === "password" && showPasswordToggle && (
          <div className="absolute top-0 right-[10px]">
            <Button
              onClick={() => showPassword()}
              className="text-info p-0 m-0 min-w-[0px] bg-transparent"
              icon="ph:eye-light"
              iconSize={16}
              type="button"
            />
          </div>
        )}
      </div>
      <ErrorMessage
        component="div"
        className="invalid-feedback"
        name={field.name}
      />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  showPasswordToggle: PropTypes.bool,
  placeholder: PropTypes.string,
  inputClass: PropTypes.string,
};

export { Input };
