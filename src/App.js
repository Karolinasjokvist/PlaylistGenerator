import React, { Component } from 'react';
import './css/App.css';
import { TopbarView } from './js/views/topbarView';
import { ExploreArtistsPresenter} from './js/exploreArtistsPresenter';
import { ExploreGenrePresenter } from './js/exploreGenrePresenter';
import { GenerateStartView } from './js/views/generateStartView';
import {PlaylistModel} from './js/playlistModel';


function App(props) {
  const pmodel = new PlaylistModel();
  return (
    <div>
      {TopbarView()}
      {/* {<ExploreGenresView genres = {genres.list}  */}
      {/* // genreChosen = {(id) => console.log(id)}/>} */}
      {/* {<ExploreGenrePresenter model = {props.model} />} */}
      {/* {<ExploreArtistsPresenter artists = {"13"}/>} */}
      {/* {console.log(model.numberOfSongs["10"])} */}
      {/* {<ExploreGenresPresenter />} */}
       {/* {StartView()} /} */}
      {/* {/ {console.log(SongSource.apiCall("/album/302127"))} /} */}
      {/* {/ {model.addGenreToPlaylist("106", 5)} /} */}
      {/* {/ {console.log(model.genres["106"])} */}
      {/* {StartView()} */}
      {GenerateStartView(pmodel)}
      {/* {console.log(SongSource.apiCall("/album/302127"))} */}
      {/* {model.addGenreToPlaylist("106", 3)} */}
      {/* {model.addGenreToPlaylist("106", 5)} */}
      {/* {console.log(model.genres["106"])} */}
    </div>
  );
}

export default App;
