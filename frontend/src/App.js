import './CSS/styles.css';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Home from './components/Home';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <Navbar/>
        <div>
          <Routes>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route exact path="/" element={<Auth />}></Route>
            <Route path="/" element={<div>404</div>}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
  );
}

export default App;
