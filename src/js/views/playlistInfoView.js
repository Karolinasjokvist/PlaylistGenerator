import React from 'react';
import "../../css/playlistInfo.css";
function PlaylistInfoView(props) {
    return (
        <div className="playlistInfoDiv">
            <button className="buttonBack" onClick={e => { window.location.hash = "#generateArtists" }}>←</button>

            <div className="playlistInfo">
                <div className="info">Your Genres:
                    {props.genres.map(genre =>
                        <div>-{genre.name}{genre.value * 100}%</div>
                    )}
                </div>
                <div className="info">Your Artist: {props.artist !== undefined ? props.artist.name : "none"}</div>
                <div className="info">Length: {props.amount}</div>
                <div className="info">Explicit songs: {(props.explicit) ? "true" : "false"}</div>
            </div>
            <button onClick={e => { props.generateFromRadio(); props.generateFromArtist(); window.location.hash = "#generatedPlaylist" }} className="generateButton" >
                Generate
            </button>
        </div>
    )
}



export default PlaylistInfoView;