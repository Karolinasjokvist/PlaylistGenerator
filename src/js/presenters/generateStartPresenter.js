import React, { Component } from 'react';
import  GenerateStartView  from '../views/generateStartView';

function GenerateStartPresenter(props){

    return (
        <div>
            {<GenerateStartView numberOfSongsChosen = {(length)=>props.model.currentNumberOfSongs(length)}
                explicitChosen = {(choice)=>props.model.setExplicit(choice)}/>}
        </div>
    );
}

export default GenerateStartPresenter;