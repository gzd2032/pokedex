const LoadPokemonData = async (url, action, callback) => {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results ? data.results : data.pokemon
    callback({type: action, payload: results}) 

}

export default LoadPokemonData;