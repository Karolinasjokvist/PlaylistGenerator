import React, { Component } from 'react';
import  MyPlaylistView  from '../views/myPlaylistsView';

function MyPlaylistsPresenter(props){

    return (
        <div>
            {<MyPlaylistView/>}
        </div>
    );
}

export default MyPlaylistsPresenter;