import React, { Component } from 'react';
import { Genres } from '../genres';
import  ExploreGenresView  from '../views/exploreGenresView';


function ExploreGenrePresenter(props) {
    const genres = new Genres();

    return (
        <div>
            {<ExploreGenresView genres = {genres.list} 
                genreChosen = {(id) => props.model.setCurrentGenre(id)}/>}
        </div>
    );
}

export default ExploreGenrePresenter;