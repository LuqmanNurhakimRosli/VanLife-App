import About from './pages/About'
import Home from './pages/home' // Ensure this matches the actual file name
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id/" element={<VanDetail />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App