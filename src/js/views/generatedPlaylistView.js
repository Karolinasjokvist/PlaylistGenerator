import React, { Component } from 'react';
import '../../css/playlistView.css';

function GeneratedPlaylistView(props) {
    console.log(props.songs)
    return (
        <div className="playlistMenu">
            <div className="leftbox"></div>

            <div className="middlebox">
                <div className="toprow">
                    <input type="text" className="titleText" placeholder = "Edit PlaylistName" onChange={e => props.setPlaylistName(e.target.value)} ></input>
                    {/* <div className="spacing"></div> */}
                    <div className="savecontainer"><button className="save">Save</button></div>
                </div>

                <table className="playlisttable">
                    <tbody>
                        <tr>
                            <td>Song</td>
                            <td>Artist</td>
                            <td>Album</td>
                            <td>Length</td>
                        </tr>
                        {props.songs.map(song => {
                            console.log(song)
                            return (
                                <tr>
                                    <td><button className="playButton">&#9658;</button>{song.title}</td>
                                    <td>{song.artist.name}</td>
                                    <td>{song.album.title}</td>
                                    <td>{(song.duration / 60).toFixed(0)}:{song.duration % 60}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </div>

            <div className="rightbox">  </div>

        </div>
    )
}
function value(id) {
    var x = document.getElementById(id).value;
    return x;
}
// &#128393; 

export default GeneratedPlaylistView;