import React from "react";
import { Nav } from 'react-bootstrap';
import {Form, Button, Container} from "react-bootstrap";
import './Support.scss';

export class Support extends React.Component{
    
    render(){
        return(
            
            <div>

                <Nav defaultActiveKey="/MyProfileClients" className="flex-column">
                    <Nav.Link href="/MyProfileClients">My Profile</Nav.Link>
                    <Nav.Link href="/Reservation">Pick a Service today!</Nav.Link>
                    <Nav.Link href="/MyRequestClients">My Requests</Nav.Link>
                    <Nav.Link href="/PaymentMethodsClients">Payment Methods</Nav.Link>
                    <Nav.Link href="/Support">Support</Nav.Link>
                </Nav>
                <Container>
                <Form>
     
                <Form.Select aria-label="select">
                <option>Choose a topic</option>
                <option value="1">Is taking too long to deliver my pet</option>
                <option value="2">Payment issues</option>
                <option value="3">Client pet has issues</option>
                </Form.Select>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>detalhes</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>


                <Button variant="primary" type="submit" className="submitButton">
                Submit
                </Button>
                </Form>
                </Container>
            </div>
            
            
        )

        }
}