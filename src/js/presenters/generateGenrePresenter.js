import React, { Component } from 'react';
import { Genres } from '../genres';
import  GenerateGenreView  from '../views/generateGenreView';


function GenerateGenrePresenter(props) {
    const genres = new Genres();

    return (
        <div>
            {<GenerateGenreView genres = {genres.list} 
                genreChosen = {(id) => props.model.setCurrentGenre(id)}/>}
        </div>
    );
}

export default GenerateGenrePresenter;