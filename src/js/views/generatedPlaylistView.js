import React, { Component } from 'react';
import '../../css/playlistView.css';

function GeneratedPlaylistView(props) {
    console.log(props.songs)
    return (
        <div className="playlistMenu">
            <div className="leftbox"></div>

            <div className="middlebox">
                <div className="toprow">
                    <input type="text" className="titleText" placeholder="Edit Playlistname" onChange={e => props.setPlaylistName(e.target.value)} ></input>
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
                                    <td><div id="name" className="playButton" onClick={e => {

                                        // if (song.id === props.currentSong) {
                                           
                                        //    props.removeAsCurrent();
                                        // } else {
                                        props.playOrPause(song);
                                        
                                        
                                        
                                    }}>
                                        {song === props.currentSong ? "◼" : "▶"}
                                    </div>{song.title}</td>
                                    <td>{song.artist.name}</td>
                                    <td>{song.album.title}</td>
                                    <td>{(song.duration / 60).toFixed(0)}:{addZero(song.duration % 60)}</td>
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
function addZero(number) {
    return number < 10 ? "0" + number : number;
}


// &#128393; 
// &#9658;

export default GeneratedPlaylistView;