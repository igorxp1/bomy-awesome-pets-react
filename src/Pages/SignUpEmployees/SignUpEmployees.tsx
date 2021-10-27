import React from "react";
import './SignUpEmployees.scss';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FormEmployees} from "../../Components/Registers/FormEmployees/FormEmployees";




export class SignUpEmployees extends React.Component {
  render() {
    return (

      <div>
          <Container>

            <Form>
              <Row>
                <Col className="textRegister">
                  <h1>Register</h1>
                </Col>


                <Col>
                  <FormEmployees />
                </Col>
              </Row>
            </Form>

          </Container>

          </div>

    );
  }
}
