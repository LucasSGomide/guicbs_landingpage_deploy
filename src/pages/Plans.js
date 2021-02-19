import React from 'react';
import PlanList from '../components/PlanList';
import planData from '../data/planData';
import Footer from '../components/Footer';
import '../styles/plans.css';

function Plans() {
  return (
    <div>
      <section className="plans">
        <h1>Planos Disponíveis</h1>
        <PlanList availablePlans={ planData } />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Plans;
