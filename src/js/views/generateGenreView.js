import React, { Component } from 'react';
import '../../css/generateGenre.css';

function GenerateGenreView(props) {
    return (
        <div className="generatePage">
            <p className="title">What genres are you interested in?</p>
            {props.genres.map(genre =>
                <span className="generateView" key={genre.id}  >
                    <img src={genre.img} className="generateImgGenre"></img>
                    <div>{genre.name}</div>
                    <div className="slide">
                        <input onChange={e => {e = value(genre.id,genre.name),props.setGenre(genre.radio,e)}} type="range" id={genre.id} min="0" max="100" step="20" defaultValue="0"></input>
                        <div id={genre.name}>0</div><div className="percent">%</div>
                    </div>
                </span>
            )}
        </div>
    );
}

function value(range, genre) {
    var x = document.getElementById(range).value;
    document.getElementById(genre).innerHTML = x;
    return x;
}

function ButtonView(props) {
    return (
        console.log(props.totalPercent),
        <div className="button">
            <div className="percentStatus">{props.totalPercent*100+"%/100%"}</div>
            <button className="buttonNext" disabled={!(props.totalPercent == 1)} onClick={e => { window.location.hash = "#generateArtists" }}>→</button>
        </div>
    )
}

export { GenerateGenreView, ButtonView };