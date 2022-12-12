import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/iktanLogo.png";
import navIcon1 from "../assets/img/tiktok.png";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

import "./Footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.tiktok.com/@iktan_roving" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/IKTANRoving" target="_blank"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/iktan_roving/" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
