import React, { Component } from 'react';

let backgroundDataLocal = [];

let masterBackgroundDiv = undefined;

let timer = undefined;

class BackgroundHolder extends Component {

  constructor() {

    super();

    this.changeBackground = this.changeBackground.bind(this);

    this.createBackgroundChildDivs = this.createBackgroundChildDivs.bind(this);

    this.resetBackgroundData = this.resetBackgroundData.bind(this);

    this.removeTransition = this.removeTransition.bind(this);

    this.setBackground = this.setBackground.bind(this);

  }

  resetBackgroundData() {

    //console.log("resetBackgroundData");

    backgroundDataLocal = this.props.backgroundData.map(

      function(background) {

        return background;

      });

  }

  createBackgroundChildDivs() {

    //console.log("createBackgroundChildDivs");

    masterBackgroundDiv = document.getElementsByClassName("background-holder");

    masterBackgroundDiv = masterBackgroundDiv[0];

    this.setBackground();
    this.setBackground();

    timer = setInterval(this.changeBackground, 6000);

  }

  setBackground() {

    //console.log("setBackground");

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

    //console.log("removeTransition");

    masterBackgroundDiv.removeChild(e.target);

    this.setBackground();

  }

  changeBackground() {

    //console.log("changeBackground");

    let divToFade = masterBackgroundDiv.querySelector('div:nth-child(2)');

    divToFade.classList.add('fade');

    divToFade.addEventListener('transitionend', this.removeTransition);

  }

  render() {

    return (
  
      <div className="background-holder">

      </div>

    );
  }

  componentDidMount() {

    this.resetBackgroundData();

    this.createBackgroundChildDivs()

  }

  componentWillUnmount() {

    //console.log("Background Holder componentWillUnmount");

    clearInterval(timer);

  }

}

export default BackgroundHolder;
