import React, {useState} from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import { Link } from '@reach/router'


function MyForm({handleSubmit, authorName}) {
    const [name, setName]= useState(authorName);
    console.log("the name is:"+name)
    return (
        <Container>
            <Form onSubmit={ e=> { handleSubmit(e,{name})} }>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={e=>setName(e.target.value)} />
                </Form.Group>

        <Button variant="light"><Link to="/">Cancel</Link></Button>

        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </Container>
    )
}

export default MyForm
