import About from './pages/About'
import Home from './pages/home' // Ensure this matches the actual file name
import Vans from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/income'
import Reviews from './pages/Host/Reviews'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

        </Route>
      </Routes>
    </Router>
  )
}

export default App