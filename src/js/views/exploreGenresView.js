import React, { Component } from 'react';
import '../../css/explore.css';

function ExploreGenresView(props) {
    return (
        console.log(props.genres),
        <div className="explorePage">
            <div className="title ">Pick a genre to explore!</div>
            {props.genres.map(genre =>
                    <span className="exploreView" key={genre.id} onClick ={e => {props.genreChosen(genre.id); window.location.hash = "#exploreArtists"}}  >
                        <img src={genre.img} className="exploreImgGenre"></img>
                        <div>{genre.name}</div>
                    </span>
                )}
        </div>
    );
}

export default ExploreGenresView;