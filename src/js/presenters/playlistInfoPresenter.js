import React, { Component } from 'react';
import { SongSource } from '../songSource';
import PlaylistInfoView from '../views/playlistInfoView';
import PromiseNoRender from '../promiseNoRender';

function PlaylistInfoPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    const [promiseArtist, setPromiseArtist] = React.useState(null);
    const [dataArtist, setDataArtist] = React.useState(null);
    const [errorArtist, setErrorArtist] = React.useState(null);

    return (
        <div>
            {<PlaylistInfoView genres = {props.pmodel.genres}
                               amount = {props.pmodel.numberOfSongs}
                               explicit = {props.pmodel.explicit}
                generateFromRadio={() => {
                props.pmodel.genres.map(genre => {
                    let array = []
                    setPromise(
                        SongSource.getTracklistFromRadio(genre.id)
                            .then((data) => {
                                setData(data);
                                console.log(data)
                                if (data.error === undefined) {
                                    array = pickSongs(data.data, genre.value, props.pmodel.numberOfSongs, props.pmodel.explicit);
                                    props.pmodel.addSongsToPlaylist(array);
                                }
                            })
                            .catch((error) => setError(error)),
                    )
                })
            }}
                generateFromArtist={() => {
                    let array = []
                    setPromiseArtist(
                        SongSource.getTracklistFromArtist(props.pmodel.artists[0].id)
                            .then((data) => {
                                setDataArtist(data);
                                console.log(data)
                                if (data.error === undefined) {
                                    array = pickSongs(data.data, 1, props.pmodel.numberOfSongs, true);
                                    props.pmodel.addSongsToPlaylist(array);
                                    (console.log(props.pmodel.songs))
                                };
                            })
                            .catch((error) => setErrorArtist(error))
                    )
                }}
            />}
            {
                PromiseNoRender(promiseArtist, dataArtist, errorArtist) && props.pmodel.songs.length !== props.pmodel.numberOfSongs/2||
                (console.log("next"),PromiseNoRender(promise, data, error)) ||  
                (console.log(props.pmodel.songs))
            }
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
    console.log(songs)
    return songs;
}


export default PlaylistInfoPresenter;