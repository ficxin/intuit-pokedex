import React from 'react';
import PokemonPreview from './PokemonPreview';
import { getPokemons } from '../utils/api';

function PokemonNav({ onNavClick }) { 
  return (
    <ul className="pokemonNav">
      <li
        id="All"
        key="all"
        onClick={onNavClick}
      >
        All
      </li>
      <li
        id="Bag"
        key="bag"
        onClick={onNavClick}
        >
        Bag
      </li>
    </ul>
  )
}

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
    const bag = window.localStorage.getItem("pokemonBag");

    getPokemons()
      .then(({ results }) => {
        this.setState({
          results,
          pokemons: results,
        });
      });
    
    this.setState({
      bag
    })
  }

  handleNavClick = (ev) => {
    console.log("here")
    const element = ev.target.id;
    const { results, bag } = this.state

    if (element === "All") {
      this.setState({
        pokemons: results,
      })
    } 

    if (element === "Bag") {
      const display =  results.filter(({ name }) => bag.includes(name))
      this.setState({  
        pokemons: display,  
      })
    }

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
        <PokemonNav onNavClick={this.handleNavClick} />
        <PokedexInput onChange={this.handleSearch}/>
        {pokemons && <PokemonGrid pokemons={pokemons} query={query} />}
      </React.Fragment>
    )
  }
}

export default Pokedex;
