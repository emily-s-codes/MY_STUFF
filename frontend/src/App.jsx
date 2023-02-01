import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Big from './pages/Big'
// import Small from './pages/Small'
// import Middle from './pages/Middle'
import Detail from './pages/Detail'
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Stuff from './pages/Stuff';

function App() {



  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/size/:stuff" element={<Stuff />} />

          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
