import React, { Component } from 'react';
import Sound from 'react-sound';

import audioData from '../json/audioData.json';
import backgroundData from '../json/backgroundData.json';
import keyboardData from '../json/keyboardData.json';

import AboutScreen from './AboutScreen';
import SoundPalette from './SoundPalette';
import SoundQueue from './SoundQueue';
import SoundTileExplore from './SoundTileExplore';
import VirtualKeyboard from './VirtualKeyboard';

import '../css/App.css';
import '../css/font-awesome.css';

class App extends Component {

  constructor() {

    super();

    this.handleAboutClose = this.handleAboutClose.bind(this);

    this.handleAboutPress = this.handleAboutPress.bind(this);

    this.handleKeyboardPress = this.handleKeyboardPress.bind(this);

    this.handleKeybuttonClick = this.handleKeybuttonClick.bind(this);

    this.handleSoundTileDrag = this.handleSoundTileDrag.bind(this);

    this.handleSoundTileDragEnd = this.handleSoundTileDragEnd.bind(this);

    this.handleSoundTileDrop = this.handleSoundTileDrop.bind(this);

    this.handleSoundTileExplore = this.handleSoundTileExplore.bind(this);

    this.handleSoundTilePlay = this.handleSoundTilePlay.bind(this);

    this.keybuttonFileRemoved = this.keybuttonFileRemoved.bind(this);

    this.playSound = this.playSound.bind(this);

    this.playSoundFinish = this.playSoundFinish.bind(this);

    this.playSoundQueue = this.playSoundQueue.bind(this);

    this.playSoundQueueFinish = this.playSoundQueueFinish.bind(this);

    this.removeSoundQueueTile = this.removeSoundQueueTile.bind(this);

    this.resetSoundQueue = this.resetSoundQueue.bind(this);

    this.state = {

      showAboutScreen: false,

      soundTileToExplore: null,

      soundToPlay: undefined,

      soundTileBeingDragged: undefined,

      keybuttonAssignments: {

      },

      soundQueuesArray: [],

      soundQueuesPlayback: false

    }

    window.addEventListener('keydown', this.handleKeyboardPress);

  }

  randomNumber(max) {

    return Math.floor(Math.random()*max)

  }

  handleAboutClose() {

    let body = document.querySelector("body");
    body.className = "";

    this.setState({showAboutScreen : false});

  }

  handleAboutPress() {

    let body = document.querySelector("body");
    body.style.backgroundImage = "";    
    body.className = "about-screen";

    this.setState({showAboutScreen : true});

  }

  resetSoundQueue() {

    //console.log("resetSoundQueue");

    this.setState({soundQueuesArray : []});

  }

  playSoundQueue() {

    //console.log("play pressed");

    if(this.state.soundQueuesArray !== []) {

      //console.log("soundQueuesArray is not empty");

      let tempSoundQuesesArray = this.state.soundQueuesArray;

      this.playSound(tempSoundQuesesArray[0])
      
      tempSoundQuesesArray.splice(0,1);

      //console.log(tempSoundQuesesArray);

      this.setState({
        soundQueuesArray : tempSoundQuesesArray,
        soundQueuesPlayback : true
      });

    }

  }

  playSound(soundToPlay) {

    //console.log(soundToPlay);

    let folder = soundToPlay.substring(0, soundToPlay.indexOf("-"));

    this.setState({soundToPlay : folder + "/" + soundToPlay})

  }

  soundFile() {

      return (

        <Sound 
              url={require(`../audio/${this.state.soundToPlay}.mp3`)}
              playStatus="PLAYING" 
              onFinishedPlaying={this.state.soundQueuesPlayback ? this.playSoundQueueFinish : this.playSoundFinish}/>

      )

  }

  playSoundFinish() {

    //console.log("playSoundFinish");
    this.setState({soundToPlay : undefined});

  }

  playSoundQueueFinish() {

    if(this.state.soundQueuesArray !== []) {

      this.setState({soundToPlay : undefined});

      this.playSoundQueue();

    }
    else {

      this.setState({
        soundQueuesPlayback : false,
        soundToPlay : undefined
      });

    }

  }

