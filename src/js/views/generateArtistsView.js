import React, { Component } from 'react';
import '../../css/generateArtists.css';
import '../../css/button.css';

function GenerateArtistsView(props) {
    return (
        <div className="generateArtists">
            <button className="buttonNext" onClick={e => { window.location.hash = "#playlistInfo" }}>→</button>
            <button className="buttonBack" onClick={e => { window.location.hash = "#generateGenre" }}>←</button>
            <div className="titelBox">
                <div>Search for an artist you like:</div>
                <input type="search" className="searchBar" onChange={e => props.onText(e.target.value)}></input>
            </div>
            <div className="artistsBox">
                <div>Added artist:</div>
            </div>
        </div>
    )
}

function SearchResultsView(props) {
    var artists = props.searchResults.filter((x) => !(x.name.includes("feat.")))
    artists = artists.filter((x) => !(x.name.includes(",")))
    return (
        console.log(props.searchResults),
        <div className="searchResults">
            {artists.slice(0, 10).map(artist =>
                <div className="result" onClick={e => props.addArtist(artist)}>{artist.name}</div>
            )}
        </div>
    )
}

function AddedArtistsView(props) {
    return (
        <div className="addedArtists">
            <div className="listContent">
                <div className="deleteButton" onClick={e => props.removeArtist()}>x</div>
                <div className="name">{props.artist.name}</div>
            </div>
        </div>
    )
}

function FullList() {
    return (
        <div>
            List is full!
        </div>
    )

}

export { GenerateArtistsView, SearchResultsView, AddedArtistsView, FullList };