import React, { Component } from 'react';
import GeneratePlaylist from "../generatePlaylist"
import { GeneratedPlaylistView } from "../views/generatedPlaylistView"
import playlistNotDone from '../playlistNotDone';

function GeneratePlaylistPresenter(props) {
    const [songs, setSongs] = React.useState(props.pmodel.songs);

    React.useEffect(() => {
        const obs = () => {
            setSongs(props.pmodel.songs);
        };
        props.pmodel.addObserver(obs);
        return () => props.pmodel.removeObserver(obs);
    }, []);

    return (
        console.log(songs),
        <div>
            {playlistNotDone(props.pmodel.songs, 9) || <GeneratedPlaylistView pmodel={songs}/>}
        </div>
    );


}

export default GeneratePlaylistPresenter ;