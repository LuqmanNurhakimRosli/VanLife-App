import {Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

import './css/layout.css'

function Layout() {
  return (
    <>
        <Header />
        <main className="outlet-wrapper">
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Layout