import React, { Component } from 'react';
import GeneratedPlaylistView from '../views/generatedPlaylistView';


function GeneratedPlaylistPresenter(props) {
    const [songs, setSongs] = React.useState(props.pmodel.songs);
    const [name, setName] = React.useState(props.pmodel.playlistName);

    React.useEffect(() => {
        const obs = () => {
            setSongs(props.pmodel.songs)
            setName(props.pmodel.playlistName)
        };
        props.pmodel.addObserver(obs);
        return () => props.pmodel.removeObserver(obs);
    }, []);

    return (
        <div>
            {<GeneratedPlaylistView songs = {songs}
                                    playlistName ={name}
                                    setPlaylistName ={(name) => {console.log(name), props.pmodel.setPlaylistName(name)}}/>}
        </div>
    );
}

export default GeneratedPlaylistPresenter;