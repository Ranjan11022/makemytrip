import React from 'react'
import "./Header.css";

const HotelHeader = () => {
  return (
      <>
      <div className="M-style">
        <div className="H-style">
          <label for="trip">Room Type : </label>

          <select id="trip">
            <option>Singel</option>
            <option>Double</option>
          </select>
          
        </div>
        
        <div>
          <label htmlFor="city"> Location :</label>
          <input type="text" id="city" placeholder="Goa" onChange={(e) => setFromValue(e.target.value)}/>
        </div>
        <div >
          <label htmlFor="in">Check In :</label>
          <input type="date" id="in"  onChange={(e) => setToValue(e.target.value)}></input>
        </div >
        <div>
          <label htmlFor="out">Check Out :</label>
          <input type="date" id="out"></input>
        </div>
        <div>
          <label htmlFor="guest">Guests</label>
          <input type="text" id="guest" placeholder='2'></input>
        </div>
      </div>
      <div className="btn">
        <button type="submit" id="btn" >
          Search
        </button>
      
      </div></>
  )
}

export default HotelHeader