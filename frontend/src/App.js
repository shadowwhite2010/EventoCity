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
import AddEvent from './components/AddEvent';
import EventDetail from './components/EventDetail';

function App() {

  const [u_id, setuid] = useState(5);

  useEffect(() => {
    setuid(5);
    localStorage.setItem('u_id', u_id);
    
    fetch(`http://127.0.0.1:8000/api/user/${localStorage.getItem('u_id')}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(resp => resp.json()).then(resp => {
      console.log(resp);
      localStorage.setItem('UserPhotoName', resp.UserPhotoName);
      localStorage.setItem('address', resp.address);
      localStorage.setItem('email', resp.email);
      localStorage.setItem('full_name', resp.full_name);
    }).then(error => console.log(error))
    // getUser();
  }, [])

  return (
    <Router>
        <Navbar/>
        <div>
          <Routes>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/profile/*" element={<Profile />}></Route>
            <Route exact path="/addevent" element={<AddEvent />}></Route>
            <Route exact path="/:id" element={<EventDetail />}></Route>
            <Route exact path="/" element={<Auth />}></Route>
            <Route path="/" element={<div>404</div>}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
  );
}

export default App;
