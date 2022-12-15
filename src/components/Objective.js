import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from "react-router-dom";
import "./Objective.css";


export const Objective = () => {
  const navigate = useNavigate();

  return (
    <div className="container-objective">
        <section className="Objective" id="objective">
            <Container>
            <h2>Objective</h2>
                <p>Build a Rover where two pilots are in charge of going through a track with obstacles that resemble extraterrestrial surfaces, where our goal is to travel the road in less than 7 minutes fulfilling the different tasks to get points in the competition.</p>
            </Container>
        </section>
        <section className="Mission" id="mission">
            <Container>
            <h2>Mission</h2>
                <p>Build a Rover where two pilots are in charge of going through a track with obstacles that resemble extraterrestrial surfaces, where our goal is to travel the road in less than 7 minutes fulfilling the different tasks to get points in the competition.</p>
            </Container>
        </section>
        <section className="Vission" id="vission">
            <Container>
            <h2>Vission</h2>
                <p>Build a Rover where two pilots are in charge of going through a track with obstacles that resemble extraterrestrial surfaces, where our goal is to travel the road in less than 7 minutes fulfilling the different tasks to get points in the competition.</p>
            </Container>
        </section>
    </div>

  )
}