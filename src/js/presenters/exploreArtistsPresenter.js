import React, { Component } from 'react';
import { SongSource } from '../songSource';
import PromiseNoData from '../promiseNoData';
import { ExploreArtistsView } from '../views/exploreArtistsView';
import { ExplorePlayMusic } from '../views/exploreArtistsView';

function ExploreArtistsPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(props.model.currentGenreArtists);
    const [error, setError] = React.useState(props.model.currentGenreError);

    const [promiseSongs, setPromiseSongs] = React.useState(null);
    const [dataSongs, setDataSongs] = React.useState(null);
    const [errorSongs, setErrorSongs] = React.useState(null);


    React.useEffect(() => {
        const obs = () => {
            setPromise(
                SongSource.getArtistsFromGenre(props.model.currentGenre)
                    .then((data) => setData(data))
                    .catch((error) => setError(error))
            )
        };
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, []);

    return (
        <div>
            {/* {console.log(data)} */}
            {PromiseNoData(promise, data, error) || (
                <ExploreArtistsView artist={data.data}
                    func={(id) => {
                        console.log(id)
                        setPromiseSongs(
                            SongSource.getSongsFromArtist(id)
                                .then((dataSongs) => {setDataSongs(dataSongs); <ExplorePlayMusic songs={dataSongs.data}/>})
                                .catch((errorSongs) => setError(errorSongs)),
                                console.log(dataSongs.data),
                        )
                    }} />
            )}
        </div>
    );
}

export default ExploreArtistsPresenter;
