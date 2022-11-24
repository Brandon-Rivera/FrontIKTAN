import React from "react";
import "./Gallery.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";




function Gallery() {
    const navigate = useNavigate();
    return (
        <div className="Gallery-container">
            <Header />
            <Footer/>
        </div>
    );
}

export default Gallery;