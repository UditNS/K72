import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agence from './pages/Agence'

function App() {
  
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/agence' element={<Agence />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  )
}

export default App
