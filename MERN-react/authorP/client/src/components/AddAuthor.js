import { Link } from '@reach/router'
import React, {useState} from 'react'
import {Container, Alert} from 'react-bootstrap'
import axios from 'axios'
import MyForm from './MyForm'

function AddAuthor() {
    const [errors, setErrors]= useState([]) 
    const handleSubmit=(e, data)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/new/author', data)
        .then(res=>console.log(res.data) )
        .catch(err=>{
            { const errorResponse =  err.response.data
                const errorArr = []; // Define  temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);}

    })
}
    return (
        <Container>
            <Link to="/">Home</Link>
            {errors.length>0&&<Alert variant='danger'>{errors.map((err, index) => <p key={index}>{err}</p>)}</Alert> }
            <h3>Add new Author</h3>
            <MyForm handleSubmit={handleSubmit} authorName=""/>
        </Container>
    )
}

export default AddAuthor
