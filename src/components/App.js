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

    this.handleKeyboardPress = this.handleKeyboardPress.bind(this);

    this.handleKeybuttonClick = this.handleKeybuttonClick.bind(this);

    this.handleSoundTileDrag = this.handleSoundTileDrag.bind(this);

    this.handleSoundTileDragEnd = this.handleSoundTileDragEnd.bind(this);

    this.handleSoundTileDrop = this.handleSoundTileDrop.bind(this);

    this.handleSoundTilePlay = this.handleSoundTilePlay.bind(this);

    this.playSound = this.playSound.bind(this);

    this.playSoundFinish = this.playSoundFinish.bind(this);

    this.state = {

      url: "http://www.graybearllc.com/audio/",

      soundToPlay: undefined,

      soundTileBeingDragged: undefined,

      fileExtension: ".mp3",

      keybuttonAssignments: {

      }

    }

    window.addEventListener('keydown', this.handleKeyboardPress);

  }

  randomNumber(max) {

    return Math.floor(Math.random()*max)

  }

  playSound(soundToPlay) {

    let folder = soundToPlay.substring(0, soundToPlay.indexOf("-"));

    this.setState({soundToPlay : folder + "/" + soundToPlay})

  }

  soundFile() {

    return (

      <Sound 
            url={this.state.url + this.state.soundToPlay + this.state.fileExtension}
            debugMode="false" 
            playStatus="PLAYING" 
            onFinishedPlaying={this.playSoundFinish}/>

    )

  }

  playSoundFinish() {

    console.log("playSoundFinish");
    this.setState({"soundToPlay" : undefined});

  }

  handleKeyboardPress(e) {

    let keyPressed = (e.key).toUpperCase();

    if(this.state.keybuttonAssignments[keyPressed] !== undefined)
      this.playSound(this.state.keybuttonAssignments[keyPressed])

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

    console.log("handleSoundTileDrag: " + soundTileBeingDragged.state.file);

    this.setState({"soundTileBeingDragged" : soundTileBeingDragged.state.file});

    //soundTileBeingDragged.addEventListener("dragend", this.handleSoundTileDragEnd);

  }

  handleSoundTileDragEnd(soundTile) {

    console.log("handleSoundTileDragEnd ");

    this.setState({"soundTileBeingDragged" : undefined});
    //this.setState({"soundToPlay" : undefined});

  }

  handleSoundTileDrop(keybuttonDroppedOn) {

    console.log("handleSoundTileDrop: " + keybuttonDroppedOn.props.keybuttonValue);

    keybuttonDroppedOn.updateFile(this.state.soundTileBeingDragged);

    //this.playSound(this.state.soundTileBeingDragged);

    let newKeybuttonAssignments = this.state.keybuttonAssignments;

    newKeybuttonAssignments[keybuttonDroppedOn.props.keybuttonValue] = this.state.soundTileBeingDragged;

    this.setState(newKeybuttonAssignments);

  } 

  handleSoundTilePlay(soundTileToPlay) {

    this.playSound(soundTileToPlay);

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
                      handleSoundTileDragEnd={this.handleSoundTileDragEnd}
                      handleSoundTilePlay={this.handleSoundTilePlay} 
                      handleSoundTileRefresh={this.handleSoundTileRefresh}
                      randomNumber={this.randomNumber}/>
        
      </div>
    );
  }
}

export default App;
