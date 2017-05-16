import React, { Component } from 'react';
import Sound from 'react-sound';
import audioData from '../json/audioData.json';
import keyboardData from '../json/keyboardData.json';
import VirtualKeyboard from './VirtualKeyboard';
import SoundPalette from './SoundPalette';
import SoundQueue from './SoundQueue';
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

    this.keybuttonFileRemoved = this.keybuttonFileRemoved.bind(this);

    this.playSoundFinish = this.playSoundFinish.bind(this);

    this.resetSoundQueue = this.resetSoundQueue.bind(this);

    this.state = {

      url: "http://www.graybearllc.com/audio/",

      soundToPlay: undefined,

      soundTileBeingDragged: undefined,

      fileExtension: ".mp3",

      keybuttonAssignments: {

      },

      soundQueuesArray: []

    }

    window.addEventListener('keydown', this.handleKeyboardPress);

  }

  randomNumber(max) {

    return Math.floor(Math.random()*max)

  }

  playSoundQueue() {

    console.log("playSoundQueue");

    if(this.state.soundQueuesArray !== []) {


    }

  }

  resetSoundQueue() {

    console.log("resetSoundQueue");

    this.setState({soundQueuesArray : []});

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
    this.setState({soundToPlay : undefined});

  }

  handleKeyboardPress(e) {

    let keyPressed = (e.key).toUpperCase();

    if(this.state.keybuttonAssignments[keyPressed] !== undefined) {
      
      let newSoundQueue = this.state.soundQueuesArray;

      newSoundQueue.push(this.state.keybuttonAssignments[keyPressed]);

      this.setState(newSoundQueue);

      this.playSound(this.state.keybuttonAssignments[keyPressed])

    }

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

    this.setState({soundTileBeingDragged : soundTileBeingDragged.state.file});

  }

  handleSoundTileDragEnd(soundTile) {

    console.log("handleSoundTileDragEnd ");

    this.setState({soundTileBeingDragged : undefined});

  }

  handleSoundTileDrop(keybuttonDroppedOn) {

    console.log("handleSoundTileDrop");

    keybuttonDroppedOn.updateFile(this.state.soundTileBeingDragged);

    this.newKeybuttonAssignment(keybuttonDroppedOn.props.keybuttonValue, this.state.soundTileBeingDragged);

  } 

  handleSoundTilePlay(soundTileToPlay) {

    this.playSound(soundTileToPlay);

  }

  keybuttonFileRemoved(keybutton) {

    this.newKeybuttonAssignment(keybutton.props.keybuttonValue, undefined);

  }

  newKeybuttonAssignment(keybutton, value) {

    let newKeybuttonAssignments = this.state.keybuttonAssignments;

    newKeybuttonAssignments[keybutton] = value;

    this.setState(newKeybuttonAssignments);

  }

  render() {

    return (
      <div>

        {this.state.soundToPlay ? this.soundFile() : null}

        <VirtualKeyboard
                          handleKeybuttonClick={this.handleKeybuttonClick} 
                          handleKeybuttonDragOver={this.handleKeybuttonDragOver}
                          handleSoundTileDrop={this.handleSoundTileDrop} 
                          keyboardData={keyboardData["keys"]}
                          keybuttonFileRemoved={this.keybuttonFileRemoved}/>

        <SoundQueue
                  playSoundQueue={this.playSoundQueue}
                  resetSoundQueue={this.resetSoundQueue}
                  soundQueuesArray={this.state.soundQueuesArray}/>


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
