import React from "react";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Grafana } from "../components/Grafana";
import { Controller } from "react-bootstrap-icons";
import { NavBar } from "../components/NavBar";

function RoverAnalysis() {
    console.log("Hello");
    const navigate = useNavigate();
    return (
        <div className="Home-container">
            <NavBar/>
            <Grafana/>
            <Footer/>
        </div>
    );
}

export default RoverAnalysis;