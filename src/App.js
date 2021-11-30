import React, { Component } from 'react';
import './css/App.css';
import { TopbarView } from './js/views/topbarView';
import { StartView} from './js/views/startView';
import { SongSource } from './js/songSource';


function App() {
  return (
    <div>
      {TopbarView()}
      {StartView()}
      {console.log(SongSource.apiCall("/album/302127"))}
    </div>
  );
}

export default App;
