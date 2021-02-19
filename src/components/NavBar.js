import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';
import '../styles/navBar.css';

function NavBar({ btnNames }) {
  return (
    <div className="nav-btn">
      { btnNames.map((element) => (
        <Link to={ element.route } key={ `btn-${element}` }>
          <Button btnName={ element.name } />
        </Link>
      )) }
    </div>
  );
}

export default NavBar;

NavBar.propTypes = {
  btnNames: PropTypes.arrayOf(PropTypes.object).isRequired,
};
