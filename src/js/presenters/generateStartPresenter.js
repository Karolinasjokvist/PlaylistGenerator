import React, { Component } from 'react';
import GenerateStartView from '../views/generateStartView';

function GenerateStartPresenter(props) {

    return (
        <div>
            {<GenerateStartView numberOfSongsChosen={(length) => props.model.currentNumberOfSongs(length)}
                explicitChosen={(choice) => props.model.setExplicit(choice)}
                currentNumberOfSongs={e => props.model.getCurrentNumberOfSongs(e)} />}
        </div>
    );
}

export default GenerateStartPresenter;