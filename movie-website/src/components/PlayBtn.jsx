import React from "react";
import playBtn from './playBtn.css';

function PlayBtn({movie}){
    return(
        <div className={`trailer d-flex align-center justify-content-center ${movie.active? "active" : undefined}`}>
                                <a href="#" className="playBtn">
                                    <ion-icon name="play-outline"></ion-icon>
                                </a>
                                <p>Watch Trailer</p>
                            </div> 
    )
}

export default PlayBtn;