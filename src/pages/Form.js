import React from 'react';
import { Link } from 'react-router-dom';
import ContractForm from '../components/ContractForm';
import Footer from '../components/Footer';
import Logo from '../images/sample-logo.jpeg';
import '../styles/form.css';

function Form() {
  return (
    <div>
      <header className="home-header">
        <img
          alt="Guilherme Castelo Branco Logo"
          className="img-logo"
          src={ Logo }
        />
      </header>
      <hr />
      <form>
        <ContractForm />
      </form>
      <section className="submit-section">
        <Link to="/">
          <button type="button" className="btn-submit">
            CONFIRMAR PAGAMENTO
          </button>
        </Link>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Form;
