import OtpInput from "react18-input-otp";
import { ErrorMessage, useField, useFormikContext } from 'formik';


const OtpInputField = ({ 
  label = '', 
  inputClass = '', 
  placeholder = '', 
  className = '', 
  showPasswordToggle = false, 
  ...props 
  }) => {
  const [field, meta] = useField(props['name']);
  const isInvalid = !!(meta.error && meta.touched);
  const formikValues = useFormikContext();

  return (
    <div className={`${className} text-input-group`}>
      {label && <label className="form-label" htmlFor={field.name}>
        {label}
      </label>}
      <div>
        <OtpInput 
          {...field}
          {...props}
          isInputNum={true}
          onChange={(value)=>formikValues.setFieldValue(field.name, value)}
          inputStyle={`form-control min-w-[35px] ${isInvalid ? 'is-invalid' : ''} `}
          containerStyle="gap-5 justify-center"
        />
        <ErrorMessage component="div" className="invalid-feedback" name={field.name} />
      </div>
    </div>
  );
};


export { OtpInputField };