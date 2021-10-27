import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './login.scss';
import {LoginForm} from "../../Components/LoginForm/LoginForm";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export class Login extends React.Component{

      render(){

        return(
            
            <div>
                <Row>
                    <Col>
                        <h1 className="textLogin">Login</h1>
                    </Col>

                    <Col>
                        <LoginForm />
                    </Col>
                </Row>
            </div>
        )

        }
}