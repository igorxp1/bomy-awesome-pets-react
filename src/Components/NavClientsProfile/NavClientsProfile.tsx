import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Support} from "../../Pages/Support/Support"
import {MyRequestsClients} from "../../Pages/MyRequestsClients/MyRequestsClients"
import {PaymentMethodsClients} from "../../Pages/PaymentMethodsClients/PaymentMethodsClients"
import {MyProfileClients} from "../../Pages/MyProfileClients/MyProfileClients";

import {BrowserRouter, Route, Switch} from "react-router-dom";
import { Nav } from 'react-bootstrap';

export class NavClientsProfile extends React.Component{

      render(){

        return(
            
            <div>
                <Nav defaultActiveKey="/MyProfileClients" className="flex-column">
                    <Nav.Link href="/MyProfileClients">My Profile</Nav.Link>
                    <Nav.Link href="/Reservation">Pick a Service today!</Nav.Link>
                    <Nav.Link href="/MyRequestsClients">My Requests</Nav.Link>
                    <Nav.Link href="/PaymentMethodsClients">Payment Methods</Nav.Link>
                    <Nav.Link href="/Support">Support</Nav.Link> 
                    </Nav>
                
                
            </div>
        )

        }
}