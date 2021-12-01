import React, { Component } from 'react';
import './css/App.css';
import { TopbarView } from './js/views/topbarView';
import { StartView} from './js/views/startView';
import { SongSource } from './js/songSource';

import {PlaylistModel} from './js/playlistModel';
import { ExploreGenresView } from './js/views/exploreGenresView';
import { ExploreGenresPresenter } from './js/exploreGenresPresenter';

function App(props) {
  const model = new PlaylistModel("hej",6);
  const genres = ["106","165","113"]
  return (
    <div>
      {TopbarView()}
      {console.log(SongSource.getGenre("106"))}
      {<ExploreGenresPresenter genres = {genres}/>}
      {/* {StartView()} /}
      {/ {console.log(SongSource.apiCall("/album/302127"))} /}
      {/ {model.addGenreToPlaylist("106", 3)} /}
      {/ {model.addGenreToPlaylist("106", 5)} /}
      {/ {console.log(model.genres["106"])} */}
    </div>
  );
}

export default App;
