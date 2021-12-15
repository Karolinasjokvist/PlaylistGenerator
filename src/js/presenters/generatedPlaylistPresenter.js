import React, { Component } from 'react';
import GeneratedPlaylistView from '../views/generatedPlaylistView';


function GeneratedPlaylistPresenter(props) {
    const [songs, setSongs] = React.useState(props.pmodel.songs);
    const [name, setName] = React.useState(props.pmodel.playlistName);
    const [currentSong, setCurrentSong] = React.useState(props.pmodel.currentSong);
    const [audio, setAudio] = React.useState(props.pmodel.currentAudio);

    React.useEffect(() => {
        const obs = () => {
            setSongs(props.pmodel.songs)
            setName(props.pmodel.playlistName)
            setCurrentSong(props.pmodel.currentSong)
            setAudio(props.pmodel.currentAudio);
        };
        props.pmodel.addObserver(obs);
        return () => props.pmodel.removeObserver(obs);
    }, []);

    return (
        <div>
            {<GeneratedPlaylistView songs={songs}
                playlistName={name}
                setPlaylistName={(name) => { console.log(name), props.pmodel.setPlaylistName(name) }}
                playOrPause={(song) => {props.pmodel.setCurrentSong(song)}}
                currentSong={currentSong}
                save={() => props.savePlaylist(props.pmodel.playlistName)}
            />}

        </div>
    );
}

function getDate(){
    
}

export default GeneratedPlaylistPresenter;