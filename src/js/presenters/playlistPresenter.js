import React, { Component } from 'react';
import  PlaylistView  from '../views/playlistView';

function PlaylistPresenter(props){

    return (
        <div>
            {<PlaylistView/>}
        </div>
    );
}

export default PlaylistPresenter;