import {Outlet, NavLink} from 'react-router-dom'
import '../css/HostLayout.css'

function HostLayout() {
  return (
    <div>
        <nav className="host-nav">

            <NavLink 
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
             to="."
             //dapat hentikan render children jika route ini active
             end = {true}>
            Dashboard
            </NavLink>

            <NavLink className={({ isActive }) => (isActive ? "active-link" : undefined)} 
            to="income">
            Income
            </NavLink>

            <NavLink className={({ isActive }) => (isActive ? "active-link" : undefined)} 
            to="vans">
            Vans
            </NavLink>

            <NavLink className={({ isActive }) => (isActive ? "active-link" : undefined)} 
            to="reviews">
            Reviews
            </NavLink>

        </nav>
        <Outlet />
    </div>
  )
}

export default HostLayout