import { useEffect, useState } from 'react'

import PokemonDetailsHeader from './PokemonDetailsHeader.js'
import PokemonDetailsInfo from './PokemonDetailsInfo.js';


import '../CSS/PokemonDetails.css'

const PokemonDetails = ({match}) => {
    const [currentPokemon, setCurrentPokemon] = useState(null);

    useEffect(() => {
        getPokemonInfo(`https://pokeapi.co/api/v2/pokemon/${match.params.id}/`)
        async function getPokemonInfo(url){
            const response = await fetch(url);
            const pokeInfo = await response.json();
            setCurrentPokemon(pokeInfo);  
    }}, 
    [match])
   
    return (
        <div className="container">
            {currentPokemon && (
                <>
                    <PokemonDetailsHeader pokemon={currentPokemon} id={match.params.id} />
                    <PokemonDetailsInfo pokemon={currentPokemon} id={match.params.id}/>
                </>
            )}
        </div>
    )
}


export default PokemonDetails


//https://pokeapi.co/api/v2/type/{id or name}/ TYPES


//https://pokeapi.co/api/v2/pokemon/{id or name}/encounters LOCATION

//https://pokeapi.co/api/v2/ability/{id or name}/ ABILITIES