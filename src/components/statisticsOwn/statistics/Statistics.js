import React from 'react';
import Statistic from './statistic/Statistic';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <Statistic label="Good" value={good} />
    <Statistic label="Neutral" value={neutral} />
    <Statistic label="Bad" value={bad} />
    <Statistic label="Total" value={total} />
    <Statistic label="Positive feedback" value={positivePercentage + '%'} />
  </>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
