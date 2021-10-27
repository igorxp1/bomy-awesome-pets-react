import React from "react";
import Form from 'react-bootstrap/Form';

export class AddPet extends React.Component {

    render() {
        return (
            <div>
                <Form.Label htmlFor="petName"> Pet Name </Form.Label>
                <Form.Control type="text" name="petName"  id="petName" />
                <Form.Check  type='radio' id='{`default-${type}`}' label='Dogs' />
                <Form.Check  type='radio' id='{`default-${type}`}' label='Cats' />
            </div>
           );
        }
    }