import React from 'react';
import GoogleMapReact from 'google-map-react';

const PokemonMarker = ({ imageUrl, name }) => <img src={imageUrl} alt={name} height={40}/>

class PokemonDetail extends React.Component {
  render() {
    const { name, pokemonInfo, imageUrl } = this.props.location.state;
    const { height, weight, types, abilities } = pokemonInfo;

    return (
      <div className="pokemon-detail">
        <div className="pokemon-profile">
          <img
            src={imageUrl}
            alt={name}
          />
          <h4>{name}</h4>
          <ul>
            <li key="height">{`Height ${height}"`}</li>
            <li key="weight">{`Weight ${weight} lbs`}</li>
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
          <GoogleMapReact
            apiKey="AIzaSyAhOD5VxBVAXs91jT3KZIXxd4MOZv4scl8"
            defaultCenter={{
              lat: 37.25,
              lng: -122.15,
            }}
            defaultZoom={11}
          >
            <PokemonMarker
              lat={37.28}
              lng={-122.17}
              imageUrl={imageUrl}
              name={name}
            />
            <PokemonMarker
              lat={37.25}
              lng={-122.10}
              imageUrl={imageUrl}
              name={name}
            />
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

export default PokemonDetail;
