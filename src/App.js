import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login'
import SellerDashboard from './Components/SellerLogin';
import BuyerDashboard from './Components/BuyerDashboard.jsx/BuyerLogin'
import './style.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/seller" element={<SellerDashboard/>} />
          <Route path="/buyer" element={<BuyerDashboard  />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
