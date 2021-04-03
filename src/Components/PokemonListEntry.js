import '../CSS/PokemonEntry.css'
import { Link } from 'react-router-dom'
import getPokemonId from '../utils/GetPokemonId.js'
import MakeNameUpperCase from '../utils/MakeNameUpperCase.js'

function PokemonListEntry({pokemon}){
    // console.log("Pokemon.name", pokemon.name)
    const pokemonName = MakeNameUpperCase(pokemon.name);
    const pokeId = getPokemonId(pokemon.url)
    return(
        <Link to={`/pokemon/${pokeId}`}>
            <div className="pokemonEntry">  
                <div className="pokemon">{pokemonName} <br/>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`} alt={pokemon.name}></img></div>       
            </div>
        </Link>
    ); 
}


export default PokemonListEntry;

// pokemon url -"https://pokeapi.co/api/v2/pokemon/131/,
//
// image url - https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png,

//pokemon.url.split("https://pokeapi.co/api/v2/pokemon/")
//returns urlSplit = [https://pokeapi.co/api/v2/pokemon/ , ID]
// img src = 'https://pokeapi.co/api/v2/pokemon/'+'urlSplit[1]'



//call getImage(pokemon.url)