import React from "react";
import Logo from '../../assets/logo.png';
import './navigation.css';
const Navigation=({handleLogout})=>{

    const logout=()=>{
        handleLogout();
    }
    return(
        <div>
            <nav>
                <img src={Logo} alt="Logo"/>
                <div className="nav_options">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a href="/">
                                Home
                            </a>
                            </li>
                        <li className="nav_item"><a href="/dashboard">
                        DashBoard
                            </a></li>
                        <li className="nav_item"><a href="#" onClick={logout}>
                                Log Out
                            </a></li>
                        <li className="nav_item"><a href="/create_user">
                            Create_User
                        </a></li>
                        <li className="nav_item"><a href="#aboutus">
                                About Us
                            </a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation