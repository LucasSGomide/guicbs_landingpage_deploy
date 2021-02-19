import React from 'react';
import whatsLogo from '../images/whatsapp-logo.png';
import TelegramLogo from '../images/telegram-logo.png';
import Email from '../images/email-pictograma.png';
import '../styles/homeFooter.css';

function HomeFooter() {
  return (
    <footer className="home-footer">
      <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5531986540018" >
      <img src={ whatsLogo } alt="Link para o whatsapp" className="img-footer" />
      </a>
      <a>
      <img src={ TelegramLogo } alt="Link para o telegram" className="img-footer" />
      </a>
      <a>
      <img src={ Email } alt="Link para enviar email" className="img-footer" />
      </a>
    </footer>
  );
}

export default HomeFooter;
