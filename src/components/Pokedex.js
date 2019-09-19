import React from 'react';
import PokemonPreview from './PokemonPreview';
import { getPokemons } from '../utils/api';

function PokemonGrid({ results }) {
  return (
    <ul className="pokemon-grid">
      {results.map((pokemon) => {
        const { name, url } = pokemon;

        return (
          <li key={name}>
            <PokemonPreview 
              name={name}
              infoUrl={url}
            />
          </li>
        )
      })}
    </ul>
  )
}

class Pokedex extends React.Component {
  state = {
    results: '',
  }

  componentDidMount() {
    getPokemons()
      .then(({ results }) => {
        this.setState({
          results
        });
      });
  }

  render() {
    const { results } = this.state;
    return (
      <React.Fragment>
        {results && <PokemonGrid results={results} />}
      </React.Fragment>
    )
  }
}

export default Pokedex;