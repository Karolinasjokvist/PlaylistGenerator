import React, { Component } from 'react';
import { Genres } from '../genres';
import  {GenerateGenreView, ButtonView}  from '../views/generateGenreView';


function GenerateGenrePresenter(props) {
    const genres = new Genres();

    return (
        <div>
            {<GenerateGenreView genres = {genres.list}/>}
            <ButtonView />
        </div>
    );
}

export default GenerateGenrePresenter;