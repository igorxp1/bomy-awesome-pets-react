import React from "react";
import {Link} from "react-router-dom";
import { Nav } from 'react-bootstrap';
import {NavClientsProfile} from '../../Components/NavClientsProfile/NavClientsProfile'

export class MyRequestsClients extends React.Component {
    render() {
        return (
            <div>

                <NavClientsProfile/>

                <h1>My Requests</h1>

                <h5>04 February 2021</h5>
                <button>view details</button>

                <h5>04 February 2021</h5>
                <button>view details</button>

                <h5>04 February 2021</h5>
                <button>view details</button>

                <h5>04 February 2021</h5>
                <button>view details</button>
            </div>
        )
    }
}
