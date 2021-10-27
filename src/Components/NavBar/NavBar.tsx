import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./styleNav.scss"

export class NavBar extends React.Component {
    render() {
        return (
        <Navbar bg="light" variant="light">
            <Container>

               <Nav className="me-auto navbar">
                   <Nav.Link href="/home">Home</Nav.Link>
                   <Nav.Link href="/about">About</Nav.Link>
                   <Nav.Link href="/login">Login</Nav.Link>
                   <Nav.Link href="/SignUpClientOrEmployees">Register</Nav.Link>
               </Nav>
            </Container>
        </Navbar>


        )

    }
}
