import React, { Component } from 'react';
import '../../css/generateArtists.css';

function GenerateArtistsView(props) {
    return (
        <div className="generateArtists">
            <div className="titelBox">
                <div>Search for your favorite artists:</div>
                <input type="search" className="searchBar" onChange={e => props.onText(e.target.value)}></input>
            </div>
        </div>
    )
}

function SearchResultsView(props) {
    return (
        console.log(props.searchResults),
        <div className="searchResults">
            {props.searchResults.slice(0, 10).map(artist => 
                <div className="result" onClick={e => props.addArtist(artist)}>{artist.name}</div>
            )}
        </div>
    )
}

function AddedArtistsView(props) {
    return (
        <div className="artistsBox">
            <div>Added artists:</div>
            {props.artists.map(artist => 
                <div>-{artist.name}</div>
            )}
            
        </div>
    )
}

export { GenerateArtistsView, SearchResultsView, AddedArtistsView };