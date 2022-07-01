import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CheckOut from './components/Checkout/CheckOut';

function App() {
  return (
    <Router>
      <div className="App">

          <Header/>
          <Routes>

            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/checkout" element={<CheckOut/>} />

          </Routes>
      </div>
    </Router>
  );
}

export default App;
