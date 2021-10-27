import React from "react";
import './FormEmployees.scss';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export class FormEmployees extends React.Component {


    render() {
        return (

            <div>
                <Form>
                    <Container className="formRegister2">
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

                        <h6>Action Range</h6>

                        <Row>
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3 range">
                                    <Form.Check
                                        inline
                                        label="3km"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="5km"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                        inline
                                        label="10km"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-3`}
                                    />
                                </div>
                            ))}
                        </Row>

                        <Button className="submitButton" type="submit">
                            Submit
                        </Button>
                        </Col>
                    </Container>
                </Form>
            </div>
        );
    };
};