import React, { Component } from 'react';
import '../../css/topbarView.css';

export function TopbarView() {
    return (
        <div className="background">
            <div className="top">
                <div className="topbuttons">
                    <button className="b1" onClick ={e => {window.location.hash = "#register"}}>Register</button>
                    <button className="b1" onClick ={e => {window.location.hash = "#login"}}>Log in</button>
                </div>
            </div>
            <div className="head">PlaylistGenerator</div>

            <div className="nav">
                <button className="b2" onClick ={e => {window.location.hash = "#exploreGenre"}}>Explore</button>
                <button className="b2" onClick ={e => {window.location.hash = "#generateStart"}}>Generate playlist</button>
                <button className="b2" onClick ={e => {window.location.hash = "#myPlaylists"}}>My playlist</button>
            </div>
        </div>
    )
}