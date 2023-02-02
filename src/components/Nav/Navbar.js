import { Link } from "react-router-dom";
import { FaHotel, FaPlane, FaTrain, FaUser } from "react-icons/fa";
import './NavBar.css'




const Navbar = () => {
  let userName = localStorage.getItem("name")
  

  return (
    <div className="header">
       <img src="https://x6c2s5x4.rocketcdn.me/wp-content/uploads/2022/09/Makemytrip-Franchise-Logo.png" alt="MakeMytrip"></img>
      <ul type="none">        
        <li>
          
          <Link to="/hotel"><FaHotel/>Stays</Link>
        </li>
        <li>
          
          <Link to="/flight"><FaPlane/>Flight</Link>
        </li>
        <li>
          
          <Link to="/trains"><FaTrain />Train</Link>
        </li>
        <li>
          
          
          {

            userName ? <Link to="/login"><FaUser />{userName}</Link> : <Link to="/register"><FaUser />Login</Link>

}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
