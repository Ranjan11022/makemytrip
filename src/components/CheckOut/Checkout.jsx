import React from "react";
import "./Checkout.css";
import { FaRupeeSign } from "react-icons/fa";
import Flight from "../Flights/Flight";

const Checkout = (props) => {
  return (
    <>
      <div className="Main-div">
        <div className="first">
          <h1>Fare Summary</h1>
          <div className="f-inside">
            <span>
              <h4>Base Fare </h4>
              <h4>
                <FaRupeeSign size={14}/>
                5,257
              </h4>
            </span>
            <span>
              <h4>Fee & Surcharges</h4>
              <h4>
                <FaRupeeSign size={14}/> 740  
              </h4>
            </span>
            <span>
              <h4>Total amount</h4>
              <h4>
                <FaRupeeSign size={14} />5,997
              </h4>
            </span>
          </div>
        </div>
        <div className="second">
          <h1>Payment Method</h1>
          <div className="s-second">
            <div className="input">
              <input type="text" placeholder="Name On Card" />
              <input type="text" placeholder="Card Number" />
              <input type="text" placeholder="Expiry Date" />
              <input type="text" placeholder="CVV" />
            </div>
            <div className="pays">
              <button type="submit" className="pay">
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
