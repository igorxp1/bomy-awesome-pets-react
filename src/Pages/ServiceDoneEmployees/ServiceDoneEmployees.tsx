import React from "react";
import {Link} from "react-router-dom";

export class ServiceDoneEmployees extends React.Component {
    render() {
        return <div>

            <Link to="/MyProfileClients">My Profile</Link>
            <Link to="/Reservation">Request a Service</Link>
            <Link to="/MyRequestClients">My Requests</Link>
            <Link to="/PaymentMethodsClients">Payment Methods</Link>

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
    }
}
