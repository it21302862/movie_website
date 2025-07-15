import React from "react";
import movieDate from './movieDate.css';

function MovieDate({movie}){
    return(
        <div className={`date ${movie.active? "active" : undefined}`}>
            <h2>{movie.date}</h2>
        </div>
    )
}

export default MovieDate;