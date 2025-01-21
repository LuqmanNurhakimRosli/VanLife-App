import {Outlet, Link} from 'react-router-dom'
import './css/hostlayout.css'

function HostLayout() {
  return (
    <div>
        <header>
        <nav className="nav">
            <Link to="/host">Dashboard</Link>
            <Link to="/host/income">Income</Link>
            <Link to="/host/reviews">Reviews</Link>
        </nav>
    </header>
        <Outlet />
    </div>
  )
}

export default HostLayout