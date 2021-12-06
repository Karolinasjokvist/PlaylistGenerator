import React, { Component } from 'react';
import '../../css/generateGenre.css';

function GenerateGenreView(props) {
    return (
        console.log(props.genres),
        <div className="generatePage">
            <p className="title">What genre are you interested in?</p>
            {props.genres.map(genre =>
                    <span className="generateView" key={genre.id} onClick ={e => {props.genreChosen(genre.id)}}  >
                        <img src={genre.img} className="generateImgGenre"></img>
                        <div>{genre.name}</div>
                        <input onChange = {e => value()} type="range" id="myRange" min="0" max="100" step="10" defaultValue="50"></input>
                        <p id = "val"></p>
                    </span>
                )}
        </div>
    );
}

function value(){
    var x = document.getElementById("myRange").value;
    document.getElementById("val").innerHTML = x;
}

export default GenerateGenreView;