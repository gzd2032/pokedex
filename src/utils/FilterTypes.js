import getPokemonId from './GetPokemonId.js'
import LoadPokemonData from './LoadPokemonData.js'
 

async function FilterTypes (typeId, callback) {
    if(typeId === "all"){
      LoadPokemonData("https://pokeapi.co/api/v2/pokemon/?limit=151", "load", callback)
       
    } else {
    
      const typeUrl = `https://pokeapi.co/api/v2/type/${typeId}`;
      const modDispatch = ({type, payload}) => {
        const modifiedResults = payload.reduce( (array, p) => {
            if(parseInt(getPokemonId(p.pokemon.url)) <= 151){
              return array = [...array, p.pokemon];
            } 
            return array;
        }, [])
        
        callback({type: type, payload: modifiedResults});
      }

      LoadPokemonData(typeUrl, "load", modDispatch);
    }
  }

  export default FilterTypes;