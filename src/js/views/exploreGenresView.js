import React, { Component } from 'react';
export function ExploreGenresView(props) {
    return (
        
        <div className="explorePage">
            {props.genres.map(genre =>
                <span className="exploreView" key={genre.id}   >
                    <img src={"https://images.freeimages.com/images/large-previews/056/concert-1189401.jpg"} className="exploreImg"></img>
                    <div className="exploreText">{genre.name}</div>
                </span>
            )}
        </div>
    );
}