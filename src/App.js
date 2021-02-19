import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  Home,
  Form,
  Plans,
  NotFound,
} from './pages';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/planos" component={ Plans } />
        <Route path="/formulario" component={ Form } />
        <Route exact path="/" component={ Home } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
