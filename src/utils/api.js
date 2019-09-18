export function getPokemons() {
  return fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`)
    .then((res) => res.json())
    .then((data) => {
      if (data.results.length === 0) {
        throw new Error(`You exceeded request rate limit at this time`);
      }
      return data;
    })
}

export function getPokemonInfo(url) {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    }) 
}
