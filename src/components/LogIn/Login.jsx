import React, { useState, useEffect, useRef } from "react";
import { Link} from "react-router-dom";
import { FaLock } from "react-icons/fa";
import "./Login.css";
import Register from "../Ragister/Register";
import Flight from "../Flights/Flight";

const Login = () => {
 
  const [error, setError] = useState(false)
  const [useremail, setUseremail] = useState("")
  const [userpassword, setUserpassword] = useState("")
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");


 

  const handleSignIn = () => {
    if (
    useremail == localEmail &&
      userpassword == localPassword
    ) {
      localStorage.setItem("signUp", useremail);
     
      setError(false)
     
      window.history.pushState({}, '', "/");
      window.location.reload()

    } else {
    setError(true)
    }
  };
  console.log(useremail, userpassword)
  return (
    <>
      
        <div className="main">
          <form action="post">
            <div className="lock">
              <div className="icons">
                <FaLock size="23px" />
              </div>
              <h2>Log In</h2>
            </div>

            <div className="name">
              <label htmlFor="email" >Email</label>
            <input type="text" name="email" className="email" autoComplete="off" onChange={(e) => {
              setUseremail(e.target.value);
              }}></input>
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="password" autoComplete="off" onChange={(e) => {
              setUserpassword(e.target.value);
              }}></input>
          </div>
          {
            error?"Enter Valid Email Or Password" : null
          }
            <div className="button">
              <button type="button" onClick={handleSignIn}>
                Login
              </button>
            </div>
            <div className="link">
              <Link to="/register">New user? Sign Up</Link>
            </div>
          </form>
        </div>
      
    </>
  );
};

export default Login;
