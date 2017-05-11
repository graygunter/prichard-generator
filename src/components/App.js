import React, { Component } from 'react';
import Sound from 'react-sound';
import audioData from '../json/audioData.json';
import keyboardData from '../json/keyboardData.json';
import VirtualKeyboard from './VirtualKeyboard';
import SoundPalette from './SoundPalette';
import '../css/App.css';
import '../css/font-awesome.css';

class App extends Component {

  constructor() {

    super();

    this.handleKeybuttonClick = this.handleKeybuttonClick.bind(this);

    this.handleSoundTileDrag = this.handleSoundTileDrag.bind(this);

    this.handleSoundTileDragEnd = this.handleSoundTileDragEnd.bind(this);

    this.handleSoundTileDrop = this.handleSoundTileDrop.bind(this);

    this.handleSoundTilePlay = this.handleSoundTilePlay.bind(this);

    this.playSound = this.playSound.bind(this);

    this.state = {

      url: "http://www.graybearllc.com/audio/",

      soundToPlay: undefined,

      soundTileBeingDragged: undefined,

      fileExtension: ".mp3",

      keybuttonAssignments: {

        "A" : undefined,
        "B" : undefined,
        "C" : undefined,
        "D" : undefined,
        "E" : undefined,
        "F" : undefined,
        "G" : undefined,
        "H" : undefined,
        "I" : undefined,
        "J" : undefined,
        "K" : undefined,
        "L" : undefined,
        "M" : undefined,
        "N" : undefined,
        "O" : undefined,
        "P" : undefined,
        "Q" : undefined,
        "R" : undefined,
        "S" : undefined,
        "T" : undefined,
        "U" : undefined,
        "V" : undefined,
        "W" : undefined,
        "X" : undefined,
        "Y" : undefined,
        "Z" : undefined

      }

    }

  }

  randomNumber(max) {

    return Math.floor(Math.random()*max)

  }

  playSound(soundToPlay) {

    let folder = soundToPlay.substring(0, soundToPlay.indexOf("-"));

    this.setState({soundToPlay : folder + "/" + soundToPlay})

  }

  handleKeyboardPress(e) {
/*
    console.log("handleKeybuttonClick: " + keybuttonClicked);

    if(this.state.keybuttonAssignments[keybuttonClicked] !== undefined) {

      this.playSound(this.state.keybuttonAssignments[keybuttonClicked])

    }
*/
  }

  handleKeybuttonClick(keybuttonClicked) {

    console.log("handleKeybuttonClick: " + keybuttonClicked);

    if(keybuttonClicked.state.file !== undefined) {

      this.playSound(keybuttonClicked.state.file)

    }

  }


  handleKeybuttonDragOver(e) {

    e.preventDefault();

  }

  handleSoundTileDrag(soundTileBeingDragged) {

    console.log("handleSoundTileDrag: " + soundTileBeingDragged);

    this.setState({"soundTileBeingDragged" : soundTileBeingDragged});

  }

  handleSoundTileDragEnd() {

    this.setState({"soundTileBeingDragged" : undefined});

  }

  handleSoundTileDrop(keybuttonDroppedOn) {

    console.log("handleSoundTileDrop: " + keybuttonDroppedOn);

    keybuttonDroppedOn.updateFile(this.state.soundTileBeingDragged);

    this.playSound(this.state.soundTileBeingDragged);

    //console.log(this.state.soundTileBeingDragged);

  } 

  handleSoundTilePlay(e) {

    this.playSound(e);

  }

  soundFile() {

    return (

      <Sound 
            url={this.state.url + this.state.soundToPlay + this.state.fileExtension} 
            playStatus="PLAYING" />

    )

  }

  render() {

    return (
      <div>

        {this.state.soundToPlay ? this.soundFile() : null}

        <VirtualKeyboard
                          handleKeybuttonClick={this.handleKeybuttonClick} 
                          handleKeybuttonDragOver={this.handleKeybuttonDragOver}
                          handleSoundTileDrop={this.handleSoundTileDrop} 
                          keyboardData={keyboardData["keys"]} />

        <SoundPalette 
                      audioData={audioData}
                      handleSoundTileDrag={this.handleSoundTileDrag}
                      handleSoundTilePlay={this.handleSoundTilePlay} 
                      handleSoundTileRefresh={this.handleSoundTileRefresh}
                      randomNumber={this.randomNumber}/>
        
      </div>
    );
  }
}

export default App;
