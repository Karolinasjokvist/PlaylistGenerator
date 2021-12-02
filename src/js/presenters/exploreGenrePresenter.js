import React, { Component } from 'react';
import { Genres } from '../genres';
import PromiseNoData from '../promiseNoData';
import  ExploreGenresView  from '../views/exploreGenresView';


function ExploreGenrePresenter(props) {
    const [genres, setGenres] = React.useState(null);

    React.useEffect(() => {
        setGenres(new Genres());
    }, []);

    return (
        <div>
            {PromiseNoData("h",genres,null)||(
            <ExploreGenresView genres = {genres.list} 
                genreChosen = {(id) => props.model.setCurrentGenre(id)}/>)}
        </div>
    );
}

export default ExploreGenrePresenter;