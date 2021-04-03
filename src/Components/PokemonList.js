import PokemonListEntry from './PokemonListEntry'
import '../CSS/PokemonList.css';
import getPokemonId from '../utils/GetPokemonId.js'


function PokemonList ({pokemon}){
    return(
        <div className="pokemonList">
            {pokemon.map((p)=>{
                const id = getPokemonId(p.url)
                return <PokemonListEntry key={id} pokemon={p}/>
            })}
        </div>
    )
}

export default PokemonList;

//{name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}