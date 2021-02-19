import React from 'react';
import whatsLogo from '../images/whatsapp-logo.png';
import TelegramLogo from '../images/telegram-logo.png';
import Email from '../images/email-pictograma.png';
import '../styles/homeFooter.css';

function HomeFooter() {
  return (
    <footer className="home-footer">
      <img src={ whatsLogo } alt="Link para o whatsapp" className="img-footer" />
      <img src={ TelegramLogo } alt="Link para o telegram" className="img-footer" />
      <img src={ Email } alt="Link para enviar email" className="img-footer" />
    </footer>
  );
}

export default HomeFooter;
