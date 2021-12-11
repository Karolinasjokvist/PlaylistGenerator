import React, { Component } from 'react';
import GeneratedPlaylistView from '../views/generatedPlaylistView';


function GeneratedPlaylistPresenter(props) {

    return (
        <div>
            {<GeneratedPlaylistView pmodel = {props.pmodel}/>}
        </div>
    );
}

export default GeneratedPlaylistPresenter;