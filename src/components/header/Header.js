import React from "react";
import styles from "./Header.css";
import logo from "../../images/iktanLogo.png";
import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate();
    return (
        <header className="header_container">
          <img src={logo} className="Header-logo" alt="logo" />  
          <div className = "header_navbar">
            <a onClick={()=>navigate("/About")}>About Iktan</a>
            <a onClick={()=>navigate("/Gallery")}> Gallery </a>
            <a> Objective </a>
            <a> Rover Analysis </a>
          </div>
        </header>
    )
}

export default Header;