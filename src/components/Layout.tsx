import {Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

import './css/layout.css'

function Layout() {
  return (
    <div>
        <Header />
        <main className="outlet-wrapper">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout