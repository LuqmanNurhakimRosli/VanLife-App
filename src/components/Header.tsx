import {Link} from 'react-router-dom'
import './css/header.css'

function Header() {
  return (
    <header className="App-header">
        <Link className='logo-brand' to="/">#VanLife</Link>
        <nav className='nav'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </nav>
      </header>
  )
}

export default Header