import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="App-header">
            <Link to = '/'>
                <h1>Pokedex&trade;</h1>
            </Link>
            <Link to ='/about'>
                <span>About</span>
            </Link>
        
      </header>
    );
}

export default Header;