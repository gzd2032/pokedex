import { Link } from 'react-router-dom';
const PokemonDetailsInfoButtonBar = ({id}) => {

    return(
        <div className="buttonBar">
            <Link to ={`/pokemon/${id}`}>Abilities</Link>
            <Link to ={`/pokemon/${id}/locations`}>Environment</Link>
        </div>
    )

}

export default PokemonDetailsInfoButtonBar;