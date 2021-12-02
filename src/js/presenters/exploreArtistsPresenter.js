import React, { Component } from 'react';
import { SongSource } from '../songSource';
import PromiseNoData from '../promiseNoData';
import  ExploreArtistsView  from '../views/exploreArtistsView';

function ExploreArtistsPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);


    React.useEffect(() => {
        setPromise(
            SongSource.getArtistsFromGenre(props.genre)
                .then((data) => setData(data))
                .catch((error) => setError(error))
        )
    }, []);

    return (
        <div>
            {console.log(data)}
            {PromiseNoData(promise, data, error) || (
                <ExploreArtistsView artists={data.data} />
            )}
        </div>
    );
}

export default ExploreArtistsPresenter;