import React from 'react';
import "../../css/playlistInfo.css";
import '../../css/button.css';

function PlaylistInfoView(props) {
    return (
        <div className="playlistInfoDiv">
            <button className="buttonBack" onClick={e => { window.location.hash = "#generateArtists" }}>←</button>

            <table className="playlistInfo">
                <tr>Your Genres:
                    {props.genres.map(genre =>
                        <td>-{genre.name}{genre.value * 100}%</td>
                    )}
                </tr>
                <tr >Your Artist: <td>{props.artist !== null ? props.artist.name : "none"}</td>
                </tr>
                <tr >Length <td>{props.amount} songs</td>
                </tr>
                <tr >Explicit songs: <td>{props.explicit ? "true" : "false"}</td>
                </tr>
            </table>
            <button onClick={e => {
                props.generateFromRadio();
                props.generateFromArtist();
            }} className={props.generated ? "hidden" : "generateButton"} >
                Generate
            </button>
        </div>
    )
}
function SeePlaylist() {
    return (
        console.log("done"),
        <button className="generateButton" onClick={e => window.location.hash = "#generatedPlaylist"}>See your playlist</button>
    )
}



export { PlaylistInfoView, SeePlaylist };