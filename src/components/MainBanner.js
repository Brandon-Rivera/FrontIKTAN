import { useNavigate } from "react-router-dom";
import "./MainBanner.css";
import iktanLogo from '../assets/img/iktanLogo.png';

export const MainBanner = () => {
    return(
        <div className="MainBanner-container">
            <img className="logo-iktan" src={iktanLogo} alt="Logo" />
        </div>
    );
}