  handleKeyboardPress(e) {

    let keyPressed = (e.key).toUpperCase();

    if(this.state.keybuttonAssignments[keyPressed] !== undefined) {
      
      let newSoundQueue = this.state.soundQueuesArray;

      newSoundQueue.push(this.state.keybuttonAssignments[keyPressed]);

      this.playSound(this.state.keybuttonAssignments[keyPressed])

    }

  }

  handleKeybuttonClick(keybuttonClicked) {

    //console.log("handleKeybuttonClick: " + keybuttonClicked);

    if(keybuttonClicked.state.file !== undefined) {

      this.playSound(keybuttonClicked.state.file)

    }

  }

  handleKeybuttonDragOver(e) {

    e.preventDefault();

  }

  handleSoundTileDrag(soundTileBeingDragged) {

    //console.log("handleSoundTileDrag: " + soundTileBeingDragged.state.file);

    this.setState({soundTileBeingDragged : soundTileBeingDragged.state.file});

  }

  handleSoundTileDragEnd(soundTile) {

    //console.log("handleSoundTileDragEnd ");

    this.setState({soundTileBeingDragged : undefined});

  }

  handleSoundTileDrop(keybuttonDroppedOn) {

    //console.log("handleSoundTileDrop");

    keybuttonDroppedOn.updateFile(this.state.soundTileBeingDragged);

    this.newKeybuttonAssignment(keybuttonDroppedOn.props.keybuttonValue, this.state.soundTileBeingDragged);

  } 

  handleSoundTilePlay(soundTileToPlay) {

    this.playSound(soundTileToPlay);

  }

  handleSoundTileExplore(soundTile) {

    this.setState({soundTileToExplore: soundTile});

  }

  keybuttonFileRemoved(keybutton) {

    this.newKeybuttonAssignment(keybutton.props.keybuttonValue, undefined);

  }

  newKeybuttonAssignment(keybutton, value) {

    let newKeybuttonAssignments = this.state.keybuttonAssignments;

    newKeybuttonAssignments[keybutton] = value;

  }

  removeSoundQueueTile(queueTileToRemove) {

    console.log(queueTileToRemove);

    let tempSoundQuesesArray = this.state.soundQueuesArray;

    tempSoundQuesesArray.splice(queueTileToRemove, 1);

    this.setState({soundQueuesArray : tempSoundQuesesArray});

  }

  showAboutScreen() {

    return (

      <div>

        <AboutScreen 
                      handleAboutClose={this.handleAboutClose}/>

      </div>

    );

  }

  showSoundTileExplore() {

    return (

      <SoundTileExplore 
                        tileData={audioData[this.state.soundTileToExplore]}/>

    );

  }

  showGenerator() {

    return (

      <div>

        {this.state.soundToPlay ? this.soundFile() : null}

        <button 
                className="about-button"
                onClick={this.handleAboutPress}>

                <div className="inner-text">
                  <i className="fa fa-question-circle" aria-hidden="true"></i> about
                </div> 

        </button>

        <VirtualKeyboard
                          backgroundData={backgroundData["backgrounds"]}
                          handleKeybuttonClick={this.handleKeybuttonClick} 
                          handleKeybuttonDragOver={this.handleKeybuttonDragOver}
                          handleSoundTileDrop={this.handleSoundTileDrop} 
                          keyboardData={keyboardData["keys"]}
                          keybuttonFileRemoved={this.keybuttonFileRemoved}/>

        <SoundQueue
                    playSoundQueue={this.playSoundQueue}
                    resetSoundQueue={this.resetSoundQueue}
                    removeSoundQueueTile={this.removeSoundQueueTile}
                    soundQueuesArray={this.state.soundQueuesArray}/>

        <SoundPalette 
                      audioData={audioData}
                      handleSoundTileDrag={this.handleSoundTileDrag}
                      handleSoundTileDragEnd={this.handleSoundTileDragEnd}
                      handleSoundTileExplore={this.handleSoundTileExplore}
                      handleSoundTilePlay={this.handleSoundTilePlay} 
                      randomNumber={this.randomNumber}/>
        
      </div>

    );

  }

  showInteractionScreen() {

    return (

      <div>
        {this.state.soundTileToExplore ? this.showSoundTileExplore() : this.showGenerator()}
      </div>

    );

  }

  render() {

    return (

      <div>
        {this.state.showAboutScreen ? this.showAboutScreen() : this.showInteractionScreen()}
      </div>

    );

  }
}

export default App;
