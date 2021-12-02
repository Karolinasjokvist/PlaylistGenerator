import React, { Component } from 'react';
import { SongSource } from './songSource';
import PromiseNoData from './promiseNoData';
import { ExploreArtistsView } from './views/exploreArtistsView';

export function ExploreArtistsPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        setPromise(
            SongSource.getArtistInfo(props.artists)
                .then((data) => setData(data))
                .catch((error) => setError(error))
        );
    }, []);

    return (
        <div>
            {PromiseNoData(promise, data, error) || (
                <ExploreArtistsView artists = {data}/>
            )}
        </div>
    );
}