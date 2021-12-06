import React, { Component } from 'react';
// import './css/App.css';
import  ExploreArtistsPresenter from './js/presenters/exploreArtistsPresenter';
import  ExploreGenrePresenter  from './js/presenters/exploreGenrePresenter';
import  TopBarPresenter  from './js/presenters/topBarPresenter';
import Show from './js/presenters/showPresenter';
import StartPresenter from './js/presenters/startViewPresenter';
import { SongSource } from './js/songSource';


function defaultRoute() {
  if (["#start", "#exploreGenre", "#exploreArtists"].find((knownRoute) => knownRoute !== window.location.hash)){
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
    </div>
  );
}

export default App;
