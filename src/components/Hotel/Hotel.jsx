import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import "./Hotel.css";
import { Link } from "react-router-dom";
import HotelHeader from "../Header/HotelHeader";

const Hotel = () => {
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

  const [hotelData, setHotelData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      let response = await axios.get(
        `https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels`
      );
      console.log("response:", response.data);
      setHotelData(response.data);
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <div>
      <HotelHeader />
      <h1>Availabel Hotel</h1>
      <div>
        <div>
          {hotelData.map((post) => {
            const {
              city,
              hotel_name,
              check_in,
              check_out,
              room_type,
              price_per_night,
              guests,
              rating,
            } = post;
            return (
              <div key={hotel_name} className="M-div">
                <div className="S-style">
                  <span>
                    <p>Hotel Name</p>
                    <h3>{hotel_name}</h3>
                  </span>

                  <span>
                    <p>Check In</p>
                    <h3>{check_in}</h3>
                  </span>
                  <span>
                    <p>Price</p>
                    <h3>{price_per_night}</h3>
                  </span>
                  <span>
                    <p>City</p>
                    <h3>{city}</h3>
                  </span>
                  <span>
                    <p>Check Out</p>
                    <h3>{check_out}</h3>
                  </span>
                  <span>
                    <p>Room Type</p>
                    <h3>{room_type}</h3>
                  </span>
                  <span>
                    <p>Rating</p>
                    <h3>{rating}</h3>
                  </span>

                  <span>
                    <p>Guest</p>
                    <h3>{guests}</h3>
                  </span>

                  <div className="btnss">
                    <button id="books" type="submit" onClick={handelBook}>
                      Book
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hotel;
