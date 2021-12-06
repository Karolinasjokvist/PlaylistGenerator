import React, { Component } from 'react';
import '../../css/explore.css';

function ExploreArtistsView(props) {
    return (
        <div className="explorePage" >
            <p className="title">{"Explore artists in the"} {props.genre.name} {"genre!"}</p>
            {props.artist.slice(0, 15).map(artist =>
                <span className="exploreView" key={artist.id} onClick={e => props.func(artist.id)} >
                    <img src={artist.picture_xl} className="exploreImgArtist"></img>
                    <div>{artist.name}</div>
                </span>
            )}
        </div>
    );
}

// function ExplorePlayMusic(props) {
    // return (
        // <div>
            {/* {props.songs.slice(0, 1).map(song => { */}
                    // const audio = new Audio(song.preview);
                // <span>
                    {/* <div className="stopMusic" onClick={e => audio.pause()}>stop</div> */}
                {/* </span> */}
            // })}
        {/* </div> */}
    // )
// }

export { ExploreArtistsView, ExplorePlayMusic };