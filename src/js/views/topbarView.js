import React, { Component } from 'react';
import '../../css/topbarView.css';

function TopbarView() {
    return (
        <div className="topBar">
            <div className="top">
                <div className="topbuttons">
                    <button className="b1">Register</button>
                    <button className="b1">Log in</button>
                </div>
            </div>
            <div className="head">PlaylistGenerator</div>

            <div className="nav">
                <button className="b2" onClick={e => { window.location.hash = "#exploreGenre" }}>Explore</button>
                <button className="b2" onClick={e => { window.location.hash = "#generateStart" }}>Generate playlist</button>
                <button className="b2" onClick={e => { window.location.hash = "#myPlaylists" }}>My playlist</button>
            </div>
        </div>
        // <div className="bottomBar"></div>
    )
}

export default TopbarView;

