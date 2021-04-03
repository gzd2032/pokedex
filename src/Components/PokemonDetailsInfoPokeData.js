import { Route, Switch } from 'react-router-dom';

import PokemonDetailsAbilities from './PokemonDetailsAbilities';
import PokemonDetailsLocation from './PokemonDetailsLocation';


const PokemonDetailsInfoPokeData = ({pokemon}) => {
    return (
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
    )
}

export default PokemonDetailsInfoPokeData;