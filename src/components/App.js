import React, { Component } from 'react';
import Keyboard from './Keyboard';
import Audio from './Audio';
import keysData from '../json/keysData.json';
import audioData from '../json/audioData.json';
import '../css/App.css';

class App extends Component {

  constructor() {

    super();

    this.playSound = this.playSound.bind(this);

    this.handleClick = this.handleClick.bind(this);

  }

  playSound(soundToPlay) {

    var query = "div[data-name=\"";
    query += soundToPlay;
    query += "\"]";

    var key = document.querySelector(query);

    key.classList.add('playing');
    key.addEventListener("transitionend", this.removeTransition);

  }

  removeTransition(e) {
    
    if (e.propertyName !== 'transform') 
      return;
    e.target.classList.remove('playing');
      
  }

  handleClick(keyName) {

    console.log(keyName);

    this.playSound(keyName);

  }

  handleKeyPress(e) {

    var letter = String.fromCharCode(e.keyCode).toLowerCase();

    var query = "div[data-letter=\"";
    query += letter;
    query += "\"]";
 
    var key = document.querySelector(query);

    console.log(key);

    if(key === null)
      return;

    console.log(key["data-letter"]);

  }

  componentDidMount() {

    window.addEventListener('keydown', this.handleKeyPress);

  }

  render() {
    return (
      <div>
        <Keyboard keysData={keysData} handleClick={this.handleClick} removeTransition={this.removeTransition}/>
        <Audio audioData={audioData}/>
      </div>
    );
  }
}

export default App;
