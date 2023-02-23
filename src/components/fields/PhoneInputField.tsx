import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ErrorMessage, useField, useFormikContext } from "formik";

const PhoneInputField = ({
  label = "",
  inputClass = "",
  type = "text",
  placeholder = "Enter phone number",
  className = "",
  showPasswordToggle = false,
  ...props
}) => {
  const [field, meta] = useField(props["name"]);
  const isInvalid = !!(meta.error && meta.touched);
  const formikValues = useFormikContext();

  return (
    <div className={`${className} text-input-group`}>
      {label && (
        <label className="form-label" htmlFor={field.name}>
          {label}
        </label>
      )}
      <div>
        <PhoneInput
          enableSearch={true}
          containerClass="country-phone-input"
          inputClass={` ${inputClass} ${isInvalid ? "is-invalid" : ""}`}
          placeholder={placeholder}
          {...field}
          {...props}
          inputProps={{
            name: "phone_number",
          }}
          onChange={(value) => formikValues.setFieldValue(field.name, value)}
        />
        <ErrorMessage
          component="div"
          className={`invalid-feedback ${isInvalid && "absolute"}`}
          name={field.name}
        />
      </div>
    </div>
  );
};

export { PhoneInputField };
