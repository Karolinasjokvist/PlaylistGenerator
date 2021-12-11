import React from 'react';
function PlaylistInfoView(props){
    return(
        <div>
            
            <button onClick={e => {props.generateFromRadio(); props.generateFromArtist()}}>Generate</button>
        </div>
    )
}



export default PlaylistInfoView;