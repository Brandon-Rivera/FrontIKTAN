import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "IKTAN Roving Team",
      description: "2021-2022",
      imgUrl: "https://scontent.fmex31-1.fna.fbcdn.net/v/t39.30808-6/283022174_2170631539768250_2146494412459273831_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeE_18mzoSHTgGW72ArMdHbZuWuJWuqdDvW5a4la6p0O9WQddbnIB9F7_E4lLHFhaV7clFx-8HqMs5JVFgD3ab2K&_nc_ohc=cdtPImjPTPkAX9mFC9Y&_nc_ht=scontent.fmex31-1.fna&oh=00_AfDB5NBzpfKlCnfo4o3rNls4lLWEQLgZjxGhYiOxStZfAQ&oe=639A4B76",
    },
    {
      title: "IKTAN Roving Team",
      description: "NASA Human Exploration Rover Challenge",
      imgUrl: "https://scontent.fmex31-1.fna.fbcdn.net/v/t1.6435-9/121690890_1711316445699764_5853211874643973442_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGz8ObDfXwws0IlKANVtoFFL-nHe-rmnEgv6cd76uacSG8kekWCfQLfjvFG3zKZqYrhIPyX8J18CLP2njYicZ-s&_nc_ohc=Oou0C82qopsAX_LivTG&_nc_ht=scontent.fmex31-1.fna&oh=00_AfDFRYHf4jLNqdwKxiyHX2Bn2a_duTlRrrks2cZVCJVZUg&oe=63BCC32A",
    },
    {
      title: "Telemetry Award",
      description: "American Institute of Aeronautics and Astronautics",
      imgUrl: "https://scontent.fmex31-1.fna.fbcdn.net/v/t1.6435-9/121776287_1711315462366529_9081419039417406975_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHZU1uMEDfDVX0aXhptD_oPMuHfkMFyClQy4d-QwXIKVAfpUyrb16RcXjjHUDcYqQlYJTVantIHBMxcgTcp4QUI&_nc_ohc=alpN0VAaiPEAX8rJZOt&_nc_ht=scontent.fmex31-1.fna&oh=00_AfAOoaoIhJ0-uoepFSUyba1xZdQwzVtUrlaimo4oA9FnSA&oe=63BC9A1F",
    },
    {
      title: "20th MoonBuggy Grate Race",
      description: "The first Rover was called Buggy",
      imgUrl: "https://static.wixstatic.com/media/44c0a5_82faf7d8803c4441a6ba976a5111eb79.jpg/v1/fill/w_503,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/44c0a5_82faf7d8803c4441a6ba976a5111eb79.jpg",
    },
    {
      title: "Launching People",
      description: "1st NASA Human Exploration Rover Challenge",
      imgUrl: "https://static.wixstatic.com/media/44c0a5_6983668c24ff4293b3c5242aa2c73cb2.jpg/v1/fill/w_491,h_252,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/44c0a5_6983668c24ff4293b3c5242aa2c73cb2.jpg",
    },
    {
      title: "The invincible ones",
      description: "Frank Joe Sexton Memorial Pit Crew Award",
      imgUrl: "https://static.wixstatic.com/media/44c0a5_cdc7f62e78034fb0aa7e23d583e96a1e~mv2.jpg/v1/fill/w_409,h_269,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/44c0a5_cdc7f62e78034fb0aa7e23d583e96a1e~mv2.jpg",
    },
  ];

  return (
    <section className="project" id="objective">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  {/* <h2>Objective</h2>
                  <p>Build a Rover where two pilots are in charge of going through a track with obstacles that resemble extraterrestrial surfaces, where our goal is to travel the road in less than 7 minutes fulfilling the different tasks to get points in the competition.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Gallery</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mission</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Vision</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h2>Mission</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h2>Vision</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
