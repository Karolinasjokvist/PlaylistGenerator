import React, { Component } from 'react';
import '../../css/explore.css';

function ExploreArtistsView(props) {
    return (
        <div className="explorePage" >
            <p className="title">Explore artists in the {props.artist.genre} genre!</p>
            {props.artist.slice(0, 15).map(artist =>
                <span className="exploreView" key={artist.id} onClick={e => props.func(artist.id)} >
                    <img src={artist.picture_xl} className="exploreImgArtist"></img>
                    <div>{artist.name}</div>
                </span>
            )}
        </div>
    );
}

function ExplorePlayMusic(props){
    return (
        <div>
            {console.log("hej")}
        {props.songs.slice(0, 2).map(song =>{console.log(song.preview)})}
        </div>
    )
}

function playAudio(song) {
    console.log("hej")
    new Audio(song).play();
}


export {ExploreArtistsView, ExplorePlayMusic};