import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { useNavigate } from "react-router-dom";

/*creating movie card that accesptes data as an object*/
function MovieCard({data}) {
    const navigate = useNavigate();
    return (
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.posterURL} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.description} </Card.Text>
                <Button variant="primary" onClick={()=>navigate(`/movie/${data.id}`)}>Watch Trailer</Button>
                <Rating name="read-only" value={data.rating} max={10} readOnly />
            </Card.Body>
        </Card>
        </div>
    );
}

export default MovieCard;