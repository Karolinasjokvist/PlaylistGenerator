import React, { Component } from 'react';
import { SongSource } from '../songSource';
import PromiseNoData from '../promiseNoData';
import promiseNoRender from '../promiseNoRender';
import { ExploreArtistsView, StopMusic } from '../views/exploreArtistsView';
import promiseNoArtists from '../promiseNoArtists';


function ExploreArtistsPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(props.model.currentGenreError);

    const [promiseSongs, setPromiseSongs] = React.useState(null);
    const [dataSongs, setDataSongs] = React.useState(null);
    const [errorSongs, setErrorSongs] = React.useState(null);

    const [audio, setAudio] = React.useState(null);
    const [dataIndex, setDataIndex] = React.useState(null);
    let index = 0;


    React.useEffect(() => {
        const obs = () => {
            setPromise(
                SongSource.getArtistsFromGenre(props.model.currentGenre)
                    .then((data) => setData(data))
                    .catch((error) => setError(error))
            )
            setDataIndex(0);
        };
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, []);

    return (
        <div>
            {console.log(props.model.getGenreName(props.model.currentGenre))}
            {promiseNoArtists(promise, data, error) || (
                <ExploreArtistsView artist={data.data}
                    genre={props.model.currentGenre}
                    genreName={props.model.getGenreName(props.model.currentGenre)}
                    song={audio}
                    func={(id) => {
                        setPromiseSongs(
                            SongSource.getSongsFromArtist(id)
                                .then((dataSongs) => {
                                    setDataSongs(dataSongs);
                                    if (dataSongs.error === undefined) {
                                        setAudio(playMusic(dataSongs.data, index));
                                    }
                                })
                                .catch((errorSongs) => setErrorSongs(errorSongs)),
                        )
                    }} />
            )}
            {promiseNoRender(promiseSongs, dataSongs, errorSongs) || <StopMusic audio={audio}
                song={dataSongs.data[dataIndex]}
                nextSong={() => { (index < 5) ? index++ : index = 0; setDataIndex(index); playMusic(dataSongs.data, index)}}
                musicStopped={() => setAudio(null), setDataIndex(0), index = 0} />}
        </div>
    );
}

function playMusic(songs, index) {
    const audio = new Audio();
    audio.src = songs[index].preview

    console.log(audio)
    audio.play();
    return audio;
}



export default ExploreArtistsPresenter;
