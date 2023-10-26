import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../Styles/SignIn.scss";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import {
  SigninData,
  loginFailureAction,
  loginRequestAction,
  loginSuccessAction,
} from "../Redux/Authentication/action";
import axios from "axios";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(false);
  const [alertmsg, setAlertMsg] = useState("");
  const [auth, setAuth] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userEmail = "" } = useParams();

  const handleSignin = (e) => {
    e.preventDefault();
    const payload = { name: name, email: email, password: password };
    dispatch(loginRequestAction());
    axios
      .post(`http://localhost:8080/register`, payload)
      .then((res) => {
        dispatch(loginSuccessAction(res.data.token));
        if (
          res.data.message === "User registered successfully" &&
          res.data.token
        ) {
          setMsg(true);
          setAlertMsg(res.data.message);
          setTimeout(() => {
            setMsg(false);
          }, 3000);
          navigate("/Menu");
          localStorage.setItem("authToken", res.data.token);
        } else if (res.data.message === "Email is already in use") {
          setMsg(true);
          setAlertMsg(res.data.message);
          setTimeout(() => {
            setMsg(false);
          }, 3000);
        } else {
          setMsg(true);
          setAlertMsg(res.data.message);
        }
      })
      .catch((err) => {
        dispatch(loginFailureAction());
      });
  };



  const [googleLoginSuccess, setGoogleLoginSuccess] = useState(false);
  const handleGoogleLogin = () => {
    window.location.href = `http://localhost:8080/auth/google`
    localStorage.setItem('access_token', "success");
  };
  console.log(googleLoginSuccess)




  return (
    <div className="main">
      <div className="container">
        <div className="nav1">
          <p onClick={() => navigate("/")} className="head">
            freeCodeCamp(🏳️)
          </p>
          <p>{auth}</p>
        
        </div>
      </div>
      <div className="formdiv">
        <img
          src="https://cdn.freecodecamp.org/platform/universal/logo-512X512.png"
          alt=""
          width={30}
        />
        <p className="texts">Log in to freeCodeCamp Learn</p>
        {msg && <p className="alertmsg">{alertmsg}</p>}

 
        <button className="signingoogle" onClick={handleGoogleLogin}>
          <FcGoogle className="gicon" />
          Continue with Google
        </button>
        <p className="or">Or</p>
        <form className="form" onSubmit={handleSignin}>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(obj) => setName(obj.target.value)}
            required
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(obj) => setEmail(obj.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(obj) => setPassword(obj.target.value)}
            required
          />
          <button>Continue With Email</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
