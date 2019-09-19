import React from 'react';
import { Link } from "react-router-dom";
import { getPokemonInfo } from '../utils/api';

class PokemonPreview extends React.Component {
  state = {
    imageUrl: ''
  }

  componentDidMount() {
    getPokemonInfo(this.props.infoUrl)
      .then((pokemonInfo) => { 
        const { sprites } = pokemonInfo;
        console.log('fetched')
        this.setState({
          pokemonInfo,
          imageUrl: sprites.front_default,
        })
      })
  }

  render() {
    const { name } = this.props;
    const { imageUrl, pokemonInfo } = this.state

    return (
      <Link to={{
        pathname: `${name}`,
        state: {
          pokemonInfo,
          imageUrl,
          name
        }
      }}>
        <div className="preview-card">
          {imageUrl &&
            <img
              src={imageUrl}
              alt={`${name}`}
            />
          }
          <p>{name}</p>
        </div>
      </Link>
    )
  }
}

export default PokemonPreview;