import { Col, Button } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} style={{ height: '20rem' }}/>
        <div className="proj-txtx"> 
          <h4>{title}</h4>
          <span>{description}</span>
          <p><a href={imgUrl} target="_blank"><Button>See more</Button></a></p>
        </div>
      </div>
    </Col>
  )
}
