import React, { Component } from 'react';
import audioData from '../json/audioData.json';
import keyboardData from '../json/keyboardData.json';
import VirtualKeyboard from './VirtualKeyboard';
import SoundPalette from './SoundPalette';
import '../css/App.css';

console.log(audioData);

class App extends Component {

  handleSoundTilePlay(e) {

    console.log(e);

  } 

  handleSoundTileRefresh(e) {

    console.log(e);

  } 

  render() {
    return (
      <div>
        
        <VirtualKeyboard 
                          keyboardData={keyboardData["keys"]} />

        <SoundPalette 
                      audioData={audioData}
                      handleSoundTilePlay={this.handleSoundTilePlay} 
                      handleSoundTileRefresh={this.handleSoundTileRefresh}/>
        
      </div>
    );
  }
}

export default App;
