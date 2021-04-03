import MakeNameUpperCase from '../utils/MakeNameUpperCase.js'

const PokemonDetailsInfoTypes = ({pokemon}) => {

    return (
        <div className="staticInfo">
            <div className="pokemonType">Type(s):</div>
            {//function used to get the types
                pokemon.types.map(t => {
                    //console.log(t.type.name);
                    const typeName = MakeNameUpperCase(t.type.name);
                    return <div key={typeName} className="pokemonType">{typeName}</div>
                })
            }
        </div>
    )   
}

export default PokemonDetailsInfoTypes;