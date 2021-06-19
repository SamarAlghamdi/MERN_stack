import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { Link } from "@reach/router";

function AllPlayers() {
    const [allPlayers, setAllPlayers] = useState([]);
    const [show, setShow] = useState(false);
    const [playerId, setPlayerId] = useState({})

    const handleClose = () => {
        setShow(false);
        setPlayerId({})
    }
    const handleShow = (player) => {
        setShow(true);
        setPlayerId(player);
    }

    useEffect(() => {
        axios
        .get("http://localhost:8000/api")
        .then((res) => setAllPlayers(res.data.players))
        .catch((err) => console.log(err));
    }, []);
    
    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/${playerId._id}/delete`)
        .then(res => {
            const newPlayers =allPlayers.filter(item => item._id!== playerId._id)
            setAllPlayers(newPlayers)
            setPlayerId({})
            setShow(false);
        })
        .catch((err) => console.log(err));
    };
    return (
        <Container style={{border: '1px solid gray', padding:'20px'}} > 
        <h2><Link to="/">List</Link> | <Link to="/addplayer">Add Player</Link></h2>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete {playerId.name}!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete}>
                delete
            </Button>
            </Modal.Footer>
        </Modal>
            <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th> Team name </th>
                    <th>Perfered position</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {allPlayers.map((item, index) => (
                    <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.position}</td>
                    <td>
                        <Button variant="danger" onClick={() => handleShow(item)}>
                        Delete
                        </Button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            </div>
        </Container>
    );
}

export default AllPlayers;
