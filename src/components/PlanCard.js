import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/planCard.css';

function PlanCard({ title, description, value }) {
  return (
    <div className="plan-card" key={ `plan-${title}` }>
      <h3>{ title }</h3>
      <p>{ description }</p>
      <h4>{ `R$ ${value},00` }</h4>
      <Link to="/formulario">
        <button type="button">
          Contratar
        </button>
      </Link>
    </div>
  );
}

export default PlanCard;

PlanCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.number,
}.isRequired;
