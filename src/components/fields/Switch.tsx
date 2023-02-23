import { useField } from 'formik';
import PropTypes from 'prop-types';
import React, { useId } from 'react';

function Switch({ label = '', ...props }) {
  const [field] = useField(props['name']);
  const id = useId();
  return (
    <div className="switch">
      <input id={`${id}-${props['name']}`} type="checkbox" checked={field.value} {...field} {...props} />
      <label htmlFor={`${id}-${props['name']}`}></label>
      {label && <span className="relative top-[-2px]">{label}</span>}
    </div>
  );
}

Switch.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string
};

export { Switch };
