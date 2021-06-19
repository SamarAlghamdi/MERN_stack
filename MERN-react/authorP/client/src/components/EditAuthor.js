
import { Link } from '@reach/router'
import React, {useState,useEffect} from 'react'
import { Button, Container, Alert} from 'react-bootstrap'
import axios from 'axios'
import MyForm from './MyForm'
function EditAuthor({id}) {
    const [author, setAuthor] = useState({})
    const [errors, setErrors] = useState([])
    const [loaded, setLoaded] = useState(false)
    useEffect(()=> {
        axios.get('http://localhost:8000/api/'+id)
        .then(res => {
            console.log(res.data)
            setAuthor(res.data.author)}) 
            setLoaded(true)
    },[id])
    const handleEdit= (e, data)=>{
        e.preventDefault()
        axios.put('http://localhost:8000/api/'+id+'/edit', data)
            .then(res=>console.log(res.data))
            .catch(err=>{ const errorResponse =  err.response.data
                const errorArr = []; // Define  temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
                console.log(errorArr) } 
        )
    }

    return (
    
        <Container>
            <Link to="/">Home</Link>
            <h3>Edit Author {author.name}</h3>
            {errors.length>0&&<Alert variant='danger'>{errors.map((err, index) => <p key={index}>{err}</p>)}</Alert> }
            {loaded && <MyForm handleEdit={handleEdit} authorName={author.name}/> }
            
    </Container>
    
    )
}

export default EditAuthor
