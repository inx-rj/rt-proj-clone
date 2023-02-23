import PropTypes from 'prop-types';
import { ErrorMessage, Field, useField } from 'formik';

function Checkbox({ label = '', text = '', ...props }) {
  const [field, meta] = useField(props['name']);
  const isInvalid = !!(meta.error && meta.touched);
  return (
    <div>
      {label && <span className="form-label font-normal block">{label}</span>}
      <div className="flex">
        <div className={`flex items-center gap-4 ${isInvalid ? 'is-invalid' : ''}`}>
          <div className="checkbox">
            <Field id={`${field.name}`} type="checkbox" name={field.name} {...props} />
            {text && <label htmlFor={field.name}> {text} </label>}
          </div>
        </div>
        <ErrorMessage component="div" className="text-danger text-xs mt-1" name={field.name} />
      </div>
    </div>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  errorClass: PropTypes.string,
  className: PropTypes.string
};

export { Checkbox };
