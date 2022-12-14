import { useNavigate } from "react-router-dom";
import "./MainBanner.css";
import iktanLogo from '../assets/img/iktanLogo.png';
import tecLogo from '../assets/img/itesm-icon.svg';


export const MainBanner = () => {
    return(
        <div className="MainBanner-container">
            <h2>Welcome!</h2>
            <h1>IKTAN TEAM 2022 - 2023</h1>
            <img className="logo-iktan" src={iktanLogo} alt="Logo" />
            <img className="logo-tec" src={tecLogo} alt="Logo" />
        </div>
    );
}