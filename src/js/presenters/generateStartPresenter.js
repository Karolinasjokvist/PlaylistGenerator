import React, { Component } from 'react';
import { SongSource } from '../songSource';
import { GenerateStartView } from '../views/generateStartView';
import PromiseNoData from '../promiseNoData';

export function GenerateStartPresenter(props) {
    const [promise, setPromise] = React.useState(null);

    React.useEffect(() => {
        setPromise(
            Promise.all([SongSource.currentNumberOfSongs(props)])
                .then((data) => setData(data))
                .catch((error) => setError(error))
        );
    }, []);

    return (
        <div>
            {PromiseNoData(promise) || (
                <GenerateStartView start = {data} />
            )}
        </div>
    );
}