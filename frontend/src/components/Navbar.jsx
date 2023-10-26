import React from "react";
import "../Styles/Navbar.scss";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const authtoken = localStorage.getItem("authToken") || localStorage.getItem('access_token');

  const handleSignout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem('access_token')
    navigate("/Signin");
  };

  return (
    <div className="container">
      <div className="nav1">
        <p onClick={() => navigate("/")} className="head">
          freeCodeCamp(🏳️)
        </p>
      </div>
      {authtoken && <p className="alert">Signin Successfully</p>}
   
      <div className="nav2">
        <button onClick={() => navigate("/Menu")}>Menu</button>
        <button onClick={authtoken ? handleSignout : () => navigate("/Signin")}>
          {authtoken ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
