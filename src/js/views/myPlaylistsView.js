import React, { Component } from 'react';
import '../../css/myPlaylistsView.css';

function MyPlaylistsView(props) {
    return (
        <div className="playlistMenu">
            <div className="playlistMenuItem">
                <button className="playlistButton">
                    <p>Playlist 1</p>
                </button>
            </div>
        </div>
    )
}

export default MyPlaylistsView;