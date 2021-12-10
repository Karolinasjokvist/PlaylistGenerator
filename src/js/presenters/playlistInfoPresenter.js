import React, { Component } from 'react';
import { SongSource } from '../songSource';
import PlaylistInfoView from '../views/playlistInfoView';
import PromiseNoRender from '../promiseNoRender';

function PlaylistInfoPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    return (
        <div>
            {<PlaylistInfoView generatePlaylist={() => props.pmodel.genres.map(genre => {
                let array = [];
                setPromise(
                    SongSource.getTracklistFromRadio(genre.id)
                        .then((data) => setData(data))
                        .catch((error) => setError(error))
                );
                PromiseNoRender(promise, data, error) || (
                    array = pickSongs(data.data, genre.value, props.pmodel.numberOfSongs, props.pmodel.explicit),
                    props.pmodel.addSongsToPlaylist(array))
                console.log(props.pmodel.songs)
            })} />}
        </div>
    );
}

function pickSongs(arrayWithSongs, percentage, numberOfSongs, explicit) {
    let songs = [];
    let amount = (percentage * (numberOfSongs / 2));
    let j = 0;

    if (!explicit) {
        for (let i = 0; i < amount; i++) {
            if (arrayWithSongs[i].explicit) {
                j++;
            }
            songs[i] = arrayWithSongs[j];
            j++;
        }
    } else {
        for (let i = 0; i < amount; i++) {
            songs[i] = arrayWithSongs[i];
        }
    }
    return songs;
}


export default PlaylistInfoPresenter;