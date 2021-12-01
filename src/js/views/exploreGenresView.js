import React, { Component } from 'react';
import '../../css/explore.css';

export function ExploreGenresView(props) {
    return (
        <div className="explorePage">
            {props.genres.map(genre =>
                    <span className="exploreView" key={genre.id} onClick ={e => props.genreChosen(e = genre.id)}  >
                        <img src={genre.img} className="exploreImg"></img>
                        <div>{genre.name}</div>
                    </span>
                )}
        </div>
    );
}