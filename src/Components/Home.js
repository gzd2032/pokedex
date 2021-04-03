import { useContext } from 'react'
import PokeContext from '../context/pokeContext.js'
import PokemonList from './PokemonList'
import DropdownFilter from './DropDownFilter.js'


const Home = ({match}) => {
    const { state } = useContext(PokeContext)

    return (
        <>
            <DropdownFilter />
            {state.pokemonList 
                ? <PokemonList pokemon={state.pokemonList} /> 
                : <h1>Loading...</h1>}
        </>
    )
}

export default Home;