import React, { Component } from 'react';
import '../../css/explore.css';

export function ExploreArtistsView(props) {
    return (
        console.log(props.artists),
        <div className="explorePage">
            <p className="title">Explore artists in the genre!</p>
            {props.artists.map(genre =>
                    <span className="exploreView" key={genre.id}  >
                        <img src={genre.picture} className="exploreImg"></img>
                        <div>{genre.name}</div>
                    </span>
                )}
        </div>
    );
}