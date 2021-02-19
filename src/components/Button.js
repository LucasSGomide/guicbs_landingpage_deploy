import React from 'react';
import PropTypes from 'prop-types';
import '../styles/button.css';

function Button({ btnName }) {
  return (
    <button type="button" className="btn">
      { btnName }
    </button>
  );
}

export default Button;

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};
