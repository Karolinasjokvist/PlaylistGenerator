import React, { Component } from 'react';
import '../../css/explore.css';

function ExploreArtistsView(props) {
    return (
        <div className="explorePage" >
            <button className="buttonBack" onClick={e => { window.location.hash = "#exploreGenre" }}>←</button>

            <div className="title">Explore artists in the {props.genreName} genre!</div>
            {props.artist.slice(0, 15).map(artist =>
                <span className="exploreView" key={artist.id} onClick={e => { props.func(artist.id) }} >
                    <img src={artist.picture_xl} className="exploreImgArtist"></img>
                    <div>{artist.name}</div>
                </span>
            )}
        </div>
    );
}



function ExplorePlayMusic(props) {
    console.log("hew")
    const audio = new Audio();
    return (
        <div className="stopMusic">
            {props.songs.slice(0, 1).map(song =>
            {if(true){
                audio.src = song.preview
            }console.log(audio.src)}
            )}
            {playMusic(audio)}
            <div className="stopMusic" onClick={e => { console.log("stop music"); audio.pause() }}>stop</div>
        </div>
    )
}

function playMusic(audio){
    audio.play()
}

export { ExploreArtistsView, ExplorePlayMusic };
