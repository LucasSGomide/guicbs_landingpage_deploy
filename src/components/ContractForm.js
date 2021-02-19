import React from 'react';
import Payment from './Payment';
import '../styles/contractForm.css';

function ContractForm() {
  return (
    <fieldset>
      <legend>FAÇA PARTE DO TIME</legend>
      <p>
        <input
          type="text"
          name="name"
          id="client-name"
          placeholder="Nome Completo"
        />
      </p>
      <p>
        <input
          type="text"
          name="email"
          id="client-email"
          placeholder="E-mail"
        />
      </p>
      <p>
        <input
          type="text"
          name="phone"
          id="client-phone"
          placeholder="(xx) Celular"
        />
      </p>
      <Payment />
    </fieldset>
  );
}

export default ContractForm;
