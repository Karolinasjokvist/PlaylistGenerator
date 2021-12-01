import React, { Component } from 'react';
import './css/App.css';
import { TopbarView } from './js/views/topbarView';
import { StartView} from './js/views/startView';
import { ExploreArtistsView} from './js/views/exploreArtistsView';
import { GenerateStartView} from './js/views/generateStartView';
import { SongSource } from './js/songSource';
import { ExploreGenresView } from './js/views/exploreGenresView';
import { ExploreGenresPresenter } from './js/exploreGenresPresenter';
import {PlaylistModel} from './js/playlistModel';


function App(props) {
  const model = new PlaylistModel("hej",6);
  const genres = ["106","165","113"]
  return (
    <div>
      {TopbarView()}
      {console.log(model.numberOfSongs["10"])}
      {/*{<ExploreGenresPresenter genres = {genres}/>}
       {StartView()} /}
      {/ {console.log(SongSource.apiCall("/album/302127"))} /}
      {/ {model.addGenreToPlaylist("106", 3)} /}
      {/ {model.addGenreToPlaylist("106", 5)} /}
      {/ {console.log(model.genres["106"])} */}
      {/* {StartView()}*/}
      {GenerateStartView(model)}
      {console.log(SongSource.apiCall("/album/302127"))}
      {model.addGenreToPlaylist("106", 3)}
      {model.addGenreToPlaylist("106", 5)}
      {console.log(model.genres["106"])}
    </div>
  );
}

export default App;
