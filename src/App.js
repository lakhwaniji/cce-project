import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Upload_stu_data from './components/Upload_stu_data/Upload_stu_data';
import Upload_fac_data from './components/Upload_fac_data/Upload_fac_data';

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
      (<SignIn handleLogin={handleLogin}/>):
      (<div>
        <Navigation handleLogout={handleLogout}/>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/upload_stu_data' element={<Upload_stu_data/>}/>
            <Route path='/upload_fac_data' element={<Upload_fac_data/>}/>
        </Routes>
      </Router>
      </div>)
      }
    </div>
  );
}

export default App;
