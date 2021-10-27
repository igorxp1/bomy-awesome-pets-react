import React from "react";
import "./SignUpClients.scss"
import {FormClients} from "../../Components/Registers/FormClients/FormClients"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export class SignUpClients extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="textRegisterClients">Register</h1>
                        </Col>

                        <Col>
                            <FormClients />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
