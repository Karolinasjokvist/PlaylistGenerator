import React, { Component } from 'react';
import '../../css/topbarView.css';

export function TopbarView() {
    return (
        <div className="background">
            <div className="top">
                <div className="topbuttons">
                    <button className="b1">Register</button>
                    <button className="b1">Log in</button>
                </div>
            </div>
            <div className="head">PlaylistGenerator</div>

            <div className="nav">
                <button className="b2">Explore</button>
                <button className="b2">Generate playlist</button>
                <button className="b2">My playlist</button>
            </div>
        </div>
    )
}