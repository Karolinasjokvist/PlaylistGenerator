import React from 'react';
import '../../css/explore.css';

function ExploreArtistsView(props) {
    return (
        <div className="explorePage" >
            <button className="buttonBack" onClick={e => { window.location.hash = "#exploreGenre" }}>←</button>
            {/* {props.song !== undefined && ( 
                // <div className="stopMusic" onClick={e => { console.log(props.song); console.log("stop music"); props.song.pause() }}>stop</div>
            // )}*/}
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

function StopMusic(props) {
    return (
        <div className="stopMusic">
            {props.audio !== null && (
                <div className="stop" >
                    <div className="stopButton" onClick={e => {
                        console.log("stop music");
                        props.audio.pause();
                        props.musicStopped()
                    }}>
                    </div>
                    <div>{props.song.title}</div>
                    <div>{props.song.artist.name}</div>
                    <div className="nextButton" onClick={e => {
                        props.nextSong();
                    }}>
                    </div>
                </div>
            )}
        </div>
    )
}

export { ExploreArtistsView, StopMusic };
