import React, { Component } from 'react';
import '../../css/generateArtists.css';

function GenerateArtistsView(props) {
    return (
        <div className="generateArtists">
            <div className="titelBox">
                <div>Search for your favorite artists:</div>
                <input type="search" className="searchBar" onChange={e => props.onText(e.target.value)}></input>
            </div>
            <div className="artistsBox">
                <div>Added artists:</div>
            </div>
        </div>
    )
}
function ButtonView(){
    return(
        <div className="button">
            <button className="buttonNext" onClick ={e => {window.location.hash = "#generateGenre"}}>→</button>
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
        console.log("hej"),
        <div className="addedArtists">
            {props.artists.map(artist =>
                <div className="listContent">
                    <div className="deleteButton" onClick={e => props.removeArtist(artist.id)}>x</div>
                    <div className="name">{artist.name}</div>
                </div>
            )}
        </div>
    )
}

function FullList(){
    return (
        <div>
            List is full!
        </div>
    )

}

export { GenerateArtistsView, SearchResultsView, AddedArtistsView, FullList, ButtonView };