import { useContext } from 'react'
import PokeContext from '../context/pokeContext.js'
import FilterTypes from '../utils/FilterTypes.js'
import '../CSS/DropDownFilter.css'

const DropDownFilter = () => {
    const { state, dispatch } = useContext(PokeContext)
    
    const handleFilterByTypes = (e) => {
        if (state.types && e.target.value) {
            FilterTypes(e.target.value, dispatch)
        }
    }

    return (
        <div className="typeFilter">
              <label forhtml="types">Filter types:</label>
              <select name="types" onChange={handleFilterByTypes}>
                <option >Select Filter Type</option>
                <option value="all">all</option>
                {
                  state.types && state.types.map( t => {
                    const urlArray = t.url.split("/")
                    const typeId = urlArray[6]
                    return ( <option key={t.name} value={typeId}> {t.name}   </option> )
                  })
                }
              </select>
        </div>
    )
}

export default DropDownFilter;