import React, { Component } from 'react';
import '../../css/explore.css';

function ExploreArtistsView(props) {
    return (
        <div className="explorePage" /*onClick={e => playAudio(props.artist.id)}*/>
            <p className="title">Explore artists in the {props.artist.genre} genre!</p>
            {props.artist.slice(0,15).map(artist =>
                    <span className="exploreView" key={artist.id}  >
                        <img src={artist.picture_xl} className="exploreImgArtist"></img>
                        <div>{artist.name}</div>
                    </span>
                )}
        </div>
    );
}

// function playAudio(){
    // new Audio("https://cdns-preview-c.dzcdn.net/stream/c-cca63b2c92773d54e61c5b4d17695bd2-8.mp3").play();
//    }


export default ExploreArtistsView;