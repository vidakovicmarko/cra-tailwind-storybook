import React from 'react';
import PropTypes from 'prop-types';

export const Input = (props) => {
  return (
    <input
      type="text"
      id={props.id}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className={`block px-4 py-2 text-sm rounded-md border border-gray-300 outline-none focus:ring-2 shadow`}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

Input.defaultProps = {
  type: 'text'
}