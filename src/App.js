import React, { Component }  from 'react';
import './App.css';
import {SongSource} from './js/songSource';


function App() {
  return (
    <div>
      {console.log(SongSource.searchSongs('302127'))}
    </div>
  );
}

export default App;
