import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { FaUserCircle } from "react-icons/fa";

import Login from "../LogIn/Login";

const Register = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleClick = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);

      window.history.pushState({}, "", "/");
      window.location.reload();
    }
  };

  return (
    <>
      <div className="main-sec">
        <form action="post">
          <div className="user">
            <FaUserCircle size="30px" />
            <h2>Register</h2>
          </div>

          <div>
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              name="name"
              id="Name"
              ref={name}
              placeholder="Enter Name"
              autoComplete="off"
            ></input>
          </div>
          <div>
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              name="email"
              id="Email"
              ref={email}
              placeholder="Enter Email"
              autoComplete="off"
            ></input>
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              name="password"
              id="Password"
              ref={password}
              placeholder="Enter Password"
              autoComplete="off"
            ></input>
          </div>
          <div className="reg-button">
            <button type="button" onClick={handleClick}>
              Sign Up
            </button>
          </div>
          <div className="link-reg">
            <Link to="/login">LogIn</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
