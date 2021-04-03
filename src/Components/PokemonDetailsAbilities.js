import MakeNameUpperCase from '../utils/MakeNameUpperCase.js'

function PokemonDetailsAbilities({pokemon}){
    return(
        <>
            <h3>Abilities: </h3>
            { 
                pokemon.abilities.map(a =>{
                    const abilityName = MakeNameUpperCase(a.ability.name);
                    return (
                        <div key={abilityName} className="pokemonAbility">
                            {abilityName}
                        </div>
                    )
                })
            }
        </>
    )
}

export default PokemonDetailsAbilities;