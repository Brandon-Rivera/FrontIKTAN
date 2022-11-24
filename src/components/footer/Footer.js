import React from "react";
import styles from "./Footer.css";
import { useNavigate } from "react-router-dom";

function Footer(){
    const navigate = useNavigate();
    return (
        <footer>
            <h4>Iktan Team 2023</h4>
            <h5>Tecnológico de Monterrey Campus Cuernavaca</h5>
        </footer>
    )
}

export default Footer;