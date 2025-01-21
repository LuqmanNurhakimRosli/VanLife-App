import {Link} from 'react-router-dom'
import './css/header.css'

function Header() {
  return (
    <header>
        <Link to="/" className="logo-brand">#VANLIFE</Link>
        <nav className="nav">
            <Link to="/host">Host</Link>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
        </nav>
    </header>
  )
}

export default Header