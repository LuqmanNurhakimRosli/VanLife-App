import {Outlet, NavLink} from 'react-router-dom'
import './css/hostlayout.css'

function HostLayout() {
  return (
    <div>
        <nav className="host-nav">

            <NavLink 
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
             to="/host"
             //dapat hentikan render children jika route ini active
             end = {true}>
            Dashboard
            </NavLink>

            <NavLink className={({ isActive }) => (isActive ? "active-link" : undefined)} 
            to="/host/income">
            Income
            </NavLink>

            <NavLink className={({ isActive }) => (isActive ? "active-link" : undefined)} 
            to="/host/vans">
            Vans
            </NavLink>

            <NavLink className={({ isActive }) => (isActive ? "active-link" : undefined)} 
            to="/host/reviews">
            Reviews
            </NavLink>

        </nav>
        <Outlet />
    </div>
  )
}

export default HostLayout