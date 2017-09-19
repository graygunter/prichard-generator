import React, { Component } from 'react';

var backgroundDataLocal = [];

var masterBackgroundDiv = undefined;

class VirtualKeyboardBackground extends Component {

  constructor() {

    super();

    this.changeBackground = this.changeBackground.bind(this);

    this.createBackgroundChildDivs = this.createBackgroundChildDivs.bind(this);

    this.resetBackgroundData = this.resetBackgroundData.bind(this);

    this.removeTransition = this.removeTransition.bind(this);

    this.setBackground = this.setBackground.bind(this);

  }

  resetBackgroundData() {

    backgroundDataLocal = this.props.backgroundData.map(

      function(background) {

        return background;

      });

  }

  createBackgroundChildDivs() {

    console.log("createBackgroundChildDivs");

    masterBackgroundDiv = document.getElementsByClassName("virtual-keyboard-background");

    masterBackgroundDiv = masterBackgroundDiv[0];

    this.setBackground();
    this.setBackground();

    setInterval(this.changeBackground, 4000);

  }

  setBackground() {

    let childDiv = document.createElement('div');

    if(backgroundDataLocal.length < 3) {

      this.resetBackgroundData();

    }

    let backgroundNumber = Math.floor(Math.random() * backgroundDataLocal.length);

    let backgroundSelected = backgroundDataLocal[backgroundNumber];

    backgroundDataLocal.splice(backgroundNumber, 1);

    childDiv.style.backgroundImage = "url(\"" + require(`../imgs/backgrounds/${backgroundSelected}.jpg`) + "\")";

    masterBackgroundDiv.prepend(childDiv);

  }

  removeTransition(e) {

    masterBackgroundDiv.removeChild(e.target);

    this.setBackground();

  }

  changeBackground() {

    clearInterval(this.changeBackground);

    let divToFade = masterBackgroundDiv.querySelector('div:nth-child(2)');

    divToFade.classList.add('fade');

    divToFade.addEventListener('transitionend', this.removeTransition);

  }

  render() {

    return (
  
      <div className="virtual-keyboard-background">

      </div>

    );
  }

  componentDidMount() {

    this.resetBackgroundData();

    this.createBackgroundChildDivs()

  }

  componentWillUnmount() {

    clearInterval(this.changeBackground);

  }

}

export default VirtualKeyboardBackground;
