import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClickLoad }) => (
  <button onClick={onClickLoad} className="Button">
    Load More
  </button>
);

Button.propTypes = {
  onClickLoad: PropTypes.func.isRequired,
};

export default Button;
