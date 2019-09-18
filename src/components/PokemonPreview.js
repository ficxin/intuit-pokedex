import React from 'react';
import { getPokemonInfo } from '../utils/api';

class PokemonPreview extends React.Component {
  state = {
    imageUrl: ''
  }

  componentDidMount() {
    getPokemonInfo(this.props.infoUrl)
      .then((pokemonInfo) => { 
        const { sprites } = pokemonInfo;

        this.setState({
          pokemonInfo,
          imageUrl: sprites.front_default,
        })
      })
  }

  render() {
    const { name } = this.props;
    const { imageUrl } = this.state

    return (
      <div className="preview-card">
        {imageUrl &&
          <img
            src={imageUrl}
            alt={`${name}`}
          />
        }
        <p>{name}</p>
      </div>
    )
  }
}

export default PokemonPreview;