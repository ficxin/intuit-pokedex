import React from 'react';

class PokemonDetail extends React.Component {
  render() {
    const { name, pokemonInfo, imageUrl } = this.props.location.state;
    const { height, weight, types, abilities } = pokemonInfo;
    console.log(abilities)
    return (
      <div className="pokemon-detail">
        <div className="pokemon-profile">
          <img
            src={imageUrl}
            alt={name}
          />
          <p>{name}</p>
          <ul>
            <li key="height">Height {height}</li>
            <li key="weight">Weight {weight}</li>
          </ul>
          <form>
            <label htmlFor="inBag">In Bag</label>
            <input 
              type="checkbox" 
              id="inBag" 
              name="subscribe"
            />
          </form>
          <ul>
            {types.map(({ type }) => (
              <li key={type.name}>{type.name}</li>
            ))}
          </ul>
          <p>
            This Pokémon is not satisfied unless it is rampaging at all times. If there is no opponent for it to battle, it will charge at thick trees and knock them down to calm itself.
          </p>
          <ul>
            {abilities.map(({ ability }) => (
              <li key={ability.name}>{ability.name}</li>
            ))}
          </ul>
        </div>
        <div className="map-container">
          
        </div>
      </div>
    )
  }
}

export default PokemonDetail;
