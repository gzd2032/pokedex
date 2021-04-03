function reducer(state, action){
    switch(action.type){
      case 'load':
        return {...state, pokemonList: action.payload}
      case 'loadTypes':
        return {... state, types: action.payload}
      default: 
        return state;
    }
  
  };

  export default reducer;