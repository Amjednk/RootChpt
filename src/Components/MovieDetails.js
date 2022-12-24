import React from 'react';
import { Button } from '@trimbleinc/modus-react-bootstrap';
import { useNavigate , useParams} from "react-router-dom";
import ReactPlayer from 'react-player'
import data from './data';
import '../App.css'

function MovieDetails (){
    const navigate = useNavigate();
    let {id} = useParams();
    let myMovie = data.filter((el)=>el.id===id)
    
    return (
        <div className='App'>
            {myMovie && myMovie.map((el)=>
            <div>
                <h2>{el.title.toUpperCase()}</h2>
                <div className='Vid-position'>
                    <ReactPlayer  url={el.trailer}/>
                </div>
                <Button variant="primary" onClick={()=>navigate("/")}>Back to Movies</Button>
            </div>)}
        </div>
    )
}

export default MovieDetails;