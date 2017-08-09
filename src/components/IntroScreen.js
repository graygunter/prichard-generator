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

        <i className="fa fa-times" aria-hidden="true" onClick={() => this.props.handleIntroClose()}></i>

        <div className="inner-container">
  
          <h2>Welcome to...</h2>

          <img 
                alt="Something to Generate Something to Wrestle with Bruce Prichard"
                src={require(`../imgs/logo-white.png`)} />

          <h3><span>{files}</span> audio files in <span>{categories}</span> categories</h3>
          <h3>from the archives of</h3>
          <h3> <a href="http://www.mlwradio.com/something-to-wrestle-with-bruce-prichard.html" target="_blank">Something to Wrestle with Bruce Prichard</a></h3>

          <button onClick={() => this.props.handleIntroClose()}>
            <div className="inner-text">
              roll tide on that <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
            </div>
          </button>

        </div>

      </div>

    );

  }
}

export default IntroScreen;
