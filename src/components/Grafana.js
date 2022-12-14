import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./Grafana.css";

export const Grafana = () => {
  return (
    <section className="grafana">
      <Container className='center'>
        <h1>Ejemplo de Iframe</h1>
        <iframe src="https://www.youtube.com/embed/uXWycyeTeCs" width={1000} height={500}></iframe>
      </Container>
    </section>
  )
}
