import About from './components/pages/About'
import Home from './components/pages/Home'
import Vans from './components/pages/Vans'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <header className="App-header flex justify-between items-center p-6 bg-white shadow-md">
        <Link className='logo-brand text-2xl font-bold' to="/">#VanLife</Link>
        <nav className='nav flex space-x-4'>
          <Link to='/' className="text-lg">Home</Link>
          <Link to='/about' className="text-lg">About</Link>
          <Link to='/vans' className="text-lg">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </Router>
  )
}

export default App