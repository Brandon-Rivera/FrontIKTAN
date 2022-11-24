import React from "react";
import "./About.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import luna from "../../images/luna.png";
import marte from "../../images/marte.png";
import logo from "../../images/iktanLogo.png";
import { useNavigate } from "react-router-dom";




function About() {
    const navigate = useNavigate();
    return (
        <div className="AboutUs_container">
            <Header />
            <div className="body_container">
                <h1 className="AboutUs-About">About</h1>
                <h1 className="AboutUs-Iktan">I K T A N</h1>
                <img src={luna} className="AboutUs-luna" alt="luna" /> 
                <img src={marte} className="AboutUs-marte" alt="marte" />
                <img src={logo} className="AboutUs-logo" alt="logo" />  
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maxime dolores earum illum magni adipisci architecto necessitatibus vel aliquam explicabo aut asperiores non reiciendis odio deleniti voluptatum molestias deserunt libero? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ipsum dolorum laborum sapiente nisi, quod ratione odit sint beatae nobis impedit consequatur a reiciendis consectetur at possimus! Quisquam, eaque praesentium</p>
                <a className="AboutUs-galleryBotton" onClick={()=>navigate("/Gallery")}>GALLERY</a>
            </div>
            <Footer/>
        </div>
    );
}

export default About;