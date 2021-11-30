import React, { Component } from 'react';
import './css/App.css';
import { TopbarView } from './js/topbarView';
import { SongSource } from './js/songSource';


function App() {
  return (
    <div>
      {TopbarView()}
      {SongSource.apiCall("/album/302127").then(data=> console.log(data))}
    </div>
  );
}

export default App;
