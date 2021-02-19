import React from 'react';
import NavBar from '../components/NavBar';
import HomeFooter from '../components/HomeFooter';
import Logo from '../images/sample-logo.jpeg';
import '../styles/home.css';

function Home() {
  const homeButtons = [
    {
      name: 'Planos Disponíveis',
      route: '/planos',
    },
  ];

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
      <section className="home-section">
        <h2 className="home-topic">QUEM SOU EU ?</h2>
        <p className="about-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet erat at.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet erat at.
        </p>
      </section>
      <hr />
      <nav className="home-nav">
        <NavBar btnNames={ homeButtons } />
      </nav>
      <section className="home-section">
        <h2 className="home-topic">FALE COMIGO</h2>
        <HomeFooter />
      </section>
    </div>
  );
}

export default Home;
