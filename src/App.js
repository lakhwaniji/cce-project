import './App.css';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App=()=> {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="App">
      {!isLoggedIn ? 
      (<SignIn/>):
      (<div>
        <Navigation/>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
      </div>)
      }
    </div>
  );
}

export default App;
