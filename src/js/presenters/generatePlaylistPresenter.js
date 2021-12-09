import React, { Component } from 'react';
import PromiseNoRender from '../promiseNoRender';
import { SongSource } from '../songSource';

function GeneratePlaylistPresenter(props) {
    props.pmodel.genres.forEach(genre => {
        console.log(genre.id);
        let array = TrackListPresenter(genre.id);
        if (array !== "quota error" && array.key !== null) {
            array = pickSongs(array, genre.value, props.pmodel.numberOfSongs);
            props.pmodel.addSongsToPlaylist(array);
        }

    })

    React.useEffect(() => {
        //const obs = () => {
        //};
        // props.pmodel.addObserver(obs);
        // return () => props.pmodel.removeObserver(obs);*/
    }, []);

    return (
        <div>{console.log(props.pmodel.songs)}</div>
    );

}

function pickSongs(arrayWithSongs, percentage, numberOfSongs) {
    console.log(arrayWithSongs);
    let songs = [5];
    let amount = (percentage * (numberOfSongs/2));
    for (let i = 0; i < amount; i++) {
        songs[i] = arrayWithSongs[i];
    }
    return songs;
}

function TrackListPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        //const obs = () => {
        setPromise(
            SongSource.getTracklistFromRadio(props)
                .then((data) => setData(data))
                .catch((error) => setError(error))
        );

        //};
        // props.pmodel.addObserver(obs);
        // return () => props.pmodel.removeObserver(obs);*/
    }, []);

    return (
        PromiseNoRender(promise, data, error) || data.data
    );
}

export default GeneratePlaylistPresenter;