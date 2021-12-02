import React, { Component } from 'react';
import { SongSource } from './songSource';
import { GenerateStartView } from './views/generateStartView';
import PromiseNoData from './promiseNoData';

export function GenerateStartPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        setPromise(
            Promise.all([SongSource.getGenre(props.genres[0]),SongSource.getGenre(props.genres[1])])
                .then((data) => setData(data))
                .catch((error) => setError(error))
        );
    }, []);

    return (
        <div>
            {PromiseNoData(promise, data, error) || (
                <GenerateStartView genres={data} />
            )}
        </div>
    );
}