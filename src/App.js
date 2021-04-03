import { useEffect, useReducer } from 'react';
import './CSS/App.css';
import PokeContext from './context/pokeContext.js'
import Header from './Components/Header.js'
import MainContentArea from './Components/MainContentArea.js'

import LoadPokemonData from './utils/LoadPokemonData.js'

import initialState from './reducer/initialState.js'
import reducer from './reducer/reducer.js'


//[ DONE ] Home page (list all pokemon first 150 w/ picture)
//[ DONE] Click on Pokemon to view additional info path is /pokemon/bulbasaur/ goes to abilities
//[ DONE ] view info - abilities button - presented with a panel that defaults with their abilities
//[ DONE] view info - environment button - change panel to abilities.
//[DONE] About page - read info about the team that developed app
//[DONE ] On home page Dropdown box to filter pokemon by their types
//[DONE ] example “/pokemon/bulbasaur/environment” path that shows the environment panel for bulbasaour
// pokemon list - "https://pokeapi.co/api/v2/pokemon/?limit=20"
// abilities - "https://pokeapi.co/api/v2/pokemon/1/"
// environment (location area encounters) - "https://pokeapi.co/api/v2/pokemon/1/encounters"


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=> {
    LoadPokemonData("https://pokeapi.co/api/v2/pokemon/?limit=151", "load", dispatch)
  }, []);

  useEffect(()=>{
    LoadPokemonData("https://pokeapi.co/api/v2/type/", "loadTypes", dispatch)
  }, [])




  return (
    <PokeContext.Provider value={{state, dispatch}}>
      <div className="App">
        <Header />
        <MainContentArea />
      </div>
    </PokeContext.Provider>
  );
}

export default App;

// from state:
// name: "dratini"
// url: "https://pokeapi.co/api/v2/pokemon/147/"

// from types: name: "dratini"
// url: "https://pokeapi.co/api/v2/pokemon/147/"