import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainScreen from './screens/MainScreen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainScreen/>}/>
      </Routes>
    </Router>
  )
}

export default App
