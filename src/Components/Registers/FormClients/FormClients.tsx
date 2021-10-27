import React from "react";
import './FormClients.scss';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export class FormClients extends React.Component {

    render() {
        return (

            <div>
                <Form>
                    <Container className="formRegister3">
                        <Row>
                        <Col>
                            <Row className="address">
                                <Form.Group className="mb-3 adr1" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St"/>
                                </Form.Group>

                                <Form.Group className="mb-3 adr2" controlId="formGridAddress2">
                                    <Form.Label>Address 2</Form.Label>
                                    <Form.Control placeholder="Apartment, studio, or floor"/>
                                </Form.Group>

                            </Row>
                            <Row className="address2">
                                <Form.Group className="mb-3 city" as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control/>
                                </Form.Group>

                                <Form.Group className="mb-3 state" as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control/>
                                </Form.Group>

                                <Form.Group className="mb-3 zip" as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control/>
                                </Form.Group>
                            </Row>

                           <Button className="submitButton" type="submit">
                                Submit
                            </Button>
                        </Col>

                        <Col>
                            <h3 className="pets">Your Pets</h3>


                        </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        );
    };
};