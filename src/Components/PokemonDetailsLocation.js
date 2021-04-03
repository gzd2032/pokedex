import {useEffect, useState} from 'react';

function PokemonDetailsLocation({pokemon}){

    const [locations, setLocations] = useState(null);

    useEffect(()=>{
     const locations = getLocations(pokemon.location_area_encounters);
     async function getLocations(url){
         const response = await fetch(url);
         const locations = await response.json(); //array of objects
         setLocations(locations);
     }
     }, [])
     //if locations exists 
     
    return(
        <div>
            <h4>This pokemon can be found in the following areas:</h4>
            
            {!locations && <h1>Loading....</h1>}
            {locations && (locations.length > 0) && locations.map(l => {
                    return (
                        <div 
                            key={l.location_area.name} 
                            className="location">{l.location_area.name}
                        </div>)
                }
            )}
            {locations && (locations.length === 0) && <h2>Can not be found in the wild!</h2>}
            
        </div>
    )
  
}

export default PokemonDetailsLocation;