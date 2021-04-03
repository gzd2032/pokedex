import '../CSS/PokemonDetailsInfo.css';

import PokemonDetailsInfoTypes from './PokemonDetailsInfoTypes.js';
import PokemonDetailsInfoButtonBar from './PokemonDetailsInfoButtonBar.js';
import PokemonDetailsInfoPokeData from './PokemonDetailsInfoPokeData.js'

function PokemonDetailsInfo ({pokemon, id}){
    return(
        <div className="pokeDetails">
            <div className="pokeInfo">
                <PokemonDetailsInfoTypes pokemon={pokemon} />
                <PokemonDetailsInfoButtonBar id={id} />
                <PokemonDetailsInfoPokeData pokemon={pokemon}/>
            </div>
        </div>
    );
}

export default PokemonDetailsInfo;
/* {state &&//function used to get the locations
                    state.map(l =>{
                    }) }
                        return <div className="pokemonLocation">{l}</div>
                    //useffect since its gonna be another API call
                    //locationUrl = pokemon.location_area_encounters
                    //returns an array on objects, calling loc, we want loc.location_area.name for each loc in the array
                */