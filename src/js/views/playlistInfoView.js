import React from 'react';
function PlaylistInfoView(props){
    return(
        <div>
            {props.genres.map(genre =>
                <div>Your Genres: {genre}</div>
            )}
            <button onClick={e => {props.generateFromRadio(); props.generateFromArtist()}}>Generate</button>
        </div>
    )
}



export default PlaylistInfoView;