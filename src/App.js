import React, { Component } from 'react';
// import './css/App.css';
import  ExploreArtistsPresenter from './js/presenters/exploreArtistsPresenter';
import  ExploreGenrePresenter  from './js/presenters/exploreGenrePresenter';
import  GenerateStartPresenter  from './js/presenters/generateStartPresenter';
import  GenerateGenrePresenter  from './js/presenters/generateGenrePresenter';
import  LoginPresenter  from './js/presenters/loginPresenter';
import  RegisterPresenter  from './js/presenters/registerPresenter';
import  MyPlaylistsPresenter  from './js/presenters/myPlaylistsPresenter';
import  TopBarPresenter  from './js/presenters/topBarPresenter';
import Show from './js/presenters/showPresenter';
import StartPresenter from './js/presenters/startViewPresenter';
import { SongSource } from './js/songSource';


function defaultRoute() {
  if (["#start", "#exploreGenre", "#exploreArtists", "#login", "#register"].find((knownRoute) => knownRoute !== window.location.hash)){
      window.location.hash = "#start";
  }
}



function App(props) {
  defaultRoute();
  return (
    <div>
      <TopBarPresenter/>
      <Show hash="#start" class="mainContent debug"><StartPresenter/></Show>
      <Show hash="#exploreGenre" class="mainContent debug"><ExploreGenrePresenter model={props.model} /></Show>
      <Show hash="#exploreArtists" class="mainContent debug"><ExploreArtistsPresenter model={props.model}/></Show>
      <Show hash="#generateStart" class="mainContent debug"><GenerateStartPresenter model={props.model}/></Show>
      <Show hash="#generateGenre" class="mainContent debug"><GenerateGenrePresenter model={props.model}/></Show>
      <Show hash="#myPlaylists" class="mainContent debug"><MyPlaylistsPresenter model={props.model}/></Show>
      <Show hash="#login" class="mainContent debug"><LoginPresenter model={props.model}/></Show>
      <Show hash="#register" class="mainContent debug"><RegisterPresenter model={props.model}/></Show>
    </div>
  );
}

export default App;
