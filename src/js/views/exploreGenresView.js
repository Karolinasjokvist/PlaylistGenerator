import React, { Component } from 'react';
import '../../css/explore.css';

function ExploreGenresView(props) {
    return (
        console.log(props),
        <div className="explorePage">
            <p className="title ">Pick a genre to explore!</p>
            {props.genres.map(genre =>
                    <span className="exploreView" key={genre.id} onClick ={e => props.genreChosen(e = genre.id)}  >
                        <img src={genre.img} className="exploreImg"></img>
                        <div>{genre.name}</div>
                    </span>
                )}
        </div>
    );
}

export default ExploreGenresView;