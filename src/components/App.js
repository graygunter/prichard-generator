import React, { Component } from 'react';
import Sound from 'react-sound';

import audioData from '../json/audioData.json';
import backgroundData from '../json/backgroundData.json';
import instructionsData from '../json/instructionsData.json';

import IntroScreen from './IntroScreen';
import Instructions from './Instructions';
import AboutScreen from './AboutScreen';
import BackgroundHolder from './BackgroundHolder';
import SoundPalette from './SoundPalette';
import SoundQueue from './SoundQueue';
import SoundTileExplore from './SoundTileExplore';

import '../css/App.css';
import '../css/font-awesome.css';

class App extends Component {

  constructor() {

    super();

    this.addToSoundQue = this.addToSoundQue.bind(this);

    this.handleAboutPress = this.handleAboutPress.bind(this);

    this.handleBackClick = this.handleBackClick.bind(this);

    this.handleIntroClose = this.handleIntroClose.bind(this);

    this.handleInstructionHide = this.handleInstructionHide.bind(this);

    this.handleSoundTileExplore = this.handleSoundTileExplore.bind(this);

    this.handleSoundPlay = this.handleSoundPlay.bind(this);

    this.playSound = this.playSound.bind(this);

    this.playSoundFinish = this.playSoundFinish.bind(this);

    this.playSoundQueue = this.playSoundQueue.bind(this);

    this.playSoundQueueFinish = this.playSoundQueueFinish.bind(this);

    this.removeSoundQueueTile = this.removeSoundQueueTile.bind(this);

    this.resetSoundQueue = this.resetSoundQueue.bind(this);

    this.soundTileFileSelected = this.soundTileFileSelected.bind(this);

    this.state = {

      currentSoundTileFiles: {},

      initialLoadComplete: false,

      instructionsToHide: [],

      showIntroScreen: true,

      showAboutScreen: false,

      soundTileToExplore: null,

      soundToPlay: undefined,

      soundTileBeingDragged: undefined,

      keybuttonAssignments: {

      },

      soundQueuesArray: [],

      soundQueuesPlayback: false

    }

  }

  randomNumber(max) {

    return Math.floor(Math.random()*max)

  }

  handleIntroClose() {

    this.setState({showIntroScreen: false});

  }

  handleInstructionHide(instructionToHide) {

    let tempinstructionsToHide = this.state.instructionsToHide;

    tempinstructionsToHide.push(instructionToHide);    

    this.setState({instructionsToHide : tempinstructionsToHide});

  }

  handleBackClick() {

    if(this.state.showAboutScreen) {

      let body = document.querySelector("body");
      body.className = "";

      this.setState({showAboutScreen : false});

    }
    else {

      this.setState({soundTileToExplore : null});

    }

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

    if(this.state.soundQueuesArray.length !== 0) {

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

    if(this.state.soundQueuesArray.length !== 0) {

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

  addToSoundQue(fileName) {

    let newSoundQueue = this.state.soundQueuesArray;

    newSoundQueue.push(fileName);

    this.playSound(fileName);

  }

  handleSoundPlay(soundTileToPlay) {

    this.playSound(soundTileToPlay);

  }

  handleSoundTileExplore(soundTile, currentSelection) {

    this.setState({
      soundTileToExplore: soundTile
    });

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

  soundTileFileSelected(soundTile, file) {

    //console.log("### " + soundTile);

    let tempCurrentSoundTileFiles = this.state.currentSoundTileFiles;

    tempCurrentSoundTileFiles[soundTile] = file;

    this.setState({currentSoundTileFiles: tempCurrentSoundTileFiles});

  }

  showAboutScreen() {

    return (

      <div>

        <AboutScreen 
                      handleBackClick={this.handleBackClick}/>

      </div>

    );

  }

  showSoundTileExplore() {

    return (

      <SoundTileExplore 
                        addToSoundQue={this.addToSoundQue}
                        currentSelection={this.state.currentSoundTileFiles[this.state.soundTileToExplore]}
                        exploreTitle={this.state.soundTileToExplore}
                        handleBackClick={this.handleBackClick}
                        handleSoundPlay={this.handleSoundPlay}
                        soundTileFileSelected={this.soundTileFileSelected}
                        tileData={audioData[this.state.soundTileToExplore]}/>

    );

  }

  showGenerator() {

    return (

      <div>

        <button 
                className="about-button"
                onClick={this.handleAboutPress}>

                <div className="inner-text">
                  <i className="fa fa-question-circle" aria-hidden="true"></i> about
                </div> 

        </button>

        <BackgroundHolder
                          backgroundData={backgroundData["backgrounds"]}/>

        <SoundQueue
                    playSoundQueue={this.playSoundQueue}
                    resetSoundQueue={this.resetSoundQueue}
                    removeSoundQueueTile={this.removeSoundQueueTile}
                    soundQueuesArray={this.state.soundQueuesArray}/>

        <SoundPalette 
                      addToSoundQue={this.addToSoundQue}
                      audioData={audioData}
                      currentSoundTileFiles={this.state.currentSoundTileFiles}
                      handleSoundTileExplore={this.handleSoundTileExplore}
                      handleSoundPlay={this.handleSoundPlay}
                      randomNumber={this.randomNumber}
                      soundTileFileSelected={this.soundTileFileSelected}/>
        
        <Instructions 
                      handleInstructionHide={this.handleInstructionHide}
                      instructionsData={instructionsData}
                      instructionsToHide={this.state.instructionsToHide}/> 

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

        {this.state.soundToPlay ? this.soundFile() : null}

        {this.state.showAboutScreen ? this.showAboutScreen() : this.showInteractionScreen()}

        {this.state.showIntroScreen ? <IntroScreen 
                                                    audioData={audioData}
                                                    handleIntroClose={this.handleIntroClose}/> : null}
      
      </div>

    );

  }

}

export default App;
