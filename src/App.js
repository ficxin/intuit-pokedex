import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokedex from './components/Pokedex';
import PokemonDetail from './components/PokemonDetail';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Pokedex} />
        <Route path='/:pokemon' component={PokemonDetail} />
      </Router>
    </div>
  );
}

export default App;
