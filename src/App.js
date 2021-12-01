import React, { Component } from 'react';
import './css/App.css';
import { TopbarView } from './js/views/topbarView';
import { StartView} from './js/views/startView';
import { ExploreArtistsView} from './js/views/exploreArtistsView';
import { GenerateStartView} from './js/views/generateStartView';
import { SongSource } from './js/songSource';
import { ExploreGenresView } from './js/views/exploreGenresView';
import { ExploreArtistsPresenter, ExploreGenresPresenter } from './js/exploreArtistsPresenter';
import {PlaylistModel} from './js/playlistModel';
import { Genres } from './js/genres';


function App(props) {
  const model = new PlaylistModel();
  const genres = ["106","165","113"]
  return (
    <div>
      {TopbarView()}
      {console.log(model.numberOfSongs[10])}
      {<GenerateStartView model = {model}/>}
      {/*{<ExploreGenresPresenter genres = {genres}/>}
       {StartView()} /}
      {/ {console.log(SongSource.apiCall("/album/302127"))} /}
      {/ {model.addGenreToPlaylist("106", 3)} /}
      {/ {model.addGenreToPlaylist("106", 5)} /}
      {/ {console.log(model.genres["106"])} */}
      {/* {StartView()}
      {console.log(SongSource.apiCall("/album/302127"))}
      {model.addGenreToPlaylist("106", 3)}
      {model.addGenreToPlaylist("106", 5)}
      {console.log(model.genres["106"])}*/}
  const model = new PlaylistModel("hej",6);
  const genres = new Genres();
  return (
    <div>
      {TopbarView()}
      {console.log(genres.list)}
      {<ExploreGenresView genres = {genres.list}
           genreChosen = {(id) => console.log(id)}/>}

      {<ExploreArtistsPresenter genre = {genres.list[1].id}/>}
      {/* {console.log(model.numberOfSongs["10"])} */}
      {/* {<ExploreGenresPresenter />} */}
       {/* {StartView()} /} */}
      {/* {/ {console.log(SongSource.apiCall("/album/302127"))} /} */}
      {/* {/ {model.addGenreToPlaylist("106", 5)} /} */}
      {/* {/ {console.log(model.genres["106"])} */}
      {/* {StartView()}*/}
      {/* {GenerateStartView(model)} */}
      {/* {console.log(SongSource.apiCall("/album/302127"))} */}
      {/* {model.addGenreToPlaylist("106", 3)} */}
      {/* {model.addGenreToPlaylist("106", 5)} */}
      {/* {console.log(model.genres["106"])} */}
    </div>
  );
}

export default App;
