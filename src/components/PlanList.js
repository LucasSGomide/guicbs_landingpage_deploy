import React from 'react';
import PropTypes from 'prop-types';
import PlanCard from './PlanCard';
import '../styles/button.css';

function PlanList({ availablePlans }) {
  return (
    availablePlans.map((plan) => (
      <div key={ `plan-${plan.title}` }>
        <PlanCard
          title={ plan.title }
          description={ plan.description }
          value={ plan.value }
        />
      </div>
    ))
  );
}

export default PlanList;

PlanList.propTypes = {
  availablePlans: PropTypes.arrayOf(PropTypes.object).isRequired,
};
