import About from './components/pages/About'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <header className="App-header">
      <nav className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App