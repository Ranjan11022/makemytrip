import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import "./Train.css";
import Header from "../Header/Header";



const Train = () => {
  const handelBook = () => {
    console.log("click");
    
    window.history.pushState({}, '', "/checkout");
    window.location.reload()
  }
  const [trainData, setTrainData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      let response = await axios.get(
        `https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains`
      );
      console.log("response:", response.data);
      setTrainData(response.data);
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <div>
      <Header/>
      <h1>Availabel Tickets</h1>
      <div>
        <div>
          {trainData.map((post, index) => {
            const {
              from,
              to,
              departure,
              duration,
              kilometers,
              price,
              train_number,
            } = post;
            return (
              <div key={index} className="T-div">
                <div className="T-style">
                  <span>
                    <p>From</p>
                    <h3>{from}</h3>
                  </span>
                  <span>
                    <p>Departure</p>
                    <h3>
                      {departure?.departureTime} | {departure?.departureDate}
                    </h3>
                  </span>
                  <span>
                    <p>Price</p>
                    <h3>{price}</h3>
                  </span>
                  <span>
                    <p>To</p>
                    <h2>{to}</h2>
                  </span>
                  <span>
                    <p>Train No.</p>
                    <h3>{train_number}</h3>
                  </span>
                  <span>
                    <p>Kilometer</p>
                    <h3>{kilometers}</h3>
                  </span>
                  <span>
                    <p>Duration</p>
                    <h3>{duration}</h3>
                  </span>
                  <div className=" T-btns">
                    <button id="book" type="submit" onClick={handelBook}>
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
export default Train;
