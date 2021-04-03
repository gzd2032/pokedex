import '../CSS/PokemonDetailsInfo.css';
import PokemonDetailsAbilities from './PokemonDetailsAbilities';
import { Link, Route, Switch } from 'react-router-dom'
import PokemonDetailsLocation from './PokemonDetailsLocation';
import MakeNameUpperCase from '../utils/MakeNameUpperCase.js'


function PokemonDetailsInfo ({pokemon, id}){
    return(
        <div className="pokeDetails">

        <div className="pokeInfo">
            
            <div className="staticInfo">
                <div className="pokemonType">Type:</div>
                {//function used to get the types
                    pokemon.types.map(t => {
                        //console.log(t.type.name);
                        const typeName = MakeNameUpperCase(t.type.name);
                        return <div key={typeName} className="pokemonType">{typeName}</div>
                    })
                }
            </div>
            <div className="buttonBar">
                <Link to ={`/pokemon/${id}`}>Abilities</Link>
                <Link to ={`/pokemon/${id}/locations`}>Environment</Link>
            </div>
            <div className="pokeData">
                <Switch>
                    <Route exact path='/pokemon/:id'>
                        <PokemonDetailsAbilities pokemon={pokemon}/>
                    </Route>
                    <Route path='/pokemon/:id/locations'>
                        <PokemonDetailsLocation pokemon={pokemon}/>
                    </Route>
                </Switch>  
            </div>
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