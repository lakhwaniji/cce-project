import React from "react";
import './user_creation.css';

const User_Creation=({user_role})=>{

    const createuser=async(event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const username =formData.get('username');
        const role=formData.get('role_type');
        const repassword=formData.get('repassword');
        if (user_role === "admin"){
            if (password!==repassword){
                window.alert('Password and repassword does not match');
            }
            else{
                try{
                    const response = await fetch('http://localhost:8000/createUser', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password,role,username }),
                });
                if (response.ok){
                    window.alert("New user created Successfully");
                }
                else{
                    window.alert("Internal Server Error. Please try again later.")
                }
                }
                catch (error) {
                    console.error('Error during registration:', error);
                    window.alert('Internal Server Error. Please try again later.');
                  }
            }
        }
        else{
            window.alert('You are not authorized to create a new user');
        }
    };



    return(
        <div className="container">
            <div className="content">
                <div className="create_user-head">Create User</div>
                <form onSubmit={createuser}>
                    <div className="create_user_line">
                    <div className="create_user_input">
                            <label>User Name</label>
                            <input type="name" name="username" placeholder="Ankit Godara" required/>
                        </div>
                    </div>
                    <div className="create_user_line">
                        <div className="create_user_input">
                            <label>Role Type</label>
                            <select name="role_type" required>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        </div>
                    <div className="create_user_line">
                    <div className="create_user_input">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="arron@gmail.com" required/>
                        </div>
                    </div>
                    <div className="create_user_line">
                        <div className="create_user_input">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Set a password for user" required/>
                        </div>
                    </div>
                    <div className="create_user_line">
                        <div className="create_user_input">
                            <label>Confirm Password</label>
                            <input type="password" name="repassword" placeholder="Retype the password" required/>
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