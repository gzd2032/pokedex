import MakeNameUpperCase from '../utils/MakeNameUpperCase.js'

const PokemonDetailsHeader = ({ pokemon, id }) => {
    const pokemonName = pokemon && MakeNameUpperCase(pokemon.name);
    const imgSrcUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`


    return (
        <>
            <div className="head">
                    <h1>{pokemon && pokemonName}</h1>
                    <h2>Number: {id}</h2>
            </div>
            <div className="pokeImage"><img src={imgSrcUrl} alt={pokemon ? pokemonName : "pokemon"} width="200px" height="200px" /> </div>
        </>
    )
}

export default PokemonDetailsHeader;