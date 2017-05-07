import React, { Component } from 'react';
import audioData from '../json/audioData.json';
import keyboardData from '../json/keyboardData.json';
import VirtualKeyboard from './VirtualKeyboard';
//import SoundPalette from './SoundPalette';
import '../css/App.css';

console.log(audioData);

class App extends Component {

  render() {
    return (
      <div>
        
        <VirtualKeyboard keyboardData={keyboardData["keys"]} />
        {/* <SoundPalette audioData={audioData} /> */}
        
      </div>
    );
  }
}

export default App;
