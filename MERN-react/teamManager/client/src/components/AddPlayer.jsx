import React, { useState, useEffect } from "react";
import axios from "axios";
import {Alert, Button, Container, Form} from 'react-bootstrap'
import {navigate, Link} from '@reach/router'

function AddPlayer() {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [errors, setErrors] = useState([]);
    const [nameError, setNameError] = useState("");
    
    const handleForm= e=>{
        e.preventDefault();
        if (name.length <2){
            return setNameError("Name should be at least 2 characters")
        }
        axios.post("http://localhost:8000/api/new/player",{name,position})
        .then(res=> navigate('/'))
        .catch(err=>{ 
                const errorResponse =  err.response.data;
                const errorArr = []; // Define  temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);})
    }
    return (
        <Container style={{border: '1px solid gray', padding:'20px'}}> 
            <h2><Link to="/">List</Link> | <Link to="/addplayer">Add Player</Link></h2>
            <div style={{border: '1px solid black', padding:'10px'}}>
            <h1>Add Player</h1>
            {errors.length>0&&<Alert variant='danger'>{errors.map((err, index) => <p key={index}>{err}</p>)}</Alert> }
            <Form onSubmit={handleForm}>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Player name: </Form.Label>
                <Form.Control type="text" onChange={e=> setName(e.target.value)} />
                <Form.Text className="text-danger">{nameError? nameError: ""}</Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Perferd position</Form.Label>
                <Form.Control type="text" onChange={e=> setPosition(e.target.value)} />
                </Form.Group>

                <Button variant="success" type="submit">
                Add
                </Button>
            </Form>
            </div>
        </Container>
    );
}

export default AddPlayer;
