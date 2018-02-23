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
import Playlist from './Playlist';
import SoundTileExplore from './SoundTileExplore';

import '../css/App.css';
import '../css/font-awesome.css';

class App extends Component {

  constructor() {

    super();

    this.addToPlaylist = this.addToPlaylist.bind(this);

    this.handleAboutPress = this.handleAboutPress.bind(this);

    this.handleBackClick = this.handleBackClick.bind(this);

    this.handleIntroClose = this.handleIntroClose.bind(this);

    this.handleInstructionHide = this.handleInstructionHide.bind(this);

    this.handleSoundTileExplore = this.handleSoundTileExplore.bind(this);

    this.handleSoundPlay = this.handleSoundPlay.bind(this);

    this.handleSoundTileRandom = this.handleSoundTileRandom.bind(this);

    this.playSound = this.playSound.bind(this);

    this.playSoundFinish = this.playSoundFinish.bind(this);

    this.playPlaylist = this.playPlaylist.bind(this);

    this.playPlaylistFinish = this.playPlaylistFinish.bind(this);

    this.removePlaylistTile = this.removePlaylistTile.bind(this);

    this.resetPlaylist = this.resetPlaylist.bind(this);

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

      playlistArray: [],

      playlistArrayPosition: 0,

      //soundPlaylist: ["mlw-production", "conrad-stw3", "conrad-bruceprichard1", "conrad-brucewhatsgoingon", "bruce-fatwhiteguy", "conrad-dontgethot", "bruce-imhot", "conrad-coolstory2", "bruce-stupidquestions", "conrad-fuckingchase", "conrad-stopreading", "bruce-fuckoffpolitely", "conrad-fuckingdone", "conrad-rollcredits2", "mlw-neverstops"],

      //soundPlaylist: ["savage-heybrother1", "savage-firstnamelastname2", "savage-getcrazy", "savage-ilikeit", "savage-yeahbrother"],

      //soundPlaylist: ["dusty-pickupthephone", "dusty-gotanidea2", "dusty-fuckedup1", "dusty-moremoney", "dusty-donttalk"],

      //soundPlaylist: ["andre-imagiant", "andre-iwantwine", "andre-24beers", "andre-14vodkasodas", "andre-15jackandcoke", "andre-igosleepnow"],

      playlistPlayback: false

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

  resetPlaylist() {

    //console.log("resetPlaylist");

    this.setState({playlistArray : []});

  }

  playPlaylist() {

    //console.log("### playPlaylist");

    if(this.state.playlistArrayPosition !== this.state.playlistArray.length) {

      let tempPlayListItem = this.state.playlistArray[this.state.playlistArrayPosition];

      //console.log("### " + tempPlayListItem);

      this.playSound(tempPlayListItem)
      
      this.setState({
        playlistPlayback : true
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
              onFinishedPlaying={this.state.playlistPlayback ? this.playPlaylistFinish : this.playSoundFinish}/>

      )

  }

  playSoundFinish() {

    //console.log("playSoundFinish");
    this.setState({soundToPlay : undefined});

  }

  playPlaylistFinish() {

    //console.log("### playPlaylistFinish");

    let newPlaylistPosition = this.state.playlistArrayPosition;
    newPlaylistPosition++;

    if(newPlaylistPosition === this.state.playlistArray.length) {

      this.setState({
        playlistPlayback : false,
        playlistArrayPosition: 0,
        soundToPlay : undefined
      });

    }
    else {

      this.setState({
        playlistArrayPosition: newPlaylistPosition,
        soundToPlay : undefined
      });

      this.playPlaylist();

    }

  }

  addToPlaylist(fileName) {

    let newPlaylist = this.state.playlistArray;

    newPlaylist.push(fileName);

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

  removePlaylistTile(playlistTileToRemove) {

    //console.log(playlistTileToRemove);

    let tempPlaylistArray = this.state.playlistArray;

    tempPlaylistArray.splice(playlistTileToRemove, 1);

    this.setState({playlistArray : tempPlaylistArray});

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
                      numCategories={Object.keys(audioData).length}
                      handleBackClick={this.handleBackClick}/>

      </div>

    );

  }

  showSoundTileExplore() {

    //console.log("showSoundTileExplore");

    return (

        <div className="playlist-and-sound-tile-explore">

          <Playlist
                      playPlaylist={this.playPlaylist}
                      resetPlaylist={this.resetPlaylist}
                      removePlaylist={this.removePlaylist}
                      playlistArray={this.state.playlistArray}/>

          <SoundTileExplore 
                            addToPlaylist={this.addToPlaylist}
                            exploreTitle={this.state.soundTileToExplore}
                            handleBackClick={this.handleBackClick}
                            handleSoundPlay={this.handleSoundPlay}
                            tileData={audioData[this.state.soundTileToExplore]}/>

        </div>

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

        <Playlist
                    playPlaylist={this.playPlaylist}
                    resetPlaylist={this.resetPlaylist}
                    removePlaylistTile={this.removePlaylistTile}
                    playlistArray={this.state.playlistArray}/>

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
