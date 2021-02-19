import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
  return (
    <div className="link-container">
      <Link to="/" className="footer-link">
        HOME
      </Link>
    </div>
  );
}

export default Footer;
