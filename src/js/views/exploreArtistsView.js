import React, { Component } from 'react';
import '../../css/explore.css';

function ExploreArtistsView(props) {
    return (
        <div className="explorePage">
            <p className="title">Explore artists in the genre!</p>
            {props.artists.slice(0,15).map(genre =>
                    <span className="exploreView" key={genre.id}  >
                        <img src={genre.picture_xl} className="exploreImg"></img>
                        <div>{genre.name}</div>
                    </span>
                )}
        </div>
    );
}

export default ExploreArtistsView;