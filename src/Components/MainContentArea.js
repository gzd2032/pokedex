import { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import PokeContext from '../context/pokeContext.js'

import Home from './Home'
import PokemonDetails from './PokemonDetails'
import About from './About'

const MainContentArea = () => {
    const { state, dispatch } = useContext(PokeContext)
    return (
        <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pokemon/:id" component={({match})=>(<PokemonDetails match={match}/> )} />
          <Route exact path="/about" component={About} />
        </Switch>
      </main>
    );
}

export default MainContentArea;