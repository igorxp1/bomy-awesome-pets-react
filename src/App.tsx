import React from "react";
import {Login} from "./Pages/Login/Login";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {Home} from "./Pages/Home/Home";
import {MyProfileClients} from "./Pages/MyProfileClients/MyProfileClients";
import {MyProfileEmployees} from "./Pages/MyProfileEmployees/MyProfileEmployees";
import {ServiceDoneEmployees} from "./Pages/ServiceDoneEmployees/ServiceDoneEmployees";
import {SignUpClientOrEmployees} from "./Pages/SignUpClientsOrEmployees/SignUpClientsOrEmployees";
import {SignUpClients} from "./Pages/SignUpClients/SignUpClients";
import {MyRequestsClients} from "./Pages/MyRequestsClients/MyRequestsClients";
import {SignUpEmployees} from "./Pages/SignUpEmployees/SignUpEmployees";
import {ObservationsAfterJob} from "./Pages/ObservationsAfterJob/ObservationsAfterJob";
import {Support} from "./Pages/Support/Support";
import {NavBar} from "./Components/NavBar/NavBar";
import {About} from "./Pages/About/About";
import {PaymentMethodsClients} from "./Pages/PaymentMethodsClients/PaymentMethodsClients";
import {Map} from "./Pages/Map/Map";




export class App extends React.Component {

    render() {
        return <div>
            <BrowserRouter>
                <NavBar/>
                <Switch>


                <Route path="/Support">  
                        <Support/>
                    </Route>
                    <Route path="/MyRequestsClients">  
                        <MyRequestsClients/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>

                    <Route path="/about">
                        <About/>
                    </Route>

                    <Route path="/home">
                        <Home/>
                    </Route>

                   <Route path="/MyProfileClients">
                        <MyProfileClients/>
                    </Route>

                    <Route path="/Support">  
                        <Support/>
                    </Route>

                    <Route path="/MyProfileEmployees">
                        <MyProfileEmployees/>
                    </Route>

                    <Route path="/SignUpClientOrEmployees">
                        <SignUpClientOrEmployees/>
                    </Route>

                    <Route path="/SignUpClients">
                        <SignUpClients/>
                    </Route>

                    <Route path="/SignupEmployees">
                        <SignUpEmployees/>
                    </Route>

                    

                    <Route path="/PaymentMethodsClients">
                        <PaymentMethodsClients/>
                    </Route>

                    <Route path="/ObservationsAfterJob">
                        <ObservationsAfterJob/>
                    </Route>

                    <Route path="/map">
                        <Map/>
                    </Route>
                    <Redirect exact from="/" to="home" />

                </Switch>
            </BrowserRouter>

        </div>

    }
}
