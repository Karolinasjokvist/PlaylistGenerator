import React, { Component } from 'react';
import '../../css/startView.css';

function StartView(props) {
    return (
        <div className="menu">
            <div className="menuItem">
                <div className="buttonLeft" onClick = {e => {window.location.hash = "#exploreGenre"}}>
                    Explore
                </div>
            </div>
            <div className="menuItem">
                <div className="midButton"onClick = {e => {window.location.hash = "#generateStart"}}>
                    Generate Playlist
                </div>
            </div>
            <div className="menuItem">
                <div className="buttonRight"onClick = {e => {window.location.hash = "#myPlaylists"}}>
                    My Playlists
                </div>
            </div>
            <div className = "slide">
                <input onChange = {e => value()} type="range" id="myRange" min="0" max="100" step="10" defaultValue="50"></input>
                <p id = "demo"></p>
            </div>
        </div>

    )
}

function value(){
    var x = document.getElementById("myRange").value;
    document.getElementById("demo").innerHTML = x;
}

export default StartView;