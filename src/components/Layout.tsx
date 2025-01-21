import {Outlet} from 'react-router-dom'
import Header from './Header'
import './css/layout.css'

function Layout() {
  return (
    <>
        <Header />
        <div className="outlet-wrapper">
            <Outlet />
        </div>
    </>
  )
}

export default Layout