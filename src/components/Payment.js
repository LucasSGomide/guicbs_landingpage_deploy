import React from 'react';
import '../styles/payment.css';

function Payment() {
  return (
    <section className="payment-section">
      <p>
        <label htmlFor="method-1">
          Cartão de Crédito
          <input
            type="radio"
            name="payment-method"
            id="method-1"
            value="credit-card"
          />
        </label>
      </p>
      <p>
        <label htmlFor="method-2">
          PIX
          <input
            type="radio"
            name="payment-method"
            id="method-2"
            value="pix"
          />
        </label>
      </p>
    </section>
  );
}

export default Payment;
