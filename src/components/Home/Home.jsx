import React from "react";
import './home.css'
const Home=()=>{
    return(
        <div className="home_container">
            <div className="home_content">
                <div className="home_user">
                    <div className="home_title">Hello</div>
                    <div className="home_title">Dr Arjun Singh </div>
                </div>
                <div className="home_buttons">
                    <ul>
                        <li>
                            <i class="material-symbols-outlined">
                                add_circle
                            </i>
                            <a href="#studentupload">
                                Student Upload
                            </a>
                        </li>
                        <li>
                            <i class="material-symbols-outlined">
                                add_circle
                            </i>
                            <a href="#facultyupload">Faculty Upload</a>
                        </li>
                        <li>
                        <i class="material-symbols-outlined">
                            dashboard
                        </i>
                            <a href="/dashboard">Dash Board</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <footer>
            © [2023] [Love, Aadhya, Ananya, Vedansh] | This project is developed by a student's of Manipal University Jaipur | Designed for Department of CCE | All rights reserved
            </footer>            
        </div>
    )
}


export default Home