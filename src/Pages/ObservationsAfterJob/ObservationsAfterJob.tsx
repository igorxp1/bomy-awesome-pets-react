import React from "react";
import {Button, Container, Form} from "react-bootstrap";
import './ObservationsAfterJob.scss';

export class ObservationsAfterJob extends React.Component{
    
    render(){
        return(
            
            <div>
                    <Container>
                    <h1>Review and obeservations</h1>
                <Form>

                <Form.Label htmlFor="rate">Rate:</Form.Label>
                <Form.Control
                type="text"
                id="rate"
                name="rate"
                pattern="[1-5]{1}"
                placeholder="choose a rating from 1 to 5"
                />

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>describe with more details here</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>


                <Button variant="primary" type="submit" className="submitButton">
                Submit
                </Button>
                </Form>
                </Container>
            </div>
        )

        }
}