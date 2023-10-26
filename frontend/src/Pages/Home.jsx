import React from "react";
import Navbar from "../components/Navbar";
import { BsApple, BsGoogle, BsMicrosoft, BsSpotify } from "react-icons/bs";
import { BiLogoAmazon } from "react-icons/bi";
import "../Styles/Home.scss";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate()
  
  
  return (
    <div className="home">
      <Navbar />
      <div className="text">
        <h1>Learn to code — for free.</h1>
        <h1>Build projects.</h1>
        <h1>Earn certifications.</h1>
        <p className="subhead">
          Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
          jobs at tech companies including:
        </p>
      </div>
      <div className="icons">
        <BsApple />
        <BsGoogle />
        <div className="iconflex">
          <BsMicrosoft />
          Microsoft
        </div>
        <div className="iconflex">
          <BsSpotify />
          Spotify
        </div>
        <div className="iconflex">
          <BiLogoAmazon />
          Amazon
        </div>
      </div>
      <button className="getbtn" onClick={() => navigate("/Menu")}>Get Started</button>
    </div>
  );
};

export default Home;
