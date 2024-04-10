import React from 'react'
import HomePage from './components/HomePage/HomePage'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  )
}

export default App
