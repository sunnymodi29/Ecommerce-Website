import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Login from './components/Login';
import Shop from './components/Shop';



function App() {

  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/cart' element={<Cart />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </Router>
    </>
  );
}

export default App