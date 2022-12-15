import React from "react";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Controller } from "react-bootstrap-icons";
import { NavBar } from "../components/NavBar";
import { MainBanner } from "../components/MainBanner";

function Home() {
    console.log("Hello");
    const navigate = useNavigate();
    return (
        <div className="Home-container">
            <NavBar />
            <Banner/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default Home;