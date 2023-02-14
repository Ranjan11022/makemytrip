import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Flight.css";
import Checkout from "../CheckOut/Checkout";
import { Link } from "react-router-dom";
import Header from "../Header/Header";


const Flight = () => {
  
 
  const [flightData, setFlightData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      let response = await axios.get(
        `https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights`
        
      );
      // console.log("response:", response.data);
      setFlightData(response.data);
    } catch (error) {
      console.log("error:", error);
    }
  };
  const handelBook = () => {
    let useremail = localStorage.getItem("email");
    let userpassword = localStorage.getItem("password");
    console.log("click");
    if (useremail && userpassword) {
      window.history.pushState({}, "", "/checkout");
      window.location.reload();
    } else {
      window.history.pushState({}, "", "/login");
      window.location.reload();
    }
  };
 
  return (
    <div>
      <Header/>
      <h1>Availabel Tickets</h1>
      <div>
        <div>
          {flightData.map((post, index) => {
            const {
              from,
              to,
              departure,
              return:arivalTime,
              airlineName,
              via,
              price,
              duration,
            } = post;
            // console.log(post);
            return (
              <>
                
                <div key={index}  className="main-div">
                
                  <div className="style">
                    <span>
                      <p>FROM : </p>
                      <h3>{from}</h3>
                    </span>

                    <span>
                      <p>DEPARTURE</p>
                      <h3>
                        {departure?.departureTime} | {departure?.departureDate}
                      </h3>
                            </span>
                            <span>
                      <p>PRICE</p>
                      <h3>{price}</h3>
                            </span>
                            <span>
                      <p>TO :</p>
                      <h3>{to}</h3>
                            </span>
                            <span>
                      <p>RETURN</p>
                      <h3>{arivalTime?.returnDate} | {arivalTime?.returnTime}</h3>
                      
                              
                            </span>
                            <span>
                      <p>VIA</p>
                      <h3>{via} --</h3>
                    </span>
                    <span>
                      <p>AIRLINE</p>
                      <h3>{airlineName}</h3>
                    </span>
                    <span>
                      <p>DURATION</p>
                      <h3>{duration}</h3>
                    </span>
                  
                   
                    <div className="btns">
                      <button id="book" type="submit" onClick={handelBook}>
                        Book
                      </button>
                    </div>
                    
                        </div>
                       
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Flight;
