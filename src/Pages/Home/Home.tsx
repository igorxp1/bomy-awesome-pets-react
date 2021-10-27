import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styleHome.scss';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import moment from 'moment';

const yesterday = moment().subtract(1, 'day');
const valid = function (current) {
    return current.isAfter(yesterday);
};

let inputProps = {
    placeholder: 'Date and time',
    disabled: false,
};

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Container>
            <Row>
                <Col>
                    <div className="formContainer">
                        <div className="Title">
                            <h1>MY-PET-SI(S)TER.COM</h1>
                            <h3>The perfect website for occupied people who love pets!</h3>
                        </div>

                        <div className="homeFormSelect">
                            <h6>Choose a service, please!</h6>
                            <FloatingLabel controlId="floatingSelect" label="Our Services">
                              <Form.Select aria-label="Select a Service">
                                  <option value="takeCare">I want someone to take care of my Pet</option>
                                  <option value="walk">I want someone to walk with my Pet</option>
                                  <option value="vet">I want someone to go with my Pet to the Vet</option>
                              </Form.Select>
                            </FloatingLabel>
                        </div>

                        <div className="homeFormDate">
                            <h6>And don't forget to pick a date and a time!</h6>
                            <FloatingLabel className="dateAndTime">
                                <Datetime isValidDate={ valid } inputProps={ inputProps } />
                            </FloatingLabel>
                        </div>
                    </div>
                </Col>

                <Col className="space"></Col>

                <Col>
                    <div className="homeImg">
                        <img src="https://media3.giphy.com/media/2tNX6whDAGwYmPt1gx/giphy.gif?cid=ecf05e478a8ev1t44dtf6d5id9fkk8oyldw1s6lvsnnpy2rz&rid=giphy.gif&ct=g" alt="Walking with Dogs"/>
                    </div>
                </Col>
            </Row>
        </Container>
      </div>

    )
  }

}
