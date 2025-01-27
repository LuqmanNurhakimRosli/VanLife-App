import About from './pages/About'
import Home from './pages/home' // Ensure this matches the actual file name
import Vans from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import HostLayout from './pages/Host/HostLayout'
import HostVans from './pages/Host/HostVans'
import HostVansDetail from './pages/Host/HostVansDetail'
import HostVansInfo from './pages/Host/HostVansInfo'
import HostVansPhotos from './pages/Host/HostVansPhotos'
import HostVansPrice from './pages/Host/HostVansPrice'
import NotFound from './pages/NotFound'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />

            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans />} />

              <Route path="vans/:id" element={<HostVansDetail />} >
                  <Route index element={<HostVansInfo />} />
                  <Route path="pricing" element={<HostVansPrice />} />
                  <Route path="photos" element={<HostVansPhotos />} />
              </Route>
              
              <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={ <NotFound /> } />

        </Route>
      </Routes>
    </Router>
  )
}

export default App