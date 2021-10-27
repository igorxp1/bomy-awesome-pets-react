import React from 'react';
import {Link} from "react-router-dom";
import { Row, Col, Button, Nav, Container } from 'react-bootstrap';
import {NavClientsProfile} from '../../Components/NavClientsProfile/NavClientsProfile'

interface AppProps {
    //code related to your props goes here
 }
 
 interface AppState {
    Fname: string
    Lname: string
    card: string
    number: number
    Address: string
    back: number
 }


export class PaymentMethodsClients extends React.Component {

    constructor(props:any) {
        super(props);
        this.state = {
          Fname: "diego",
          Lname: "algo",
          card: "visa",
          number: 1342,
          Address: "rua da cidade, 78",
          Back: 252
        };
    }


       render() {
        return (
            <div>
                <Row>
                <Col className="formRegister">
                <NavClientsProfile/>
                </Col>
                <Col className="formRegister">
                <h1>Payment Methods</h1>
                

                <img src="https://w7.pngwing.com/pngs/519/586/png-transparent-split-payment-credit-card-computer-icons-payment-system-credit-card-angle-hand-payment-thumbnail.png" alt="cartão"></img>
                <button>Add Payment Method</button>

                </Col>
                <Col className="formRegister">
                <h1>Card</h1>
                <p>{this.state.card}</p>
                <p>{this.state.number} **** ****</p>
                </Col>
                </Row>
            </div>
        )
    }
}
