import React from 'react'
import {Container,Row,Col,Tab,Nav} from 'react-bootstrap';
import { ProjectCard } from './ProjectCard'
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/password.png'
import projImg2 from '../assets/img/typing_test.png'
import projImg3 from '../assets/img/nike-air.png'

const Projects = () => {
    const projects = [
        {
            title: "Credentials Manager",
            description: "MERN Stack",
            imgUrl: projImg1,
        },
        {
            title: "Typing Test",
            description: "React JS project",
            imgUrl: projImg2,
        },
        {
            title: "Nike-Air Card",
            description: "Advertising Card",
            imgUrl: projImg3,
        },
        
    ];

    return (
        <div>
            <section className='project' id='project'>
                <Container>
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                            <p>Selected Web Development Projects</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp" >
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
                                        <p>Nothing yet to display</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <p>Noting yet to display</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
                <img src={colorSharp2} alt="" className='background-image-right' />
            </section>
        </div>
    )
}

export default Projects
