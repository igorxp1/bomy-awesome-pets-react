import React from "react";
import './SignUpClientsOrEmployees.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {SignUpClients} from "../SignUpClients/SignUpClients";
import {SignUpEmployees} from "../SignUpEmployees/SignUpEmployees";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormGeral from '../../Components/Registers/FormGeral/FormGeral';



 export class SignUpClientOrEmployees extends React.Component {

  render() {
    return (

      <div>
          <BrowserRouter>
                <Switch>
                    <Route path="/SignUpClients">
                        <SignUpClients/>
                    </Route>
                    <Route path="/SignUpEmployees">
                        <SignUpEmployees/>
                    </Route>
                </Switch>
          </BrowserRouter>

          <Container>
              <Row>
                  <Col>
                    <h1 className="textSignUp">Register</h1>
                  </Col>

                <Col>
                    <FormGeral />
                </Col>
              </Row>
          </Container>
      </div>
    );
  }
}
