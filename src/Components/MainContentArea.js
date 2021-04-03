import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import PokemonDetails from './PokemonDetails'
import About from './About'


const MainContentArea = () => {
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