
import Flight from "../Flights/Flight";
import "./Header.css";
import React, { useEffect, useState } from "react";



const Header = (props) => {
  
  // const [fromvalue, setFromValue] = useState("");
  // const [tovalue, setToValue] = useState("");
  // const handeSearchData = () => {
   
  //   console.log(fromvalue );
  //   console.log(tovalue);
  //   const searching = (data) => {
  //     return data.filter((item) => item.from.toLowerCase().includes(search))
  //   }
  
  // }
  
  
  return (
    <>
      <div className="M-style">
        <div className="H-style">
          <label for="trip">Trip Type : </label>

          <select id="trip">
            <option>One Way</option>
            <option>Two Way</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="from">From :</label>
          <input type="text" id="from" placeholder="Delhi" onChange={(e) => setFromValue(e.target.value)}/>
        </div>
        <div >
          <label htmlFor="to">TO :</label>
          <input type="text" id="to" placeholder="Mumbai" onChange={(e) => setToValue(e.target.value)}></input>
        </div >
        <div>
          <label htmlFor="date">DEPARTURE</label>
          <input type="date" id="date"></input>
        </div>
        <div>
          <label htmlFor="date-2">RETURN</label>
          <input type="date" id="date"></input>
        </div>
      </div>
      <div className="btn">
        <button type="submit" id="btn" >
          Search
        </button>
      
      </div>
    </>
  );
};

export default Header;
