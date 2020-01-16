import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({ label, value }) => (
  <p>
    {label}:{value}
  </p>
);

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Statistic;
