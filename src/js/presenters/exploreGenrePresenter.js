import React, { Component } from 'react';
import  ExploreGenresView  from '../views/exploreGenresView';


function ExploreGenrePresenter(props) {

    return (
        <div>
            {<ExploreGenresView genres = {props.model.genreList} 
                genreChosen = {(id) => props.model.setCurrentGenre(id)}/>}
        </div>
    );
}

export default ExploreGenrePresenter;