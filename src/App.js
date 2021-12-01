import React, { Component } from 'react';
import './css/App.css';
import { TopbarView } from './js/views/topbarView';
import { StartView} from './js/views/startView';
import { SongSource } from './js/songSource';

import {PlaylistModel} from './js/model';


function App(props) {
  const model = new PlaylistModel("hej",6);
  return (
    <div>
      {TopbarView()}
      {StartView()}
      {console.log(SongSource.apiCall("/album/302127"))}
      {model.addGenreToPlaylist("106", 3)}
      {model.addGenreToPlaylist("106", 5)}
      {console.log(model.genres["106"])}
    </div>
  );
}

export default App;
