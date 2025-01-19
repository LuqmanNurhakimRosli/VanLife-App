import About from './components/pages/About'
import Home from './components/pages/Home'
import Vans from './components/pages/Vans'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <Router>
      <header className="App-header">
        <Link className='logo-brand' to="/">#VanLife</Link>
          <nav className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/vans'>Vans</Link>
          </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans  />} />
      </Routes>
    </Router>
  )
}

export default App