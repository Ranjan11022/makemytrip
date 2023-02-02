import logo from "./logo.svg";
import "./App.css";
import Hotel from "./components/Hotel/Hotel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Flight from "./components/Flights/Flight";
import Train from "./components/Train/Train";
import Navbar from "./components/Nav/Navbar";
import Login from "./components/LogIn/Login";
import Register from "./components/Ragister/Register";
import Header from "./components/Header/Header";
import { useState } from "react";
import Checkout from "./components/CheckOut/Checkout";
import Home from "./components/Home/Home";


function App() {
 
  

  return (
    <BrowserRouter>
      <Home/>
      {/* {userlogin && Userpassword && <Home/>} */}
      
     
    
  
      <Routes>
      <Route path="/" element={""}></Route>
        <Route path="/hotel" element={<Hotel />}></Route>
        <Route path="/flight" element={<Flight component={Checkout} />} ></Route>
        <Route path="/trains" element={<Train />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/checkout" element={<Checkout />} ></Route>
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
