import React from 'react';
import PlaylistInfoPresenter from '../presenters/playlistInfoPresenter';

function GeneratedPlaylistView(props) {
    let array = [];
    return (
        <div>
            <button onClick={e => {
                props.pmodel.genres.forEach(element => {
                    array = PlaylistInfoPresenter(element)
                    props.pmodel.addSongsToPlaylist(array,element.value,props.pmodel.numBerOfSongs,props.pmodel.explicit)
                    console.log(props.pmodel.songs)
                })
            }}>Generate</button>
        </div>
    )
}

export default GeneratedPlaylistView;