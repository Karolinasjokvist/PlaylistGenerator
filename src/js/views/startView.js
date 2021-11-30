import React, { Component } from 'react';
import '../../css/startView.css';

export function StartView() {
    return (
        <body>
            <div className="menu">
                <div className="menuItem">
                    <div className="sideButton">
                        Explore
                    </div>
                </div>
                <div className="menuItem">
                    <div className="midButton">
                        Generate Playlist
                    </div>
                </div>
                <div className="menuItem">
                    <div className="sideButton">
                        My Playlists
                    </div>
                </div>
            </div>
        </body>
    )
}