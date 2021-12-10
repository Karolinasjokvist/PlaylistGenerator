import React, { Component } from 'react';
import '../../css/myPlaylistsView.css';

function MyPlaylistsView(props) {
    return (
        <div className="playlistMenu">
            <div className="leftbox"><button className="leftarr" onClick ={e => {window.location.hash = "#start"}}>&#10229;</button></div>

            <div className="middlebox">
                <div className="toprow">
                    <div className="titletext">My playlists</div>
                    <div className="spacing"></div>
                    <div className="savecontainer"><button className="save">Save</button></div>
                </div>

                <table className="playlisttable">
                    <tbody>
                        <tr>
                            <td>Playlist</td>
                            <td>Date created</td>
                            <td>Length</td>
                        </tr>
                        
                        <tr>
                            <td>&#9658; Playlist1 <button className="pencil" onClick ={e => {window.location.hash = "#playlist"}}>&#128393;</button></td>
                            <td>2021/12/09</td>
                            <td>10</td>
                        </tr>
                        
                        <tr>
                            <td>&#9658; Playlist2 <button className="pencil" onClick ={e => {window.location.hash = "#playlist"}}>&#128393;</button></td>
                            <td>2021/12/05</td>
                            <td>20</td>
                        </tr>

                    </tbody>
			    </table>

            </div>

            <div className="rightbox">  </div>

        </div>
    )
}

export default MyPlaylistsView;