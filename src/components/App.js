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

    this.handleSoundTileRandom = this.handleSoundTileRandom.bind(this);

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

      soundQueuesArray: [],

      //soundQueuesArray: ["mlw-production", "conrad-stw3", "conrad-bruceprichard1", "conrad-brucewhatsgoingon", "bruce-fatwhiteguy", "conrad-dontgethot", "bruce-imhot", "conrad-coolstory2", "bruce-stupidquestions", "conrad-fuckingchase", "conrad-stopreading", "bruce-fuckoffpolitely", "conrad-fuckingdone", "conrad-rollcredits2", "mlw-neverstops"],

      //soundQueuesArray: ["savage-heybrother1", "savage-firstnamelastname2", "savage-getcrazy", "savage-ilikeit", "savage-yeahbrother"],

      //soundQueuesArray: ["dusty-pickupthephone", "dusty-gotanidea2", "dusty-fuckedup1", "dusty-moremoney", "dusty-donttalk"],

      //soundQueuesArray: ["andre-imagiant", "andre-iwantwine", "andre-24beers", "andre-14vodkasodas", "andre-15jackandcoke", "andre-igosleepnow"],

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

  handleSoundTileRandom(soundCategory) {

    let soundData = audioData[soundCategory];
    let randomSoundObject = soundData[this.randomNumber(soundData.length)];

    for(let randomSound in randomSoundObject)
      this.playSound(randomSound);

  }

  handleSoundTileExplore(soundTile) {

    this.setState({
      soundTileToExplore: soundTile
    });

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
                        exploreTitle={this.state.soundTileToExplore}
                        handleBackClick={this.handleBackClick}
                        handleSoundPlay={this.handleSoundPlay}
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
                      audioData={audioData}
                      handleSoundTileExplore={this.handleSoundTileExplore}
                      handleSoundTileRandom={this.handleSoundTileRandom}/>
        
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
