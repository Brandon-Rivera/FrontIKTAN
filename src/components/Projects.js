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
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://scontent.fmex31-1.fna.fbcdn.net/v/t39.30808-6/283022174_2170631539768250_2146494412459273831_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeE_18mzoSHTgGW72ArMdHbZuWuJWuqdDvW5a4la6p0O9WQddbnIB9F7_E4lLHFhaV7clFx-8HqMs5JVFgD3ab2K&_nc_ohc=cdtPImjPTPkAX9mFC9Y&_nc_ht=scontent.fmex31-1.fna&oh=00_AfDB5NBzpfKlCnfo4o3rNls4lLWEQLgZjxGhYiOxStZfAQ&oe=639A4B76",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://scontent.fmex31-1.fna.fbcdn.net/v/t1.6435-9/121690890_1711316445699764_5853211874643973442_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGz8ObDfXwws0IlKANVtoFFL-nHe-rmnEgv6cd76uacSG8kekWCfQLfjvFG3zKZqYrhIPyX8J18CLP2njYicZ-s&_nc_ohc=Oou0C82qopsAX_LivTG&_nc_ht=scontent.fmex31-1.fna&oh=00_AfDFRYHf4jLNqdwKxiyHX2Bn2a_duTlRrrks2cZVCJVZUg&oe=63BCC32A",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://scontent.fmex31-1.fna.fbcdn.net/v/t1.6435-9/121776287_1711315462366529_9081419039417406975_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHZU1uMEDfDVX0aXhptD_oPMuHfkMFyClQy4d-QwXIKVAfpUyrb16RcXjjHUDcYqQlYJTVantIHBMxcgTcp4QUI&_nc_ohc=alpN0VAaiPEAX8rJZOt&_nc_ht=scontent.fmex31-1.fna&oh=00_AfAOoaoIhJ0-uoepFSUyba1xZdQwzVtUrlaimo4oA9FnSA&oe=63BC9A1F",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Objetive</h2>
                <p>Build a Rover where two pilots are in charge of going through a track with obstacles that resemble extraterrestrial surfaces, where our goal is to travel the road in less than 7 minutes fulfilling the different tasks to get points in the competition.</p>
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
