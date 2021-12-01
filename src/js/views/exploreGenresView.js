import React, { Component } from 'react';
export function ExploreGenresView(props) {
    return (
        
        <div>
            {props.genres.map(genre =>
                <span class="genresView" key={genre.id}   >
                    <img src={genre.picture} class="genreImgView"></img>
                    <div>{genre.name}</div>
                </span>
            )}
        </div>
    );
}