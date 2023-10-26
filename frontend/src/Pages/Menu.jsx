import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../Styles/Menu.scss"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BiLogoJavascript } from 'react-icons/bi'
import axios from "axios";
import { GetDataError, GetDataReq, GetDataSuccess } from "../Redux/Product/action";

const Menu = () => {
  const navigate = useNavigate();
  const authtoken = localStorage.getItem("authToken") || localStorage.getItem('access_token');;
  const dispatch = useDispatch()
  const [detail, setDetail] = useState([])

  const GetDataDetails = () => dispatch  => {
    dispatch(GetDataReq())
    axios.get(`http://localhost:8080/get`).then((res) => {
      dispatch(GetDataSuccess())
      setDetail(res.data)
    })
    .catch((err) => {
      dispatch(GetDataError(err))
    })
  }

  useEffect(() => {
    dispatch(GetDataDetails())
  },[])
  return (
    <div className="maincontainer">
      <div className="container">
        <div className="nav1">
          <p onClick={() => navigate("/")} className="head">
            freeCodeCamp(🏳️)
          </p>
          {authtoken && <p className="alert">Signin Successfully</p>}
        </div>
      </div>
      <div className="alldata">
        {detail.length>0 && detail.map((el,index) => {
          return(
            <div key={index} className="detaildata">
              <p><BiLogoJavascript className="icons" /></p>
              <p className="details">{el.text}</p>
              <p className="details">Duration :- {el.duration}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Menu;
