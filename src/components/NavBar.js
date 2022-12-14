import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/iktanLogo2.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";


export const NavBar = () => {
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <a className="team-name-nav">IKTAN ROVING</a>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" onClick={()=>navigate("/")} className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
              <Nav.Link href="#objective" onClick={() => navigate("/")} className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}>About Us</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Gallery</Nav.Link>
            </Nav>
            
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.tiktok.com/@iktan_roving" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/IKTANRoving" target="_blank"><img src={navIcon2} alt=""/></a>
                <a href="https://www.instagram.com/iktan_roving/" target="_blank"><img src={navIcon3} alt="" /></a>
              </div>
              <a>
                <button onClick={()=>navigate("/RoverAnalysis")} className="vvd"><span>Rover Analysis</span></button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
