import React, { Component } from 'react';
import { SongSource } from './songSource';
import PromiseNoData from './promiseNoData';

export function ExploreArtistsPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        setPromise(
            SongSource.getArtistsFromGenre(props.genre)
                .then((data) => setData(data))
                .catch((error) => setError(error))
        );
    }, []);

    return (
        <div>
            {PromiseNoData(promise, data, error) || (
                console.log(data)
            )}
        </div>
    );
}