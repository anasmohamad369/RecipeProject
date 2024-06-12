import React, { useState } from 'react';
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
const Nav1 = () => {
  const [isLinksVisible, setIsLinksVisible] = useState(false);

  const toggleLinks = () => {
    setIsLinksVisible(prevState => !prevState);
  };
  let data = localStorage.getItem("user")
  

  return (
    <div className="mobile-container">
      <div className="topnav">
        <a href="/home" className="active"><img src='../public/WAJAB.png' style={{ height: "100px", width: "100px" }} /></a>
        <div className="divnav"style={{ display: isLinksVisible ? 'block' : 'none' }} id="myLinks">
          <NavLink
            to="/home"
            style={({ isActive }) => ({
              color: isActive
                ? "green"
                : "white",
            })}
            className="st5" >Home</NavLink>
        
         {data === null && <NavLink
            to="/login"
            style={({ isActive }) => ({
              color: isActive
                ? "green"
                : "white",
            })}
            className="st5" >Login</NavLink>}
        {  data !== null && <NavLink
            to="/Login"
            style={({ isActive }) => ({
              color: isActive
                ? "green"
                : "white",
            })}
            className="st5" onClick={()=>{localStorage.clear(); toast.success("Logout succesfull")}} >Logout</NavLink>}
          <NavLink 
            to="/own"
            style={({ isActive }) => ({
              color: isActive
                ? "green"
                : "white",
            })}
            className="st5" >Your Recipe</NavLink>
          <NavLink
            to="/create"
            style={({ isActive }) => ({
              color: isActive
                ? "green"
                : "white",
            })}
            className="st5" >Create Recipe</NavLink>
      <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive
                ? "green"
                : "white",
            })}
            className="st5" >About</NavLink>
        </div>
        <button className='toogle' onClick={toggleLinks}>
          <i className="fa fa-bars"></i>
        </button>
      </div>
    </div>
  );
};

export default Nav1;
