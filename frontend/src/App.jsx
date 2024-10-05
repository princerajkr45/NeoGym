import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Why from './components/Why'
import Trainner from './components/Trainner'
import Contact from './components/Contact'
import LogIn from './components/LogIn'
import SignIn from './components/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/why' element={<Why />} />
          <Route path='/trainner' element={<Trainner />} />
          <Route path='/contact' element={<Contact />} /> 
          <Route path='/login' element={<LogIn />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>

    </Router>
    </>
  )
}

export default App
