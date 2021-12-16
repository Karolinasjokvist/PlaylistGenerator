import React from 'react';
// import './css/App.css';
import ExploreArtistsPresenter from './js/presenters/exploreArtistsPresenter';
import ExploreGenrePresenter from './js/presenters/exploreGenrePresenter';
import GenerateStartPresenter from './js/presenters/generateStartPresenter';
import GenerateGenrePresenter from './js/presenters/generateGenrePresenter';
import GenerateArtistsPresenter from './js/presenters/generateArtistsPresenter';
import LoginPresenter from './js/presenters/loginPresenter';
import RegisterPresenter from './js/presenters/registerPresenter';
import MyPlaylistsPresenter from './js/presenters/myPlaylistsPresenter';
import TopBarPresenter from './js/presenters/topBarPresenter';
import PlaylistPresenter from './js/presenters/playlistPresenter';
import Show from './js/presenters/showPresenter';
import StartPresenter from './js/presenters/startViewPresenter';
import GeneratedPlaylistPresenter from './js/presenters/generatedPlaylistPresenter';
import PlaylistInfoPresenter from './js/presenters/playlistInfoPresenter';

function defaultRoute() {
  if (["#start", "#exploreGenre", "#exploreArtists", "#login", "#register"].find((knownRoute) => knownRoute !== window.location.hash)) {
    window.location.hash = "#start";
  }
}

function App(props) {

  defaultRoute();
  return (
    <div>
      <TopBarPresenter />
      <Show hash="#start" class="mainContent debug"><StartPresenter pmodel={props.pmodel}/></Show>
      <Show hash="#exploreGenre" class="mainContent debug"><ExploreGenrePresenter model={props.model} /></Show>
      <Show hash="#exploreArtists" class="mainContent debug"><ExploreArtistsPresenter model={props.model} /></Show>
      <Show hash="#generateStart" class="mainContent debug"><GenerateStartPresenter pmodel={props.pmodel} /></Show>
      <Show hash="#generateGenre" class="mainContent debug"><GenerateGenrePresenter model={props.model}
        pmodel={props.pmodel} /></Show>

      <Show hash="#generateArtists" class="mainContent debug"><GenerateArtistsPresenter model={props.model}
        pmodel={props.pmodel} /></Show>

      <Show hash="#myPlaylists" class="mainContent debug"><MyPlaylistsPresenter model={props.model} /></Show>
      <Show hash="#login" class="mainContent debug"><LoginPresenter loginModel={props.loginModel} /></Show>
      <Show hash="#register" class="mainContent debug"><RegisterPresenter loginModel={props.loginModel} /></Show>
      <Show hash="#generatedPlaylist" class="mainContent debug"><GeneratedPlaylistPresenter pmodel={props.pmodel}
        savePlaylist={(playlist) => {props.model.savePlaylist(playlist); props.pmodel.resetPlaylist()}} /></Show>

      <Show hash="#playlistInfo" class="mainContent debug"><PlaylistInfoPresenter pmodel={props.pmodel} /></Show>
      <Show hash="#playlist" class="mainContent debug"><PlaylistPresenter model={props.model} /></Show>
    </div>
  );
}

export default App;
