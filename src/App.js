import React, { Component } from 'react';
import './css/App.css';
import { TopbarView } from './js/views/topbarView';
import  ExploreArtistsPresenter from './js/presenters/exploreArtistsPresenter';
import  ExploreGenrePresenter  from './js/presenters/exploreGenrePresenter';
import  TopBarPresenter  from './js/presenters/topBarPresenter';
import Show from './js/presenters/showPresenter';

function defaultRoute() {
  if (["#start", "#exploreGenre", "#exploreArtists"].find((knownRoute) => knownRoute !== window.location.hash)){
      window.location.hash = "#start";
  }
}



function App(props) {
  return (
    <div>
      <TopBarPresenter/>
      <Show hash="#exploreGenre" class="mainContent debug"><ExploreGenrePresenter model={props.model} /></Show>
      <Show hash="#exploreArtists" class="mainContent debug"><ExploreArtistsPresenter genre={props.model.currentGenre} /></Show>
    </div>
  );
}

export default App;
