import React from 'react';
import PokemonPreview from './PokemonPreview';
import { getPokemons } from '../utils/api';

class PokedexInput extends React.Component {
  handleChange = (ev) => {
    const query = ev.target.value;
    this.props.onChange(query);
  }

  render() {
    return (
      <div className="form-container">
        <input
          type="search"
          id="search"
          placeholder="search"
          autoComplete='off'
          value={this.props.value}
          onChange={this.handleChange}
          size="30"
        />
      </div>
    )
  }
}

function PokemonGrid({ pokemons }) {
  return (
    <ul className="pokemon-grid">
      {pokemons.map((pokemon) => {
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
    query: '',
    results: ''
  }

  componentDidMount() {
    getPokemons()
      .then(({ results }) => {
        this.setState({
          results,
          pokemons: results,
        });
      });
  }

  handleSearch = (query) => {
    let { results } = this.state
    const pokemons = results.filter(({ name }) => name.includes(query))

    this.setState({
      query,
      pokemons
    })
  }

  render() {
    const { pokemons, query } = this.state;
    return (
      <React.Fragment>
        <PokedexInput onChange={this.handleSearch}/>
        {pokemons && <PokemonGrid pokemons={pokemons} query={query} />}
      </React.Fragment>
    )
  }
}

export default Pokedex;
