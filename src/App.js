import React, { Component } from 'react';
import './css/App.css';
import { TopbarView } from './js/topbarView';
import { SongSource } from './js/songSource';


function App() {
  return (
    <div>
      {TopbarView()}
      {console.log(SongSource.apiCall("/album/302127"))}
    </div>
  );
}

export default App;
