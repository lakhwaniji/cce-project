import React from "react";
import './user_creation.css';

const User_Creation=()=>{
    return(
        <div className="container">
            <div className="content">
                <div className="create_user-head">Create User</div>
                <form>
                    <div className="upload_fac_line">
                        <div className="create_user_input">
                            <label>Role Type</label>
                            <select name="role_type">
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                    </div>
                    <div className="create_user_line">
                    <div className="create_user_input">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="arron@gmail.com"/>
                        </div>
                    </div>
                    <div className="create_user_line">
                        <div className="create_user_input">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Set a password for user"/>
                        </div>
                    </div>
                    <div className="create_user_line">
                        <div className="create_user_input">
                            <label>Confirm Password</label>
                            <input type="password" name="password" placeholder="Retype the password"/>
                        </div>
                    </div>
                    <div className='submission_create_user'>
                        <button type='submit'>
                        Create User</button>
                    </div>
                </form>
            </div>
            <footer>
            © [2023] [Love, Aadhya, Ananya, Vedansh] | This project is developed by a student's of Manipal University Jaipur | Designed for Department of CCE | All rights reserved
        </footer>
        </div>
    )
}

export default User_Creation