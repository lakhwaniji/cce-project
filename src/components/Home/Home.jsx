import React from "react";
import './home.css'
const Home=({username})=>{
    return(
        <div className="home_container">
            <div className="home_content">
                <div className="home_user">
                    <div className="home_title">Hello</div>
                    <div className="home_title">Dr {username}</div>
                </div>
                <div className="home_buttons">
                    <ul>
                        <li>
                            <a href="/upload_stu_data">
                                Student Upload
                            </a>
                        </li>
                        <li>
                            <a href="/upload_fac_data">Faculty Upload</a>
                        </li>
                        <li>
                            <a href="/dashboard">Dash Board</a>
                        </li>
                        
                    </ul>
                </div>
                
            </div> 
            <footer>
                    © [2023] | This project is developed by a student's of Manipal University Jaipur | Designed for Department of CCE | All rights reserved
            </footer>          
        </div>
    )
}


export default Home