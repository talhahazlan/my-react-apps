import React from 'react';
import Welcome from './Components/Welcome';
import PhotoGallery from './Components/Photo';
import Message from './Components/Message';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <PhotoGallery />
        <Message />
      </header>
    </div>
  );
}

export default App;
