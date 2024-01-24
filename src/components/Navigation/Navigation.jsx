import React from "react";
<<<<<<< Updated upstream

const Navigation = () => {
  return (
    <>
      <div style={{ height: "15%", backgroundColor: "var(--orange)" }}>Navigation</div>
    </>
=======
import Logo from "../../assets/logo.png";
import "./navigation.css";
const Navigation = ({ setUser }) => {
  // api endpoint to logout user
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  return (
    <div>
      <nav>
        <img src={Logo} alt="Logo" />
        <div className="nav_options">
          <ul className="nav_list">
            <li className="nav_item">
              <a href="/">Home</a>
            </li>
            <li className="nav_item">
              <a href="/dashboard">DashBoard</a>
            </li>
            <li className="nav_item">
              {/* api endpoint to logout user */}
              <a href="#" onClick={logout}>
                Log Out
              </a>
            </li>
            <li className="nav_item">
              <a href="/create_user">Create_User</a>
            </li>
            <li className="nav_item">
              <a href="#aboutus">About Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
>>>>>>> Stashed changes
  );
};

export default Navigation;
