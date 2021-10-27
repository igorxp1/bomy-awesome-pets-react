import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './LoginForm.scss';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export class LoginForm extends React.Component {

    render() {

        return (

            <Container>
                <Form className="formLogin">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="user">Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="pass">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check className="rememberBox" type="checkbox" label="Remember"/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="submitButton">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
};