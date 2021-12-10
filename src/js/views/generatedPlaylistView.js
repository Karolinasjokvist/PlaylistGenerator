import React, { Component } from 'react';
// function LoadingView(props){

// }

function GeneratedPlaylistView(props){
    return(
        <div>
            {props.pmodel.songs.map(song =>
                <div>{song.name}</div>
            )}
        </div>
    )
}
export {GeneratedPlaylistView};