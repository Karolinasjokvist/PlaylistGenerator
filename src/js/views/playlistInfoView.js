import React, { Component } from 'react';
function PlaylistInfoView(props){
    return(
        <div>
            <button onClick={e => props.generatePlaylist()}>Generate</button>
        </div>
    )
}

export default PlaylistInfoView;