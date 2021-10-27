import React from "react";
import './styleAbout.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class About extends React.Component {
    render() {
        return(
            <div>

            <Container className="aboutContainer">
            <Row>
                <Col>
                    <div className="textAbout">
                        <h1>KNOW MORE ABOUT US</h1>

                        <p>We know your life is busy, and this is why we are here to help!
                            You can choose if you want to schedule your pet's walks, if you
                            want someone to stay with him when you go to work or on a trip,
                            or if you need someone to take him to the vet.</p>

                        <h3>As a partner or customer, choose MY-PET-SI(S)TER.COM!</h3>

                        <h6>Become a Partner!</h6>

                        <p>If you love pets but can't afford them, or just want to make some
                            extra money, join us as a partner! You can volunteer to take our
                            clients pets for a walk, to take care of them when our clients are
                            away from work or when they go on vacation, or to transport
                            them to the veterinarian.</p>
                    </div>
                </Col>

                <Col className="space2"></Col>

                <Col>
                    <div className="imgAbout">
                        <img src="https://images.unsplash.com/photo-1594137649078-a3d5bd13afe3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhdCUyMGFuZCUyMGh1bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="cat about"/>
                    </div>
                </Col>
            </Row>
        </Container>
            </div>

        )
    }
}

