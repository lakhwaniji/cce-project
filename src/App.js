import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UploadStuData from './components/UploadStuData/UploadStuData';
import UploadFacData from './components/UploadFacData/UploadFacData';
import UserCreation from './components/UserCreation/UserCreation';

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
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/upload_stu_data' element={<UploadStuData/>}/>
            <Route path='/upload_fac_data' element={<UploadFacData/>}/>
            <Route path='/create_user' element={<UserCreation/>}/>
        </Routes>
      </Router>
      </div>)
      }
    </div>
  );
}

export default App;
