import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import UploadStuData from './components/UploadStuData/UploadStuData';
import UploadFacData from './components/UploadFacData/UploadFacData';
import UserCreation from './components/UserCreation/UserCreation';
import {jwtDecode} from 'jwt-decode';
const App=()=> {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if token is present in local storage
    const token = localStorage.getItem('token');
    if (token) {
      try {
        // Decode the token to get user information
        const decodedUser = jwtDecode(token);
        setUser(decodedUser.user);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);
  return (
    
    <div className="App">
      {!user? 
      (<SignIn setUser={setUser}/>):
      (<div>
        <Navigation setUser={setUser}/>
        <Router>
          <Routes>
            <Route path='/' element={<Home username={user.username}/>}/>
            <Route path='/dashboard' element={<Dashboard user={{user}}/>}/>
            <Route path='/upload_stu_data' element={<UploadStuData user={{user}}/>}/>
            <Route path='/upload_fac_data' element={<UploadFacData user_email={user.email}/>}/>
            <Route path='/create_user' element={<UserCreation user_role={user.role}/>}/>
        </Routes>
      </Router>
      </div>)
      }
    </div>
  );
}

export default App;
