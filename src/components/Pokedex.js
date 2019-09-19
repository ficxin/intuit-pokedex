import React from 'react';
import PokemonPreview from './PokemonPreview';
import { getPokemons } from '../utils/api';

class PokedexInput extends React.Component {
  state = {
    value: '',
  }

  handleChange = (ev) => {
    const value = ev.target.value;

    this.setState({
      value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { value } = this.state;

    this.props.onSubmit(value);
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="search"
            id="search"
            placeholder="search"
            autoComplete='off'
            value={this.state.username}
            onChange={this.handleChange}
            size="30"
          />
        </form>
      </div>
    )
  }
}

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

    handleSearch = (value) => {
    const { results } = this.state;

    this.setState({
      results : results.filter(({ name }) => name === value)
    })
  }

  render() {
    const { results } = this.state;
    return (
      <React.Fragment>
        <PokedexInput onSubmit={this.handleSearch}/>
        {results && <PokemonGrid results={results} />}
      </React.Fragment>
    )
  }
}

export default Pokedex;
