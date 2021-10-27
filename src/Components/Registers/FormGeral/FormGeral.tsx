import React from "react";
import './FormGeral.scss';
import {BrowserRouter as Router, withRouter} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from "react-router-dom"


class FormGeral extends React.Component<any,any> {

   nextPath(path:string) {
       this.props.history.push(path);
   }

    render() {
        return (

            <div>
                <Container>
                    <Form>
                        <Row className="test">
                            <Col className="formRegister">
                                <Form.Group className="mb-3" controlId="formFName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formUName">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Your Username"/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Your E-mail" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>

                                <div className="mb-2 Buttons">
                                    <Button className="submitButton" onClick={() => this.nextPath("/SignUpClients")}>
                                        I want to request services!
                                    </Button>
                                </div>
                            </Col>


                            <Col className="formRegister">
                                <Form.Group className="mb-3" controlId="formLName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your Last Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Your Password" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <label className="countryText" >Where do you live?</label>
                                    <Form.Select className="country" aria-label="Default select example" placeholder="Your Country">
                                        <option value="1">Porto</option>
                                        <option value="2">Lisboa</option>
                                        <option value="3">Amarante</option>
                                    </Form.Select>
                                </Form.Group>

                                <div className="mb-2 Buttons">
                                    <Button className="submitButton" onClick={() => this.nextPath("/SignupEmployees")}>
                                        I want to turn a partner!
                                    </Button>
                                </div>
                            </Col>
                        </Row>

                    </Form>

                </Container>

            </div>

        );
    };
};

export default withRouter(FormGeral);
