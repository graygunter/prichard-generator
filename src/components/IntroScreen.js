import React, { Component } from 'react';


class IntroScreen extends Component {

  render() {

    var categories = 0;
    var files = 0;

    for(let category in this.props.audioData) {

      console.log(category + ": " + this.props.audioData[category].length)

      categories++;

      files += this.props.audioData[category].length;

    }

    return (

      <div className="intro-screen">
        
        {"categories: " + categories}
        {"files: " + files}   

      </div>

    );

  }
}

export default IntroScreen;
