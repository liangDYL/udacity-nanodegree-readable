import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const selClass = checked => `btn ${checked ? 'btn-danger active' : 'btn-secondary'}`;

const RadioButton = ({ evtName, val, handleChange, checked }) => (
  <label htmlFor={val} style={{ width: '100px' }} className={selClass(checked)}>
    <input
      type="radio"
      id={val}
      autoComplete="off"
      value={val}
      onChange={e => handleChange(e, evtName)}
      checked={val}
    />
    {_.capitalize(val)}
  </label>
);

RadioButton.propTypes = {
  evtName: PropTypes.string.isRequired,
  val: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default RadioButton;