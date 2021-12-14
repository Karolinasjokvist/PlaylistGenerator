import React, { Component } from 'react';
import GeneratedPlaylistView from '../views/generatedPlaylistView';


function GeneratedPlaylistPresenter(props) {
    const [songs, setSongs] = React.useState(props.pmodel.songs);
    const [name, setName] = React.useState(props.pmodel.playlistName);
    const [currentSong, setCurrentSong] = React.useState(props.pmodel.currentSong);

    React.useEffect(() => {
        const obs = () => {
            setSongs(props.pmodel.songs)
            setName(props.pmodel.playlistName)
            setCurrentSong(props.pmodel.currentSong)
        };
        props.pmodel.addObserver(obs);
        return () => props.pmodel.removeObserver(obs);
    }, []);

    return (
        <div>
            {<GeneratedPlaylistView songs={songs}
                playlistName={name}
                currentSong={currentSong}
                setPlaylistName={(name) => { console.log(name), props.pmodel.setPlaylistName(name) }}
                addAsCurrent={(song) => props.pmodel.setCurrentSong(song)}
                getAudio={(song) => playMusic(song)} />}

        </div>
    );
}
function playMusic(song) {
    if (song === null) {
        return;
    }

    const audio = new Audio();
    audio.src = song.preview;
    return audio;
}

export default GeneratedPlaylistPresenter;